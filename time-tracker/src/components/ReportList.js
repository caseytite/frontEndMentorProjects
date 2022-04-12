import UserCard from "./UserCard";
import TimeCard from "./TimeCard";
import { useState } from "react";
import "../styles/ReportList.css";
const ReportList = (props) => {
  const [days, showDays] = useState(true);
  const [weeks, showWeeks] = useState(false);
  const [months, showMonths] = useState(false);
  const {
    work,
    play,
    study,
    exercise,
    social,
    selfcare,
    userName,
    id,
    avatar,
  } = props;
  const cards = [
    ...work,
    ...play,
    ...study,
    ...exercise,
    ...social,
    ...selfcare,
  ];

  const cardsData = cards.map((card, index) => {
    return (
      <TimeCard
        key={index}
        days={days}
        weeks={weeks}
        months={months}
        {...card}
      />
    );
  });

  return (
    <div className="cards-container">
      <UserCard
        className="user-card"
        key={id}
        userName={userName}
        avatar={avatar}
        showDays={showDays}
        showWeeks={showWeeks}
        showMonths={showMonths}
      />
      <div className="time-cards">{cardsData}</div>
    </div>
  );
};

export default ReportList;
