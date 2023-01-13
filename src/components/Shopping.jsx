import { Component, React } from "react";
import { Counter } from "./Counter";
export class Shopping extends Component {
  render() {
    return (
      <div>
        {this.props.items.map((item) => (
          <Counter
            key={item.id}
            item={item}
            deleteCallback={this.props.onDelete}
            handleIncrement={this.props.onIncrement}
            handleDecrement={this.props.onDecrement}
          ></Counter>
        ))}
        <button
          onClick={() => this.props.onAddNew()}
          className="btn btn-primary m-1"
        >
          Add Item
        </button>
      </div>
    );
  }
}
