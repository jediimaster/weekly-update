import ReadMarkdownPage from "../utilities/read_md_files";
import BlogSection from "./read_posts";
export async function getStaticProps() {
  const data = await ReadMarkdownPage('generic.md')
  return {
    props: {
      data
    }
  };
}

export default function HomePage({data}) {
  return (
   <BlogSection data={data}/>

  )
}


