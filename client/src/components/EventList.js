import Event from "./Event";

export default function EventList({ list, onEventClick = () => {} }) {
  return (
    <div className="flex-row">
      {list.map((event) => {
        return <Event {...event} onClick={onEventClick} />;
      })}
    </div>
  );
}
