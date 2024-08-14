// MobileSketch.js

export const mobileSetup = (p) => {
  p.particles = [];

  // Fewer particles for better performance
  for (let i = 0; i < 1500; i++) {
    p.particles.push(new Particle(p));
  }
};

export const mobileDraw = (p) => {
  p.background(15);

  // Simple movement without complex interactions
  p.particles.forEach(particle => {
    particle.update();
    particle.display();
  });
};

// Simplified Particle class
class Particle {
  constructor(p) {
    this.p = p;
    this.pos = this.p.createVector(this.p.random(this.p.width), this.p.random(this.p.height));
    this.vel = this.p.createVector(this.p.random(-0.125, 0.125), this.p.random(-0.125, 0.125));
    this.size = this.p.random(2, 2.5);
  }

  update() {
    this.pos.add(this.vel);
    if (this.pos.x > this.p.width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = this.p.width;
    if (this.pos.y > this.p.height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = this.p.height;
  }

  display() {
    this.p.noStroke();
    this.p.fill(255, 70);
    this.p.ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
}

