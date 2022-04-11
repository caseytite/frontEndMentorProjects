import UserCard from "./UserCard";
import TimeCard from "./TimeCard";
import "../styles/ReportList.css";
const ReportList = (props) => {
  const { work, play, study, exercise, social, selfcare, userName, id } = props;
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
      />
    );
  });

  return (
    <div className="cards-container">
      <UserCard key={id} userName={userName} />
      <div className="time-cards">{cardsData}</div>
    </div>
  );
};

export default ReportList;
