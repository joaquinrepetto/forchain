import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import Header from "./containers/Layout/Header/Header";
import Footer from "./containers/Layout/Footer/Footer";
import Home from "./containers/Home/Home";
import SingleEvent from "./containers/SingleEvent/SingleEvent";
import Tickets from "./containers/Tickets/Tickets";
import SingleTicket from "./containers/Tickets/SingleTicket";
import Profile from "./containers/Profile/Profile";

export default function App() {
  return (
    <Router>
      <Layout>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events/:id" element={<SingleEvent />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/tickets/:id" element={<SingleTicket />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </Layout>
    </Router>
  );
}
