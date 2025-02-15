import { useEffect, useState } from "react";

const FunctionDisplay = () => {
  useEffect(() => {
    console.log("Display se montó al DOM");
  }, []);

  useEffect(
    () => () => {
      console.log("Display se desmontará del DOM");
    },
    []
  );

  return (
    <div style={{ backgroundColor: "goldenrod" }}>
      <h2>Function Display</h2>
    </div>
  );
};

export default FunctionDisplay;
