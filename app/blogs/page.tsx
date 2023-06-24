import { allBlogs } from "@/.contentlayer/generated/index.mjs";
import { compareAsc, format, parseISO } from "date-fns";
import Link from "next/link";

export default function Blogs() {
  const blogs = allBlogs.sort((a, b) =>
    compareAsc(new Date(a.date), new Date(b.date))
  );

  return (
    <div>
      {blogs.map((blog, idx) => (
        <div key={idx} className="my-8">
          <Link href={blog.url}>
            <p>{blog.title}</p>
            <time className="text-text/40">
              {format(parseISO(blog.date), "LLLL d, yyyy")}
            </time>
          </Link>
        </div>
      ))}
    </div>
  );
}
