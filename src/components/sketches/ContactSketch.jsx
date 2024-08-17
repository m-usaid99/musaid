import p5 from "p5";

class Polygon {
  constructor(p,) {
    this.p = p;
    this.pos = p.createVector(p.random(p.width), p.random(p.height));
    this.vel = p.createVector(p.random(-0.2, 0.2), p.random(-0.2, 0.2)); // Slower movement
    this.size = p.random(3, 5);
    this.angle = p.random(p.TWO_PI); // Initial random angle for rotation
    this.rotationSpeed = p.random(-0.01, 0.01); // Slower rotation speed
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x < 0 || this.pos.x > this.p.width) this.vel.x *= -1;
    if (this.pos.y < 0 || this.pos.y > this.p.height) this.vel.y *= -1;

    this.angle += this.rotationSpeed; // Update the angle for rotation
  }

  display() {
    this.p.noFill();
    this.p.stroke(255, 75);
    this.p.strokeWeight(1);
    this.p.push();
    this.p.translate(this.pos.x, this.pos.y);
    this.p.rotate(this.angle);
    this.p.beginShape();
    for (let a = 0; a < this.p.TWO_PI; a += this.p.TWO_PI / 3) { // Change to 3 for a triangle
      let sx = this.p.cos(a) * this.size;
      let sy = this.p.sin(a) * this.size;
      this.p.vertex(sx, sy);
    }
    this.p.endShape(this.p.CLOSE);
    this.p.pop();
  }

  connectToNearbyPolygons(polygons, radius) {
    // Check if the mouse is within the canvas bounds
    if (this.p.mouseX >= 0 && this.p.mouseX <= this.p.width && this.p.mouseY >= 0 && this.p.mouseY <= this.p.height) {
      for (let i = 0; i < polygons.length; i++) {
        let d = this.p.dist(this.pos.x, this.pos.y, polygons[i].pos.x, polygons[i].pos.y);
        if (d < radius && this.p.dist(this.pos.x, this.pos.y, this.p.mouseX, this.p.mouseY) < radius) {
          this.p.stroke(255, 50);
          this.p.line(this.pos.x, this.pos.y, polygons[i].pos.x, polygons[i].pos.y);
        }
      }
    }
  }
}


export const polygonSetup = (p) => {
  p.polygons = [];
  p.radius = 50; // Radius within which polygons will connect
  p.numPolygons = 600;

  // Create polygons
  for (let i = 0; i < p.numPolygons; i++) {
    p.polygons.push(new Polygon(p));
  }
};

export const polygonDraw = (p) => {
  p.background(0);
  for (let i = 0; i < p.polygons.length; i++) {
    p.polygons[i].move();
    p.polygons[i].display();
    p.polygons[i].connectToNearbyPolygons(p.polygons, p.radius);
  }
};

