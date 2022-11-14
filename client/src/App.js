import EventForm from "./components/EventForm";
import EventList from "./components/EventList";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
    <div>
      {/* <EventList
        list={events}
        onEventClick={(event) => {
          console.log(event);
        }}
      /> */}
      <EventForm onSubmit={(data) => {console.log(data)} } />
    </div>
  );
}

export default App;
