import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import Header from "./containers/Layout/Header/Header";
import Footer from "./containers/Layout/Footer/Footer";
import Home from "./containers/Home/Home";
import SingleEvent from "./containers/SingleEvent/SingleEvent";
import Tickets from "./containers/Tickets/Tickets";

export default function App() {
  const [user, setUser] = useState(false);

  return (
    <Router>
      <Layout>
        <Header user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eventos/:id" element={<SingleEvent />} />
          <Route
            path="/tickets"
            element={<Tickets user={user} setUser={setUser} />}
          />
        </Routes>
        <Footer />
      </Layout>
    </Router>
  );
}
