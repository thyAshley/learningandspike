import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { getEventById } from "src/data";

const EventDetailPage = (): JSX.Element => {
  const router = useRouter();
  const [eventData, setEventData] = useState<any>();

  useEffect(() => {
    const eventId = router.query.eventId as string;
    const data = getEventById(eventId);
    console.log(data);
    setEventData(data);
  }, [router]);

  if (!eventData) {
    return (
      <div>
        <h1>No Event Found</h1>
      </div>
    );
  }
  console.log(eventData);
  return (
    <div>
      <h1>EventDetail Page</h1>
    </div>
  );
};

export default EventDetailPage;
