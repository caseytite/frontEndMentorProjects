import { useState } from "react";
import "../styles/TimeCard.css";

const TimeCard = (props) => {
  const [days, showDays] = useState(true);
  const [weeks, showWeeks] = useState(false);
  const [months, showMonths] = useState(false);
  const {
    currentDay,
    prevDay,
    currentWeekHrs,
    prevWeekHrs,
    currentMonthHrs,
    prevMonthHrs,
    type,
    image,
  } = props;
  console.log(image);
  return (
    <div className="time-card">
      {days && (
        <div className="info-card">
          <h1>{type}</h1>
          <img src="./images/icon-ellipsis.svg" />
          <h1>{currentDay}hrs</h1>
          <h1>Yesterday {prevDay}hrs</h1>
          <img src={image} />
        </div>
      )}
      {weeks && (
        <div className="info-card">
          <h1>{type}</h1>
          <h1>{currentWeekHrs}</h1>
          <h1>{prevWeekHrs}hrs</h1>
        </div>
      )}
      {months && (
        <div className="info-card">
          <h1>{type}</h1>
          <h1>{currentMonthHrs}</h1>
          <h1>{prevMonthHrs}</h1>
        </div>
      )}
    </div>
  );
};

export default TimeCard;
