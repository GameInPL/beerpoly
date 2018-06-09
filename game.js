var playerNumber;

(function init() {
  playerNumber = getParameterByName('players') || 2;
  playerNumber = playerNumber<=6 ? playerNumber : 6;
  playerNumber = playerNumber<2 ? 2 : playerNumber;

  const button = document.getElementById('rollOfDicesButton');
  button.addEventListener('click', rollOfDices);
  window.addEventListener('keydown', moveSelection);

  // add palyers
  var $container = document.getElementById('container');
  for(var i=0; i<playerNumber; i++) {
    var $player = document.createElement("div");
    $player.id = 'player' + i;
    $container.appendChild($player);
  }
})();

const lotery = function() {}

const prisonNumber = 10;

//  funkcja odpowiedzialna za losowanie i umieszczanie liczby na stronie internetowej
function rollOfDices() {
  var $cubeBox = document.getElementById('cube-box');
  $cubeBox.innerHTML = '';
  var value = rollOfDice($cubeBox, 'cube1');
  value += rollOfDice($cubeBox, 'cube2');
  //jeśli wykulamy 6 + 6 rzucamy jeszcze raz
  if (value == 12) {
    // czekamy 3s i rzucamy jeszcze raz
    setTimeout(secondRollOfDices.bind(this, value), 3000);
  } else {
    // idziemy value pól do przozdu
    // TODO: ...
    console.log('wylosowano', value);
    movePlayer1(value);
  }
}

function secondRollOfDices(value) {
  var $cubeBox = document.getElementById('cube-box');
  $cubeBox.innerHTML = '';
  value += rollOfDice($cubeBox, 'cube1');
  value += rollOfDice($cubeBox, 'cube2');
  //jeśli wykulamy 6 + 6 drugi raz, idziemy do więzienia
  if (value == 24) {
    //idziesz do więzienia
    alert('go to prison');
    movePlayer1To(prisonNumber);
  } else {
    // idziemy value pól do przozdu
    // TODO: ...
    console.log('wylosowano', value);
    movePlayer1(value);
  }
}

function rollOfDice($cubeBox, id) {
  //losowanie liczny
  const value = Math.floor(Math.random() * 6 + 1);
  //tworzymy element div, ktory dodamy do dokumentu (strony)
  const div = document.createElement('div');
  div.id = id;
  div.textContent = value;
  //dodaje div do elementu
  $cubeBox.appendChild(div);
  return value;
}

function movePlayer(playerElement, counter) {
  var fieldNumber = playerElement.getAttribute("fieldNumber") || 0;
  fieldNumber = (parseInt(fieldNumber) + counter) % 40;
  movePlayerTo(playerElement, fieldNumber)
}

function movePlayerTo(playerElement, fieldNumber) {
  var destElement = document.getElementById('p'+fieldNumber);
  var destRect = destElement.getBoundingClientRect();
  var containerElement = document.getElementById('container');
  var containerRect = containerElement.getBoundingClientRect();
  playerElement.style.top = (destRect.top - containerRect.top) + 'px';
  playerElement.style.left = (destRect.left - containerRect.left) + 'px';
  playerElement.setAttribute("fieldNumber", fieldNumber);
}

function movePlayer1(counter) {
  var element = document.getElementById("player1");
  const time = 200;
  function step(couner){
    movePlayer(element, 1);
    counter--;
    if(counter>0) {
      setTimeout(step, time);
    }
  }
  step();
}

function movePlayer1To(counter) {
  var element = document.getElementById("player1");
  movePlayerTo(element, counter);
}

//////

////


function moveSelection(e) {
  switch (e.keyCode) {
    case 37:
      e.preventDefault();
      movePlayer1(-1);
      break;
    case 39:
      e.preventDefault();
      movePlayer1(1);
      break;
    case 38:
      e.preventDefault();
      movePlayer1(-1);
      break;
    case 40:
      e.preventDefault();
      movePlayer1(1);
      break;
  }
};
