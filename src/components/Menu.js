import React from "react";
import { connect } from "react-redux";
import { changeState, setStartTime, setEndTime } from "../actions/timer";
import { addSection } from "../actions/sections";
import { Modal, message, Popconfirm } from "antd";
import { Input } from "antd";
import moment from "moment";
import Export from "./Export";

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      value: ""
    };
  }
  spToggle = () => {
    const time = moment();
    if (this.props.timer.state === "counting") {
      this.props.changeState("pause");
      this.props.setEndTime(time);
      this.showModal();
      this.props.onPause();
    } else if (this.props.timer.state === "pause") {
      this.props.changeState("counting");
      this.props.setStartTime(time);
      this.props.onStart();
    }
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    const section = {
      start: this.props.timer.start,
      end: this.props.timer.end,
      elapsed: moment
        .duration(this.props.timer.end.diff(this.props.timer.start))
        .asMilliseconds(),
      works: this.state.value
    };
    this.props.addSection(section);
    message.success("Section saved successfully :)");
    this.setState({
      value: "",
      visible: false
    });
  };

  handleCancel = e => {
    message.warning("U sure about not saving section??");
    this.setState({
      value: "",
      visible: false
    });
  };

  onChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  confirm = e => {
    message.success("Click on Yes");
  };

  cancel = e => {
    message.error("Click on No");
  };

  render() {
    const { TextArea } = Input;
    return (
      <div className="menu">
        <button className="btn first" onClick={this.spToggle}>
          {this.props.timer.state === "counting" ? "Pause" : "Start"}
        </button>
        <Modal
          title="Summerize your works"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <TextArea
            autosize={{ minRows: 4, maxRows: 6 }}
            value={this.state.value}
            onChange={this.onChange}
          />
        </Modal>
        <Popconfirm
          title="Are you sure ?"
          onConfirm={this.confirm}
          onCancel={this.cancel}
          okText="Yes"
          cancelText="No"
          placement="right"
        >
          <Export />
        </Popconfirm>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  timer: state.timer
});

const mapDispatchToProps = dispatch => ({
  changeState: newState => dispatch(changeState(newState)),
  setStartTime: time => dispatch(setStartTime(time)),
  setEndTime: time => dispatch(setEndTime(time)),
  addSection: section => dispatch(addSection(section))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
