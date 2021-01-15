import Head from "next/head"

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <link
          rel="icon"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/images/logo.png`}
        />
      </Head>
      <>{props.children}</>
    </>
  )
}
