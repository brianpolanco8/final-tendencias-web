import React from "react";
// import "./MenuItem.scss";
import Logo from "../../assets/images/450_1000.jpeg";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={` menu-item`}
    // onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{ backgroundImage: `url(${"../../assets/images/450_1000.jpeg"})` }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
