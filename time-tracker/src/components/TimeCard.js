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
  return (
    <div
      className="time-card"
      style={{
        backgroundColor: `var(--${type.replace(" ", "").toLowerCase()})`,
      }}
    >
      {days && (
        <>
          <img
            className="img-div"
            style={{
              backgroundImage: `url(${image})`,
              backgroundColor: `var(--${type.replace(" ", "").toLowerCase()})`,
            }}
          />
          <div className="info-card">
            <div className="header">
              <h4>{type}</h4>
              <img src="./images/icon-ellipsis.svg" />
            </div>
            <div className="content">
              <p className="big-text">{currentDay}hrs</p>
              <h5 className="card-ftr">Yesterday {prevDay}hrs</h5>
            </div>
          </div>
        </>
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
