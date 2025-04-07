import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sanityClient, urlFor } from "../sanityClient"; // Import urlFor function

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
      <div className="mt-24 mb-24">
        <h1 className=" md:w-[620px] mx-auto text-center md:text-left text-3xl md:text-5xl font-semibold ">
          Blog
        </h1>
        <div className=" w-full flex items-center justify-center mx-auto p-4">
          <ul className="flex flex-col md:flex-row">
            {posts.slice(0, 3).map((post) => (
              <Link to={`/blog/${post.slug.current}`} key={post._id}>
                <li className="bg-gray-50 shadow-xl p-10 m-2 hover:scale-105 transition-all   xl:w-[300px] 2xl:w-[500px]">
                  {/* Display the thumbnail image */}
                  {post.thumbnail?.asset?._ref && (
                    <img
                      src={urlFor(post.thumbnail.asset).width(100).url()} // Możesz dostosować szerokość do własnych potrzeb
                      alt={post.title}
                      className="mr-4 rounded-md w-[100px] h-[100px] object-cover"
                    />
                  )}
                  <h1 className="mt-2 xl:text-xl 2xl:text-2xl font-semibold">
                    {post.title}
                  </h1>
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
          </ul>
        </div>
      </div>
    </>
  );
};

export default Blog;
