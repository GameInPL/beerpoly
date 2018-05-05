
	//    Tablica przechowująca wyniki
    const result1 = [];{

	//  funkcja odpowiedzialna za losowanie i umieszczanie liczby na stronie internetowej
    const losowanie = function() {

	//losowanie liczny 
    const wynikLosowania = Math.floor(Math.random() * 6 + 1);

   
	//tworzymy element div, ktory dodamy do dokumsntu (strony)
      const div = document.createElement("div");
	    div.id = "cube1";
		
		
      div.textContent = wynikLosowania;
      
      //dodajemy do tablicy wyników (result)
      result1.push(wynikLosowania); 
      
    //dodaje div do elementu 
	document.getElementById("cube-box").appendChild(div);
    }


    //Pobranie przycisku do zmiennej
    const button = document.querySelector("button");

    //nasłuchiwanie na zdarzenie 
    button.addEventListener("click", losowanie);
	
	}
	
	
//2x to samo	

    const result2 = [];{
    const losowanie = function() {

      const wynikLosowania = Math.floor(Math.random() * 6 + 1);

      const div = document.createElement("div");
	    div.id = "cube2";
		
      div.textContent = wynikLosowania;
      
      result2.push(wynikLosowania); 
      
	document.getElementById("cube-box").appendChild(div);
    }

    const button = document.querySelector("button");

    button.addEventListener("click", losowanie);
	
	const oDiv = document.getElementById('cube2');
	oDiv.parentNode.removeChild(oDiv);
	
	}
	
	
	
	if(result1==6 && result2==6) {
	
	}
	
	
	
	
	
	
		function movePawn(player) {
	//... do something math
	if(player>0) setTimeout(movePawn.bind(this, counter-1), 1000);
	// 1000 = 1s
}
	
	
	

	


	var a = (result1);
	var b = (result2);
	var z = a + b;
	document.write("Wyniki:"+z);
		



		
			
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

 
	
