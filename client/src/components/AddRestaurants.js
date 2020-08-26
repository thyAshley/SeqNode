import React, { useState, useContext } from "react";
import axios from "../APIs/RestaurantAPI";
import { RestaurantContext } from "../context/RestaurantsContext";

const AddRestaurants = () => {
  const { addRestaurants } = useContext(RestaurantContext);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(1);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/restaurants", {
        name,
        location,
        price,
      });
      addRestaurants(response.data.data.restaurant);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(price);
  return (
    <div className="mb-4">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="location"
              onChange={(e) => setLocation(e.target.value)}
              value={location}
            />
          </div>
          <div className="col">
            <select
              className="custom-select my-1 mr-sm-2"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            >
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurants;
