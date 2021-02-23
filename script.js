const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//Grid size/tile count
gs=tc=20;

// frames per second 
fps = 60;

// Player statistics
const player = {
  w: 40,
  h: 40,
  x: 20,
  y: 200,
  speed: 40,
  dx: 0,
  dy: 0
};

//Main game 
function update() {
  setTimeout(function(){
    clear();
    drawPlayer();
    requestAnimationFrame(update);
  },1000/fps)
}
update();

// game functions
function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawPlayer() {
  ctx.fillStyle="red";
  ctx.fillRect(player.x, player.y, player.w, player.h);
}

function detectWalls() {
  // Left wall
  if (player.x < 0) {
    player.x = 0;
  }

  // Right Wall
  if (player.x + player.w > canvas.width) {
    player.x = canvas.width - player.w;
  }

  // Top wall
  if (player.y < 0) {
    player.y = 0;
  }

  // Bottom Wall
  if (player.y + player.h > canvas.height) {
    player.y = canvas.height - player.h;
  }
}

function keyDown(e) {
  
  if (e.key === 'ArrowRight' || e.key === 'Right') {
    player.x = player.x + player.speed;
  } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
    player.x = player.x - player.speed;
  } else if (e.key === 'ArrowUp' || e.key === 'Up') {
    player.y = player.y - player.speed;
  } else if (e.key === 'ArrowDown' || e.key === 'Down') {
    player.y = player.y + player.speed;
  }
  detectWalls();
}

document.addEventListener('keydown', keyDown);