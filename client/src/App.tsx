import React from "react";
import { Switch, Link, Route } from "react-router-dom";
import Home from "./Pages/Home";
import RestaurantDetailPage from "./Pages/RestaurantDetailPage";
import UpdatePage from "./Pages/UpdatePage";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/restaurants/:id" exact component={RestaurantDetailPage} />
        <Route path="/restaurants/:id/update" exact component={UpdatePage} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;
