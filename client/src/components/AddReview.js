import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../APIs/RestaurantAPI";

const AddReview = ({ setUpdate }) => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(1);
  const [review, setReview] = useState("");
  const { id } = useParams();
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/restaurants/${id}/addReview`, {
        name,
        rating,
        review,
      });
      setUpdate((prev) => !prev);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="mb-2">
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <div className="form-row">
          <div className="form-group col-8">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group col-4">
            <label htmlFor="rating">Rating</label>
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              id="rating"
              className="custom-select"
            >
              <option disabled>Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="Review">Review</label>
          <textarea
            className="form-control"
            id="Review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          ></textarea>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddReview;
