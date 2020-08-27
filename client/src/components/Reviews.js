import React from "react";
import StarRating from "./StarRating";

const Reviews = () => {
  return (
    <div className="row row-cols-3 mb-2">
      <div
        className="card text-white bg-primary mb-3 mr-4"
        style={{ maxWidth: "30%" }}
      >
        <div className="card-header d-flex justify-content-between">
          <span>Josh</span>
          <span>
            <StarRating rating={3} />
          </span>
        </div>
        <div className="class-body">
          <p className="card-text m-4">This restaurant was good?</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
