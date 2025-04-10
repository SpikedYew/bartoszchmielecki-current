import * as motion from "motion/react-client";

export default function Dlaczego() {
  return (
    <motion.div
      initial={{ filter: "blur(5px)" }} // Initial blurred state
      whileInView={{ filter: "blur(0px)" }} // Unblur on hover
      transition={{ duration: 0.5 }} // Duration of unblur animation
      id="dlaczego"
      className="  h-auto mt-[10vh] mb-[10vh] flex flex-col md:items-center justify-center text-5xl md:text-6xl lg:text-7xl font-semibold"
    >
      <div className=" p-4 md:p-0 md:w-[620px]">
        <h2 className="text-center md:text-left text-3xl md:text-5xl font-semibold ">
          Strony internetowe Zabrze - Dlaczego ja?
        </h2>
        <p className="text-lg md:text-xl font-light text-gray-800 mt-5">
          Tworzę nowoczesne i szybkie strony internetowe, które przyciągają
          klientów i działają bezproblemowo przez lata. Stawiam na intuicyjność,
          wysoką jakość i stabilność, dzięki czemu Twoja strona nie wymaga
          ciągłej opieki ani kosztownych poprawek. Bez ryzyka – podpisujemy
          umowę, a płatność dopiero po wykonaniu strony.
        </p>
      </div>
    </motion.div>
  );
}
