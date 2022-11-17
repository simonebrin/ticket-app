import EventList from "../components/EventList";
import React from 'react';

export default function ViewEvents({ list }) {
  return (
    <div class="flex-row row">
      <EventList list={list} />
    </div>
  );
}
