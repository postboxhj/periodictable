import useElement from "../utils/useElement";
import ElementCard from "./ElementCard";
import Shimmer from "./Shimmer";

const ElementsList = () => {
  const elementsList = useElement();

  if (elementsList.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="flex m-6 p-6 flex-wrap">
      {" "}
      {elementsList.map((element) => (
        <ElementCard key={element.atomicNumber} data={element} />
      ))}{" "}
    </div>
  );
};

export default ElementsList;
