import { Link } from "react-router-dom";

export default function EventsPage(props) {
  return (
    <>
      <h1>Events Page</h1>
      {props.events.map((event) => {
        return (
          <div key={event.id}>
            <h3><Link to={`/events/${event.id}`}>{event.title}</Link></h3>
          </div>
        );
      })}
    </>
  );
}
