import "../styles/UserCard.css";
const UserCard = (props) => {
  const { userName, avatar, showDays, showWeeks, showMonths } = props;

  const handleDays = () => {
    showDays(true);
    showWeeks(false);
    showMonths(false);
  };
  const handleWeeks = () => {
    showWeeks(true);
    showDays(false);
    showMonths(false);
  };
  const handleMonths = () => {
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
            <li onClick={() => handleDays()}>Daily</li>
            <li onClick={() => handleWeeks()}>Weekly</li>
            <li onClick={() => handleMonths()}>Monthly</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
