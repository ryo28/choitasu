import Image from "next/image";

export function Logo() {
	return (
		<Image
			src={"/logo.png"}
			priority
			alt="logo"
			width={250}
			height={150}
			className="h-24 w-24"
		/>
	);
}
