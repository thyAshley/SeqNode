import React, { useState, createContext } from "react";
// import { Restaurant, IState } from "../Interface";

export const RestaurantContext = createContext([]);

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);

  const addRestaurants = (restaurant) => {
    setRestaurants([...restaurants, restaurant]);
  };
  return (
    <RestaurantContext.Provider
      value={{ restaurants, setRestaurants, addRestaurants }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
