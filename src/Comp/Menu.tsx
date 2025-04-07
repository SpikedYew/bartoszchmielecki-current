import { Link } from "react-router-dom";
import { useState } from "react";
import imgUrl from "/img/web-developer.jpg";

// import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="fixed z-50 h-16 md:h-24 inset-0 bg-white/80 flex items-center backdrop-blur-lg">
      <div className="container py-6 mx-auto sm:px-6">
        <div className="flex items-center justify-between gap-5">
          <div className="flex flex-row">
            <img
              width="auto"
              height="auto"
              src={imgUrl}
              loading="lazy"
              className="rounded-4xl w-[50px] h-[50px]  mr-2 ml-2 md:ml-0 lg:w-[65px] lg:h-[65px]"
              alt="Bartosz Chmielecki - Tworzenie Stron Internetowych"
            ></img>
            <Link className="flex items-center gap-2" to="/">
              <p className="text-sm md:text-2xl md:ml-2 font-semibold">
                Tworzenie <span className="text-red-500">Stron</span>{" "}
                Internetowych
              </p>
            </Link>
          </div>

          <nav className="">
            <ul
              role="list"
              className="flex items-center gap-4 md:gap-6 leading-5 text-sm md:text-base tracking-tight font-normal"
            >
              <li>
                <div className="relative  text-left block m-2 lg:hidden">
                  {/* Dropdown button */}
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                    onClick={toggleMenu}
                  >
                    Menu
                    {/* Icon (optional) */}
                    <svg
                      className="-mr-1 ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 7l7 7 7-7"
                      ></path>
                    </svg>
                  </button>

                  {/* Dropdown menu */}
                  {isOpen && (
                    <div
                      className="absolute  right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                    >
                      <div className="py-1 " role="none">
                        <Link
                          aria-label="Powrót na stronę główną"
                          to="/"
                          className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 focus:bg-gray-100"
                          role="menuitem"
                          onClick={toggleMenu}
                        >
                          Home
                        </Link>
                        {/* Menu item 1 */}
                        <a
                          aria-label="Skontaktuj się ze mną"
                          href="https://bartoszchmielecki.com/#kontakt"
                          className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 focus:bg-gray-100"
                          role="menuitem"
                          onClick={toggleMenu}
                        >
                          Kontakt
                        </a>

                        {/* Menu item 2 */}
                        <a
                          aria-label="Strona Internetowa Wycena"
                          href="https://bartoszchmielecki.com/#wycena"
                          className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 focus:bg-gray-100"
                          role="menuitem"
                          onClick={toggleMenu}
                        >
                          Darmowa Wycena
                        </a>
                        <Link
                          to="/blog"
                          aria-label="Strona Internetowa Wycena"
                          // href="localhost:5173/blog"
                          className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 focus:bg-gray-100"
                          role="menuitem"
                          onClick={toggleMenu}
                        >
                          Blog
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </li>

              <li className="hidden lg:block">
                <Link
                  aria-label="Powrót na stronę główną"
                  to="/"
                  className="hover:underline"
                  role="menuitem"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li className="hidden lg:block">
                <Link
                  className="hover:underline"
                  // href="https://www.bartoszchmielecki.com/blog"
                  to="/blog"
                  aria-label="Skontaktuj się ze mną"
                >
                  Blog
                </Link>
              </li>
              <li className="hidden lg:block">
                <a
                  className="hover:underline"
                  href="https://bartoszchmielecki.com/#kontakt"
                  aria-label="Skontaktuj się ze mną"
                >
                  Kontakt
                </a>
              </li>
              <li className="hidden lg:block">
                <a
                  aria-label="Strona Internetowa Wycena"
                  href="https://bartoszchmielecki.com/#wycena"
                  className="rounded-full flex gap-2 items-center bg-black hover:bg-red-500 focus:bg-cyan-500 py-3 px-6 text-white transition-colors duration-200"
                >
                  Darmowa Wycena
                </a>
              </li>
              {/* <li>
                <Link to="/wordpress" className="">
                  Wordpress
                </Link>
              </li>
              <li>
              
                <Link to="/blog" className="">
                  Blog
                </Link>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
