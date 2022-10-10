import React from "react";

const Helmet = (props) => {
  // it let out page sign become Food ordering app - , so when we add props.title, it will add to our title content
  document.title = "Food ordering app - " + props.title;
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
