import React, { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./storage";
import Header from "../src/component/header";

import CreatePage from "./page/CreatePage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />

        <Route path={"/"}>
          <CreatePage />
        </Route>
      </Router>
    </Provider>
  );
}

export default App;
