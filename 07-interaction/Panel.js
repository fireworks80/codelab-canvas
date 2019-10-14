class Panel {
  constructor() {
    // this.draw();
  }
  draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.setTransform(1, 0, 0, 1, 0, 0); // 초기화
    ctx.translate(oX, oY);
    ctx.scale(panelScale, panelScale);
    ctx.rotate(toRadian(panelAngle));
    ctx.translate(-oX, -oY);
    ctx.fillRect(oX - 200, oY - 200, 400, 400);
    ctx.setTransform(1, 0, 0, 1, 0, 0); // 초기화
  }

  displayContent(text) {
    ctx.fillStyle = '#fff';
    ctx.fillText(text, oX, oY);
  }
}