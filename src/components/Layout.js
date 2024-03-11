import Head from "next/head";

export default function Layout({ children, title, description }) {
  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <title>{title}</title>
        <link rel="shortcut icon" href="../images/icons/favicon.ico" />
      </Head>
      <main className={`main`}>{children}</main>
    </>
  );
}
