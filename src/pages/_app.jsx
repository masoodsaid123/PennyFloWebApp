import "../styles/index.scss"; 
import Head from "next/head";


if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pennyflo - Your App Title</title>
        <meta property="og:title" content="Pennyflo - AI Cash Management Suite for Businesses" />
        <meta property="og:description" content="We understand your challenges, which is why we developed the most efficient cash flow management software on the market. It helps you automate tasks to save time, make data-driven decisions, and mitigate cash shortage risks effortlessly." />
        <meta property="og:image" content="/img/open-graph/dashboard.jpg" />
        <meta property="og:url" content="https://pennyflo.io" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Pennyflo" />
        <meta name="twitter:card" content="We understand your challenges, which is why we developed the most efficient cash flow management software on the market. It helps you automate tasks to save time, make data-driven decisions, and mitigate cash shortage risks effortlessly." />
        <meta name="twitter:title" content="Pennyflo - AI Cash Management Suite for Businesses" />
        <meta name="twitter:description" content="We understand your challenges, which is why we developed the most efficient cash flow management software on the market. It helps you automate tasks to save time, make data-driven decisions, and mitigate cash shortage risks effortlessly." />
        <meta name="twitter:image" content="/img/open-graph/dashboard.jpg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

