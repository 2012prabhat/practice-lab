import React, { useState, useEffect } from "react";

export default function ThrottleEffect() {
  const [scrollY, setScrollY] = useState(0);
  const [throttledScrollY, setThrottledScrollY] = useState(0);
  const [canUpdate, setCanUpdate] = useState(true); // throttling flag

  // Track scroll normally
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Throttle updates using useEffect ONLY
  useEffect(() => {
    if (!canUpdate) return;

    // allow update
    setThrottledScrollY(scrollY);
    setCanUpdate(false);

    // unblock after delay
    const timer = setTimeout(() => {
      setCanUpdate(true);
    }, 500); // throttle delay

    return () => clearTimeout(timer);
  }, [scrollY, canUpdate]);

  return (
    <div style={{ height: "2000px", padding: "20px" }}>
      <h2>Throttle with useEffect only</h2>
      <p>Actual ScrollY: {scrollY}</p>
      <p>Throttled ScrollY (updates every 500ms): {throttledScrollY}</p>
    </div>
  );
}
