import React, { useEffect, useContext } from "react";
import axios from "../APIs/RestaurantAPI";

import { RestaurantContext } from "../context/RestaurantsContext";

const RestaurantList = (props) => {
  const { restaurants, setRestaurants } = useContext(RestaurantContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("/restaurants");
        setRestaurants(result.data.data.restaurant);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="list-group">
      <table className="table table-dark table-hover">
        <thead>
          <tr className="bg-primary">
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Ratings</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants &&
            restaurants.map((restaurant) => {
              return (
                <tr key={restaurant.id}>
                  <td>{restaurant.name}</td>
                  <td>{restaurant.location}</td>
                  <td>{"$".repeat(restaurant.price_range)}</td>
                  <td>Reviews</td>
                  <td>
                    <button className="btn btn-warning">Update</button>
                  </td>
                  <td>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantList;
