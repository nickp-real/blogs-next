import { allBlogs } from "@/.contentlayer/generated/index.mjs";
import { format, parseISO } from "date-fns";
import Mdx from "@/components/Mdx";
import { Blog } from "@/.contentlayer/generated";
import Article from "@/components/Article";

export const generateStaticParams = async () =>
  allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  if (!blog) throw new Error(`Post not found for slug ${params.slug}`);
  return { title: blog.title };
};

export default function BlogPage({ params }: { params: { slug: string } }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  if (!blog) throw new Error(`Post not found for slug ${params.slug}`);

  return (
    <Article>
      <div className="mb-8 flex flex-col md:mb-0 md:flex-row md:justify-between">
        <h1 className="m-0 md:mb-8">{blog.title}</h1>
        <time>{format(parseISO(blog.date), "LLLL d, yyyy")}</time>
      </div>
      <Mdx blog={blog as Blog} />
    </Article>
  );
}
