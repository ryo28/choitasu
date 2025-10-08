import Link from "next/link";

type InfoSectionsProps = {
	title: string;
	content: string;
	link?: string;
};

export function InfoSections({ title, content, link }: InfoSectionsProps) {
	return (
		<section>
			<h2 className="mb-3 font-semibold text-base text-gray-900">{title}</h2>
			<div className="whitespace-pre-line text-gray-700 leading-relaxed">
				{content}
			</div>
			{link && (
				<Link
					href={link}
					target="_blank"
					className="text-blue-500 hover:underline"
				>
					{link}
				</Link>
			)}
		</section>
	);
}
