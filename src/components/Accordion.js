import React, { useState } from "react";

const Accordion = ({ items }) => {
  //UseState declaration
  const [activeIndex, setActiveIndex] = useState(null);
  //Handler fuction to obtain the index of clicked title
  const onTitleClick = (index) => {
    setActiveIndex(index);
  };
  //creating a list of items to display in Accordion
  const renderedItems = items.map((item, index) => {
    //logic to set the clicked item as active
    const active = index === activeIndex ? "active" : "";
    //redered list
    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${active}`}
          onClick={() => {
            onTitleClick(index);
          }}
        >
          <i className="dropdown icon" />
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p className="p">{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};
export default Accordion;
