(function init() {
  const button = document.querySelector('button');
  button.addEventListener('click', rollOfDices);
})();

const lotery = function() {}

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
    alert('go to prison')
  } else {
    // idziemy value pól do przozdu
    // TODO: ...
		console.log('wylosowano', value);
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










function leftArrowPressed() {
            var element = document.getElementById("motor");
            element.style.left = parseInt(element.style.left) - 80 + 'px';
            }

            function rightArrowPressed() {
            var element = document.getElementById("motor");
            element.style.left = parseInt(element.style.left) + 80 + 'px';

            }

            function upArrowPressed() {
            var element = document.getElementById("motor");
            element.style.top = parseInt(element.style.top) - 80 + 'px';
            }

            function downArrowPressed() {
            var element = document.getElementById("motor");
            element.style.top = parseInt(element.style.top) + 80 + 'px';
            }

            function moveSelection(evt) {
                switch (evt.keyCode) {
                    case 37:
                    leftArrowPressed();
                    break;
                    case 39:
                    rightArrowPressed();
                    break;
                    case 38:
                    upArrowPressed();
                    break;
                    case 40:
                    downArrowPressed();
                    break;
                    }
                };

        function docReady()
        {

          window.addEventListener('keydown', moveSelection);
        }
















      
/*

Animujemy animację przez kolejne pola. Zadanie zawiera przykładowe rozwiązanie z podpowiedziami.

1. Przygotowujemy id na kolejnych polach w formie (field + id). Nie jak do tej pory osobne id dla każdej strony planszy.

2. Do css dodajemy transition, żeby pionek się animował (dodajemy do niegopozycję absolutną w na planszy)

3. Tworzymy pętle w js z zmianą pozycji danego pionka na kolejne elementy (w przykładach). Między kolejnymi iteracjami dodajnemy setTimeout tz oczekiwanie

np
function movePawn(counter) {
//... do something math
if(counter>0)  setTimeout(movePawn.bind(this, counter-1), 1000);
// 1000 = 1s
}

movePawn(3); // przesuwa o 3 pola

Ta funkcja wywołuje siebie rekurencyjnie


Linki:
- promise - https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/Promise
- transition - https://www.w3schools.com/css/css3_transitions.asp
transitio example: https://www.webdesignerdepot.com/2014/05/8-simple-css3-transitions-that-will-wow-your-users/
- pobieranie pozycji elementu - https://www.kirupa.com/html5/get_element_position_using_javascript.htm



*/
