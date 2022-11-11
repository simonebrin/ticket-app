import EventList from "./components/EventList";

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
      <EventList
        list={events}
        onEventClick={(event) => {
          console.log(event);
        }}
      />
    </div>
  );
}

export default App;
