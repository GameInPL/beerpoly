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


/*

	function movePawn(counter) {
	//... do something math
	if(counter>0) setTimeout(movePawn.bind(this, counter-1), 1000);
	// 1000 = 1s
	}

	movePawn(3); // przesuwa o 3 pola



*/


/*
let a = (result1[0]);
let b = (result2[0]);
let x = a + b;
document.write('Wyniki:' + x);
*/





/*

	  function suma (tablica = [2,5]) {
var suma = 0;
for(var i = 0; i < tablica.length; i++) {
  suma = suma + tablica[i];
}
console.log('Suma elementów w tablicy wynosi: ' + suma);
console.log('------------');
var iloczyn = 1;
for(var j = 0; j < tablica.length; j++) {
  iloczyn = iloczyn * tablica[j];
}
console.log('Iloczyn elementów w tablicy wynosi: ' + iloczyn);
}
suma();
	*/
/////
/*
			function movePawn(counter) {
		//... do something math
		if(counter>0) setTimeout(movePawn.bind(this, counter-1), 1000);
		// 1000 = 1s
		}

		movePawn(3); // przesuwa o 3 pola



*/

/*const oDiv = document.getElementById('cube2');
	oDiv.parentNode.removeChild(oDiv);*/
