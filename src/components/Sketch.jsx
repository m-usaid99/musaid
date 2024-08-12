import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

function Sketch({ setup, draw }) {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = new p5(p => {
      let canvas;

      p.setup = () => {
        canvas = p.createCanvas(sketchRef.current.clientWidth, sketchRef.current.clientHeight);
        canvas.parent(sketchRef.current);
        if (setup) setup(p);  // Call the passed setup function
      };

      p.draw = () => {
        if (draw) draw(p);  // Call the passed draw function
      };

      p.windowResized = () => {
        p.resizeCanvas(sketchRef.current.clientWidth, sketchRef.current.clientHeight);
        if (setup) setup(p);  // Re-run setup or specific recalculation logic
      };
    });

    return () => {
      sketch.remove();
    };
  }, [setup, draw]);

  return <div ref={sketchRef} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}></div>;
}

export default Sketch;

