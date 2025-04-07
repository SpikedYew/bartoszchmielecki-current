import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import * as motion from "motion/react-client";

interface Email {
  name: string;
  email: string;
  phone: string;
  package: string;
  details: string;
  message: string;
  honeypot?: string;
}

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<Email>({
    name: "",
    email: "",
    phone: "",
    package: "",
    details: "",
    message: "",
    honeypot: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.honeypot) {
      console.log("Bot detected!");
      return;
    }

    if (form.current) {
      setIsLoading(true);

      emailjs
        .sendForm(
          "service_a5bxtad",
          "template_uymswti",
          form.current,
          "C0aLgz9y1yM0c_ckP"
        )
        .then(
          () => {
            console.log("SUCCESS!");
            alert("Wiadomość została wysłana!");
            setFormData({
              name: "",
              email: "",
              phone: "",
              package: "",
              details: "",
              message: "",
              honeypot: "",
            });
          },
          (error) => {
            console.error("FAILED...", error.text);
            alert("Wiadomość nie została wysłana...");
          }
        )
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <>
      {" "}
      <motion.div
        id="wycena"
        initial={{ filter: "blur(5px)" }} // Initial blurred state
        whileInView={{ filter: "blur(0px)" }} // Unblur on hover
        transition={{ duration: 0.5 }} // Duration of unblur animation
        className="flex flex-col items-center justify-center text-5xl font-semibold"
      >
        <h6 className="text-center text-3xl md:text-left md:w-[620px] md:text-5xl font-semibold mx-auto">
          Gwarancja <span className="text-red-500">satysfakcji</span>
        </h6>
        <p className="p-4 md:p-0 text-lg md:text-xl font-light text-gray-800 mt-5 max-w-[620px]">
          Jako freelancer, zależy mi na Twoim pełnym{" "}
          <span className="text-red-500 bg-white">zadowoleniu</span> z wykonanej
          pracy. Oferuję{" "}
          <span className="text-red-500 bg-white">gwarancję</span> satysfakcji –
          jeśli po zakończeniu projektu nie będziesz zadowolony z rezultatów,
          nie zapłacisz. Po podpisaniu umowy, dokładnie określę warunki
          współpracy. Jeśli wyniki nie spełnią Twoich oczekiwań, skontaktuję się
          z Tobą, aby omówić sytuację i znaleźć rozwiązanie.
          <br />
          <br />
          Poniżej znajduje się formularz kontaktowy – umówimy się na rozmowę, by
          wyjaśnić szczegóły i ustalić dalsze kroki.
        </p>
      </motion.div>
      <div className="flex flex-col lg:flex-row items-center justify-center  font-semibold">
        <motion.form
          initial={{ filter: "blur(5px)" }} // Initial blurred state
          whileInView={{ filter: "blur(0px)" }} // Unblur on hover
          transition={{ duration: 0.5 }} // Duration of unblur animation
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-2 w-[90vw] md:w-full m-10 max-w-md p-2 md:p-6 md:max-w-sm  shadow-xl shadow-[#917a7a3a] bg-gray-50"
        >
          <label htmlFor="name" className="font-medium text-black">
            Imię
          </label>
          <input
            aria-label="Imię"
            value={formData.name}
            onChange={handleChange}
            type="text"
            id="name"
            name="name"
            required
            className="p-3 rounded-md focus:outline-none bg-white border-1 border-black focus:ring-2 focus:border-0 focus:ring-red-500"
          />

          <label htmlFor="email" className="font-medium text-black">
            E-mail
          </label>
          <input
            aria-label="E-mail"
            value={formData.email}
            onChange={handleChange}
            type="email"
            id="email"
            name="email"
            required
            className="p-3 rounded-md focus:outline-none bg-white border-1 border-black focus:ring-2 focus:border-0 focus:ring-red-500"
          />

          <label htmlFor="phone" className="font-medium text-black">
            Numer telefonu
          </label>
          <input
            aria-label="Numer telefonu"
            value={formData.phone}
            onChange={handleChange}
            type="tel"
            id="phone"
            name="phone"
            required
            className="p-3 rounded-md focus:outline-none bg-white border-1 border-black focus:ring-2 focus:border-0 focus:ring-red-500"
          />

          <label htmlFor="package" className="font-medium text-black">
            Wybierz pakiet
          </label>
          <select
            name="package"
            id="package"
            value={formData.package}
            onChange={handleChange}
            required
            className="p-3 rounded-md focus:outline-none bg-white border-1 border-black focus:ring-2 focus:border-0 focus:ring-red-500"
          >
            <option value="">Wybierz...</option>
            <option value="one_page">Strona One Page</option>
            <option value="standard">Strona Standard</option>
            <option value="premium">Strona Premium</option>
          </select>

          <label htmlFor="details" className="font-medium text-black">
            Dodatkowe informacje
          </label>
          <textarea
            aria-label="Dodatkowe informacje"
            value={formData.details}
            onChange={handleChange}
            id="details"
            name="details"
            className="p-3 rounded-md focus:outline-none bg-white border-1 border-black focus:ring-2 focus:border-0 focus:ring-red-500 resize-none"
          />

          <label htmlFor="message" className="font-medium text-black">
            Wiadomość
          </label>
          <textarea
            aria-label="Wiadomość"
            value={formData.message}
            onChange={handleChange}
            id="message"
            name="message"
            required
            className="p-3 rounded-md focus:outline-none bg-white border-1 border-black focus:ring-2 focus:border-0 focus:ring-red-500 resize-none"
          />

          <input
            type="text"
            aria-label="Honeypot"
            name="honeypot"
            style={{ display: "none" }}
            value={formData.honeypot}
            onChange={handleChange}
          />

          <button
            aria-label="Wyślij formularz kontaktowy"
            type="submit"
            disabled={isLoading}
            className={`rounded-full flex gap-2 items-center justify-center mt-4 bg-black hover:bg-red-500 focus:bg-cyan-500 py-3 px-6 w-full text-white transition-colors duration-200 ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Wysyłanie..." : "Wyślij"}
          </button>
        </motion.form>
        <motion.div
          initial={{ filter: "blur(5px)" }} // Initial blurred state
          whileInView={{ filter: "blur(0px)" }} // Unblur on hover
          transition={{ duration: 0.5 }} // Duration of unblur animation
        >
          <div
            itemScope
            itemType="https://schema.org/Place"
            className="flex flex-col items-center gap-2 w-full mx-auto sm:w-[90vw] m-5 max-w-md p-2 sm:p-4 shadow-[#917a7a3a] shadow-xl bg-gray-50"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              <span itemProp="name">Gdzie mnie znaleźć</span>
            </h2>
            <p itemProp="address" className="text-gray-600">
              41-806 Lompy 95, Zabrze, Polska
            </p>

            <a
              aria-label="Strony Internetowe Zabrze - Mapy Google"
              itemProp="hasMap"
              href="https://www.google.com/maps?ie=UTF8&hq&ll=47.1234,11.1234&z=13"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-2"
            >
              Otwórz w mapach Google
            </a>

            <div className="mt-4 w-full  h-auto sm:h-[280px] md:h-[400px]">
              <iframe
                title="Gdzie mnie znaleźć"
                itemProp="hasMap"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2549.1862356036477!2d18.816581512645282!3d50.28845137144315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471132edeaddc71d%3A0x9b23a317d699bdd3!2sJ%C3%B3zefa%20Lompy%2035%2C%2041-806%20Zabrze!5e0!3m2!1spl!2spl!4v1742236796737!5m2!1spl!2spl"
                width="100%"
                height="100%"
                className="rounded-lg shadow-md"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
