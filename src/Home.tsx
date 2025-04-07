import "./App.css";
import { Instagram, Facebook, Phone } from "lucide-react";

// import * as motion from "motion/react-client";

import Realizacje from "./Comp/Realizacje";
import Cennik from "./Comp/Cennik";
import Dlaczego from "./Comp/Dlaczego";
import Email from "./Comp/Kontakt";
import BlogCompHome from "./Comp/BlogCompHome";
import { useEffect, useRef } from "react";
import MetaTags from "./Comp/MetaTags";
// import ParticlesComponent from "./Comp/Particles";

function Home() {
  const logosRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (logosRef.current) {
      const ul = logosRef.current;
      const clonedUl = ul.cloneNode(true) as HTMLUListElement;
      clonedUl.setAttribute("aria-hidden", "true");

      if (ul.parentNode) {
        ul.parentNode.appendChild(clonedUl);
      }
    }
  }, []);
  return (
    <>
      <MetaTags
        title="Bartosz Chmielecki – Strony Internetowe Zabrze"
        description="Bartosz Chmielecki – freelancer oferujący tworzenie stron internetowych w Zabrzu. Projektowanie wizytówek, one page, sklepy internetowe, strony zoptymalizowane pod SEO, dopasowane do potrzeb lokalnych firm."
      />
      <div id="start" className="flex flex-row ">
        <div className="w-full">
          <div className=" h-[100vh] flex flex-col bg-gradient-to-r from-gray-200 from-0% via-white via-40%  relative md:items-center justify-center text-5xl md:text-6xl lg:text-7xl font-semibold">
            <div className="bg-gradient-to-b from-white w-full h-40 absolute top-0"></div>
            <div className="bg-gradient-to-t from-white w-full h-40 absolute bottom-0"></div>
            <div className="min-h-[60vh] flex flex-col justify-end">
              <div className="p-4 md:p-0 md:w-[620px]">
                <p className="text-md leading-14 font-bold  prose uppercase">
                  Bartosz Chmielecki
                </p>
                <h1 className="text-2xl md:text-3xl mt-5 font-light">
                  Strony <span className="text-red-500">Internetowe</span>{" "}
                  generujące <span className="text-red-500">zasięgi</span>
                </h1>
              </div>
              <div className=" p-4 md:p-0 flex h-[100px] md:w-[620px] items-center ">
                {" "}
                <a
                  href="https://www.instagram.com/bartoszchmieleckiweb/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <p className="hidden">Instagram</p>
                  <Instagram
                    size={27}
                    className="mr-4 lg:mr-12 cursor-pointer transition-all hover:-translate-y-2"
                  />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61574536735186"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <p className="hidden">Facebook</p>
                  <Facebook
                    size={27}
                    className="mr-4 lg:mr-12 cursor-pointer transition-all hover:-translate-y-2"
                  />
                </a>
                <div className="flex items-center justify-center">
                  <a
                    href="tel:48533320515"
                    className="flex justify-center item-center h-full"
                  >
                    <Phone size={27} className="mr-2 " />
                    <p className="text-xl ml-5 font-light hover:underline">
                      +48 533 320 515
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <section className="relative  flex flex-col justify-center  overflow-hidden">
              <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
                <div className="text-center">
                  <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_208px,_black_calc(100%-208px),transparent_100%)]">
                    <ul
                      className="flex items-center min-w-max justify-center md:justify-start  [&_img]:max-w-none animate-infinite-scroll aria-"
                      ref={logosRef}
                    >
                      {/* Oryginalny zestaw logo */}
                      <li className="mx-8">
                        <a
                          href="https://www.sanity.io/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Sanity - Headless CMS"
                        >
                          <img
                            width="auto"
                            height="auto"
                            className="h-12"
                            src="/Sanity.svg"
                            alt="Sanity - Headless CMS"
                            loading="lazy"
                          />
                        </a>
                      </li>
                      <li className="mx-8">
                        <a
                          href="https://react.dev/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="React.js - Biblioteka JavaScript"
                        >
                          <img
                            width="auto"
                            height="auto"
                            className="h-12"
                            src="/React.svg"
                            alt="React.js - Biblioteka JavaScript"
                            loading="lazy"
                          />
                        </a>
                      </li>
                      <li className="mx-8">
                        <a
                          href="https://tailwindcss.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Tailwind CSS - Framework CSS opartego na klasach"
                        >
                          <img
                            width="auto"
                            height="auto"
                            className="h-12"
                            src="/Tailwind CSS.svg"
                            alt="Tailwind CSS - Framework CSS opartego na klasach"
                            loading="lazy"
                          />
                        </a>
                      </li>
                      <li className="mx-8">
                        <a
                          href="https://vitejs.dev/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Vite - Narzędzie do budowy aplikacji frontendowych"
                        >
                          <img
                            width="auto"
                            height="auto"
                            className="h-12"
                            src="/Vite.js.svg"
                            alt="Vite - Narzędzie do budowy aplikacji frontendowych"
                            loading="lazy"
                          />
                        </a>
                      </li>
                      <li className="mx-8">
                        <a
                          aria-label="TypeScript - Superset JavaScript"
                          href="https://www.typescriptlang.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            width="auto"
                            height="auto"
                            className="h-12"
                            src="/TypeScript.svg"
                            alt="TypeScript - Superset JavaScript"
                            loading="lazy"
                          />
                        </a>
                      </li>
                      <li className="mx-8">
                        <a
                          aria-label="Wordpress - CMS & Kreator Stron"
                          href="https://wordpress.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            width="auto"
                            height="auto"
                            className="h-12"
                            src="/Wordpress.svg"
                            alt="Wordpress - CMS & Kreator Stron"
                            loading="lazy"
                          />
                        </a>
                      </li>

                      {/* Duplikaty dla płynnego przewijania */}
                      <li className="mx-8">
                        <a
                          href="https://www.sanity.io/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Sanity - Headless CMS"
                        >
                          <img
                            width="auto"
                            height="auto"
                            className="h-12"
                            src="/Sanity.svg"
                            alt="Sanity - Headless CMS"
                            loading="lazy"
                          />
                        </a>
                      </li>
                      <li className="mx-8">
                        <a
                          href="https://react.dev/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="React.js - Biblioteka JavaScript"
                        >
                          <img
                            width="auto"
                            height="auto"
                            className="h-12"
                            src="/React.svg"
                            alt="React.js - Biblioteka JavaScript"
                            loading="lazy"
                          />
                        </a>
                      </li>
                      <li className="mx-8">
                        <a
                          href="https://tailwindcss.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Tailwind CSS - Framework CSS opartego na klasach"
                        >
                          <img
                            width="auto"
                            height="auto"
                            className="h-12"
                            src="/Tailwind CSS.svg"
                            alt="Tailwind CSS - Framework CSS opartego na klasach"
                            loading="lazy"
                          />
                        </a>
                      </li>
                      <li className="mx-8">
                        <a
                          href="https://vitejs.dev/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Vite - Narzędzie do budowy aplikacji frontendowych"
                        >
                          <img
                            width="auto"
                            height="auto"
                            className="h-12"
                            src="/Vite.js.svg"
                            alt="Vite - Narzędzie do budowy aplikacji frontendowych"
                            loading="lazy"
                          />
                        </a>
                      </li>
                      <li className="mx-8">
                        <a
                          aria-label="TypeScript - Superset JavaScript"
                          href="https://www.typescriptlang.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            width="auto"
                            height="auto"
                            className="h-12"
                            src="/TypeScript.svg"
                            alt="TypeScript - Superset JavaScript"
                            loading="lazy"
                          />
                        </a>
                      </li>
                      <li className="mx-8">
                        <a
                          aria-label="Wordpress - CMS & Kreator Stron"
                          href="https://wordpress.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            width="auto"
                            height="auto"
                            className="h-12"
                            src="/Wordpress.svg"
                            alt="Wordpress - CMS & Kreator Stron"
                            loading="lazy"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Tailwind Keyframe Animation */}
              <style>{`
                @keyframes infinite-scroll {
                  from {
                    transform: translateX(0);
                  }
                  to {
                    transform: translateX(-50%);
                  }
                }
                .animate-infinite-scroll {
                  display: flex;
                  animation: infinite-scroll 20s linear infinite;
                }
              `}</style>
            </section>
          </div>
          <Dlaczego />

          <Realizacje />

          <Cennik />

          <Email />
          <BlogCompHome />

          {/* <hr className="mt-10" /> */}

          {/* <div className="w-full h-[5vh]  flex items-center justify-center">
            <p className="">© Bartosz Chmielecki</p>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Home;
