import React from "react";
import "./Listitems.css";

function Listitems(props) {
  const items = props.items;
  const listitems = items.map((item) => {
    return (
      <div className="list" key="item.key">
        <p>{item}</p>
      </div>
    );
  });
  return <div>{listitems}</div>;
}
export default Listitems;
