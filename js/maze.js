console.log("Eureka!");

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;

var player = {
  posX: 1,
  posY: 2
};

var boxes = [];
var winPosX = 0;
var winPosY = 4;
var hasWon = false;
var solids = [
  0, 0, 0, 1, 0,
  0, 1, 0, 0, 0,
  0, 0, 1, 0, 1,
  1, 1, 0, 0, 0,
  0, 0, 0, 1, 1,
];



update();

function box(posX, posY, isPlayer, boxNumber) {
  this.posX = posX;
  this.posY = posY;
  this.isPlayer = isPlayer;
  this.isSolid = false;
  this.boxNumber = boxNumber;

  boxes.push(this);

  if (solids[boxNumber]) {
    ctx.fillStyle = "#000";
    ctx.fillRect(posX * 100, posY * 100, 100, 100);
    this.isSolid = true;
  }
  else if (posX == player.posX && posY == player.posY) {
    ctx.fillStyle = "#00c853";
    ctx.fillRect(posX * 100, posY * 100, 100, 100);
  }
  else if (posX == winPosX && posY == winPosY) {
    ctx.fillStyle = "#00c853";
    ctx.font = "24px 'Comic Sans MS', cursive, sans-serif";
    ctx.textBaseline = "middle";
    ctx.fillText("Home", (posX * 100) - (ctx.measureText("Home").width / 2) + 50, (posY * 100) + 50);
  }
}

function coordsToBox(posX, posY) {
  return ((posY) * 5) + posX;
}

function update() {
  ctx.clearRect(0, 0, 500, 500);
  ctx.strokeRect(0, 0, 500, 500);

  if (player.posX == winPosX && player.posY == winPosY) {
    winMessage();
    return;
  }
  for (i = 0; i < 25; i++) {
    // ctx.strokeRect((i % 5)*100, Math.floor((i / 5)) * 100, 100, 100);
    new box((i % 5), Math.floor((i / 5)), false, i);
  }
}

window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return;
  }

  if (!hasWon) {
    switch (event.key) {
    case "ArrowUp":
      if (player.posY > 0 && !boxes[coordsToBox(player.posX, player.posY - 1)].isSolid) {

        player.posY--;
      }
      break;
    case "ArrowDown":
      if (player.posY < 4 && !boxes[coordsToBox(player.posX, player.posY + 1)].isSolid) {
        player.posY++;
      }
      break;
    case "ArrowLeft":
      if (player.posX > 0 && !boxes[coordsToBox(player.posX - 1, player.posY)].isSolid) {
        player.posX--;
      }
      break;
    case "ArrowRight":
      if (player.posX < 4 && !boxes[coordsToBox(player.posX + 1, player.posY)].isSolid) {
        player.posX++;
      }
      break;
    default:
      console.log("Unknown key: " + event.key);
      return;
    }

    update();

    event.preventDefault();
  }
}, true);

function winMessage() {
  ctx.clearRect(0, 0, 500, 500);

  console.log("You win!");
  ctx.font = "48px impact";
  ctx.textBaseline = "middle";
  ctx.fillText("Congrats, you won!", 250 - (ctx.measureText("Congrats, you won!").width / 2), 250);

  ctx.font = "24px monospace";
  ctx.fillText("Going home...", 250 - (ctx.measureText("Going home...").width / 2), 400);

  hasWon = true;
  setTimeout(function () {
    console.log("redirecting...");
    window.location = "http://www.biohazard4050.org";
  }, 3000);
}
