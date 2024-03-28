import { Link } from "react-router-dom";
import { useState } from "react";
import ItemCard from "./ItemCard";

const ElementCard = ({ data }) => {
  const { atomicNumber, name, cpkHexColor, symbol } = data;
  const [load, setLoad] = useState(false);

  const cardStyle = {
    backgroundColor: `#${cpkHexColor}`,
  };
  if (!data) {
    return null;
  }
  const handleClick = () => {

    setLoad(true);
  };
  return (
    <>
      <Link to={`/elements/${symbol}`} onClick={handleClick}>
        <div
          className="h-24 w-28 p-1 m-2 rounded shadow-lg transform transition-transform duration-300 hover:scale-110 "
          style={cardStyle}
        >
          <p className="text-gray-700 text-base"> {atomicNumber}</p>
          <p className="font-bold text-center text-xl mb-2">{symbol} </p>
          <p className="text-gray-700 text-center text-base">{name} </p>
        </div>
      </Link>
      {load && <ItemCard details={data} />}
    </>
  );
};
export default ElementCard;
