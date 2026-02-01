document.addEventListener("DOMContentLoaded", () => {
  const noButton = document.getElementById("no");
  const heartsContainer = document.querySelector(".hearts");

  function moveNoButton() {
    const x = Math.random() * 500 - 250;
    const y = Math.random() * 400 - 200;
    noButton.style.transform = `translate(${x}px, ${y}px)`;
  }

  ["mouseover", "touchstart"].forEach(event => {
    noButton.addEventListener(event, moveNoButton);
  });

  window.yesClicked = function () {
    document.body.innerHTML = `
      <div style="
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        background:linear-gradient(135deg,#ff4d6d,#ffb3c1);
        color:white;
        text-align:center;
        font-family:-apple-system,BlinkMacSystemFont,sans-serif;
        padding:20px;
      ">
        <h1>
          Yayyy!! 💖<br><br>
          I love you so much, Aanchal 😘<br>
          Happy Valentine’s Day 💕
        </h1>
      </div>
    `;
  };

  // Create floating hearts
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 4 + "s";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 7000);
  }, 300);
});
