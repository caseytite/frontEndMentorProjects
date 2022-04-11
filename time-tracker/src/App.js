import "./App.css";
import { data } from "./data/data.js";
import ReportList from "./components/ReportList";

function App() {
  const cardsList = data.map((user) => {
    const {
      work,
      play,
      study,
      exercise,
      social,
      selfcare,
      userName,
      id,
      type,
      image,
    } = user;
    return (
      <ReportList
        className="report"
        key={id}
        type={type}
        image={image}
        userName={userName}
        work={work}
        play={play}
        study={study}
        exercise={exercise}
        social={social}
        selfcare={selfcare}
      />
    );
  });
  return <div className="App">{cardsList}</div>;
}

export default App;
