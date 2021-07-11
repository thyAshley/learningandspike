import { getFeaturedEvents } from "src/data";
import EventList, { EventItemProps } from "src/features/events/EventList";

const EventPage = (): JSX.Element => {
  const events: EventItemProps[] = getFeaturedEvents();
  console.log("events", events);
  return (
    <div>
      <h1>Event Page</h1>
      <EventList items={events} />
    </div>
  );
};

export default EventPage;
