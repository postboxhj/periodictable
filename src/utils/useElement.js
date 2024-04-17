import { useState, useEffect } from "react";
const useElement = () => {
  const [elementsList, setElementsList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const url = "https://periodictable.p.rapidapi.com/";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9a21a3a77emshcea8431f821077fp13f2a6jsne0fbae7b2efa",
      "X-RapidAPI-Host": "periodictable.p.rapidapi.com",
    },
  };
  const fetchData = async () => {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(response.message);
      }
      const data = await response.json();
      console.log(data);
      setElementsList(data);
    } catch (error) {
      console.error(error);
    }
  };
  return elementsList;
};
export default useElement;
