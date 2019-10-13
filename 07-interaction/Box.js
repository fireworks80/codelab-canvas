class Box {
  constructor(info) {
    this.index = info.index;
    this.x = info.x;
    this.y = info.y;
    this.speed = info.speed;
    this.width = info.width;
    this.height = info.height;
    this.draw();
  }

  draw() {
    // console.log(this.x, this.y);
    ctx.fillStyle = 'rgba(0, 120, 0, 0.7)';
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = '#fff';
    ctx.font = '30px bold sans-serif';
    ctx.fillText(this.index, this.x + 30, this.y + 30);
  }
}