import AnimatedObject from "./AnimatedObject";
import NinjaSprites from "./NinjaSprites";
export default class GameArea {
  canvas = undefined;
  r;
  ninja;
  constructor() {
    this.r = new Rectangle(10, 120, 20, 20, "red");
    this.ninja = new AnimatedObject(NinjaSprites.running, 60, 60, 10, 120);
    this.canvas = document.getElementById("gameArea");
    this.canvas.width = 480;
    this.canvas.height = 270;
    this.context = this.canvas.getContext("2d");
    this.interval = setInterval(this.updateGameArea, 20); //ogni 20 ms chiamo il metodo updateGameArea
    document.addEventListener("keydown", this.move);
    document.addEventListener("keyup", this.clearmove);
  }

  drawAnimatedObject(gameObject) {
    this.context.drawImage(
      gameObject.image,
      gameObject.x,
      gameObject.y,
      gameObject.width,
      gameObject.height
    );
  }

  clear = () => {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  updateGameArea = () => {
    this.clear();
    this.ninja.update();
    this.drawAnimatedObject(this.ninja);
  };

  move = e => {
    switch (e.key) {
      case "ArrowUp":
        this.ninja.speedY = -2;
        break;
      case "ArrowDown":
        this.ninja.speedY = 2;
        break;
      case "ArrowLeft":
        this.ninja.speedX = -2;
        break;
      case "ArrowRight":
        this.ninja.speedX = 2;
        break;
    }
  };

  clearmove = () => {
    this.ninja.speedX = 0;
    this.ninja.speedY = 0;
  };
}