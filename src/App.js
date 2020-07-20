import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import { store } from "./store";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import { Component } from "react";
import { loadUser } from "./actions/Auth";
import "toastr/build/toastr.min.css";
import toastr from "toastr/build/toastr.min";
import { connect } from "react-redux";

toastr.options = {
  closeButton: true,
  debug: false,
  newestOnTop: false,
  progressBar: false,
  preventDuplicates: false,
  positionClass: "toast-top-center",
  onclick: null,
  showDuration: "300",
  hideDuration: "1000",
  timeOut: "5000",
  extendedTimeOut: "1000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut",
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  componentWillReceiveProps(props) {
    if (props.msg) {
      if (props.msg.type === "success") {
        toastr.success(props.msg.text);
      } else if (props.msg.type === "success") {
        toastr.warning(props.msg.text);
      } else {
        toastr.info(props.msg.text);
      }
    }
  }

  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/rooms" exact component={Rooms}></Route>
          <Route path="/rooms/:slug" exact component={SingleRoom}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/register" exact component={Signup}></Route>
          <Route component={Error}></Route>
        </Switch>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  msg: state.message.message,
});

export default connect(mapStateToProps)(App);
