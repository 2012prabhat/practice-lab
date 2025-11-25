import React from "react";

function Header({ children }) {
  return (
    <>
      <div className="bg-red-300">This is Header</div>
      {children}
      <div className="bg-red-300">This is Footer</div>
    </>
  );
}

export default Header;
