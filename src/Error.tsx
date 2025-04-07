import { Helmet } from "react-helmet";

export default function Error() {
  return (
    <>
      <Helmet>
        <title>404 - Strona nie znaleziona</title>
        <meta name="description" content="Strona błędu 404" />
        <meta name="robots" content="noindex" />
      </Helmet>
      <body className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center p-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-6xl font-bold text-red-500">404</h1>
          <p className="text-lg text-gray-600 mt-2">
            Ups! Strona nie została znaleziona.
          </p>
          <p className="text-sm text-gray-500">
            Strona, której szukasz, mogła zostać usunięta lub jest tymczasowo
            niedostępna.
          </p>
          <a
            aria-label="Powrót na stronę główną"
            href="https://www.bartoszchmielecki.com"
            className="rounded-full gap-2 items-center bg-black hover:bg-red-500 focus:bg-cyan-500 py-3 px-6 text-white transition-colors duration-200 mt-4 inline-block"
          >
            Przejdź na stronę główną
          </a>
        </div>
      </body>
    </>
  );
}
