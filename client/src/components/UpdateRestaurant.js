import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "../APIs/RestaurantAPI";

const UpdateRestaurant = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(1);
  let history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(`/restaurants/${id}`);
        const { name, location, price_range } = response.data.data.restaurant;
        setName(name);
        setLocation(location);
        setPrice(price_range);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/restaurants/${id}`, {
        name,
        location,
        price,
      });
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            className="form-control"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            id="location"
            className="form-control"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price Range</label>
          <input
            id="price"
            className="form-control"
            type="number"
            min="1"
            max="5"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Update</button>
      </form>
    </div>
  );
};

export default UpdateRestaurant;
