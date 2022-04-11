import "../styles/UserCard.css";
const UserCard = (props) => {
  const { userName } = props;
  return (
    <div>
      <div>Report for</div>
      <h1>{userName}</h1>
      <ul>
        <li>Daily</li>
        <li>Weekly</li>
        <li>Monthly</li>
      </ul>
    </div>
  );
};

export default UserCard;
