import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/rooms" exact component={Rooms}></Route>
          <Route path="/rooms/:slug" exact component={SingleRoom}></Route>
          <Route component={Error}></Route>
        </Switch>
      </Provider>
    </>
  );
}

export default App;
