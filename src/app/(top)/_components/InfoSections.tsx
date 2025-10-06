import Link from "next/link";

type InfoSectionsProps = {
  title: string;
  content: string;
  link?: string;
};

export function InfoSections({ title, content, link }: InfoSectionsProps) {
  return (
    <section>
      <h2 className="font-semibold text-base mb-3 text-gray-900">{title}</h2>
      <div className="text-gray-700 leading-relaxed whitespace-pre-line">
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
