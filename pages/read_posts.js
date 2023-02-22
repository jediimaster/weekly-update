import Head from "next/head"

export default function BlogSection({data}){
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <section>
        <div>{data.date}</div>
        <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
      </section>
    </>

  )
}