const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confetti = [];

for (let i = 0; i < 200; i++) {
  confetti.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 4,
    d: Math.random() * 20 + 10,
    color: `hsl(${Math.random() * 360}, 100%, 60%)`,
    tilt: Math.random() * 10 - 5,
    tiltAngle: 0,
    tiltAngleIncrement: Math.random() * 0.07 + 0.05
  });
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let c of confetti) {
    ctx.beginPath();
    ctx.lineWidth = c.r;
    ctx.strokeStyle = c.color;
    ctx.moveTo(c.x + c.tilt + c.r / 2, c.y);
    ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.r);
    ctx.stroke();
  }

  update();
}

function update() {
  for (let c of confetti) {
    c.tiltAngle += c.tiltAngleIncrement;
    c.y += (Math.cos(c.d) + 3 + c.r / 2) / 2;
    c.x += Math.sin(c.d);
    c.tilt = Math.sin(c.tiltAngle - c.d / 3) * 15;

    if (c.y > canvas.height) {
      c.y = -10;
      c.x = Math.random() * canvas.width;
    }
  }
}

setInterval(drawConfetti, 33);
