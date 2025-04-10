import {
  Link,
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Menu from "./Comp/Menu";
import Lenis from "lenis";
import { useEffect } from "react";

// Import your components
import Home from "./Home";
import About from "./polityka-prywatnosci";
import Error from "./Error";
import Blog from "./Blog";
import BlogPost from "./BlogPost";

function ScrollToTop() {
  const location = useLocation(); // Now it works here within Router context

  useEffect(() => {
    window.scrollTo(0, 0); // This will scroll the page to the top on route change
  }, [location]); // Dependency array contains location to trigger effect on route change

  return null; // This component doesn't render anything
}

function App() {
  useEffect(() => {
    // Inicjalizacja Lenis do płynnego przewijania
    const lenis = new Lenis({
      lerp: 0.1, // Możesz dostosować szybkość przewijania
    });

    // Funkcja animująca przewijanie
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    // Rozpoczęcie animacji przewijania
    requestAnimationFrame(raf);

    // Zwróć funkcję czyszczącą, aby usunąć listener, gdy komponent jest usuwany
    return () => {
      cancelAnimationFrame(raf as any); // W tym przypadku TypeScript może wymagać użycia `any`
    };
  }, []);

  return (
    <>
      <Router>
        <Menu />
        <ScrollToTop /> {/* Add ScrollToTop here to handle route changes */}
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/polityka-prywatnosci" element={<About />} />
            <Route path="/404" element={<Error />} />
            <Route path="*" element={<Error />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </div>
        <footer
          id="kontakt"
          className="bg-gray-50 min-w-full border-gray-100 border-t"
        >
          <div className="container flex mx-auto justify-center">
            <div className="flex flex-col items-center py-28 lg:flex-row lg:w-[70%]">
              <h6 className="mb-10 text-center text-4xl font-bold leading-tight tracking-tighter lg:mb-0 lg:w-1/2 lg:pr-4 lg:text-left lg:text-5xl">
                Strony www Zabrze.
              </h6>
              <div className="flex flex-col gap-3 items-center justify-center lg:w-1/2 lg:flex-row lg:pl-4">
                <a
                  aria-label="Zadzwoń do mnie"
                  href="tel:+48533320515"
                  className="rounded-full flex gap-2 items-center bg-black hover:bg-red-500 focus:bg-cyan-500 py-3 px-6 text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +48 533 320 515
                </a>
                <span className="mx-3 hover:underline">
                  <Link to="/polityka-prywatnosci">Polityka Prywatności</Link>
                </span>
              </div>
            </div>
          </div>
        </footer>
      </Router>
    </>
  );
}

export default App;
