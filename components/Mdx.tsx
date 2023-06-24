import { Blog } from "@/.contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";

function RoundedImage(props: any) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

const components = {
  Image: RoundedImage,
};

export default function Mdx({ blog }: { blog: Blog }) {
  const MDXComponent = useMDXComponent(blog.body.code);
  return <MDXComponent components={components} />;
}
