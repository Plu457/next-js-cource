import { useRouter } from 'next/router';

import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events.search';

import { getAllEvents } from '../../dummy-data';

function AllEventPage() {
  const router = useRouter();
  const events = getAllEvents();

  const fundEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}/abc`;

    router.push(fullPath);
  };

  return (
    <>
      <EventsSearch onSearch={fundEventsHandler} />
      <EventList items={events} />
    </>
  );
}

export default AllEventPage;
