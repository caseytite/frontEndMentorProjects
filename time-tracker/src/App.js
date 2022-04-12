import { data } from "./data/data.js";
import ReportList from "./components/ReportList";

function App() {
  const cardsList = data.map((user) => {
    return <ReportList key={user.id} avatar={user.userAvatar} {...user} />;
  });
  return <div className="App">{cardsList}</div>;
}

export default App;
