import React from 'react';
import { ReactP5Wrapper } from 'react-p5-wrapper';

const sketch = (p) => {
  let juliaShader;
  let juliaC;
  let zoom = 1.0;

  p.preload = () => {
    try {
      juliaShader = p.loadShader('/shaders/vertexShader.vert', '/shaders/juliaShader.frag');
      if (!juliaShader) {
        console.error("Shader program is undefined.");
      } else {
        console.log("Shader program loaded successfully.");
      }
    } catch (error) {
      console.error("Error loading shader:", error);
    }
  };

  p.setup = () => {
    console.log("Creating canvas with WebGL...");
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);

    if (!juliaShader) {
      console.error("Shader program is not valid:", juliaShader);
    } else {
      juliaC = p.createVector(-0.70176, -0.3842);
      p.noLoop();
    }
  };

  p.draw = () => {
    if (!juliaShader) {
      console.error("Cannot draw because shader is not valid.");
      return;
    }

    p.shader(juliaShader);
    // juliaShader.setUniform('resolution', [p.width, p.height]);
    // juliaShader.setUniform('juliaC', [juliaC.x, juliaC.y]);
    // juliaShader.setUniform('zoom', zoom);

    juliaShader.setUniform('juliaC', [-0.70176, -0.3842]);
    juliaShader.setUniform('resolution', [p.width, p.height]);
    juliaShader.setUniform('zoom', zoom);
    p.quad(
      -p.width / 2, -p.height / 2,
      p.width / 2, -p.height / 2,
      p.width / 2, p.height / 2,
      -p.width / 2, p.height / 2
    );

    console.log("Shader applied and shape drawn.");
  };

  p.mouseWheel = (event) => {
    zoom *= (event.delta > 0) ? 1.1 : 0.9;
    p.redraw();
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    p.redraw();
  };
};

function JuliaFractal() {
  return <ReactP5Wrapper sketch={sketch} />;
}

export default JuliaFractal;

