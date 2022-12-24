import React from "react";
import "./StopWatch.css";

class StopWatch extends React.Component {
  constructor() {
    super();
    this.state = {
      min: 0,
      sec: 0,
      ms: 0,
      snapShot: [],
    };
    this.ref = null;
  }

  intial() {
    if (this.ref !== null) return;
    this.ref = setInterval(() => {
      this.setState((state) => {
        let { min, sec, ms } = state;
        ms = ms + 1;
        if (ms === 1000) {
          sec += 1;
          ms = 0;
        }
        if (sec === 60) {
          min += 1;
        }
        return { min, sec, ms };
      });
    }, 1);
  }

  snapShot() {
    const { min, sec, ms } = this.state;
    const snapShot = `${min}:${sec}:${ms}`;
    this.setState((state) => ({
      snapShot: [...this.state.snapShot, snapShot],
    }));
  }

  pause() {
    clearInterval(this.ref);
    this.ref = null;
  }

  render() {
    const { min, sec, ms, snapShot } = this.state;
    return (
      <div className="main-container">
        <header className="header">
          <b>StopWatch</b>
        </header>
        <div className="contaioner">
          <spam>
            {min}:{sec}:{ms}
          </spam>
          <button onClick={() => this.intial()}>Start</button>
          <button onClick={() => this.snapShot()}>SnapShot</button>
          <button onClick={() => this.pause()}>Pause</button>
        </div>
      </div>
    );
  }
}

export default StopWatch;
