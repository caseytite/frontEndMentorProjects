import "../styles/TimeCard.css";

const TimeCard = (props) => {
  const {
    currentDay,
    prevDay,
    currentWeekHrs,
    prevWeekHrs,
    currentMonthHrs,
    prevMonthHrs,
    type,
    image,
    view,
  } = props;

  const backgroundImage = `url(${image})`;
  const backgroundColor = `var(--${type.replace(" ", "").toLowerCase()})`;

  return (
    <div
      className="time-card"
      style={{
        backgroundColor,
      }}
    >
      <img
        className="img-div"
        style={{
          backgroundImage,
        }}
      />
      <div className="info-card">
        <div className="header">
          <h4>{type}</h4>
          <img src="./images/icon-ellipsis.svg" alt="three-dots" />
        </div>

        {view === "days" && (
          <div className="view-body">
            <p className="big-text">{currentDay}hrs</p>
            <h5 className="card-ftr">Yesterday - {prevDay}hrs</h5>
          </div>
        )}
        {view === "weeks" && (
          <div className="view-body">
            <p className="big-text">{currentWeekHrs}hrs</p>
            <h5 className="card-ftr">Last week - {prevWeekHrs}hrs</h5>
          </div>
        )}
        {view === "months" && (
          <div className="view-body">
            <p className="big-text">{currentMonthHrs}hrs</p>
            <h5 className="card-ftr">Last month - {prevMonthHrs}hrs</h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimeCard;
