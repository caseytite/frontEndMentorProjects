import "../styles/UserCard.css";
import { useState } from "react";
import classNames from "classnames";
const UserCard = (props) => {
  const {
    userName,
    avatar,
    showDays,
    showWeeks,
    showMonths,
    days,
    weeks,
    months,
  } = props;
  const selectedClass = classNames("unselected", {
    "selected-day": days,
    "selected-day": weeks,
    "selected-day": months,
  });
  const [selected, setSelected] = useState(days);
  console.log(selected);

  const handleDays = () => {
    setSelected(days);
    showDays(true);
    showWeeks(false);
    showMonths(false);
  };
  const handleWeeks = () => {
    setSelected(weeks);
    showWeeks(true);
    showDays(false);
    showMonths(false);
  };
  const handleMonths = () => {
    setSelected(months);
    showMonths(true);
    showDays(false);
    showWeeks(false);
  };

  return (
    <div className="user-card">
      <div className="column">
        <div className="user">
          <img src={avatar} alt="user avatar" className="avatar" />
          <div className="report-header">
            <div className="report">Report for</div>
            <h1>{userName}</h1>
          </div>
        </div>
        <div className="selection">
          <ul>
            <li
              className={selected === days ? selectedClass : undefined}
              onClick={() => handleDays()}
            >
              Daily
            </li>
            <li
              className={selected === weeks ? selectedClass : undefined}
              onClick={() => handleWeeks()}
            >
              Weekly
            </li>
            <li
              className={selected === months ? selectedClass : undefined}
              onClick={() => handleMonths()}
            >
              Monthly
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
