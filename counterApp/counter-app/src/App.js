import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counters from "./components/counters";
import Navbar from "./components/navbar";
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 5 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  handleIncreament = id => {
    let counters = this.state.counters.map(c => {
      if (c.id == id) {
        c.value++;
      }
      return c;
    });
    this.setState({ counters });
  };
  handleDecrement = id => {
    let counters = this.state.counters.map(c => {
      if (c.id == id && c.value != 0) {
        c.value--;
      }
      return c;
    });
    this.setState({ counters });
  };
  handleDelete = id => {
    //console.log("Hello" + id);
    /*let count = new Array();
    for (let value of this.props.counters) {
      if (value.id != id) {
        count.push(value);
      }
    }*/
    let counter = this.state.counters.filter(c => c.id !== id);

    this.setState({ counters: counter });
  };

  handleReset = () => {
    let count = [];
    for (let value of this.state.counters) {
      value.value = 0;
      count.push(value);
    }
    this.setState({ counters: count });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCount={this.state.counters.filter(c => c.value !== 0).length}
        />
        <main className="container-fluid">
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncreament}
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
          />
        </main>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </React.Fragment>
    );
  }
}

export default App;
