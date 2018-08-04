import React, { Component } from "react";
import Watch from "./components/Watch";
import Menu from "./components/Menu";
import CopyRight from "./components/CopyRight";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { Avatar } from "antd";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="header">
            <img className="logo" src="./logo.png" alt="logo" />
            <p className="avatar-name">Ehsan Jso</p>
            <Avatar
              className="avatar"
              src="https://lh3.googleusercontent.com/-H7Ikcbwm_Po/AAAAAAAAAAI/AAAAAAAAAB0/v6Za5_NUHV8/photo.jpg"
            />
          </div>
          <Watch />
          <Menu />
          <CopyRight name="jso" />
        </div>
      </Provider>
    );
  }
}

export default App;
