import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RestaurantContext } from "../context/RestaurantsContext";
import axios from "../APIs/RestaurantAPI";
import StarRating from "../components/StarRating";

const RestaurantDetailPage = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } = useContext(
    RestaurantContext
  );

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/restaurants/${id}`);
      setSelectedRestaurant(response.data.data.restaurant);
    };
    fetchData();
  }, []);

  return <div>{selectedRestaurant && <StarRating rating={3} />}</div>;
};

export default RestaurantDetailPage;
