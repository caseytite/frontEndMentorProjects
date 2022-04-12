import "../styles/UserCard.css";

import classNames from "classnames";
const UserCard = (props) => {
  const { userName, avatar, setView, view } = props;
  const selectedClass = classNames("", {
    "selected-day": "days",
    "selected-day": "weeks",
    "selected-day": "months",
  });

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
              id={view === "days" ? selectedClass : undefined}
              onClick={() => setView("days")}
            >
              Daily
            </li>
            <li
              id={view === "weeks" ? selectedClass : undefined}
              onClick={() => setView("weeks")}
            >
              Weekly
            </li>
            <li
              id={view === "months" ? selectedClass : undefined}
              onClick={() => setView("months")}
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
