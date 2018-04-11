  //Global vars
  var butPasa=document.getElementById("butPasa");
  var butConf=document.getElementById("butConf");
  var finish=document.getElementById("finish");
  var exitV=document.getElementById("exit");
  var enterAns=document.getElementById("enterAns");
  var shownCom=document.getElementById("shownCom");
  var parapAsk=document.getElementById("parapAsk");
  var letterOnly=document.getElementById("letterOnly");
  var result=document.getElementById("result");
  var showTime=document.getElementById("showTime");
  var shownComSty="padding: 10px 5px 10px 15px; font-family: 'Lucida Console', Monaco, monospace; font-size: 30px; text-align: center;margin-top: 70px; width: 65%; margin-left: 250px";
  var resultSty="padding: 2px 2px 2px 2px; font-family: 'Lucida Console', Monaco, monospace; font-size: 23px; text-align: center;margin-top: 60px; border: 2px solid #DEE3C3; background-color:#254287";
  var userName="";
  var name="";
  var successes=0;
  var faults=0;
  var inc=0;
  var contNRound=0;
  var downTime ="";
  var off= "no";
  var timeLeft=document.getElementById("showTime").innerHTML;
  var butStartGl="";
  butPasa.disabled= true;
  butConf.disabled= true;
  finish.disabled= true;
  enterAns.disabled=true;
  var showSuc=document.getElementById("showSuccessR");
  var showFau=document.getElementById("showFaultsR");
  document.getElementById("showFaultsR").innerHTML=faults;
  
  var questions = [
    { letter: "A", answer: "abducir", status: 0, prequestion:("Con la "), question: ("Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien") },
    { letter: "B", answer: "bingo", status: 0, prequestion:("Con la "), question: ("Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso") },
    { letter: "C", answer: "churumbel", status: 0, prequestion:("Con la "),  question: ("Niño, crío, bebé") },
    { letter: "D", answer: "diarrea", status: 0, prequestion:("Con la "),  question: ("Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida") },
    { letter: "E", answer: "ectoplasma", status: 0, prequestion:("Con la "),  question: ("Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación") },
    { letter: "F", answer: "facil", status: 0, prequestion:("Con la "),  question: ("Que no requiere gran esfuerzo, capacidad o dificultad") },
    { letter: "G", answer: "galaxia", status: 0, prequestion:("Con la "),  question: ("Conjunto enorme de estrellas, polvo interestelar, gases y partículas") },
    { letter: "H", answer: "harakiri", status: 0, prequestion:("Con la "),  question: ("Suicidio ritual japonés por desentrañamiento") },
    { letter: "I", answer: "iglesia", status: 0, prequestion:("Con la "),  question: ("Templo cristiano") },
    { letter: "J", answer: "jabali", status: 0, prequestion:("Con la "),  question: ("Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba") },
    { letter: "K", answer: "kamikaze", status: 0, prequestion:("Con la "),  question: ("Persona que se juega la vida realizando una acción temeraria") },
    { letter: "L", answer: "licantropo", status: 0, prequestion:("Con la "),  question: ("Hombre lobo") },
    { letter: "M", answer: "misantropo", status: 0, prequestion:("Con la "),  question: ("Persona que huye del trato con otras personas o siente gran aversión hacia ellas") },
    { letter: "N", answer: "necedad", status: 0, prequestion:("Con la "),  question: ("Demostración de poca inteligencia") },
    { letter: "Ñ", answer: "señal", status: 0, prequestion:("Contiene la "),  question: ("Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.") },
    { letter: "O", answer: "orco", status: 0, prequestion:("Con la "),  question: ("Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien") },
    { letter: "P", answer: "protoss", status: 0, prequestion:("Con la "),  question: ("Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft") },
    { letter: "Q", answer: "queso", status: 0, prequestion:("Con la "),  question: ("Producto obtenido por la maduración de la cuajada de la leche") },
    { letter: "R", answer: "raton", status: 0, prequestion:("Con la "),  question: ("Roedor") },
    { letter: "S", answer: "stackoverflow", status: 0, prequestion:("Con la "),  question: ("Comunidad salvadora de todo desarrollador informático") },
    { letter: "T", answer: "terminator", status: 0, prequestion:("Con la "),  question: ("Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984") },
    { letter: "U", answer: "unamuno", status: 0, prequestion:("Con la "),  question: ("Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914") },
    { letter: "V", answer: "vikingos", status: 0, prequestion:("Con la "),  question: ("Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa") },
    { letter: "W", answer: "sandwich", status: 0, prequestion:("Contiene la "),  question: ("Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso") },
    { letter: "X", answer: "botox", status: 0, prequestion:("Contiene la "),  question: ("Toxina bacteriana utilizada en cirujía estética") },
    { letter: "Y", answer: "peyote", status: 0, prequestion:("Contiene la "),  question: ("Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos") },
    { letter: "Z", answer: "zen", status: 0, prequestion:("Con la "),  question: ("Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional") },
]

 // functions
  function welcome() {
    swal({
    title: "WELCOME TO PASAPALABRA!", button: "Continue",})
   }
  welcome();
 
  function continueIni() {
     shownCom.style="font-family: 'Lucida Console', Monaco, monospace; padding: 10px 5px 10px 15px; font-size: 25px; text-align: center;margin-top: 100px; width: 65%; margin-left: 250px";;
     document.getElementById("shownCom").innerHTML="Username: ";
     var textName=document.createElement("input");
     shownCom.appendChild(textName);
     textName.id="textN"; textName.name="textNa"; textName.type="text"; textName.style="border: 2px solid ##DEE3C3; border-radius: 5px; height: 32px; width: 300px; margin: 0 18px 0 10px; font-family: 'Lucida Console', Monaco, monospace;; font-size: 18px; padding: 10px";
     textName.placeholder="Enter your username";
     var butName=document.createElement("input");
     shownCom.appendChild(butName);
     butName.type="button"; butName.className="button"; butName.value="Confirm"; butName.id="confirmName"; butName.style="height:26px";
     butName.onclick= confName;
  }

  function confName() {
      var enterName=document.getElementById("textN").value;
      userName=enterName;
        if (userName==="") {
         userName="Anonimus";
        } 
      shownCom.innerHTML="Welcome " + userName + "!"; 
      document.getElementById("showName").innerHTML=userName;
      var p1=document.createElement("p");
      shownCom.appendChild(p1);
      p1.innerHTML="Press 'Start Game' to begin";
      var butStart=document.createElement("input");
      butStart.type="button"; butStart.id="butStart"; butStart.className="button"; butStart.name="butStart"; butStart.value="Start Game"; butStart.style="font-family: 'Lucida Console', Monaco, monospace; height: 30px"
      shownCom.appendChild(butStart);
      var butStart=document.getElementById("butStart");
      butStartGl=butStart; butStart.onclick= toPressStart;
   }
   
  function toPressStart() {
      butStartGl.disabled=true; butStartGl.style="opacity: 0.4";
      var timeBegin = 6;
      var p2=document.createElement("p"); p2.id="p2"; p2.style="font-size: 30px; margin-bottom: 10px";
      shownCom.appendChild(p2);
      var p3=document.createElement("p3"); p3.id="p3"; p3.style="color:orange; text-align: center; font-size: 35px; margin-top: 10px";
      shownCom.appendChild(p3);
      var downBegin = setInterval(function(){
      timeBegin--;
      p2.textContent="The game will begin in: ";
      p3.textContent=timeBegin;
        if(timeBegin === 0) {
        clearInterval(downBegin);
        butPasa.disabled=false; butConf.disabled=false; finish.disabled= false; enterAns.disabled=false;
        toBegin(); 
        }
      },1000);    
  } 

  function toBegin() {
        document.getElementById("rowTop").style="margin-top:25px";
        document.getElementById("ask").style="margin-top:60px";
        document.getElementById("medium").style="height: 200px;margin-top:1px";
        document.getElementById("answer").style="margin-top:85px";
        document.getElementById("showRes").style="margin-top:120px; opacity: 1";
        document.getElementById("timeout").style="opacity: 1";
        document.getElementById("butPasa").style="opacity: 1";
        document.getElementById("butConf").style="opacity: 1";
        document.getElementById("finish").style="opacity: 1";
        document.getElementById("enterAns").style="opacity: 1; border: 2px solid #254287";
        result.style=resultSty; result.innerHTML="Let's go " + userName + "!";
        off="no";
        startTime(); ask();
   }
    
  function checkAll() {
    var cont=0
    for (var i=0; i<questions.length;i++) {
      if(questions[i].status!== 0) {
        cont++;
      }
    }
     return cont;
  }

  function ask(){
   if(checkAll()<questions.length) {
      if(inc===questions.length){
        inc=0; 
          if (contNRound===0) {
            result.style=resultSty;
            result.style.backgroundColor="#254287";
            result.innerHTML="ROUND AGAIN!";
            contNRound++;
          } else{ 
          }
      }
      if(questions[inc].status===0) {
       parapAsk.innerHTML=questions[inc].question;
       letterOnly.innerHTML=questions[inc].letter;
       shownCom.style=shownComSty;
       shownCom.innerHTML=questions[inc].prequestion + questions[inc].letter;
       document.getElementsByClassName("letter")[inc].style="background-color:#E4C959;color:#63520D";
       document.getElementById("enterAns").focus();
      } else {       
        inc++;
       ask();
      }
   } else {
      shownRes();
      clearInterval(downTime);
      if (successes===questions.length) {
        shownCom.innerHTML=userName + " you have guessed all the questions!";
        window.open("images/welldone.jpg","_blank")
        swal({
         title: "Welldone!!",
         text: userName + " you have guessed all the questions!",
         icon: "success",
        })
       .then((com) => {
           startAgain();
        });
      } else {
        swal({
         title: "Rosco Completed!",
         text: "You had " + successes + " successes and " + faults + " errors.",
         icon: "info",
        })
       .then((com) => {
           startAgain();
        });
      }  
    }       
  }
  
  function answerR() {
     var answer=document.getElementById("enterAns").value; 
     if (answer===questions[inc].answer) {
       questions[inc].status="success";
       result.style=resultSty;
       result.style.backgroundColor="green";
       result.innerHTML="Correct!";
       document.getElementsByClassName("letter")[inc].style="background-color:green";
       inc++;
       successes++;
       showSuc.innerHTML=successes;
       document.getElementById("enterAns").value="";
       ask();
     }else if (answer==="pasapalabra"){
       butPasapalabra();
       ask();
     }else {
       result.style=resultSty;
       result.style.backgroundColor="#E14826";
       result.innerHTML="Incorrect!";
       questions[inc].status="fault";
       document.getElementsByClassName("letter")[inc].style="background-color:red";
       inc++;
       faults++;
       showFau.innerHTML=faults;
       document.getElementById("enterAns").value="";
       ask();
     }
  }

  function butPasapalabra() {
       document.getElementsByClassName("letter")[inc].style="background-color:#254287";
       inc++;
       result.style=resultSty;
       result.style.backgroundColor="#254287";
       result.innerHTML="PASAPALABRA!";
       document.getElementById("enterAns").value="";
       ask();      
  }

  function exit() {
      swal({
        title: "Are you sure you want to leave the game?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((Exit) => {
        if (Exit) {
            swal("Thanks for playing with us, Bye!");
            window.location.href = "images/bye.jpg";
        } else {   
        }
      });
  }

  function shownRes () {
       shownCom.style=shownComSty;
       if (userName===""){
          shownCom.innerHTML="See you soon " + userName + "!";
       } else {
          shownCom.innerHTML= userName + ", you has finished Pasapalabra with " + successes + " successes and " + faults + " errors.";
       }    
  }

  function finishGame() {
      finishes="yes";
      swal({
        title: "Do you want to finish the game?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((finish) => {
        if (finish) {
            result.style=resultSty;
            result.innerHTML="";
            off="yes";
            shownRes(); 
             swal({
            title: userName,
            text: "You had " + successes + " successes and " + faults + " errors.",
            })
            .then((start) => {
                startAgain();              
              });
        }
      });
   }

  function startTime() {
     downTime = setInterval(function(){
        timeLeft--;
        if (timeLeft<11) {
            showTime.style.color = "red";
        }
        showTime.textContent = timeLeft;
        if (timeLeft<=0) {
             clearInterval(downTime);
             off="yes";
             swal({
               title: "Time is over!",
               text: "You had " + successes + " successes and " + faults + " errors.",
               icon: "warning",
             })
              .then((timeover) => {
                startAgain();              
              });
        } else if (timeLeft!==0 && off==="yes") {
                 clearInterval(downTime);
        }  
      },1200);
  }

  function startAgain() {
      swal({
          title: "Do you want to start Pasapalabra?", buttons: true, dangerMode: true,})
            .then((Start) => {
              if (Start) {
                for (var i=0; i<questions.length; i++) {
                 document.getElementsByClassName("letter")[i].style="background-color:#254287; color:white; border: 1px solid white";
                 questions[i].status=0;
                 }
                 refresh();
                 continueIni();
              } else {
                if (off==="yes"){
                 swal({title:"Thanks for playing with us, Bye!",});
                 document.getElementById("finish").style="opacity: 0.4"; finish.disabled= true; 
                }
              }
            });  
  }

  function refresh() {
        clearInterval(downTime);
        butPasa.disabled= true; butConf.disabled= true; finish.disabled= true; enterAns.disabled=true;
        parapAsk.innerHTML=""; letterOnly.innerHTML=""; inc=0; successes=0; faults=0; contNRound=0;
        showTime.textContent = 150; showTime.style="color: white";
        timeLeft=showTime.textContent; 
        off="yes";
        result.style="background-color: #406BC7; border:none"; result.innerHTML="";
        document.getElementById("showSuccessR").innerHTML="0";
        document.getElementById("showFaultsR").innerHTML="0";
        document.getElementById("finish").style="opacity: 0.4";
        document.getElementById("answer").style="opacity: 0.65";
        document.getElementById("timeout").style="opacity: 0.65";
        document.getElementById("showRes").style="opacity: 0.65";
  }

    function showInfo() {
        swal({
          title: "INSTRUCTIONS",
          text: "- You have to introduce your name and then confirm if you want to start the game. - Will be shown a question for each letter and you have to introduce an answer. - You had to enter the words in lowercase and without accent. - If you do not know it and you want to go to the next letter, press 'Pasapalabra'. - In the case that you answer the question correctly, you will win 1 point. - To end the game press 'Finish'. - To exit the game at any time, press 'Exit'.",
          icon: "info",
        });
    }
       
   

