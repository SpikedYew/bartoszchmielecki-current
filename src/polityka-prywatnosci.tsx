import { Helmet } from "react-helmet";

export default function About() {
  return (
    <>
      <Helmet>
        <title>Polityka Prywatności</title>
        <meta
          name="description"
          content="Polityka Prywatności strony internetowej Bartosz Chmielecki - Strony Internetowe"
        />
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-[200px] mb-[200px]">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Polityka Prywatności
        </h1>
        <p className="mb-4 text-gray-700">
          Szanujemy Twoje prawo do prywatności i zobowiązujemy się do ochrony
          Twoich danych osobowych. Niniejsza Polityka Prywatności wyjaśnia, w
          jaki sposób zbieramy, przechowujemy i wykorzystujemy dane osobowe
          użytkowników, którzy wypełniają nasz formularz kontaktowy.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          1. Administrator Danych Osobowych
        </h2>
        <p className="text-gray-700">
          Administratorem Twoich danych osobowych jest Bartosz Chmielecki,
          freelancer działający w 41-806 Zabrze, ul. Lompy 35. Możesz
          skontaktować się z nami za pośrednictwem
          bartoszchmieleckikontakt@gmail.com.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          2. Zakres Zbieranych Danych
        </h2>
        <p className="text-gray-700">
          Zbieramy dane osobowe, które dobrowolnie przekazujesz, wypełniając
          formularz kontaktowy na naszej stronie. Mogą to być:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Imię i nazwisko</li>
          <li>Adres e-mail</li>
          <li>Numer telefonu (jeśli zostanie podany)</li>
          <li>Inne dane, które zdecydujesz się podać w formularzu</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          3. Cel Przetwarzania Danych
        </h2>
        <p className="text-gray-700">Twoje dane osobowe przetwarzamy w celu:</p>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            Skontaktowania się z Tobą w odpowiedzi na zapytanie lub wypełniony
            formularz
          </li>
          <li>Udzielenia odpowiedzi na pytania dotyczące naszych usług</li>
          <li>
            Obsługiwania naszej działalności i zapewnienia wysokiej jakości
            usług
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          4. Podstawa Prawna Przetwarzania
        </h2>
        <p className="text-gray-700">
          Przetwarzanie Twoich danych osobowych odbywa się na podstawie zgody,
          którą wyrażasz, wypełniając formularz kontaktowy. Masz prawo do
          wycofania zgody w dowolnym momencie, co nie wpływa na legalność
          przetwarzania przed jej wycofaniem.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          5. Przechowywanie Danych
        </h2>
        <p className="text-gray-700">
          Twoje dane osobowe będą przechowywane przez czas niezbędny do
          realizacji celu, w jakim zostały zebrane, a następnie zostaną
          usunięte, chyba że przepisy prawa wymagają ich przechowywania przez
          dłuższy okres.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          6. Udostępnianie Danych
        </h2>
        <p className="text-gray-700">
          Twoje dane osobowe nie będą udostępniane osobom trzecim, chyba że
          będzie to konieczne do wykonania umowy lub wynikać będzie z
          obowiązujących przepisów prawa.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">7. Twoje Prawa</h2>
        <p className="text-gray-700">Masz prawo do:</p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Dostępu do swoich danych osobowych</li>
          <li>Sprostowania danych, jeśli są one nieprawidłowe</li>
          <li>Usunięcia danych ("prawo do bycia zapomnianym")</li>
          <li>Ograniczenia przetwarzania danych</li>
          <li>Przenoszenia danych</li>
          <li>
            Wniesienia skargi do organu nadzorczego, jeśli uznasz, że
            przetwarzanie danych osobowych narusza przepisy prawa
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          8. Bezpieczeństwo Danych
        </h2>
        <p className="text-gray-700">
          Podejmujemy odpowiednie środki techniczne i organizacyjne, aby
          zapewnić bezpieczeństwo Twoich danych osobowych, w tym zabezpieczenie
          przed dostępem osób nieuprawnionych, utratą, zniszczeniem lub
          uszkodzeniem danych.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          9. Zmiany w Polityce Prywatności
        </h2>
        <p className="text-gray-700">
          Zastrzegamy sobie prawo do wprowadzania zmian w Polityce Prywatności.
          Każda zmiana będzie publikowana na tej stronie. W przypadku istotnych
          zmian, poinformujemy Cię o tym za pomocą dostępnych kanałów
          komunikacji.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">10. Kontakt</h2>
        <p className="text-gray-700">
          W razie jakichkolwiek pytań dotyczących przetwarzania Twoich danych
          osobowych, prosimy o kontakt pod adresem e-mail
          bartoszchmieleckikontakt@gmail.com lub telefonicznie +48 533 320 515.
        </p>
      </div>
    </>
  );
}
