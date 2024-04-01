import useElement from "../utils/useElement";
import ElementCard from "./ElementCard";

const ElementsList = () => {
  const elementsList = useElement();

  if (elementsList.length === 0) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="p-10 flex flex-wrap justify-center mx-auto sm:px-6 lg:px-8">
      {elementsList.map((element) => (
        <ElementCard key={element.atomicNumber} data={element} />
      ))}
    </div>
  );
};

export default ElementsList;
