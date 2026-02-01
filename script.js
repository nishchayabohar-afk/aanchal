const noButton = document.getElementById("no");

noButton.addEventListener("mouseover", () => {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 300 - 150;

  noButton.style.transform = `translate(${x}px, ${y}px)`;
});

function yesClicked() {
  document.body.innerHTML = `
    <h1 style="color:white; text-align:center; margin-top:40vh;">
      Yay!! 💖💖 I love you forever 😘
    </h1>
  `;
}
