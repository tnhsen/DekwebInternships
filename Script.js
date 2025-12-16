const text = "Mission Complete: Internship Found!";
const typeWriterElement = document.getElementById("typewriter");
let i = 0;

function typeWriter() {
  if (i < text.length) {
    typeWriterElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  } else {
    fireConfetti();
  }
}

function fireConfetti() {
  var duration = 3 * 1000;
  var end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ["#2ea043", "#58a6ff", "#bc8cff"],
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ["#2ea043", "#58a6ff", "#bc8cff"],
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

window.onload = typeWriter;
