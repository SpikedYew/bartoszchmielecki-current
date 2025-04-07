import * as motion from "motion/react-client";

export default function BlogWhy() {
  return (
    <motion.div
      initial={{ filter: "blur(5px)" }} // Initial blurred state
      whileInView={{ filter: "blur(0px)" }} // Unblur on hover
      transition={{ duration: 0.5 }} // Duration of unblur animation
      id="dlaczego"
      className="  h-auto mt-[10vh] mb-[10vh] flex flex-col md:items-center justify-center text-5xl md:text-6xl lg:text-7xl font-semibold"
    >
      <div className=" p-4 md:p-0 md:w-[620px]">
        <h2 className="text-center md:text-left text-3xl md:text-5xl font-semibold  ">
          Blog
        </h2>
        <p className="text-lg md:text-xl font-light text-gray-800 mt-5">
          Na blogu dzielę się wiedzą o tworzeniu stron internetowych,
          nowoczesnym web designie i skutecznym pozycjonowaniu w Google. Jeśli
          chcesz dowiedzieć się, jak zwiększyć widoczność swojej strony,
          pozyskiwać więcej klientów i korzystać z najlepszych rozwiązań
          technologicznych – jesteś w dobrym miejscu. Tworzę strony, które nie
          tylko wyglądają świetnie, ale też realnie działają – dlatego
          znajdziesz tu praktyczne porady, sprawdzone narzędzia i strategie,
          które możesz wdrożyć od razu.
        </p>
      </div>
    </motion.div>
  );
}
