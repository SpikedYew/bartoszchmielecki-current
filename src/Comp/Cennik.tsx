// import { useState } from "react";
import * as motion from "motion/react-client";

interface DataProps {
  name: string;
  desc: string;
  list: string[];
}
// const data: DataProps[] = [
//   {
//     name: "Strona One Page",

//     desc: "600 zł",
//     list: [
//       "Cała treść na stronie głównej",
//       "Copywriting",
//       "Indywidualny projekt graficzny",
//       "Wsparcie techniczne: 1 miesiąc",
//       "Gwarancja: 12 miesięcy",
//       "Certyfikat SSL",
//       "Optymalizacja SEO",
//     ],
//   },
//   {
//     name: "Strona Standard",
//     desc: "1000 zł",
//     list: [
//       "Strona główna + do 5 podstron",
//       "Copywriting",
//       "Indywidualny projekt graficzny",
//       "Formularz kontaktowy",
//       "Propozycja treści",
//       "5 zdjęć stockowych",
//       "Szkolenie z obsługi (wideo)",
//       "Wsparcie techniczne: 3 miesiące",
//       "Gwarancja: 12 miesięcy",
//       "Animacje i elementy interaktywne",
//       "Certyfikat SSL",
//       "Optymalizacja SEO",
//       "Dodatkowe języki",
//       "System rezerwacji",
//     ],
//   },
//   {
//     name: "Strona Premium",
//     desc: "2000 zł",
//     list: [
//       "Strona główna + do 10 podstron",
//       "Copywriting",
//       "Indywidualny rozbudowany projekt graficzny",
//       "Formularz kontaktowy",
//       "Blog / Sklep",
//       "Rozbudowana prezentacja oferty",
//       "Propozycja treści",
//       "10 zdjęć stockowych + 1 wideo",
//       "Animacje i elementy interaktywne",

//       "Wsparcie techniczne: 6 miesięcy",
//       "Gwarancja: 12 miesięcy",
//       "Certyfikat SSL",
//       "Optymalizacja SEO",
//       "Dodatkowe języki",
//       "System rezerwacji",
//     ],
//   },
// ];

const data: DataProps[] = [
  {
    name: "Strona One Page",
    desc: "Cena: 600 zł",
    list: [
      "Indywidualny projekt graficzny",

      "Cała treść na stronie głównej",
      "Copywriting",

      "Certyfikat SSL",

      "Podstawowe SEO",
      "Wsparcie techniczne: 1 miesiąc",
      "Gwarancja: 12 miesięcy",
    ],
  },
  {
    name: "Strona Standard",
    desc: "Cena: 1000 zł",
    list: [
      "Indywidualny projekt graficzny",

      "Strona główna + do 5 podstron",
      "Copywriting",
      "Propozycja treści",

      "Formularz kontaktowy",
      // "5 zdjęć stockowych",
      "Szkolenie z obsługi (wideo)",
      "Animacje i elementy interaktywne",
      "Certyfikat SSL",
      "Dodatkowe języki",
      "System rezerwacji",

      "Optymalizacja SEO",
      "Wsparcie techniczne: 3 miesiące",
      "Gwarancja: 12 miesięcy",
    ],
  },
  {
    name: "Strona Premium",
    desc: "Cena: 2000 zł",
    list: [
      "Indywidualny rozbudowany projekt graficzny",

      "Strona główna + do 10 podstron",
      "Copywriting",
      "Propozycja treści",
      "Rozbudowana prezentacja oferty",

      "Formularz kontaktowy",
      "Blog / Sklep",
      // "10 zdjęć stockowych + 1 wideo",
      "Zaawansowane animacje i interaktywność",
      "Certyfikat SSL",
      "Dodatkowe języki",
      "System rezerwacji",
      "Integracja z Google Analytics",

      "Zaawansowane SEO",
      "Wsparcie techniczne: 6 miesięcy",
      "Gwarancja: 12 miesięcy",
    ],
  },
];

export default function Realizacje() {
  return (
    <>
      <div className="flex flex-col bg-gradient-to-r from-red-200 from-0% via-white via-60%  relative md:items-center justify-center text-5xl md:text-6xl lg:text-7xl font-semibold">
        <div className="bg-gradient-to-b from-white w-full h-60 absolute top-0 z-0 "></div>
        <div className="bg-gradient-to-t from-white w-full h-60 absolute bottom-0 z-0"></div>
        <motion.div
          initial={{ filter: "blur(5px)" }} // Initial blurred state
          whileInView={{ filter: "blur(0px)" }} // Unblur on hover
          transition={{ duration: 0.5 }} // Duration of unblur animation
          id="cennik"
          className="flex flex-col items-center justify-center z-1 text-5xl font-semibold"
        >
          <h4 className="md:w-[620px] text-center text-3xl md:text-left md:text-5xl font-semibold ">
            Strony internetowe cennik<p className="text-sm">*netto</p>
          </h4>
          <div className="w-[90vw] md:w-auto max-w-[95vw] mt-[100px] mb-[100px] md:max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="w-full md:w-[220px] md:h-auto  lg:w-[350px] lg:h-auto rounded-2xl shadow-lg shadow-[#917a7a3a] bg-[#ffffff56] backdrop-blur-lg hover:backdrop-blur-7xl py-3 px-6   duration-200  hover:shadow-2xl p-3 md:m-2 transition-all"
                >
                  <h5 className="text-3xl uppercase  text-center">
                    {item.name}
                  </h5>
                  <p className="ml-4 mt-2 text-lg ">{item.desc}</p>

                  {item.list.length > 0 && (
                    <ul className="mt-3 text-sm ">
                      {item.list.map((item2, i) => (
                        <li
                          key={i}
                          className="mb-1 before:content-['✔'] before:mr-2 before:text-green-500 text-sm font-light lg:text-lg"
                        >
                          {item2}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
