import React from "react";
import Layout from "./containers/Layout/Layout";
import Header from "./containers/Layout/Header/Header";
import Footer from "./containers/Layout/Footer/Footer";
import Home from "./containers/Home/Home";

export default function App() {
  return (
    <Layout>
      <Header />
      <Home />
      <Footer />
    </Layout>
  );
}
