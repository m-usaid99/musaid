import React from "react";
import Box from "../Box";
import Sketch from "../Sketch";
import { arcDraw, arcSetup } from "../sketches/arcSketch";


function ExpenseMate() {
  return (
    <Box sketch={<Sketch setup={arcSetup} draw={arcDraw} />}>
      <h1>Expense Mate</h1>
    </Box>
  );
};

export default ExpenseMate;
