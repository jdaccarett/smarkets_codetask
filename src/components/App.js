import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Eventlist from "./Eventlist";
import EventSelected from "./EventSelected";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Eventlist} />
          <Route path="/events" component={EventSelected} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
