function bingo() {

  var allNumBombo= Array.from({length: 30}, (v, k) => k+1); 
  var cont=0;
  var line="off";

    function getCarton() {
        var nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        carton = [];
        i = nums.length;
        j = 0;
        while (i--) {
          j = Math.floor(Math.random() * (i+1));
          carton.push(nums[j]);
          nums.splice(j,1);
        }
        return carton
    }
        var carton=getCarton();

    function getName() {
        var userName=prompt("What is your name?");
        if (userName) {
          alert("Welcome " + userName + "!"); 
          console.log("Your cardboard is: " + "\n" + carton.slice(0,5) + "\n" + carton.slice(5,10) + "\n" + carton.slice(10,15));       
        } else if (userName==="") {   
               var ususAnon=confirm("¿Would you like to be anonimus?");
               if (ususAnon===true) {
                   alert("Welcome Anonimus!")
               } else {
                  alert("Introduce a vaild user name")
                  getName();
               }
        } else {
        var exit=confirm("Do you want to exit?")
         if (exit===true) {
           throw new Error("Bye");
           } else {
         getName();
           }
        }
    }
    getName(); 

    function getRandom(min,max) {       
        return Math.floor(Math.random() * ((max - min) + 1) + min);
     }

    function generatorNumGame() {
        var indexNum=getRandom(0, allNumBombo.length - 1);
        var numArray=allNumBombo[indexNum];
        allNumBombo.splice(indexNum, 1);
        return numArray;
    }
        
    function checkCarton(n) {  
        return n==="X";
    }

    function askTurn() {
        
        if (carton.slice(0,5).every(checkCarton) || carton.slice(5,10).every(checkCarton) || carton.slice(10,15).every(checkCarton) === true) {
            if(line==="off") {
            console.log("LINE!");
            line="on";
          }
        } 
        if (carton.every(checkCarton)===false) {
            var askT=confirm("¿Do you want to keep playing?");
          if(askT===true) {
            cont++;
             match();    
          } else {
            var exit=confirm("Do you want to exit?");
            if (exit===true) {
                 console.log("!Hasta pronto, Bye!");
              } else {
                askTurn();
              }            
          }
        } else {
            console.log("Congratulations your card has been completed!"+ "\n" + "You has completed it in " + cont + " turnos");
          var askAgainPlay=confirm("¿Do you want to play another game again??"); 
            if (askAgainPlay===true) {
            bingo();
          } else {
                console.log("!Hasta pronto, Bye!");
            }
        }   
    }
    askTurn();

    function match(){          
        var numSelect=generatorNumGame();
        console.log("\n" + "The number for this turn is: " + numSelect + "\n");
        for(i=0;i<carton.length;i++) {
            if(numSelect===carton[i]) {
                carton[i]="X"; 
                console.log("\n" + "A match was found with the number: " + numSelect +"!");
                console.log(carton.slice(0,5) + "\n" + carton.slice(5,10) + "\n" + carton.slice(10,15));     
            }               
        }            
        askTurn(); 
    }        
}
bingo();











function bingo() {

	var allNumBombo= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];  

  var cartonasdf = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  cartonasdf = cartonasdf.sort(function() {
	return Math.random() - 0.5
  });
     function getCarton() {
     var nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
     cartonNums = [];
      i = nums.length;
      j = 0;

     while (i--) {
       j = Math.floor(Math.random() * (i+1));
        cartonNums.push(nums[j]);
        nums.splice(j,1);
      }
    return cartonNums
    }
  var carton=getCarton();

    function welcome() {
    var userName=prompt("What is your name?");
     if (userName) {
         alert("Welcome " + userName + "!"); 
       console.log("Tu cartón para jugar es: " + "\n" + carton.slice(0,5) + "\n" + carton.slice(5,10) + "\n" + carton.slice(10,15));       
    } else if (userName==="") { 	
               var ususAnon=confirm("¿Would you like to be anonimus?");
               if (ususAnon===true) {
                   alert("Welcome Anonimus!")
               } else {
               	  alert("Introduce a vaild user name")
               	  welcome();
               }
    } else {
    	var exit=confirm("Do you want to exit?")
    	if (exit===true) {
       throw new Error("Bye");
        } else {
    	welcome();
        }
     }   
   }
  welcome();

  function getRandom(min,max) {   
        
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

        	     var askT=confirm("¿Quieres seguir jugando " + "?");
        	     if(askT===true) {
        		   match();
        		   contTurn.push("s")
        	     } else {
        		  console.log("!Hasta pronto, Bye!");
        		}
        	} else {
        		console.log("!Enhorabuena se ha completado tu cartón!"+ "\n" + "Hizo bingo en " + contTurn.length + " turnos");
        		var askAgainPlay=confirm("¿Desea volver a jugar otra partida?"); 
        		     if (askAgainPlay===true) {
        		     	bingo();
        		     } else {
                      console.log("!Hasta pronto, Bye!");
        		     }
        	} 	
   }
   askTurn();

  var pusheo=[]
  function match(){  
  	            
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
               
               askTurn(); 
  	          }
             
}
bingo();





function bingo() {

	var allNumBombo= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];  

  var cartonasdf = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  cartonasdf = cartonasdf.sort(function() {
	return Math.random() - 0.5
  });

var carton=getCarton();
       

    function welcome() {
    var userName=prompt("What is your name?");
     if (userName) {
         alert("Welcome " + userName + "!"); 
       console.log("Tu cartón para jugar es: " + "\n" + carton.slice(0,5) + "\n" + carton.slice(5,10) + "\n" + carton.slice(10,15));       
    } else if (userName==="") { 	
               var ususAnon=confirm("¿Would you like to be anonimus?");
               if (ususAnon===true) {
                   alert("Welcome Anonimus!")
               } else {
               	  alert("Introduce a vaild user name")
               	  welcome();
               }
    } else {
    	var exit=confirm("Do you want to exit?")
    	if (exit===true) {
       throw new Error("Bye");
        } else {
    	welcome();
        }
     }   
   }
  welcome();

   

        
     function getCarton() {
     var nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
     cartonNums = [];
      i = nums.length;
      j = 0;

     while (i--) {
       j = Math.floor(Math.random() * (i+1));
        cartonNums.push(nums[j]);
        nums.splice(j,1);
      }
    return cartonNums
    }
  

  function getRandom(min,max) {   
        
       return Math.floor(Math.random() * ((max - min) + 1) + min);

     }

     function generatorNumGame(arrayNums) {
             var indexNum=getRandom(0, allNumBombo.length - 1);
             var numArray=allNumBombo[indexNum];
             allNumBombo.splice(indexNum, 1);
             return numArray;
     }
        
    function getNumberGame() {
        var numSelectGame=generatorNumGame(allNumBombo);
        return numSelectGame;
     }   
 

  function checkCarton(n) {  
         return n==="X";
   }

  function askTurn() {
  	        if (carton.slice(0,5).every(checkCarton) || carton.slice(5,10).every(checkCarton) || carton.slice(10,15).every(checkCarton) === true) {
  	        	console.log("LINEA!");
  	           } 
   	        if (carton.every(checkCarton)===false) {

        	     var askT=confirm("¿Quieres seguir jugando " + "?");
        	     if(askT===true) {
        		   match();
        		   
        	     } else {
        		  console.log("!Hasta pronto, Bye!");
        		}
        	} else {
        		console.log("!Enhorabuena se ha completado tu cartón!"+ "\n" + "Hizo bingo en "  + " turnos");
        		var askAgainPlay=confirm("¿Desea volver a jugar otra partida?"); 
        		     if (askAgainPlay===true) {
        		     	bingo();
        		     } else {
                      console.log("!Hasta pronto, Bye!");
        		     }
        	} 	
   }
   askTurn();

 
  function match(){  
  	            
                var numSelect=getNumberGame();
  	            
                console.log("\n" + "El número para este turno es: " + numSelect + "\n");
                for(i=0;i<carton.length;i++) {
                if(numSelect===carton[i]) {
                   carton[i]="X";
                   
                  console.log("\n" + "¡Se encontró una coincidenia con el número: " + numSelect +"!");
                  console.log(carton.slice(0,5) + "\n" + carton.slice(5,10) + "\n" + carton.slice(10,15));
   				 
                 }  
                 
               }
               
               askTurn(); 
  	          }
             
}
bingo();









var myArray = [4, 1, 6, 9, 5];

function randomNumber(min, max){
    return Math.floor(Math.random() * ((max - min) + 1) + min);

}

function randomBomboGenerator(arr){ //hay que pasarle el array, pero alojado fuera de las funciones que la modifican.
    var randomIndex = randomNumber(0, arr.length-1); //un índice random para el array
    console.log("número random para un índice del array: "+randomIndex)
    var randomBombo = arr[randomIndex]; //el número al que apunta ese índice. 
    console.log("En la posición: "+ randomIndex+ " tenemos el valor: "+ randomBombo +" y se lo quitamos")
    arr.splice(randomIndex, 1);//le pasamos este índice. splice funciona con índices, no con valores.
    console.log(arr)
    return randomBombo;
}

function getNumber(){
    var randomNum = randomBomboGenerator(myArray); 
    return randomNum;
}

console.log(myArray)
console.log("este es mi número random "+getNumber())
console.log("--------------")
console.log("este es mi número random "+getNumber())
console.log("--------------")
console.log("este es mi número random "+getNumber())
console.log("--------------")
console.log("este es mi número random "+getNumber())
console.log("--------------")
console.log("este es mi número random "+getNumber())
console.log("--------------")





var allNumBombo=[];
for (var i = 1; i <= 10; i++) {
    allNumBombo.push(i);
}






function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var bingo=function () {
  var carton = [1,2,3,4,5];
  var numRandom = Math.floor((Math.random() * (5 - 0 + 1)) + 0);
  
   var getName=function () {
     var userName=prompt("What your name?");
      while (userName==="") { 
               alert("Introduce your name");
               userName= prompt("¿What is your name?");
     }
    alert("Welcome " + userName + "!"); 
    confirm("Would you like to start the game?");
    alert("Your carton is: " + carton)
   }
 getName();
  var exitNum= function(){  
   alert("Salió el número: " + numRandom);
    for(i=0;i<carton.length;i++) {
      if(numRandom===carton[i]) {
        carton[i]="x";
        }
    }
    alert(carton + "\n" + "Se ha encontrado el número: " + numRandom);
  
  if(carton[i]==="x") {
    alert("Enhorabuena usted completó el carton");
    
  }
 }
   var askTurn=function () {
    var confTurn=confirm("¿Desea continuar con la partida?");
     if(confTurn===false) {
       alert("Ciao")
     }
     
  }

   
  
  
}
bingo();










function bingo() {
var cartonasdf = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
function getCarton() {
var nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    cartonNums = [];
    i = nums.length;
    j = 0;
while (i--) {
    j = Math.floor(Math.random() * (i+1));
    cartonNums.push(nums[j]);
    
    nums.splice(j,1);
 }
 return cartonNums
}
var carton=getCarton();
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
  var contTurn=0
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





var bingo=function () {
  var carton = [1,2,3,4,5];
  var cartonComp=["x","x","x","x","x"];
  var numRandom = Math.floor((Math.random() * (5 - 0 + 1)) + 0);
  
   var getName=function () {
     var userName=prompt("What your name?");
      while (userName==="") { 
               alert("Introduce your name");
               userName= prompt("¿What is your name?");
     }
    alert("Welcome " + userName + "!"); 
    confirm("Would you like to start the game?");
    alert("Your carton is: " + carton)
   }
 getName();
  while (carton!==cartonComp) {
  var exitNum= function(){  
   alert("Salió el número: " + numRandom);
    for(i=0;i<carton.length;i++) {
      if(numRandom===carton[i]) {
        carton[i]="x";
        }
    }
    alert(carton + "\n" + "Se ha encontrado el número: " + numRandom);
  
   if(carton===cartonComp) {
    alert("Enhorabuena usted completó el carton");
    
  } else {
    var askTurn=function () {
     var confTurn=confirm("¿Desea continuar con la partida?");
      if(confTurn===false) {
       alert("Ciao")
      } else {
       exitNum();
       }
    
    }
  }
   
     
 }
}
   
  
  
}
bingo();



var num = [0,1,2,3,4,5];

var bingo= function (){
i=0
 while (i<num.length){
  var indice = Math.floor(Math.random()*num.length);
  console.log(num[indice]) 
  num.splice(indice,1) 
 }

}
bingo()


var carton = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
carton = carton.sort(function() {
	return Math.random() - 0.5
  });



function selecLista(){
   var zoo = ['Gato', 'Perro', 'Caballo', 'Ganso', 'Pez', 'Foca', 'Papagayo', 'Coyote', 'Milano', 'Nutria', 'Cotorra', 'Tigre'];
   var lote = [];
 
   // Cantidad aleatoria de elementos basada en la cantidad de elemenos de la variable zoo.
   var cantidad = Math.floor((Math.random()*zoo.length));
 
   for(var i=0; i<5; i++){
      // Generar un nuevo elemento.
      var nuevo = zoo[Math.floor((Math.random()*zoo.length))];
 
      // Si el elemento no se encuentra en lote[] agregar (push), en caso
      // de que sea se encuentre (continue;), saltar al siguente.
      if(lote.indexOf(nuevo)!=-1){continue;} else {lote.push(nuevo);}
   }
   console.log(lote.toString());
};
selecLista();