import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

function JuliaFractalSketch({ setup, draw }) {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = new p5(p => {
      let canvas;
      let juliaShader;
      let juliaC;
      let zoom = 0.75;

      p.preload = () => {
        juliaShader = p.loadShader('/shaders/vertexShader.vert', '/shaders/juliaShader.frag');
      };

      p.setup = () => {
        canvas = p.createCanvas(sketchRef.current.clientWidth, sketchRef.current.clientHeight, p.WEBGL);
        canvas.parent(sketchRef.current);
        juliaC = p.createVector(-0.70176, -0.3842);
        p.blendMode(p.BLEND);
        p.noLoop();
      };

      p.draw = () => {
        p.shader(juliaShader);
        juliaShader.setUniform('juliaC', [-0.70176, -0.3842]);
        juliaShader.setUniform('resolution', [p.width, p.height]);
        juliaShader.setUniform('zoom', zoom);

        p.quad(
          -p.width / 2, -p.height / 2,
          p.width / 2, -p.height / 2,
          p.width / 2, p.height / 2,
          -p.width / 2, p.height / 2
        );
      };
      p.mouseWheel = (event) => {
        const zoomFactor = 1.25; // Controls how fast you zoom in/out
        const maxZoomOut = 0.75; // Set this to the largest scale you want to allow (farthest zoom out)

        if (event.delta > 0) {
          // Zoom out, but don't go beyond maxZoomOut
          zoom = Math.min(zoom * zoomFactor, maxZoomOut);
        } else {
          // Zoom in, but ensure zoom doesn't go below 1.0 (original size or closer)
          zoom = Math.max(zoom / zoomFactor, 0.0175);
        }

        p.redraw();
      };



      p.windowResized = () => {
        p.resizeCanvas(sketchRef.current.clientWidth, sketchRef.current.clientHeight);
        p.redraw();
      };

      // Redraw the canvas on transition end
      const handleTransitionEnd = () => {
        p.resizeCanvas(sketchRef.current.clientWidth, sketchRef.current.clientHeight);
        p.redraw();  // Force a redraw
      };

      // Add event listener for transition end
      sketchRef.current.addEventListener('transitionend', handleTransitionEnd);

      return () => {
        sketchRef.current.removeEventListener('transitionend', handleTransitionEnd);
        sketch.remove();
      };
    });

    return () => {
      sketch.remove();
    };
  }, [setup, draw]);

  return <div ref={sketchRef} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}></div>;
}

export default JuliaFractalSketch;

