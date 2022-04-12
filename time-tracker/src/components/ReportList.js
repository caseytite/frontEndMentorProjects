import UserCard from "./UserCard";
import TimeCard from "./TimeCard";
import { useState, useContext } from "react";
import CardContext from "../context/cardContext";
import "../styles/ReportList.css";
const ReportList = (props) => {
  const [days, showDays] = useState(true);
  const [weeks, showWeeks] = useState(false);
  const [months, showMonths] = useState(false);
  const context = useContext(CardContext);
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
        type={card.type}
        image={card.image}
        currentDay={card.currentDay}
        prevDay={card.prevDay}
        currentWeekHrs={card.currentWeekHrs}
        prevWeekHrs={card.prevWeekHrs}
        currentMonthHrs={card.currentMonthHrs}
        prevMonthHrs={card.prevMonthHrs}
        days={days}
        weeks={weeks}
        months={months}
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
