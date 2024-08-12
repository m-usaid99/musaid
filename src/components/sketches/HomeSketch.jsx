import p5 from "p5";

class Particle {
  constructor(p) {
    this.p = p;
    this.pos = this.p.createVector(this.p.random(this.p.width), this.p.random(this.p.height));
    this.depth = this.p.random(0.5, 1.25); // Depth factor (0.5 for far, 1.5 for near)
    this.vel = this.p.createVector(this.p.random(-0.1, 0.1) * this.depth, this.p.random(-0.1, 0.1) * this.depth);
    this.size = this.p.random(1, 1.5) * this.depth * 1.2; // Increase size multiplier based on depth
    this.baseBrightness = 50 * this.depth * 1.5; // Increase brightness multiplier based on depth
    this.shapeType = this.p.random(['circle', 'triangle', 'square']); // Random shape
  }

  update(waves) {
    // Update position with velocity
    this.pos.add(this.vel);

    let mouse = this.p.createVector(this.p.mouseX, this.p.mouseY);
    let dir = p5.Vector.sub(this.pos, mouse);
    let d = dir.mag();

    if (d < 50) {  // Small interaction range
      dir.setMag(3);  // Very minimal movement
      this.pos.add(dir);
    }

    // Calculate brightness based on all active waves
    this.brightness = this.baseBrightness;
    for (let wave of waves) {
      let distance = p5.Vector.dist(this.pos, wave.center);
      let smoothFactor = wave.radius < 50 ? wave.radius / 50 : 1; // Gradually increase brightness at the start
      let waveEffect = smoothFactor * this.p.exp(-this.p.abs(distance - wave.radius) / 100);
      this.brightness += waveEffect * 120; // Accumulate brightness from all waves
    }

    // Boundary check to keep particles within the canvas
    if (this.pos.x > this.p.width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = this.p.width;
    if (this.pos.y > this.p.height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = this.p.height;
  }

  display() {
    this.p.noStroke();
    this.p.fill(255, this.brightness); // Apply the combined pulse effect

    switch (this.shapeType) {
      case 'circle':
        this.p.ellipse(this.pos.x, this.pos.y, this.size, this.size);
        break;
      case 'triangle':
        this.p.triangle(
          this.pos.x, this.pos.y - this.size,
          this.pos.x - this.size, this.pos.y + this.size,
          this.pos.x + this.size, this.pos.y + this.size
        );
        break;
      case 'square':
        this.p.rect(this.pos.x, this.pos.y, this.size, this.size);
        break;
    }
  }
}

export const homeSetup = (p) => {
  p.particles = [];
  p.waves = [];

  // Create a number of particles
  for (let i = 0; i < 7500; i++) {  // Adjust this number based on desired density
    p.particles.push(new Particle(p));
  }
};

export const homeDraw = (p) => {
  p.background(15); // Completely clear the background each frame

  // Add a new wave when the most recent wave reaches 75% of the screen width
  if (p.waves.length === 0 || (p.waves[p.waves.length - 1].radius > p.width * 0.75)) {
    p.waves.push({
      center: p.createVector(0, p.height), // Bottom left corner
      radius: 0
    });
  }

  // Update the radius of each wave
  p.waves.forEach(wave => {
    wave.radius += 5; // Speed of the wave spread
  });

  // Update and display each particle with the effect of all active waves
  p.particles.forEach(particle => {
    particle.update(p.waves);
    particle.display();
  });

  // Remove waves that have gone off-screen
  p.waves = p.waves.filter(wave => wave.radius < p.width * 1.5);
};

