import React, { useState } from "react";

export default function EventForm({ onSubmit = () => {} }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  function handleSubmit(event) {
    event.preventDefault()
    onSubmit({title, image, date, location})
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1> Create new event </h1>
      <div>
        <label>
          Title:
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>
      </div>
      <div>
        <label>
          Image:
          <input
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </label>
      </div>
      <div>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </label>
      </div>
      <div>
        <label>
          Location:
          <input
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </label>
      </div>
      <button>Add Event</button>
    </form>
  );
}
