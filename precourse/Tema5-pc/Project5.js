
function Bombo() {
	var allNumBombo= [1,2,3,4,5,6,7,8,9,10];
  var indice=Math.floor((Math.random() * 10))
console.log(allNumBombo[indice])
allNumBombo.splice(indice,1)
console.log(allNumBombo)
}
Bombo();


function getRandom() {     
      return Math.floor((Math.random() * (10 - 1 + 1)) + 1);
  }


    function bomboNums() {
	var allNumBombo= [1,2,3,4,5,6,7,8,9,10];
    var index=Math.floor(Math.random() * 10)
    var numSelect=allNumBombo[index];
    return numSelect;
    return allNumBombo.splice(index,1);   
}
bomboNums();

 function getRandom() {   
        var allNumBombo= [1,2,3,4,5,6,7,8,9,10];  
        var numRandom=allNumBombo[Math.floor(Math.random() * allNumBombo.length)];
        allNumBombo.splice(numRandom,1);
        console.log(numRandom)
        console.log(allNumBombo)
        return numRandom;  
  }
getRandom();



var nums = [1,2,3,4,5,6,7,8,9,10];
    ranNums = [];
    i = nums.length;
    j = 0;

while (i--) {
    j = Math.floor(Math.random() * (i+1));
    ranNums.push(nums[j]);
    
    nums.splice(j,1);
    console.log(nums)
    console.log(ranNums)
}



function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    console.log(array);
}

var ranNums = shuffle([1,2,3,4,5,6,7,8,9,10]);


var cantidadNumeros = 5;
var myArray = []
while(myArray.length < cantidadNumeros ){
  var numeroAleatorio = Math.ceil(Math.random()*cantidadNumeros);
  var existe = false;
  for(var i=0;i<myArray.length;i++){
	if(myArray [i] == numeroAleatorio){
        existe = true;
        break;
    }
  }
  if(!existe){
    myArray[myArray.length] = numeroAleatorio;
  }

}
document.write("números aleatorios : " + myArray);

var carton = [1,2,3,4,5];
console.log(carton.slice(0,1))

var cartonN=[];
  function getCarton() {
  	
  	  while (cartonN.length<20) {
  		var numsCarton=Math.floor((Math.random() * (20 - 1 + 1)) + 1);
        cartonN.push(numsCarton);

  	   }
    return cartonN;
  }	





  function bingo() {

var carton = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
carton = carton.sort(function() {
	return Math.random() - 0.5
  });

  var userName=prompt("What your name?");
     if (userName) {
      while (userName==="") { 
               alert("Introduce your name");
               userName= prompt("¿What is your name?");
               
     }
    } else {
    	return console.log("!Hasta pronto, Bye!");
    } 
    alert("Welcome " + userName + "!"); 
    console.log("Tu cartón para jugar es: " + "\n" + carton.slice(0,5) + "\n" + carton.slice(5,10) + "\n" + carton.slice(10,15));

  function getRandom() {   
        var allNumBombo= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];  
        var numRandom=allNumBombo[Math.floor(Math.random() * allNumBombo.length)];
        allNumBombo.splice(numRandom,1);
        return numRandom;  
  }

  function checkCarton(n) {  
         return n==="X";
   }

  

  function askTurn() {
  	        if (carton.slice(0,5).every(checkCarton) || carton.slice(5,10).every(checkCarton) || carton.slice(10,15).every(checkCarton) === true) {
  	        	console.log("LINEA!");
  	           } 
   	        if (carton.every(checkCarton)===false) {

        	     var askT=confirm("¿Quieres seguir jugando " + userName + "?");
        	     if(askT===true) {
        		   match();
        		   contTurn++;
        	     } else {
        		  console.log("!Hasta pronto, Bye!");
        		}
        	} else {
        		console.log("!Enhorabuena se ha completado tu cartón!"+ "\n" + "Hizo bingo en " + contTurn + " turnos");
        		var askAgainPlay=confirm("¿Desea volver a jugar otra partida?"); 
        		bingo();
        	}
        	
        	
   }
   askTurn();

  var pusheo=[]
  function match(){  
  	            var showCartonIn=carton.slice(0,5) + "\n" + carton.slice(5,10) + "\n" + carton.slice(10,15)
                var numSelect=getRandom();
  	            var contTurn=0
                console.log("\n" + "El número para este turno es: " + numSelect + "\n");
                for(i=0;i<carton.length;i++) {
                if(numSelect===carton[i]) {
                   carton[i]="X";
                   
                  console.log("\n" + "¡Se encontró una coincidenia con el número: " + numSelect +"!");
                  console.log(carton.slice(0,5) + "\n" + carton.slice(5,10) + "\n" + carton.slice(10,15));
   				 
                 }  
                 
               }

               contTurn++
               askTurn(); 
  	          }
             
}
bingo();



var cartonf=[];
  function getCarton() {
  	
  	  while (cartonf.length<20) {
  		var numsCarton=Math.floor((Math.random() * (20 - 1 + 1)) + 1);
        cartonf.push(numsCarton);

  	   }
    return cartonf;
  }	
  
  var carton=getCarton()


