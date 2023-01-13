import { Navbar } from "./components/Navbar";
import React, { Component } from "react";
import { Shopping } from "./components/Shopping";
import "./styles.css";

export class App extends Component {
  state = {
    items: [
      { id: 1, value: 2 },
      { id: 2, value: 1 },
      { id: 3, value: 5 },
      { id: 4, value: 0 }
    ]
  };
  handleIncrement = (item) => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };
    items[index].value++;
    this.setState({ items });
  };
  handleDecrement = (item) => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };
    items[index].value--;
    this.setState({ items });
  };
  deleteItem = (id) => {
    let tempArray = this.state.items.filter((x) => x.id !== id);
    this.setState({ items: tempArray });
  };
  handleAddNew = () => {
    let lastItemId = this.state.items[this.state.items.length - 1].id;
    let item = { id: lastItemId + 1, value: 0 };
    let tempArray = this.state.items;
    tempArray.push(item);
    this.setState({ items: tempArray });
  };
  render() {
    return (
      <>
        <Navbar
          itemCount={this.state.items.filter((x) => x.value !== 0).length}
        />
        <div className="container">
          <Shopping
            items={this.state.items}
            onAddNew={this.handleAddNew}
            onDelete={this.deleteItem}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </div>
      </>
    );
  }
}
