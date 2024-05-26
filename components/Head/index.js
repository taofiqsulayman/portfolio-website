import Head from "next/head";

export default function DomHead({ pageName = "Home Page" }) {
  return (
    <Head>
      <title>Taofiq's - {pageName} </title>
      {/* meta tags begins */}
      {/* Primary Meta Tags */}
      <meta name="title" content="Taofiq Sulayman's portfolio" />
      <meta
        name="description"
        content="Fullstack developer with a passion for creating beautiful and functional web applications."
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content=""
      />
      <meta
        property="og:title"
        content="Taofiq Sulayman's portfolio"
      />
      <meta
        property="og:description"
        content=" Fullstack developer with a passion for creating beautiful and functional web applications."
      />
      <meta
        property="og:image"
        content="public\assets\logo.png"
      />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://metatags.io/" />
      <meta property="twitter:title" content=" Taofiq Sulayman's Portfolio" />
      <meta
        property="twitter:description"
        content="Fullstack developer with a passion for creating beautiful and functional web applications"
      />
      <meta
        property="twitter:image"
        content="public\assets\logo.png"
      />

      {/* meta tags end */}
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
      <link
        href="https://unpkg.com/aos@2.3.1/dist/aos.css"
        rel="stylesheet"
      ></link>
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    </Head>
  );
}
