import "../styles/UserCard.css";
const UserCard = (props) => {
  const { userName } = props;
  return (
    <div className="user-card">
      <div className="user">
        <div>Report for</div>
        <h1>{userName}</h1>
        <ul>
          <li>Daily</li>
          <li>Weekly</li>
          <li>Monthly</li>
        </ul>
      </div>
    </div>
  );
};

export default UserCard;
