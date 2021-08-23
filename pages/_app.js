import Head from "next/head";
import "../public/css/style.css";
import "../public/css/mobile.css";
import "../public/css/widescreen.css";
import Script from "next/script";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://kit.fontawesome.com/607c18e7ee.js"
        crossorigin="anonymous"
      ></Script>
      <Script src="../public/js/main.js"></Script>
      {/* <Script
        async
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBfgnn5Cut3RDfJm1q7qZ_Q9-6aGgNthYY&callback=initMap"
      ></Script> */}

      <Head>
        <meta charset="utf-8" />
        <title>Platinum finanacial | Санхүү, хөрөнгө оруулалт</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
