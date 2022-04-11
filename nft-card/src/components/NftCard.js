import { useState } from "react";
import "../styles/NftCard.css";

const NftCard = (props) => {
  const {
    mainImage,
    hover,
    description,
    header,
    price,
    daysRemaining,
    currencyIcon,
    clock,
    urlLink,
    githubLink,
    codedBy,
  } = props;
  const [eye, setEye] = useState(false);
  return (
    <div className="container">
      <img
        onMouseEnter={() => setEye(!eye)}
        className="nft-image"
        src={mainImage}
        alt="nft"
      />

      {eye && (
        <img
          onMouseLeave={() => setEye(!eye)}
          className="eye"
          src={hover}
          alt="eye"
        />
      )}

      <h2 className="header">{header}</h2>
      <p>{description}</p>
      <div className="row">
        <div className="eth-container">
          <img className="eth-image" src={currencyIcon} alt="ethereum" />
          <h4 className="eth">{price}</h4>
        </div>
        <div className="days-left">
          <img className="clock" src={clock} alt="clock" />
          <h4>{daysRemaining} days left</h4>
        </div>
      </div>
      <hr />

      <div className="attribution">
        Challenge by <a href={urlLink}>Frontend Mentor</a>. Coded by{" "}
        <a href={githubLink}>{codedBy}</a>.
      </div>
    </div>
  );
};

export default NftCard;
