export function generateStaticParams() {
  return [
    {
      locale: "en-gb",
    },
  ];
}

export default function Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <div>
      <h1>Dynamic Page</h1>
      <p>Locale: {locale}</p>
    </div>
  );
}
