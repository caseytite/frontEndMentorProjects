import "./App.css";
import NftCard from "./components/NftCard";
import { nfts } from "./data/Nfts.js";

function App() {
  const nftCards = nfts.map((card) => <NftCard key={card.id} {...card} />);

  return <div className="App">{nftCards}</div>;
}

export default App;
