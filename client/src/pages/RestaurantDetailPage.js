import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RestaurantContext } from "../context/RestaurantsContext";
import axios from "../APIs/RestaurantAPI";
import Reviews from "../components/Reviews";
import AddReview from "../components/AddReview";

const RestaurantDetailPage = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } = useContext(
    RestaurantContext
  );
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/restaurants/${id}`);
      setSelectedRestaurant(response.data.data);
    };
    fetchData();
  }, [id, update]);

  return (
    <div>
      {selectedRestaurant && (
        <React.Fragment>
          <h1 className="text-center display-1">
            {selectedRestaurant.restaurant &&
              selectedRestaurant.restaurant.name}
          </h1>
          <div className="mt-3">
            <Reviews reviews={selectedRestaurant.reviews} />
            <AddReview setUpdate={setUpdate} />
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default RestaurantDetailPage;
