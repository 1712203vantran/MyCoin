import React, { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./storage";
import Header from "../src/component/header";

import CreatePage from "./page/CreatePage";
import WalletPage from "./page/WalletPage";
import TransPage from "./page/Transactions";
import CreateTransPage from "./page/Trans";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />

        <Switch>
          <Route exact path={"/"}>
            <CreatePage />
          </Route>

          <Route exact path={"/wallet"}>
            <WalletPage />
          </Route>

          <Route exact path={"/transactions"}>
            <TransPage />
          </Route>

          <Route exact path={"/create-trans"}>
            <CreateTransPage />
          </Route>

        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
