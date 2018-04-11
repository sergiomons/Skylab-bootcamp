function pasapalabra() {
  //Globals vars
  var name=""
  var successes=0
  var faults=0
  var inc=0
  var questions = [
    { letter: "a", answer: "abducir", status: 0, prequestion:("CON LA A"), question: ("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien") },
    { letter: "b", answer: "bingo", status: 0, question: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso") },
    { letter: "c", answer: "churumbel", status: 0, question: ("CON LA C. Niño, crío, bebé") },
    { letter: "d", answer: "diarrea", status: 0, question: ("CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida") },
    { letter: "e", answer: "ectoplasma", status: 0, question: ("CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación") },
    { letter: "f", answer: "facil", status: 0, question: ("CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad") },
    { letter: "g", answer: "galaxia", status: 0, question: ("CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas") },
    { letter: "h", answer: "harakiri", status: 0, question: ("CON LA H. Suicidio ritual japonés por desentrañamiento") },
    { letter: "i", answer: "iglesia", status: 0, question: ("CON LA I. Templo cristiano") },
    { letter: "j", answer: "jabali", status: 0, question: ("CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba") },
    { letter: "k", answer: "kamikaze", status: 0, question: ("CON LA K. Persona que se juega la vida realizando una acción temeraria") },
    { letter: "l", answer: "licantropo", status: 0, question: ("CON LA L. Hombre lobo") },
    { letter: "m", answer: "misantropo", status: 0, question: ("CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas") },
    { letter: "n", answer: "necedad", status: 0, question: ("CON LA N. Demostración de poca inteligencia") },
    { letter: "ñ", answer: "señal", status: 0, question: ("CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.") },
    { letter: "o", answer: "orco", status: 0, question: ("CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien") },
    { letter: "p", answer: "protoss", status: 0, question: ("CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft") },
    { letter: "q", answer: "queso", status: 0, question: ("CON LA Q. Producto obtenido por la maduración de la cuajada de la leche") },
    { letter: "r", answer: "raton", status: 0, question: ("CON LA R. Roedor") },
    { letter: "s", answer: "stackoverflow", status: 0, question: ("CON LA S. Comunidad salvadora de todo desarrollador informático") },
    { letter: "t", answer: "terminator", status: 0, question: ("CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984") },
    { letter: "u", answer: "unamuno", status: 0, question: ("CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914") },
    { letter: "v", answer: "vikingos", status: 0, question: ("CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa") },
    { letter: "w", answer: "sandwich", status: 0, question: ("CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso") },
    { letter: "x", answer: "botox", status: 0, question: ("CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética") },
    { letter: "y", answer: "peyote", status: 0, question: ("CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos") },
    { letter: "z", answer: "zen", status: 0, question: ("CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional") },
]
  // Input message with statments
  alert("Welcome to Pasapalabra! " + "\n" + "I'll give you some instrucions for the game." + "\n" + " - You have to introduce your name and then confirm if you want to start the game." + "\n" + " - The program will launch a question for each letter. If you think you know the question, enter the answer. If you do not know it and you want to go to the next letter, whether enter 'pasapalabra' or leave the space blank and press accept." + "\n" + " - In the case that you answer the question correctly, you will earn a point." + "\n" + " - To exit or end the game at any time, press 'Cancel'." + "\n" + " - When it finishes, the score obtained will be checked, as well as the failures that have been committed.");
  var continueP=confirm("Do you want to continue?");
  if (continueP===true) {
  	 welcome();
  } else {
  	alert("OK Bye!");
  	throw new Error();
  }
  //Functions
  function welcome() {
    var userName=prompt("What is your name?");
    name=userName;
     if (userName) {
         alert("Welcome " + name + "!");  
     } else if (userName==="") { 
     	name="Anonimus";
     	alert("Welcome " + name + "!");
    } else {
    	var exit=confirm("Do you want to exit?")
    	if (exit===true) {
           alert("OK Bye!");
  	       throw new Error();
        } else {
    	welcome();
        }
     }
     var continueP2=confirm("Do you want to start the game?"); 
         if (continueP2===true) {
  	     ask();
         } else {
  	       alert("OK Bye!")
  	       throw new Error(); 
  	     }  
   }
  welcome();

  function checkAll() {
  	var cont=0
    for (var i=0; i<questions.length;i++) {
      if(questions[i].status!== 0) {
        cont++;
      }
    }
     return cont;
  }
  // Function ++
  function ask(){
   if(checkAll()<questions.length) {
      if(inc===questions.length){
        inc=0; 
        alert("     ROUND AGAIN!");
        console.log("     ROUND AGAIN!");
      }
      if(questions[inc].status===0) {
       console.log(questions[inc].question);      
       answerR(); 
      } else {       
        inc++;
       ask();
      }
   } else {
      alert(name + ", you has completed Pasapalabra!" + "\n" + "You had " + successes + " successes and " + faults + " errors.");
       var askAgainPlay=confirm("¿Desea volver a jugar otra partida?"); 
        if (askAgainPlay===true) {
        pasapalabra();
        } else {
         alert("!Hasta pronto, Bye!");
  	     throw new Error();
        }
   } 	     
  }
  ask();

  function answerR() {
     var answer=(prompt(questions[inc].question));
          if (answer===questions[inc].answer) {
            alert("            Correct! You have won 1 point.");
            console.log("            Correct! You have won 1 point.");
            questions[inc].status="success";
            inc++;
            successes++;
            ask();
          }else if ((answer==="pasapalabra") || (answer==="")) {
            inc++;
            alert("              PASAPALABRA");
            console.log("              PASAPALABRA");
            ask();
          } else if (!answer) {
             var exit2=confirm("Do you want to exit?");
    	      if (exit2===true) {
              alert(name + ", you has finished Pasapalabra!" + "\n" + "You had " + successes + " successes and " + faults + " errors." + "\n" + "Bye!");
              throw new Error("OK Bye!");
              } else {
    	      ask();
              }
          }else {
            alert("            Your answer is incorrect.");
            console.log("            Your answer is incorrect.");
            questions[inc].status="fault";
            inc++;
            faults++;
            ask();
          }  
  }
}
pasapalabra();
