export default class AnimatedObject {
    speedX = 0;
    speedY = 0;
    width = 0;
    height = 00;
    x = 0;
    y = 0;
    imageList = [];
    contaFrame = 0;
    actualFrame = 0;
  
    constructor(imageUrlList, width, height, x, y) {
      this.loadImages(imageUrlList);
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
    }
  
    update() {
      this.y = this.y + this.speedY;
      this.x = this.x + this.speedX;
      if (this.speedX != 0 || this.speedY != 0) this.contaFrame++;
      if (this.contaFrame == 5) {
        this.contaFrame = 0;
        this.actualFrame = (1 + this.actualFrame) % this.imageList.length;
        this.image = this.imageList[this.actualFrame];
      }
    }
  
      loadImages(imageUrlList) {
      for (let imgPath of imageUrlList) {
        var img = new Image(this.width, this.height);
        img.src = imgPath;
        this.imageList.push(img);
      }
      this.image = this.imageList[this.actualFrame];
    }
  }
  if