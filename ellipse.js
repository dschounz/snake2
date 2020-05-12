class Ellipse {
  constructor(_r) {
    this.r = _r
    
  }

  display() {
    fill(255, 255, 0, 20);
    ellipse(width / 2, height / 2, this.r);
  }

  grow() {
    this.r+=50;
  }

}