"use client";

import { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

type Status = "idle" | "sending" | "done" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [token, setToken] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!token) {
      setErrorMsg("Please complete the spam check.");
      setStatus("error");
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
          token,
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error ?? "Something went wrong");
      form.reset();
      setStatus("done");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
      setStatus("error");
    }
  }

  const field =
    "w-full border-0 border-b border-ink bg-transparent px-0 py-3 text-sm text-ink placeholder:text-ink focus:border-b-2 focus:outline-none";

  if (status === "done") {
    return (
      <p role="status" className="bg-ink p-6 text-sm text-brand">
        Thanks! Your message has been sent. We’ll get back to you soon.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="sr-only">Full name</label>
          <input id="name" name="name" placeholder="Full name*" required minLength={2} maxLength={120} className={field} />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">Email address</label>
          <input id="email" name="email" type="email" placeholder="Email address*" required maxLength={190} className={field} />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="sr-only">Phone (optional)</label>
        <input id="phone" name="phone" type="tel" placeholder="Phone (optional)" maxLength={30} className={field} />
      </div>

      <div>
        <label htmlFor="message" className="sr-only">How can we help you</label>
        <textarea id="message" name="message" placeholder="How can we help you?*" required minLength={10} maxLength={3000} rows={3} className={`${field} resize-none`} />
      </div>

      <Turnstile
        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
        onSuccess={setToken}
        onExpire={() => setToken("")}
        options={{ theme: "light" }}
      />

      {status === "error" && (
        <p role="alert" className="text-sm font-semibold text-red-800">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-ink px-8 py-4 text-[11px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-ink disabled:opacity-50"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}