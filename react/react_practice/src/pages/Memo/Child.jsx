import React from "react";
const Child = React.memo(function Child({ value }) {
  console.log("Rendered Child");
  return <h2>{value}</h2>;
});
export default Child;