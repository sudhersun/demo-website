import Image, { type ImageProps } from "next/image";

export default function Photo(props: ImageProps) {
  const isSvg = typeof props.src === "string" && props.src.endsWith(".svg");
  return <Image {...props} unoptimized={isSvg || props.unoptimized} />;
}