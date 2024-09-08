class Arc {
  constructor(p, r, f) {
    this.p = p;
    this.r = r;
    this.angle = 0;
    this.f = f;
    this.length = 180;
    this.angleV = 0.01;  // Further reduced angular velocity
  }

  display() {
    this.p.noFill();

    // Big arc
    this.p.strokeWeight(1);
    this.p.stroke(220, 30);
    this.p.arc(0, 0, this.r * 2, this.r * 2, (this.angle * this.f) - this.length, this.angle * this.f);
    this.x = this.r * this.p.cos(this.angle * this.f);
    this.y = this.r * this.p.sin(this.angle * this.f);
    this.p.fill(220, 50);
    this.p.ellipse(this.x, this.y, 1, 1);
  }

  update() {
    this.angle += this.angleV;  // Even slower increment
  }
}

export const arcSetup = (p) => {
  p.arcs = [];
  let num = 12;
  let r_mult = 1.25;
  let r0 = 100;
  let f_mult = 0.375;

  // Create a number of arcs
  for (let i = 0; i < num; i++) {
    let r = r0 + ((i + 1) * num * r_mult);
    let f = (i + 1) * f_mult;
    p.arcs.push(new Arc(p, r, f));
  }
};

export const arcDraw = (p) => {
  p.background(0);
  p.translate(p.width / 2, p.height / 2);

  // Update and display each arc
  p.arcs.forEach(arc => {
    arc.update();
    arc.display();
  });
};
