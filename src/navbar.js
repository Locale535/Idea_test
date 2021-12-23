import React from "react";
import ReactDOM from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2>Logo</h2>
      <span className="order">
        <h3>Order: </h3>
        <p>923456789</p>
        <p>lokale@gmail.com</p>
      </span>
    </div>
  );
};
// ReactDOM.render(<navbar />, document.getElementById("root"));

export default Navbar;
