export const hilbertSetup = (p) => {
  p.size = Math.max(p.width, p.height);
  p.order = 7; // Adjust this for different levels of the Hilbert curve
  p.angleMode(p.DEGREES);
  p.noLoop();
  p.pixelDensity(1);
};

export const hilbertDraw = (p) => {
  hilbertCurve(p, p.size / 2, p.size / 2, p.size, p.order, 0);
};

const hilbertCurve = (p, cx, cy, size, order, angle) => {
  p.push();
  p.translate(cx, cy);
  p.rotate(angle);

  if (order > 1) {
    hilbertCurve(p, -size / 4, -size / 4, size / 2, order - 1, 0);
    hilbertCurve(p, size / 4, -size / 4, size / 2, order - 1, 0);
    hilbertCurve(p, -size / 4, size / 4, size / 2, order - 1, 90);
    hilbertCurve(p, size / 4, size / 4, size / 2, order - 1, -90);
  }

  p.stroke(40);

  let n = p.pow(2, order + 1);
  p.line(-size / n, -size / n, size / n, -size / n);
  p.line(-(size / 2 - size / n), -size / n, -(size / 2 - size / n), size / n);
  p.line((size / 2 - size / n), -size / n, (size / 2 - size / n), size / n);

  p.pop();
};

