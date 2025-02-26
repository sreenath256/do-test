import { notFound } from "next/navigation";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";

// Fetch blog data
async function getData(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/blogs?filters[slug][$eq]=${slug}&populate=*`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

// Dynamic metadata generation
export async function generateMetadata({ params }) {
  const data = await getData(params.id);

  if (!data?.data.length) {
    return {
      title: "Blog Not Found - Do Studio",
      description: "The requested blog could not be found.",
    };
  }

  const blog = data.data[0].attributes;
  console.log(blog);

  return {
    title: blog.metatitle || "Default Blog Title",
    description: blog.metadesc || "Default blog description.",
    keywords:
      blog.metakeywords || "digital marketing, SEO, branding, marketing blogs",
    metadataBase: new URL("https://dostudio.co.in"), // Base domain
    
   
    openGraph: {
      title: blog.metatitle || "Default Blog Title",
      description: blog.metadesc || "Default blog description.",
      url: `https://dostudio.co.in/blogs/${params.id}`,
      images: [
        {
          url: blog.image?.data?.attributes?.url || "/default-og-image.jpg",
          width: 1200,
          height: 630,
          alt: blog || "Do Studio Blog",
        },
      ],
      type: "article",
    },
  };
}

// Blog details component
const BlogDetails = async ({ params }) => {
  const data = await getData(params.id);
  const blog = data?.data[0]?.attributes;
  const content = blog?.content;

  return (
    <main className="min-h-screen w-full bg-white">
      <div className="w-11/12 xl:w-10/12 mx-auto pt-24 py-20">
        <div className="relative h-[500px] w-full mb-10">
          <Image
            src={blog.image.data.attributes.url}
            fill={true}
            className="object-cover"
            alt={blog.title}
            loading="lazy"
          />
        </div>
        <div className="prose prose-headings:text-black prose-li:text-black prose-blockquote:text-black prose-strong:text-black prose-a:text-blue-500 prose-h1:leading-tight prose-h4:text-3xl prose-a:no-underline prose-h4:font-normal prose-h5:text-xl prose-h4:m-0 prose-h4:mb-2 prose-h5:m-0 prose-p:m-0 prose-h5:font-medium prose-h1:text-3xl prose-h1:m-0 prose-h1:mb-7 prose-p:text-base prose-h1:font-semibold prose-p:text-black">
          <BlocksRenderer content={content} />
        </div>
      </div>
    </main>
  );
};

export default BlogDetails;
