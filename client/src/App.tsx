import React, { useContext } from "react";
import { Switch, Link, Route } from "react-router-dom";

import Home from "./pages/Home";
import RestaurantDetailPage from "./pages/RestaurantDetailPage";
import UpdatePage from "./pages/UpdatePage";
import { RestaurantsContextProvider } from "./context/RestaurantsContext";

const App = () => {
  return (
    <RestaurantsContextProvider>
      <div className="container">
        <Switch>
          <Route
            path="/restaurants/:id"
            exact
            component={RestaurantDetailPage}
          />
          <Route path="/restaurants/:id/update" exact component={UpdatePage} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </RestaurantsContextProvider>
  );
};

export default App;
