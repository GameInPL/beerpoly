(function init() {
  document.addEventListener('click', onClick);
})();

function onClick(event){
  const playerNumber= event.target.getAttribute("data-plyer");
  if (playerNumber === null) return;
  console.log(playerNumber);
  location.href="game.html?players="+playerNumber;
}
