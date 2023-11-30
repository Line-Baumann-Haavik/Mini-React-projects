import { RouterProvider, createBrowserRouter } from "react-router-dom";
import EventsPage, {eventLoader} from "./pages/EventsPage";
import NewEventPage from "./pages/NewEventPage";
import EventDetailPage from "./pages/EventDetailPage";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import EditEventPage from "./pages/EditEventPage";

const dummy_events = [{title: "Event 1", id: 1}, {title: "Event 2", id: 2}, {title: "Event 3", id: 3}, {title: "Event 4", id: 4}];

const router = createBrowserRouter([{
  path: "/",
  element: <Root />,
  children: [
    { path: "/", element: <HomePage />, loader: eventLoader},
    { path: "/events", element: <EventsPage events={dummy_events} /> },
    { path: "new", element: <NewEventPage /> },
    { path: "/events/:eventID", element: <EventDetailPage /> },
    { path: "/events/:eventID/edit", element: <EditEventPage />}
  ],
}]);

export default function App() {
  return <RouterProvider router={router} />;
}
