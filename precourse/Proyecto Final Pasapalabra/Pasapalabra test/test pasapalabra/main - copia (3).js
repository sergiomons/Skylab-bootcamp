  //Global vars
  var butPasa=document.getElementById("butPasa");
  var butConf=document.getElementById("butConf");
  var finish=document.getElementById("finish");
  var exitV=document.getElementById("exit");
  var shownCom=document.getElementById("shownCom");
  var parapAsk=document.getElementById("parapAsk");
  var letterOnly=document.getElementById("letterOnly");
  var result=document.getElementById("result");
  var shownComSty="padding: 10px 5px 10px 15px; font-size: 30px; text-align: center;margin-top: 70px; width: 65%; margin-left: 250px";
  var resultSty="padding: 2px 2px 2px 2px; font-size: 23px; text-align: center;margin-top: 60px; border: 2px solid #DEE3C3; background-color:#254287";
  var userName="";
  var name="";
  var successes=0;
  var faults=0;
  var inc=0;
  var contNRound=0;
  var downTime ="";
  var off= "no";
  var timeLeft=15;
  butPasa.disabled= true;
  butConf.disabled= true;
  finish.disabled= true;
  var showSuc=document.getElementById("showSuccessR");
  var showFau=document.getElementById("showFaultsR");
  document.getElementById("showFaultsR").innerHTML=faults;
  
  var questions = [
    { letter: "A", answer: "abducir", status: 0, question: ("Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien") },
    { letter: "B", answer: "bingo", status: 0, question: ("Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso") },
    { letter: "C", answer: "churumbel", status: 0, question: ("Niño, crío, bebé") },
    { letter: "D", answer: "diarrea", status: 0, question: ("Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida") },
    { letter: "E", answer: "ectoplasma", status: 0, question: ("Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación") },
    { letter: "F", answer: "facil", status: 0, question: ("Que no requiere gran esfuerzo, capacidad o dificultad") },
    { letter: "G", answer: "galaxia", status: 0, question: ("Conjunto enorme de estrellas, polvo interestelar, gases y partículas") },
    { letter: "H", answer: "harakiri", status: 0, question: ("Suicidio ritual japonés por desentrañamiento") },
    { letter: "I", answer: "iglesia", status: 0, question: ("Templo cristiano") },
    { letter: "J", answer: "jabali", status: 0, question: ("Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba") },
    { letter: "K", answer: "kamikaze", status: 0, question: ("Persona que se juega la vida realizando una acción temeraria") },
    { letter: "L", answer: "licantropo", status: 0, question: ("Hombre lobo") },
    { letter: "M", answer: "misantropo", status: 0, question: ("Persona que huye del trato con otras personas o siente gran aversión hacia ellas") },
    { letter: "N", answer: "necedad", status: 0, question: ("Demostración de poca inteligencia") },
    { letter: "Ñ", answer: "señal", status: 0, question: ("Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.") },
    { letter: "O", answer: "orco", status: 0, question: ("Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien") },
    { letter: "P", answer: "protoss", status: 0, question: ("Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft") },
    { letter: "Q", answer: "queso", status: 0, question: ("Producto obtenido por la maduración de la cuajada de la leche") },
    { letter: "R", answer: "raton", status: 0, question: ("Roedor") },
    { letter: "S", answer: "stackoverflow", status: 0, question: ("Comunidad salvadora de todo desarrollador informático") },
    { letter: "T", answer: "terminator", status: 0, question: ("Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984") },
    { letter: "U", answer: "unamuno", status: 0, question: ("Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914") },
    { letter: "V", answer: "vikingos", status: 0, question: ("Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa") },
    { letter: "W", answer: "sandwich", status: 0, question: ("Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso") },
    { letter: "X", answer: "botox", status: 0, question: ("Toxina bacteriana utilizada en cirujía estética") },
    { letter: "Y", answer: "peyote", status: 0, question: ("Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos") },
    { letter: "Z", answer: "zen", status: 0, question: ("Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional") },
]
 // functions
  function welcome() {
    swal({
    title: "WELCOME TO PASAPALABRA!", button: "Continue",})
   }
  welcome();
 
  function continueIni() {
     shownCom.style="padding: 10px 5px 10px 15px; font-size: 25px; text-align: center;margin-top: 130px; width: 65%; margin-left: 250px";;
     document.getElementById("shownCom").innerHTML="Username: ";
     var textName=document.createElement("input");
     shownCom.appendChild(textName);
     textName.id="textN"; textName.name="textNa"; textName.type="text"; textName.style="border: 2px solid ##DEE3C3; border-radius: 5px; height: 29px; width: 300px; margin: 0 10px 0 10px; font-family: arial; font-size: 18px; padding: 10px";
     textName.placeholder="Enter your username";
     var butName=document.createElement("input");
     shownCom.appendChild(butName);
     butName.type="button"; butName.className="button"; butName.value="Confirm"; butName.id="confirmName";
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
      butStart.type="button"; butStart.className="button"; butStart.name="butStart"; butStart.value="Start Game";
      shownCom.appendChild(butStart);
      butStart.onclick= StartG;
   }

  function StartG() {
      butPasa.disabled=false; butConf.disabled=false; finish.disabled= false;
      positionG();         
  } 

  function positionG() {
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
        startTime();
        ask();
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
      if(inc===questions.length-1){
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
       shownCom.innerHTML="Con la " + questions[inc].letter;
       document.getElementsByClassName("letter")[inc].style="background-color:#E4C959;color:#63520D";
      } else {       
        inc++;
       ask();
      }
   } else {
      shownRes();
      swal({
        title: "Rosco Completed!",
        text: "You had " + successes + " successes and " + faults + " errors.",
        icon: "success",
        })
       .then((com) => {
           startAgain();
        });  
   }       
  }
  
  function answerR() {
     var answer=document.getElementById("enterAns").value; 
     if (answer===questions[inc].answer) {
       questions[inc].status="success";
       result.style=resultSty;
       result.style.backgroundColor="green"
       result.innerHTML="Correct!"
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
       result.innerHTML="Incorrect!"
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
          swal({
            title: userName,
            text: "You had " + successes + " successes and " + faults + " errors.",
          })
            .then((message) => {
             swal("Thanks for playing with us, Bye!");
              refresh();
             shownCom.style=shownComSty;
             shownCom.innerHTML="See you soon " + userName + "!";
             for (var i=0; i<questions.length; i++) {
              document.getElementsByClassName("letter")[i].style="background-color:#254287; color:white; border: 1px solid white";
              questions[i].status=0;
             }
            });
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
        } else {   
        }
      });
   }

  function startTime() {
     downTime = setInterval(function(){
        timeLeft--;
        if (timeLeft<11) {
            document.getElementById("showTime").style.color = "red";
        }
        document.getElementById("showTime").textContent = timeLeft;
        if (timeLeft===0) {
             clearInterval(downTime);
             off="yes";
             swal({
               title: "Time is over!",
              text: "You had " + successes + " successes and " + faults + " errors.",
               icon: "warning",
             })
              .then((finish) => {
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
                 swal("Thanks for playing with us, Bye!");
                 shownCom.style=shownComSty;
                 shownCom.innerHTML="See you soon " + userName + "!";
                refresh();
                }
              }
            });  
  }

  function refresh() {
        butPasa.disabled= true;
        butConf.disabled= true;
        finish.disabled= true;
        parapAsk.innerHTML="";
        letterOnly.innerHTML="";
        inc=0;
        successes=0;
        faults=0;
        inc=0;
        contNRound=0;
        timeLeft=15;
        off="yes";
        result.style="background-color: #3C64C5; border:none";
        result.innerHTML="";
        clearInterval(downTime);
        document.getElementById("showTime").innerHTML="15";
        document.getElementById("showSuccessR").innerHTML="0";
        document.getElementById("showFaultsR").innerHTML="0";
        document.getElementById("showTime").style="color:black";
        document.getElementById("finish").style="opacity: 0.4";
        document.getElementById("answer").style="opacity: 0.65";
        document.getElementById("timeout").style="opacity: 0.65";
        document.getElementById("showRes").style="opacity: 0.65";
  }

    function showInfo() {
        swal({
          title: "INSTRUCTIONS",
          text: "- You have to introduce your name and then confirm if you want to start the game. - The program will launch a question for each letter and you have to introduce an answer. - You had to enter the words in lowercase and without accent. - If you do not know it and you want to go to the next letter, press 'Pasapalabra'. - In the case that you answer the question correctly, you will win 1 point.",
          icon: "info",
        });
    }
       
   
/*
} else if (timeLeft!==0 && stop==="yes") {
                 stopTime();

    }

    function stopTime() {
      clearInterval(downTime);
    }

var remainLetters=((questions.length)-(successes-faults));
   function refresh() {
        butPasa.disabled= true;
        butConf.disabled= true;
        finish.disabled= true;
        parapAsk.innerHTML="";
        letterOnly.innerHTML="";
        inc=0;
        successes=0;
        faults=0;
        for (var i=0; i<questions.length; i++) {
           document.getElementsByClassName("letter")[i].style="background-color:#254287";
           questions[i].status=0;
        }
        continueIni();
   }
   */
/*
  function change() {
    document.getElementsByClassName("letter")[inc].style="background-color:green";
    document.getElementById("as").style="background-color:green";
    console.log(document.getElementById("letterAll").children[2]);
    container.appendChild(document.createElement("br"));
    background: linear-gradient(#e5f4f9, #b2e0ef, #7fcce5, #0089b7, #0099CC, #b2e0ef);
 }
*/

  /*    También vale:
      var btn = document.querySelector('input');
       btn.addEventListener('click', disableBtn);

    function disableBtn() {
      btn.disabled = true;
     btn.value = 'Disabled';
      window.setTimeout(function() {
      btn.disabled = false;
     btn.value = 'Enabled';
     }, 3000);
     }
     }
*/



