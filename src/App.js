import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { store } from "./store";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import { Component } from "react";
import { loadUser } from "./actions/Auth";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <>
        <Provider store={store}>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/rooms" exact component={Rooms}></Route>
            <Route path="/rooms/:slug" exact component={SingleRoom}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/signup" exact component={Signup}></Route>
            <Route component={Error}></Route>
          </Switch>
        </Provider>
      </>
    );
  }
}
export default App;
