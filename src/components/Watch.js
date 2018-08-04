import React from "react";
import moment from "moment";
import Menu from "./Menu";
import { connect } from "react-redux";

class Watch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
    this.timer = null;
  }
  onStart = () => {
      this.setState(prevState => ({
      }));
  };
  onPause = () => {
  };

  render() {
    return (
      <div className="watch-container">
        <h1 className="watch">
          {moment()
            .hours(0)
            .minutes(0)
            .seconds(0)
            .milliseconds(this.state.milliSec)
            .format("HH : mm : ss.S")}
        </h1>
        <Menu onStart={this.onStart} onPause={this.onPause} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  timer: state.timer
});

export default connect(mapStateToProps)(Watch);
