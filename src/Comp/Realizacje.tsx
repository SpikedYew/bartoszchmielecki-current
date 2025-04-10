import { useState, useEffect } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { ExternalLink } from "lucide-react";

import { sanityClient } from "../sanityClient";

interface RealizacjaData {
  name: string;
  img0: string;
  desc: string;
  img1: string;
  img2: string;
  alt1: string;
  alt2: string;
  link: string;
}
// const data: DataProps[] = [
//   {
//     name: "Telesystem Spj",
//     img0: "",
//     desc: "Nowoczesna strona internetowa oparta na WordPress. Szybka, responsywna i zoptymalizowana pod SEO. Intuicyjny design i łatwa edycja treści.",
//     img1: "/img/telesystem-strona-internetowa.png",
//     alt1: "Projekt strony internetowej Telesystem Sp. j. – responsywny design w WordPress",
//     img2: "/img/telesystem-poz.png",
//     alt2: "Strona Telesystem Sp. j. – nowoczesny układ i intuicyjna nawigacja",
//     link: "https://telesystemspj.pl/",
//   },
//   {
//     name: "MFC STUDIO",
//     img0: "",
//     desc: "Strona internetowa stworzona w czystym HTML, CSS i JavaScript. Lekka, szybka i w pełni responsywna, z nowoczesnym designem i zoptymalizowanym kodem.",
//     img1: "/img/mfcstudio-pion.png",
//     alt1: "Realizacja strony MFC Studio – lekki kod HTML, CSS i JavaScript",
//     img2: "/img/mfcstudio-poziom.png",
//     alt2: "Nowoczesna strona MFC Studio – szybka i zoptymalizowana",
//     link: "https://www.mfcstudio.pl/",
//   },
//   {
//     name: "Studio Uszko",
//     img0: "",
//     desc: "Strona stworzona w React (Vite) + TypeScript + Tailwind CSS. Szybka, nowoczesna i responsywna, z CMS opartym na Google Sheets do łatwej edycji oferty.",
//     img1: "/img/studiouszko-pion.png",
//     alt1: "Projekt strony Studio Uszko – React, TypeScript i Tailwind CSS",
//     img2: "/img/studiouszko-poz.png",
//     alt2: "Strona Studio Uszko z CMS opartym na Google Sheets – dynamiczna i responsywna",
//     link: "https://studiouszko.pl/",
//   },
//   {
//     name: "Kolorowanko",
//     img0: "",
//     desc: "Sklep internetowy oparty na WordPress + WooCommerce, zintegrowany z systemem płatności Stripe. Szybki, responsywny i zoptymalizowany pod sprzedaż online.",
//     img1: "/img/kolorowanko-pion.png",
//     alt1: "Sklep internetowy Kolorowanko – WooCommerce i Stripe na WordPress",
//     img2: "/img/kolorowanko-poz.png",
//     alt2: "Realizacja e-commerce Kolorowanko – nowoczesny sklep online",
//     link: "https://kolorowanko.pl/",
//   },
//   {
//     name: "Flotal",
//     img0: "",
//     desc: "Strona stworzona w Next.js + TypeScript + Tailwind CSS. Nowoczesna, szybka i w pełni responsywna. Dzięki integracji z Sanity.io klient może samodzielnie edytować treści i zdjęcia bez ingerencji w kod – prosto, intuicyjnie i z dowolnego urządzenia.",
//     img1: "/img/flotal-pion.png",
//     alt1: "Realizacja strony internetowej Flotal - Next.js i CMS Sanity.io",
//     img2: "/img/flotal-poz.png",
//     alt2: "Realizacja strony internetowej Flotal - Next.js i CMS Sanity.io",
//     link: "https://flotal.pl/",
//   },
// ];
import imageUrlBuilder from "@sanity/image-url";
const builder = imageUrlBuilder(sanityClient);
function urlFor(source: any) {
  return builder.image(source);
}
export default function Realizacje() {
  // const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [data, setData] = useState<RealizacjaData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "realizacja"] | order(_createdAt desc){
        name,
        desc,
        img1,
        img2,
        alt1,
        alt2,
        link
      }`;
      const result = await sanityClient.fetch(query);
      setData(result);
    };

    fetchData();
  }, []);
  return (
    <>
      {/* Popup Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ filter: "blur(5px)", opacity: 0 }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
          >
            {/* Tło */}
            <div
              className="absolute inset-0 bg-black/40 z-40"
              onClick={() => setSelectedIndex(null)}
            ></div>

            {/* Modal */}
            <div className="relative z-50 bg-white w-full max-w-6xl max-h-[95vh] overflow-y-auto p-4 md:p-6 rounded-lg shadow-2xl scale-[0.95] sm:scale-100">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center">
                {/* Left */}
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-lg md:text-xl lg:text-2xl font-bold uppercase">
                    {data[selectedIndex].name}
                  </h2>
                  <p className="mt-2 text-gray-700 text-sm md:text-base max-w-md mx-auto md:mx-0 leading-snug break-words">
                    {data[selectedIndex].desc}
                  </p>
                  <img
                    loading="lazy"
                    src={urlFor(data[selectedIndex].img1).url()}
                    alt={data[selectedIndex].alt1}
                    className="w-full max-w-[120px] md:max-w-[180px] h-auto rounded-sm mt-3 mx-auto shadow-xl"
                  />
                </div>

                {/* Right */}
                <div className="flex-1 text-center">
                  <img
                    loading="lazy"
                    src={urlFor(data[selectedIndex].img2).url()}
                    alt={data[selectedIndex].alt2}
                    className="w-full max-w-[260px] md:max-w-[360px] h-auto rounded-sm mt-3 mx-auto shadow-xl"
                  />
                  <p className="text-sm md:text-base mt-3 hover:underline">
                    <a
                      aria-label="Realizacja Strony Internetowej"
                      href={data[selectedIndex].link}
                      target="_blank"
                    >
                      Link do strony
                    </a>
                  </p>
                </div>
              </div>

              {/* Zamknij */}
              <div className="text-center mt-4">
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="px-4 py-2 bg-black text-white rounded cursor-pointer hover:bg-gray-800 transition"
                >
                  Zamknij
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div
        id="realizacje"
        className="flex flex-col items-center justify-center text-5xl font-semibold"
      >
        <motion.h3
          initial={{ filter: "blur(5px)" }}
          whileInView={{ filter: "blur(0px)" }}
          transition={{ duration: 0.5 }}
          className="mx-auto text-3xl md:text-5xl"
        >
          Realizacje
        </motion.h3>

        <div className="mt-[100px] mb-[100px] max-w-[1400px] mx-auto">
          <motion.div
            initial={{ filter: "blur(5px)" }}
            whileInView={{ filter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          >
            {data.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                className="w-[90vw] sm:w-[200px] cursor-pointer md:w-[200px] md:h-[200px] lg:w-[300px] shadow-lg shadow-[#917a7a3a] bg-gray-50 min-w-full rounded-xl border-gray-100 border-t lg:h-[280px] p-4 m-2 transition-all hover:shadow-2xl hover:-translate-y-2"
              >
                <img
                  src={urlFor(item.img2).url()}
                  alt={item.alt2}
                  className="rounded-sm mx-auto mt-5 shadow-xl"
                />
                <p className="text-xl mt-4 uppercase text-center font-bold">
                  {item.name}
                </p>
                <span>
                  <ExternalLink />
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
