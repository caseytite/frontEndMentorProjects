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
    days,
    weeks,
    months,
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
      <>
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
          {days && (
            <div className="content">
              <p className="big-text">{currentDay}hrs</p>
              <h5 className="card-ftr">Yesterday - {prevDay}hrs</h5>
            </div>
          )}
          {weeks && (
            <div className="content">
              <p className="big-text">{currentWeekHrs}hrs</p>
              <h5 className="card-ftr">Last week - {prevWeekHrs}hrs</h5>
            </div>
          )}
          {months && (
            <div className="content">
              <p className="big-text">{currentMonthHrs}hrs</p>
              <h5 className="card-ftr">Last month - {prevMonthHrs}hrs</h5>
            </div>
          )}
        </div>
      </>
    </div>
  );
};

export default TimeCard;
