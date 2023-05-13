class Food {
  constructor() {
    this.x = Math.floor(Math.random() * window.innerWidth);
    this.y = Math.floor(Math.random() * window.innerHeight);
    this.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    this.size = 20;
    this.element = document.createElement("div");
    this.element.style.width = `${this.size}px`;
    this.element.style.height = `${this.size}px`;
    this.element.style.backgroundColor = this.color;
    this.element.style.position = "absolute";
    this.element.style.left = `${this.x}px`;
    this.element.style.top = `${this.y}px`;
    document.body.appendChild(this.element);
    setInterval(() => {
      this.move();
    }, 1000);
  }

  move() {
    this.x = Math.floor(Math.random() * window.innerWidth);
    this.y = Math.floor(Math.random() * window.innerHeight);
    this.element.style.left = `${this.x}px`;
    this.element.style.top = `${this.y}px`;
  }
}
