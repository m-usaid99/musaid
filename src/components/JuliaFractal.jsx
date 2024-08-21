import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

function JuliaFractalSketch({ contentRef }) {
  const sketchRef = useRef();
  const p5InstanceRef = useRef(null);
  const zoomRef = useRef(0.6);
  const targetZoomRef = useRef(0.6);

  const minZoom = 0.015;  // Minimum zoom level (farthest zoom out)
  const maxZoom = 0.6;  // Maximum zoom level (closest zoom in)

  useEffect(() => {
    const sketch = new p5(p => {
      let juliaShader;
      let juliaC;
      let startDistance = 0;

      p.preload = () => {
        juliaShader = p.loadShader('/shaders/vertexShader.vert', '/shaders/juliaShader.frag');
      };

      p.setup = () => {
        const isMobile = p.windowWidth < 768;
        const initialZoom = isMobile ? 1.0 : 0.6;
        p.pixelDensity(1);
        p.createCanvas(sketchRef.current.clientWidth, sketchRef.current.clientHeight, p.WEBGL).parent(sketchRef.current);
        juliaC = p.createVector(-0.70176, -0.3842);
        zoomRef.current = initialZoom;
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

      // Handle mouse scroll for desktop
      p.mouseWheel = (event) => {
        const scrollThreshold = 0.1;
        if (Math.abs(event.delta) > scrollThreshold) {
          if (event.delta > 0) {
            targetZoomRef.current = Math.max(minZoom, targetZoomRef.current / 1.25);
          } else {
            targetZoomRef.current = Math.min(maxZoom, targetZoomRef.current * 1.25);
          }
          p.redraw();
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

      return () => {
        p5InstanceRef.current.remove(); // Clean up the p5 instance
      };
    }, sketchRef.current);
  }, []);

  useEffect(() => {
    const handleTouchStart = (event) => {
      if (event.touches.length === 2) {
        const dx = event.touches[0].pageX - event.touches[1].pageX;
        const dy = event.touches[0].pageY - event.touches[1].pageY;
        contentRef.current.startDistance = Math.sqrt(dx * dx + dy * dy);
      }
    };

    const handleTouchMove = (event) => {
      if (event.touches.length === 2) {
        const dx = event.touches[0].pageX - event.touches[1].pageX;
        const dy = event.touches[0].pageY - event.touches[1].pageY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const zoomFactor = distance / contentRef.current.startDistance;

        targetZoomRef.current = p5InstanceRef.current.constrain(zoomFactor, minZoom, maxZoom);
        p5InstanceRef.current.redraw();
      }
    };

    if (contentRef && contentRef.current) {
      contentRef.current.addEventListener('touchstart', handleTouchStart, { passive: true });
      contentRef.current.addEventListener('touchmove', handleTouchMove, { passive: true });
    }

    return () => {
      if (contentRef && contentRef.current) {
        contentRef.current.removeEventListener('touchstart', handleTouchStart);
        contentRef.current.removeEventListener('touchmove', handleTouchMove);
      }
    };
  }, [contentRef]);

  return <div ref={sketchRef} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}></div>;
}

export default JuliaFractalSketch;

