import React from "react";

async function page() {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  const user = await fetch(url);
  const response = await user.json();
  console.log(response);

  return <div>page {response && JSON.stringify(response)} </div>;
}

export default page;
