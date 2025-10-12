import Link from "next/link";
import type { InfoSectionData } from "./_menu/types";
export function InfoSections({
	title,
	content,
	links,
	link,
	linkText,
}: InfoSectionData) {
	const renderLinks = () => {
		// 1️⃣ linksがある場合 → リスト表示
		if (links?.length) {
			return (
				<ul className="mt-3 space-y-1">
					{links.map((item) => (
						<li key={item.linkText}>
							<Link
								href={item.link}
								target="_blank"
								rel="noreferrer"
								className="text-blue-500 hover:underline"
							>
								{item.linkText}
							</Link>
						</li>
					))}
				</ul>
			);
		}

		// 2️⃣ link単体がある場合
		if (link) {
			// 内部リンク（/で始まる）か外部リンクかを判定
			const isInternalLink = link.startsWith("/");

			return (
				<div className="mt-3">
					<Link
						href={link}
						{...(!isInternalLink && { target: "_blank", rel: "noreferrer" })}
						className="text-blue-500 hover:underline"
					>
						{/* 3️⃣ linkTextがある場合はそれを優先 */}
						{linkText ?? link}
					</Link>
				</div>
			);
		}

		// 4️⃣ どれもない場合は何も表示しない
		return null;
	};

	return (
		<section className="mb-6">
			<h2 className="mb-3 font-semibold text-base text-gray-900">{title}</h2>
			<div className="whitespace-pre-line text-gray-700 leading-relaxed">
				{content}
			</div>
			{renderLinks()}
		</section>
	);
}
