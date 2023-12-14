var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

class Fish {
    constructor() {
        this.x = window.innerWidth / 2;
        this.y = window.innerHeight / 2;

        this.angle = Math.random() * (2 * Math.PI);
        this.speed = 5;
        this.xv = this.speed * Math.cos(this.angle);
        this.yv = this.speed * Math.sin(this.angle);
        this.radius = 10 + Math.random() * 10;
    }

    draw(c) {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        c.fillStyle = "coral";
        c.fill();
    }

    move() {
        if (this.x + this.xv + this.radius > window.innerWidth || this.x - this.radius < 0) {
            this.xv *= -1;
        }
        if (this.y + this.yv + this.radius > window.innerHeight || this.y - this.radius < 0) {
            this.yv *= -1;
        }
        this.x += this.xv;
        this.y += this.yv;
    }
}
const num_of_balls = 50;
const fish_arr = [50];

for (let i = 0; i < num_of_balls; ++i) {
    fish_arr[i] = new Fish();
}

function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = "rgba(127, 255, 212, 0.1)";
    c.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < num_of_balls; ++i) {
        fish_arr[i].draw(c);
        fish_arr[i].move();
    }
}

animate();