import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sanityClient, urlFor } from "./sanityClient"; // Import urlFor function
import BlogWhy from "./Comp/BlogWhy";
import { Helmet } from "react-helmet";
import MetaTags from "./Comp/MetaTags";

interface Post {
  _id: string;
  title: string;
  thumbnailDesc: string;
  slug: { current: string };
  publishedAt: string;
  thumbnail: { asset: { _ref: string } }; // Add the thumbnail field
}

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "blogPost"] | order(publishedAt desc)`)
      .then(setPosts)
      .catch((error) => {
        console.error(error);
        // Optionally set an error state here
      });
  }, []);

  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          name="description"
          content="Na blogu dzielę się wiedzą o tworzeniu stron internetowych,
          nowoczesnym web designie i skutecznym pozycjonowaniu w Google. Jeśli
          chcesz dowiedzieć się, jak zwiększyć widoczność swojej strony,
          pozyskiwać więcej klientów i korzystać z najlepszych rozwiązań
          technologicznych – jesteś w dobrym miejscu. Tworzę strony, które nie
          tylko wyglądają świetnie, ale też realnie działają – dlatego
          znajdziesz tu praktyczne porady, sprawdzone narzędzia i strategie,
          które możesz wdrożyć od razu."
        />
        <meta
          name="keywords"
          content="strony internetowe, tworzenie stron, projektowanie stron WWW, web design, tworzenie stron Zabrze, strony internetowe dla firm, strony responsywne, strony zoptymalizowane pod SEO, strony na zamówienie, strony WordPress, React, Headless CMS, e-commerce, strony internetowe dla małych firm, blog o stronach internetowych, projektowanie UX/UI, strony internetowe Zabrze, landing page, optymalizacja stron, audyt SEO, web development, modern web design, strony internetowe dla startupów, strony dla biznesu, projektowanie stron w React, Next.js, Gatsby.js, strony na WordPressie, optymalizacja szybkości stron, tworzenie sklepów internetowych, WooCommerce, CMS, GraphQL, REST API, dynamiczne strony, API-first strony, strony z ACF, Elementor, strony na Gutenbergu, strony z animacjami, front-end development, technologie webowe, tworzenie stron w Zabrzu, nowoczesne technologie, SEO-friendly strony, zarządzanie treścią na stronach, modernizacja stron internetowych, strony internetowe dla lokalnych firm, trendy w projektowaniu stron, projektowanie stron interaktywnych, web developer Zabrze, tworzenie stron internetowych z API"
        />
        <meta name="author" content="Bartosz Chmielecki" />
        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="Blog - Bartosz Chmielecki Strony Internetowe"
        />
        <meta
          property="og:description"
          content="Na blogu dzielę się wiedzą o tworzeniu stron internetowych,
          nowoczesnym web designie i skutecznym pozycjonowaniu w Google. Jeśli
          chcesz dowiedzieć się, jak zwiększyć widoczność swojej strony,
          pozyskiwać więcej klientów i korzystać z najlepszych rozwiązań
          technologicznych – jesteś w dobrym miejscu. Tworzę strony, które nie
          tylko wyglądają świetnie, ale też realnie działają – dlatego
          znajdziesz tu praktyczne porady, sprawdzone narzędzia i strategie,
          które możesz wdrożyć od razu."
        />
        <meta
          property="og:image"
          content="http://bartoszchmielecki.com/img/web-developer.png"
        />
        <meta property="og:url" content="http://bartoszchmielecki.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Blog - Bartosz Chmielecki Strony Internetowe"
        />
        <meta
          name="twitter:description"
          content="Na blogu dzielę się wiedzą o tworzeniu stron internetowych,
          nowoczesnym web designie i skutecznym pozycjonowaniu w Google. Jeśli
          chcesz dowiedzieć się, jak zwiększyć widoczność swojej strony,
          pozyskiwać więcej klientów i korzystać z najlepszych rozwiązań
          technologicznych – jesteś w dobrym miejscu. Tworzę strony, które nie
          tylko wyglądają świetnie, ale też realnie działają – dlatego
          znajdziesz tu praktyczne porady, sprawdzone narzędzia i strategie,
          które możesz wdrożyć od razu."
        />
        <meta
          name="twitter:image"
          content="http://bartoszchmielecki.com/img/web-developer.png"
        />

        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="Bartosz Chmielecki - Strony Internetowe Zabrze"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />

        <link rel="stylesheet" href="style.css" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap"
          rel="stylesheet"
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXX-Y"
        ></script>

        <title>Blog - Bartosz Chmielecki Strony Internetowe</title>
      </Helmet>
      <MetaTags
        title="Blog - Bartosz Chmielecki Strony Internetowe"
        description="Na blogu dzielę się wiedzą o tworzeniu stron internetowych,
          nowoczesnym web designie i skutecznym pozycjonowaniu w Google. Jeśli
          chcesz dowiedzieć się, jak zwiększyć widoczność swojej strony,
          pozyskiwać więcej klientów i korzystać z najlepszych rozwiązań
          technologicznych – jesteś w dobrym miejscu. Tworzę strony, które nie
          tylko wyglądają świetnie, ale też realnie działają – dlatego
          znajdziesz tu praktyczne porady, sprawdzone narzędzia i strategie,
          które możesz wdrożyć od razu."
      />
      <div className="min-h-screen">
        <BlogWhy />
        <div className="max-w-3xl  w-full flex items-center justify-center mx-auto p-4">
          <ul>
            {posts.map((post) => (
              <Link to={`/blog/${post.slug.current}`}>
                <li key={post._id} className="mb-4 bg-gray-50 shadow-xl p-10">
                  {/* Display the thumbnail image */}
                  {post.thumbnail?.asset?._ref && (
                    <img
                      src={urlFor(post.thumbnail.asset).width(100).url()} // You can adjust the width to your liking
                      alt={post.title}
                      className="mr-4 rounded-md w-[100px] h-[100px] object-cover"
                    />
                  )}
                  <h1 className="mt-2 text-2xl font-semibold">{post.title}</h1>
                  <p>{post.thumbnailDesc}</p>
                  <span className="mt-4">
                    Opublikowano :{" "}
                    {new Date(post.publishedAt).toLocaleDateString("pl-PL", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </li>
              </Link>
            ))}
            <li></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Blog;
