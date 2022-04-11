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
    console.log(card);

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
    <div className="card-container">
      <UserCard key={id} userName={userName} />
      <div>{cardsData}</div>
    </div>
  );
};

export default ReportList;
