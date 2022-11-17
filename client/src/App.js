import EventForm from "./components/EventForm";
import EventList from "./components/EventList";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddEvent from "./pages/AddEvent";
import ViewEvents from "./pages/ViewEvents";
import Nav from "./components/Nav";
import Header from '../src/components/Header/index'
import Footer from "../src/components/Footer/index";

const events = [
  {
    title: "MF Doom",
    image:
      "https://p16.resso.me/img/tos-alisg-i-0000/02f2af04ffe2473f9cf4c5d6ee2d125f~c5_300x300.jpg",
    date: "7/1/2023",
    location: "NYC",
  },
  {
    title: "Harry Styles",
    image:
      "https://pyxis.nymag.com/v1/imgs/7e5/ab3/fb2d22b1389a75938dcf6a4e3896929762-harrystyles.rsquare.h300.jpg",
    date: "10/10/2023",
    location: "NYC",
  },
  {
    title: "Westside Gunn & Benny the Butcher",
    image:
      "https://media.gq.com/photos/6006fbabfe8537eb32a6d20b/1:1/w_350,c_limit/1205177734",
    date: "2/22/2023",
    location: "NYC",
  },
];

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<ViewEvents list={events} />} />
        <Route path="/add" element={<AddEvent />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
