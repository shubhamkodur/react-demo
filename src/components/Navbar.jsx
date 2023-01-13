import { Component, React } from "react";
export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Cart{" "}
            <span className="badge badge-pill badge-secondary ">
              {this.props.itemCount}
            </span>
          </a>
        </nav>
      </div>
    );
  }
}
