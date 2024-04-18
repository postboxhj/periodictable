import useElement from "../utils/useElement";
import ElementCard from "./ElementCard";
import { useState } from "react";

const ElementsList = () => {
  const elementsList = useElement();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [groupBlockSort, setGroupBlockSort] = useState("");


  if (elementsList.length === 0) {
    return <h1>Loading...</h1>;
  }

  const handleSearch = () => {
    const filterSearch = elementsList.filter((elem) =>
      elem.name.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
    setSearchResults(filterSearch);
  };
  const handleGroupBlockSort = (event) => {
    setGroupBlockSort(event.target.value);
  };
  const sortElements = () => {
    if (groupBlockSort !== "") {
      return elementsList.filter((elem) => elem.groupBlock === groupBlockSort);
    } else {
      return elementsList;
    }
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
        <div>
          <select
            value={groupBlockSort}
            onChange={handleGroupBlockSort}
            className="shadow-lg bg-blue-200 font-semibold rounded-lg p-2"
          >
           <option value="" selected>All</option>
            <option value="metal">Metal</option>
            <option value="nonmetal">NonMetal</option>
            <option value="alkali metal">Alkali Metal</option>
            <option value="metalloid">Metalloid</option>
            <option value="actinoid">Actinoid</option>
            <option value="halogen">Halogen</option>
            <option value="noble gas">Noble Gas</option>
            <option value="transition metal">Transition Metal</option>
            <option value="post-transition metal">Post-transition metal</option>
          </select>
        </div>
      </div>

      <div className="flex m-auto p-10 flex-wrap">
        {searchResults.length > 0
          ? searchResults.map((element) => (
              <ElementCard key={element.atomicNumber} data={element} />
            ))
          : sortElements().map((element) => (
              <ElementCard key={element.atomicNumber} data={element} />
            ))}
      </div>
    </div>
  );
};

export default ElementsList;
