import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <Link to="/">View Events</Link>
      <Link to="/add">Add Event</Link>
    </div>
  );
}
