import EventForm from "./components/EventForm";
import EventList from "./components/EventList";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddEvent from "./pages/AddEvent";
import ViewEvents from "./pages/ViewEvents";
import Nav from "./components/Nav";

const events = [
  {
    title: "Summer Concert",
    image: "https://picsum.photos/200",
    date: "7/1/2023",
    location: "NYC",
  },
  {
    title: "New Concert",
    image: "https://picsum.photos/200",
    date: "7/1/2023",
    location: "NYC",
  },
  {
    title: "Fun Concert",
    image: "https://picsum.photos/200",
    date: "7/1/2023",
    location: "NYC",
  },
];

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<ViewEvents list={events} />} />
        <Route path="/add" element={<AddEvent />} />
      </Routes>
    </Router>
  );
}

export default App;
