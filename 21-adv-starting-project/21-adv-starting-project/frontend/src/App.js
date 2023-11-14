// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import EventsPage from "./pages/EventsPage";
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
    {path: "/", element: <HomePage />, loader: async () => {
      const response = await fetch('http://localhost:8080/events');

      if (!response.ok) {
      
      } else {
        const resData = await response.json();
        return resData.events;
      }
    }},
    { path: "/events", element: <EventsPage events={dummy_events} /> },
    { path: "new", element: <NewEventPage /> },
    { path: "/events/:eventID", element: <EventDetailPage /> },
    {path: "/events/:eventID/edit", element: <EditEventPage />}
  ],
}]);

export default function App() {
  return <RouterProvider router={router} />;
}
