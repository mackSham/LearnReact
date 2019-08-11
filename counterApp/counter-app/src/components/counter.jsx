import React, { Component } from "react";

class Counter extends Component {
  state = {
    //count: this.props.value
    /* imageUrl: "https://picsum.photos/20",
    myObject: {
      key1: "value1",
      key2: "value2",
      key3: "value3"
    },
    tags: []*/
  };

  /*handleIncreament = () => {
    this.setState({ count: this.state.count + 1 });
    //console.log(this.state.count);
  };
  handleDecrement = () => {
    if (this.state.count !== 0) {
      this.setState({ count: this.state.count - 1 });
    }

    //console.log(this.state.count);
  };*/
  render() {
    let styles = "badge m-2 badge-";
    styles += this.props.counters.value === 0 ? "warning" : "primary";
    return (
      <div>
        <span style={{ fontSize: 14 }} className={styles}>
          {this.formatCount()}
        </span>

        <button
          onClick={() => {
            this.props.onIncrement(this.props.counters.id);
          }}
          className="btn btn-info m-2"
        >
          Increment
        </button>
        <button
          onClick={() => {
            this.props.onDecrement(this.props.counters.id);
          }}
          className="btn btn-info m-2"
        >
          Decrement
        </button>

        <button
          onClick={() => {
            this.props.onDelete(this.props.counters.id);
          }}
          className="btn btn-info m-2"
        >
          Delete
        </button>
        {/* <ul>
          {Object.keys(this.state.myObject).map((keys, index) => (
            <li key={keys}>{this.state.myObject[keys]}</li>
          ))}
        </ul> */}
      </div>
    );
  }
  formatCount() {
    console.log(this.props.counters.id);
    const count = this.props.counters.value;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
