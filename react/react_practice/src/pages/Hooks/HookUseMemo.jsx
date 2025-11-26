import React, { useState, useMemo } from "react";

function HookUseMemo() {
  const [number, setNumber] = useState(1);

  // heavy calculation optimized
  const result = useMemo(() => {
    console.log("useMemo heavy calculation running...");
    for (let i = 0; i < 10000000000; i++) {}
    return number * 2;
  }, [number]);

  return (
    <>
      <div>HookUseMemo</div>

      <button onClick={() => setNumber(number + 1)}>Double Number</button>

      <p>Original Number: {number}</p>
      <p>Result: {result}</p>
    </>
  );
}

export default HookUseMemo;
