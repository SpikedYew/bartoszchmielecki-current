import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { sanityClient, urlFor } from "./sanityClient"; // Import the urlFor function
import { PortableText } from "@portabletext/react";
import MetaTags from "./Comp/MetaTags";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any | null>(null);

  useEffect(() => {
    if (slug) {
      sanityClient
        .fetch(`*[_type == "blogPost" && slug.current == $slug][0]`, { slug })
        .then((data) => {
          if (data) {
            setPost(data);
          } else {
            console.error("No post found for the given slug");
          }
        })
        .catch((error) => {
          console.error("Error fetching the post: ", error);
        });
    }
  }, [slug]);

  if (!post) return <p>Loading...</p>;

  return (
    <>
      <MetaTags title={post.title} description={post.metaDesc} />
      <div className="max-w-3xl mx-auto p-4 mt-24 md:text-left">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <PortableText
          value={post.content}
          components={{
            types: {
              image: ({ value }) => {
                const imageUrl = urlFor(value.asset).width(800).url(); // Generowanie URL z szerokością 800px
                return (
                  <img
                    loading="lazy"
                    src={imageUrl}
                    alt={value.alt || "Blog Image"}
                    className="my-4 rounded-lg"
                  />
                );
              },
            },
            block: {
              h1: ({ children }) => (
                <h1 className="text-left  mb-2 font-semibold mt-5   text-3xl md:text-4xl">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-left  mb-2 font-semibold mt-5  text-3xl md:text-4xl ">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-left  mb-2 font-semibold mt-5  text-3xl md:text-4xl ">
                  {children}
                </h3>
              ),
              normal: ({ children }) => (
                <p className="text-lg md:text-xl  font-medium mb-2  text-gray-800 mt-5">
                  {children}
                </p>
              ),
              // Dodane style dla ul
              bullet: ({ children }) => (
                <ul className="list-disc pl-5 space-y-2 text-lg">{children}</ul>
              ),
              // Dodane style dla li
              li: ({ children }) => <li className="text-lg">{children}</li>,
            },
            marks: {
              link: ({ children, value }) => (
                <a href={value.href} className="text-blue-500 underline">
                  {children}
                </a>
              ),
            },
          }}
        />
      </div>
    </>
  );
};

export default BlogPost;
