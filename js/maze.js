console.log("Eureka!");

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;

var player = {
  posX: 3,
  posY: 1
};

update();

function box(posX, posY, isPlayer) {
  this.posX = posX;
  this.posY = posY;
  this.isPlayer = isPlayer;
  if (this.posX == player.posX && this.posY == player.posY) {
    ctx.fillRect(posX * 100, posY * 100, 100, 100);
  }
  else {
    ctx.strokeRect(posX * 100, posY * 100, 100, 100);
  }
}

function update() {
  ctx.clearRect(0, 0, 500, 500);
  for (i = 0; i < 25; i++) {
    // ctx.strokeRect((i % 5)*100, Math.floor((i / 5)) * 100, 100, 100);
    new box((i % 5), Math.floor((i / 5)), false);
  }
}


window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return;
  }

  switch (event.key) {
  case "ArrowUp":
    if (player.posY > 0) {
      player.posY--;
    }
    break;
  case "ArrowDown":
    if (player.posY < 4) {
      player.posY++;
    }
    break;
  case "ArrowLeft":
    if (player.posX > 0) {
      player.posX--;
    }
    break;
  case "ArrowRight":
    if (player.posX < 4) {
      player.posX++;
    }
    break;
  default:
    console.log("Unknown key: " + event.key);
    return;
  }

  update();
  event.preventDefault();
}, true);
