import EventList from "../components/EventList";

export default function ViewEvents({ list }) {
  return (
    <div>
      <EventList list={list} />
    </div>
  );
}
