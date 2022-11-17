import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
<ul className="flex-row">
        <Link to="/">View Events</Link>
        <Link to="/add">Add Event</Link>
      </ul>
    </nav>
  );
}
