






class Ball {
    constructor({color, controls, speed, name}) {
        const ballEl = document.createElement('div');
        ballEl.classList.add('ball');
        ballEl.style.background = color;
        // Instead of document you should append ball to the game-container element
        const gameContainer = document.querySelector("#gameContainer");
        gameContainer.appendChild(ballEl);
        // ballEl.innerHTML = name[0].toUpperCase();
        this.element = null;
        this.initListeners();
        this.ballEl = ballEl;
        this.top = 0;
        this.left = 0;
        this.speed = speed;
        this.controls = controls;
    }
    insertElement(letter) {
        this.element = letter;
    }
    moveRight() {
        if (this.left >= 500) {
            return
        }
        this.left += this.speed;
        this.ballEl.style.left = `${this.left}px`;
    }
    moveLeft() {
        if (this.left === 0) { 
            return;
        }
        this.left -= this.speed;
        this.ballEl.style.left = `${this.left}px`;
    }
    moveDown() {
        if (this.top >= 700) {
            return;
        }
        this.top += this.speed;
        this.ballEl.style.top = `${this.top}px`;
    }
    moveUp() { 
        if (this.top === 0) {
            return;
        }
        this.top -= this.speed;
        this.ballEl.style.top = `${this.top}px`;
    }
    initListeners() {
        document.addEventListener('keydown', (event) => {
            switch (event.code) {
                case this.controls.left:
                    this.moveLeft();
                    break;
                case this.controls.right:
                    this.moveRight();
                    break;
                case this.controls.up:
                    this.moveUp();
                    break;
                case this.controls.down:
                    this.moveDown();
                    break;
                default:
            }
        });
    }
}


