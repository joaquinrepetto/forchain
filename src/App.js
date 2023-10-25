import React from "react";
import Layout from "./containers/Layout/Layout";
import Header from "./containers/Layout/Header/Header";
import Footer from "./containers/Layout/Footer/Footer";
import Home from "./containers/Home/Home";
import { useState } from "react";

export default function App() {
  const [user, setUser] = useState(false);

  return (
    <Layout>
      <Header user={user} setUser={setUser} />
      <Home />
      <Footer />
    </Layout>
  );
}
