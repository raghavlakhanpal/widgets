import React from "react";

const Link = ({ href, className, children }) => {
  const onClick = (event) => {
    //if a user clicks while holding ctrl to open link in new tab
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    window.history.pushState({}, "", href);
    //creating an event which will contain the url
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return (
    <a onClick={onClick} href={href} className={className}>
      {children}
    </a>
  );
};

export default Link;
