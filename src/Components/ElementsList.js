import useElement from "../utils/useElement";
import ElementCard from "./ElementCard";
import { useState } from "react";

const ElementsList = () => {
  const elementsList = useElement();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
 
  if (elementsList.length === 0) {
    return <h1>Loading...</h1>;
  }

  const handleSearch = () => {
    const filterSearch = elementsList.filter((elem) =>
      elem.name.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
    setSearchResults(filterSearch);
  };
  return (
    <div className="p-10">
      <div className="flex justify-center">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="shadow-lg bg-gray-200 font-semibold rounded-lg p-2"
          type="text"
          placeholder="Search Element"
        />
        <button
          onClick={handleSearch}
          className="p-2 font-semibold mx-4 rounded-lg bg-blue-500"
          type="button"
        >
          Search
        </button>
        
      </div>
      <div className="flex m-auto p-10 flex-wrap">
        {searchResults.length > 0
          ? searchResults.map((element) => (
              <ElementCard key={element.atomicNumber} data={element} />
            ))
          : elementsList.map((element) => (
              <ElementCard key={element.atomicNumber} data={element} />
            ))}
      </div>
    </div>
  );
};

export default ElementsList;
