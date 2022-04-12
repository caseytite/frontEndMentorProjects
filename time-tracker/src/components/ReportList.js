import UserCard from "./UserCard";
import TimeCard from "./TimeCard";
import { useState } from "react";
import "../styles/ReportList.css";
const ReportList = (props) => {
  const [view, setView] = useState("days");
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
    return <TimeCard key={index} view={view} {...card} />;
  });

  return (
    <div className="cards-container">
      <UserCard
        className="user-card"
        key={id}
        userName={userName}
        avatar={avatar}
        setView={setView}
        view={view}
      />
      <div className="time-cards">{cardsData}</div>
    </div>
  );
};

export default ReportList;
