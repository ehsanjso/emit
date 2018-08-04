import React from "react";
import moment from "moment";
import { connect } from "react-redux";

class Watch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      milliSec: 0
    };
    this.timer = null;
  }
  onStart = () => {
    this.timer = setTimeout(() => {
      this.setState(prevState => ({
        milliSec: prevState.milliSec + 10
      }));
    }, 10);
  };
  onPause = () => {
    clearTimeout(this.timer);
  };

  render() {
    this.props.state === "counting" ? this.onStart() : this.onPause();
    return (
      <h1 className="watch">
        {moment()
          .hours(0)
          .minutes(0)
          .seconds(0)
          .milliseconds(this.state.milliSec)
          .format("HH : mm : ss.SS")}
      </h1>
    );
  }
}

const mapStateToProps = state => ({
  state: state.timer.state
});

export default connect(mapStateToProps)(Watch);
