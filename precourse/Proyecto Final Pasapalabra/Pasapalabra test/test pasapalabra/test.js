
  var div = 360 / 27; //cantidad de circulitos
    var radius = 200; //radio de los circulitos
    var letterAll = document.getElementById('letterAll'); //
    var offsetToParentCenter = parseInt(letterAll.offsetWidth / 2);  //assumes parent is square
    var offsetToChildCenter = 20; //posición del círculo padre
    var totalOffset = offsetToParentCenter - offsetToChildCenter; //
    
    for (var i = 1; i <= 27; ++i){
        var childdiv = document.createElement("div");
        childdiv.id="divN";
        childdiv.className = "div2";
        childdiv.style.position = 'absolute';
        // childdiv.innerHTML = "A"; //aquí metemos las letras
        var y = Math.sin((div * i) * (Math.PI / 180)) * radius;
        var x = Math.cos((div * i) * (Math.PI / 180)) * radius;
        childdiv.style.top = (y + totalOffset).toString() + "px";
        childdiv.style.left = (x + totalOffset).toString() + "px";
        letterAll.appendChild(childdiv);
        
      }//Globals vars
      
      document.getElementsByClassName("div2")[19].innerText="A"
      document.getElementsByClassName("div2")[20].innerText="B"
      document.getElementsByClassName("div2")[21].innerText="C"
      document.getElementsByClassName("div2")[22].innerText="D"
      document.getElementsByClassName("div2")[23].innerText="E"
      document.getElementsByClassName("div2")[24].innerText="F"
      document.getElementsByClassName("div2")[25].innerText="G"
      document.getElementsByClassName("div2")[26].innerText="H"
      document.getElementsByClassName("div2")[0].innerText="I"
      document.getElementsByClassName("div2")[1].innerText="J"
      document.getElementsByClassName("div2")[2].innerText="K"
      document.getElementsByClassName("div2")[3].innerText="L"
      document.getElementsByClassName("div2")[4].innerText="M"
      document.getElementsByClassName("div2")[5].innerText="N"
      document.getElementsByClassName("div2")[6].innerText="Ñ"
      document.getElementsByClassName("div2")[7].innerText="O"
      document.getElementsByClassName("div2")[8].innerText="P"
      document.getElementsByClassName("div2")[9].innerText="Q"
      document.getElementsByClassName("div2")[10].innerText="R"
      document.getElementsByClassName("div2")[11].innerText="S"
      document.getElementsByClassName("div2")[12].innerText="T"
      document.getElementsByClassName("div2")[13].innerText="U"
      document.getElementsByClassName("div2")[14].innerText="V"
        document.getElementsByClassName("div2")[15].innerText="W"
         document.getElementsByClassName("div2")[16].innerText="X"
          document.getElementsByClassName("div2")[17].innerText="Y"
          document.getElementsByClassName("div2")[18].innerText="Z"
      

  var name=""
  var successes=0
  var faults=0
  var inc=0;
  var incL=19;
  var inGame="no";
  
  var questions = [
    { letter: "A", answer: "abducir", status: 0, question: ("Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien") },
    { letter: "B", answer: "bingo", status: 0, question: ("Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso") },
    { letter: "C", answer: "churumbel", status: 0, question: ("Niño, crío, bebé")}
    ]
 
 function continueIni() {
    document.getElementById("shownCom").innerHTML="asdfa";
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
  if (incL===26) {
     incL===0
      }
      inGame="yes";
   if(checkAll()<questions.length) {
      if(inc===questions.length){
        inc=0; 
       
        alert("     ROUND AGAIN!");
        console.log("     ROUND AGAIN!");
      }
      if(questions[inc].status===0) {

       document.getElementById("parapAsk").innerHTML=questions[inc].question;
       document.getElementById("letterOnly").innerHTML=questions[inc].letter;
       
       
       
      } else {       
        inc++;
       ask();
      }
   } else {
      alert(name + ", you has completed Pasapalabra!" + "\n" + "You had " + successes + " successes and " + faults + " errors.");
       inGame="no";
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
          var answer=document.getElementById("enterAns").value; 
          if (answer===questions[inc].answer) {
            alert("            Correct! You have won 1 point.");
            console.log("            Correct! You have won 1 point.");
            questions[inc].status="success";
            document.getElementsByClassName("letter")[inc].style="background-color:green";
            document.getElementsByClassName("div2")[incL].style.backgroundColor="green";
            inc++;
            successes++;
            incL++
            document.getElementById("enterAns").value="";
            ask();
          }else if (answer==="pasapalabra"){
            inc++;
            incL++
            alert("              PASAPALABRA");
            console.log("              PASAPALABRA");
            document.getElementById("enterAns").value="";
            ask();
          }else {
            alert("            Your answer is incorrect.");
            console.log("            Your answer is incorrect.");
            questions[inc].status="fault";
            document.getElementsByClassName("letter")[inc].style="background-color:red";
            document.getElementsByClassName("div2")[incL].style.backgroundColor="red";
            inc++;
            faults++;
            incL++
            document.getElementById("enterAns").value="";
            ask();
          }
  }

  function butPasapalabra() {
         if (inGame==="yes") {
             inc++;
            alert("              PASAPALABRA");
            console.log("              PASAPALABRA");
            ask();
          }
  }

  function change() {
    document.getElementsByClassName("letter")[inc].style="background-color:green";
    document.getElementById("as").style="background-color:green";
    console.log(document.getElementById("letterAll").children[2]);

 }





