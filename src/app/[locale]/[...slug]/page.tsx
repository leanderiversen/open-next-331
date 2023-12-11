export function generateStaticParams() {
  return [
    {
      locale: "en-gb",
      slug: ["first"],
    },
    {
      locale: "en-gb",
      slug: ["first", "second"],
    },
    {
      locale: "en-gb",
      slug: ["first", "second", "third"],
    },
  ];
}

export default function Page({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string[] };
}) {
  return (
    <div>
      <h1>Dynamic Page</h1>
      <p>Locale: {locale}</p>
      <p>Slug: {slug.join("/")}</p>
    </div>
  );
}
