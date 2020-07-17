import React, { Component } from "react";

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };
  myRef = null;
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerviedStateFromProps");
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdatge", nextProps, nextState);
    return nextState.number % 10 !== 4;
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }
  componentDidMount(prevProps, prevState, snapshot) {
    console.log("componentDidMount", prevProps, prevState);
    if (snapshot) {
      console.log("업데이트 되기 전 색상: ", snapshot);
    }
  }
  render() {
    console.log("render");
    const style = {
      color: this.props.color,
    };

    return (
      <div>
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
