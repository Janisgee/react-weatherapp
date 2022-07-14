import React from "react";

// Negative because this offset is "back to zero"
const localTimeOffset = new Date().getTimezoneOffset() * -60 * 1000;

export default function FormattedTimeForSun(props) {
  const time = props.time;
  const timeOffset = props.timeOffset;

  // Move the time to match the searched city
  // Subtract our time offset and add theirs.
  const adjustedTime = new Date(time - localTimeOffset + timeOffset);

  let hours = adjustedTime.getHours();

  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = adjustedTime.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <span>
      {" "}
      {hours}:{minutes}
    </span>
  );
}
