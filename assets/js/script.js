const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particleArray = [];
let adjustX = 22;
let adjustY = -10;

//handle mouse
let mouse = {
  x: null,
  y: null,
  radius: 80,
};

window.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  //console.log(mouse.x, mouse.y);
});

ctx.fillStyle = "blue";
ctx.font = "18px Verdana";
ctx.fillText("Niko", 0, 29);
const textCoordinates = ctx.getImageData(0, 0, 100, 100);
//blueprint to create particles
class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 3;
    this.baseX = this.x;
    this.BaseY = this.y;
    this.density = Math.random() * 40 + 5; //makes it faster
  }
  draw() {
    ctx.fillStyle = "aquamarine"; //change particle color
    ctx.beginPath();
    //arc draws a circle, and can do many other shapes
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
  update() {
    let dx = mouse.x - this.x; //distance between mouse and particle
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    let forceDirectionX = dx / distance;
    let forceDirectionY = dy / distance;
    let maxDistance = mouse.radius;
    let force = (maxDistance - distance) / maxDistance;
    let directionX = forceDirectionX * force * this.density;
    let directionY = forceDirectionY * force * this.density;

    if (distance < mouse.radius) {
      //+= attract  -= spread
      this.x -= directionX; //multiplying will make it move faster
      this.y -= directionY;
    } else {
      if (this.x !== this.baseX) {
        let dx = this.x - this.baseX;
        this.x -= dx / 10; //change how fast particles return to position
      }
      if (this.y !== this.BaseY) {
        let dy = this.y - this.BaseY;
        this.y -= dy / 10;
      }
    }
  }
}

function init() {
  particleArray = [];
  for (let y = 0, y2 = textCoordinates.height; y < y2; y++) {
    for (let x = 0, x2 = textCoordinates.width; x < x2; x++) {
      if (
        textCoordinates.data[y * 4 * textCoordinates.width + x * 4 + 3] > 128
      ) {
        //cycling through elements, skipping three and checking the fourth for opacity
        let positionX = x + adjustX;
        let positionY = y + adjustY;
        particleArray.push(new Particle(positionX * 20, positionY * 20));
      }
    }
  }

  // for (let i = 0; i < 500; i++) {
  //     let x = Math.random() * canvas.width;
  //     let y = Math.random() * canvas.height;
  //     particleArray.push(new Particle(x, y));

  // } random particles
  //particleArray.push(new Particle(50, 50));
}
init(); //console.log(particleArray) to check
//animation loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particleArray.length; i++) {
    particleArray[i].draw();
    particleArray[i].update();
  }
  connect();
  requestAnimationFrame(animate);
}

animate();

function connect() {
  //let opacityValue = 1;
  for (let a = 0; a < particleArray.length; a++) {
    for (let b = a; b < particleArray.length; b++) {
      // let dx = mouse.x - this.x;
      // let dy = mouse.y - this.y;
      // let distance = Math.sqrt(dx * dx + dy * dy);
      let dx = particleArray[a].x - particleArray[b].x;
      let dy = particleArray[a].y - particleArray[b].y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      opacityValue = 1 - distance / 50;
      ctx.strokeStyle = "rgba(255,255,255," + opacityValue + ")";
      ctx.strokeStyle = "#9388a2"; // change line color

      if (distance < 50) {
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(particleArray[a].x, particleArray[a].y);
        ctx.lineTo(particleArray[b].x, particleArray[b].y);
        ctx.stroke();
      }
    }
  }
}
