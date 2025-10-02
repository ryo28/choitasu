import Image from "next/image";

export function Logo() {
  return (
    <Image
      src={"/logo.png"}
      alt="logo"
      width={250}
      height={150}
      className="w-24 h-24"
    />
  );
}
