import React from "react";
import { withRouter } from "react-router";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }: any) => (
  <div
    className={`${size} menu-item`}
    style={{
      backgroundImage: `url(${imageUrl})`,
    }}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
