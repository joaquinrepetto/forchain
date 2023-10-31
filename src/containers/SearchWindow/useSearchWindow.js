import { useState } from "react";

import { events } from "../../utils/data/upcoming/events";

const useSearchWindow = () => {
  const dataBase = events;
  const categoriesBase = [
    "Educación",
    "Networking",
    "DAOS",
    "Ethereum",
    "Conferencias",
  ];

  const [data, setData] = useState([]);
  const [categories, setCategories] = useState(categoriesBase);
  const [popularSearches, setPopularSearches] = useState(events);

  const resetCategories = () => {
    setCategories(categoriesBase);
  };

  const resetPopularSearches = () => {
    setPopularSearches(events);
  };

  return {
    data,
    setData,
    categories,
    setCategories,
    popularSearches,
    setPopularSearches,
    resetCategories,
    resetPopularSearches,
  };
};

export default useSearchWindow;
