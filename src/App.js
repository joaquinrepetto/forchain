import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import Header from "./containers/Layout/Header/Header";
import Footer from "./containers/Layout/Footer/Footer";
import Home from "./containers/Home/Home";
import SingleEvent from "./containers/SingleEvent/SingleEvent";

export default function App() {
  return (
    <Router>
      <Layout>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eventos/:id" element={<SingleEvent />} />
        </Routes>
        <Footer />
      </Layout>
    </Router>
  );
}
