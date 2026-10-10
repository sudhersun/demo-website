import { NextResponse, after } from "next/server";
import { z } from "zod";
import { pool } from "@/lib/db";
import { sendContactEmail } from "@/lib/email";


const schema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(190),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(3000),
  token: z.string().min(1),
});

export async function POST(req: Request) {
  const parsed = schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Invalid input" }, { status: 400 });
  }

  const { name, email, phone, message, token } = parsed.data;
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;

  // 1. Verify Turnstile
  const verify = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret: process.env.TURNSTILE_SECRET_KEY!,
      response: token,
      ...(ip ? { remoteip: ip } : {}),
    }),
  }).then((r) => r.json());

  if (!verify.success) {
    return NextResponse.json({ ok: false, error: "Spam check failed" }, { status: 400 });
  }

  // 2. Save to MySQL
  try {
    await pool.execute(
      "INSERT INTO contact_submissions (name, email, phone, message, ip) VALUES (?, ?, ?, ?, ?)",
      [name, email, phone || null, message, ip]
    );
  } catch (e) {
    console.error("DB insert failed", e);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }

  // 3. Send email after the response (a failure here never loses the saved row)
  after(async () => {
    try {
      await sendContactEmail({ name, email, phone, message });
    } catch (e) {
      console.error("Email failed", e);
    }
  });

  return NextResponse.json({ ok: true });
}