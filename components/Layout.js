import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = props => {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <title></title>
        <meta name="description" content="" />
        <meta name="author" content="Nalula" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover, minimal-ui"
        />
      </Head>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};
export default Layout;
