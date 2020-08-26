import React, { useState, createContext } from "react";
// import { Restaurant, IState } from "../Interface";

export const RestaurantContext = createContext([]);

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurant, setRestaurants] = useState([]);
  return (
    <RestaurantContext.Provider value={{ restaurant, setRestaurants }}>
      {children}
    </RestaurantContext.Provider>
  );
};
