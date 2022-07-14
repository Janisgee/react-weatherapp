import React from "react";
// Negative because this offset is "back to zero"
const localTimeOffset = new Date().getTimezoneOffset() * -60 * 1000;
export default function FormattedDate(props) {
  const date = props.date;
  console.log(props);
  const timeOffset = props.timeOffset;
  // Move the time to match the searched city
  // Subtract our time offset and add theirs.
  const adjustedTime = new Date(date - localTimeOffset + timeOffset);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  console.log(adjustedTime);
  const day = days[date.getDay()];
  let hours = adjustedTime.getHours();
  let ampm = hours < 12 ? "am" : "pm";
  if (hours > 12) {
    hours = `${hours - 12}`;
  }

  let minutes = adjustedTime.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div>
      {day} {hours}:{minutes} {ampm} ({props.searchCity} Time)
    </div>
  );
}
