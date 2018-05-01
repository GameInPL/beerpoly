
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
	
	}
	
	
	
	if(result1==6 && result2==6) {
	
	}
	
	
	
	
	
