import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

function JuliaFractalSketch() {
  const sketchRef = useRef();
  const p5InstanceRef = useRef(null);
  const zoomRef = useRef(1.0);
  const targetZoomRef = useRef(1.0);

  const minZoom = 0.015;  // Minimum zoom level (farthest zoom out)
  const maxZoom = 1.0;  // Maximum zoom level (closest zoom in)

  useEffect(() => {
    const sketch = new p5(p => {
      let juliaShader;
      let juliaC;

      p.preload = () => {
        juliaShader = p.loadShader('/shaders/vertexShader.vert', '/shaders/juliaShader.frag');
      };

      p.setup = () => {
        p.pixelDensity(1);
        p.createCanvas(sketchRef.current.clientWidth, sketchRef.current.clientHeight, p.WEBGL).parent(sketchRef.current);
        juliaC = p.createVector(-0.70176, -0.3842);
        zoomRef.current = 1.0; // Explicitly set initial zoom level
        targetZoomRef.current = zoomRef.current;
        p.noLoop();
      };

      p.draw = () => {
        zoomRef.current += (targetZoomRef.current - zoomRef.current) * 0.1;
        p.shader(juliaShader);
        juliaShader.setUniform('juliaC', [-0.70176, -0.3842]);
        juliaShader.setUniform('resolution', [p.width, p.height]);
        juliaShader.setUniform('zoom', zoomRef.current);

        p.quad(
          -p.width / 2, -p.height / 2,
          p.width / 2, -p.height / 2,
          p.width / 2, p.height / 2,
          -p.width / 2, p.height / 2
        );
      };

      p.mouseWheel = (event) => {
        const scrollThreshold = 0.1; // Threshold to avoid small, unintended scrolls
        if (Math.abs(event.delta) > scrollThreshold) {
          if (event.delta > 0) {
            targetZoomRef.current = Math.max(minZoom, targetZoomRef.current / 1.05);
          } else {
            targetZoomRef.current = Math.min(maxZoom, targetZoomRef.current * 1.05);
          }
          p.redraw(); // Trigger redraw to reflect zoom change
        }
      };

      p.windowResized = () => {
        const pixelDensity = p.pixelDensity();
        const width = sketchRef.current.clientWidth * pixelDensity;
        const height = sketchRef.current.clientHeight * pixelDensity;
        p.resizeCanvas(width, height);
        p.redraw();
      };

      p5InstanceRef.current = p;
    }, sketchRef.current);

    return () => {
      p5InstanceRef.current.remove();
    };
  }, []);

  return <div ref={sketchRef} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}></div>;
}

export default JuliaFractalSketch;

