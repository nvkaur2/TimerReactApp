//import classes from "./Clock.css";
import React, { Component, Fragment } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.interval = null;
    this.state = {
      curTime: new Date(),
      enabledButton: true,
      counter: 0
    };
  }

  resumeTimer = () => {
    this.interval = setInterval(() => {
      this.setState(state => {
        return {
          counter: state.counter + 1,
          curTime: new Date(),
          enabledButton: true
        };
      });
    }, 1000);
  };

  render() {
    return (
      <Fragment>
        <div> Current Time : {this.state.curTime.toLocaleTimeString()}</div>
        <br />
        Your 10 seconds: {this.state.counter}
        <br />
        <br />
        <button onClick={this.resumeTimer} disabled={this.state.enabledButton}>
          Resume time
        </button>
        <button
          onClick={() => {
            clearInterval(this.interval);
            this.setState({ enabledButton: false });
          }}
        >
          Pause
        </button>
      </Fragment>
    );
  }

  componentDidUpdate() {
    if (this.state.counter > 10) {
      clearInterval(this.interval);
      this.setState({
        enabledButton: false,
        counter: 0
      });
    }
  }

  componentDidMount() {
    this.resumeTimer();
  }
}

export default Timer;
