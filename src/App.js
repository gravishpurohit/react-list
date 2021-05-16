import React, { Component } from "react";
import Listitems from "./component/Listitems";
import "./App.css";

Array.prototype.remove = function () {
  var what,
    a = arguments,
    L = a.length,
    ax;
  while (L && this.length) {
    what = a[--L];
    while ((ax = this.indexOf(what)) !== -1) {
      this.splice(ax, 1);
    }
  }
  return this;
};

var listObjects = [];

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      currentItem: {
        text: "",
      },
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  handleInput(event) {
    this.setState({
      currentItem: {
        text: event.target.value,
      },
    });
  }
  addItem(event) {
    event.preventDefault();
    const newItem = this.state.currentItem;
    if (listObjects.includes(newItem.text)) {
      listObjects.remove(newItem.text);
    }
    listObjects.unshift(newItem.text);
    console.log(listObjects);
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
        },
      });
    }
  }
  render() {
    return (
      <div>
        <div className="fan">
          <h1>List Of Items</h1>
        </div>
        <div className="app">
          <form id="list" onSubmit={this.addItem}>
            <input
              type="text"
              placeholder="Enter Text"
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            />
            <button type="submit">click</button>
          </form>
          <Listitems items={listObjects}></Listitems>
        </div>
      </div>
    );
  }
}

export default App;
