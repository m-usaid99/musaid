import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

function JuliaFractalSketch() {
  const sketchRef = useRef();
  const p5InstanceRef = useRef(null);
  const zoomRef = useRef(0.75);

  // Set your minimum and maximum zoom values
  const minZoom = 0.0175;  // Minimum zoom level (farthest zoom out)
  const maxZoom = 0.75;  // Maximum zoom level (closest zoom in)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      zoomRef.current = Math.max(minZoom, Math.min(maxZoom, 1.0 - scrollY * 0.001));
      p5InstanceRef.current.redraw();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const sketch = new p5(p => {
      let juliaShader;
      let juliaC;

      p.preload = () => {
        juliaShader = p.loadShader('/shaders/vertexShader.vert', '/shaders/juliaShader.frag');
      };

      p.setup = () => {
        p.createCanvas(sketchRef.current.clientWidth, sketchRef.current.clientHeight, p.WEBGL).parent(sketchRef.current);
        juliaC = p.createVector(-0.70176, -0.3842);
        p.noLoop();
      };

      p.draw = () => {
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
        if (event.delta > 0) {
          zoomRef.current = Math.max(minZoom, zoomRef.current / 1.25);
        } else {
          zoomRef.current = Math.min(maxZoom, zoomRef.current * 1.25);
        }

        p.redraw();
      };

      p.windowResized = () => {
        p.resizeCanvas(sketchRef.current.clientWidth, sketchRef.current.clientHeight);
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

