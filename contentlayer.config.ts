import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (blog) => `/blogs/${blog._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkGfm],
  },
});
