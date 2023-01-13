import { Component, React } from "react";
export class Counter extends Component {
  styles = {
    fontSize: 14,
    fontWeight: "bold"
  };
  render() {
    return (
      <div className="mt-2">
        <span className="ml-1" style={this.styles}>
          Item {this.props.item.id}
        </span>
        <span style={this.styles} className={this.getBadgeCounter()}>
          {this.props.item.value}
        </span>
        <button
          style={this.styles}
          onClick={() => this.props.handleIncrement(this.props.item)}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <button
          style={this.styles}
          disabled={this.props.item.value === 0}
          onClick={() => this.props.handleDecrement(this.props.item)}
          className="btn btn-secondary btn-sm m-1"
        >
          -
        </button>
        <button
          className="btn btn-danger"
          onClick={() => this.props.deleteCallback(this.props.item.id)}
        >
          Delete
        </button>
      </div>
    );
  }
  // handleIncrement = () => {
  //   this.setState({ count: this.state.count + 1 });
  // };
  // handleDecrement = () => {
  //   this.setState({ count: this.state.count - 1 });
  // };
  getBadgeCounter() {
    let classes = "badge m-2 badge-";
    const count = this.props.item.value;
    classes += count <= 0 ? "warning" : "primary";
    return classes;
  }

  // formatCount() {
  //   const { count } = this.state;
  //   return count === 0 ? "Zero" : count;
  // }
}
