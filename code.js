
    const result = [];

    const losowanie = function() {


      const wynikLosowania = Math.floor(Math.random() * 6 + 1);


      const div = document.createElement("div");
	    div.id = "cube";
     
      div.textContent = wynikLosowania;
      
  
      result.push(wynikLosowania); 
      

	document.getElementById("cube-box").appendChild(div);
    }



    const button = document.querySelector("button");


    button.addEventListener("click", losowanie);