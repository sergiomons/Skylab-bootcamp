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
  var numRanFixed;
  var numPass=[];
  var offIntro="no";
  butPasa.disabled= true;
  butConf.disabled= true;
  finish.disabled= true;
  enterAns.disabled=true;
  var showSuc=document.getElementById("showSuccessR");
  var showFau=document.getElementById("showFaultsR");
  document.getElementById("showFaultsR").innerHTML=faults;
  var audioConf = new Audio('audio/confirm.mp3');
  var pasapal = new Audio('audio/pasapalabra.mp3');
  var audFault = new Audio('audio/fault.mp3');
  var audSucc = new Audio('audio/success.mp3');
  var audGameO = new Audio('audio/gameover.mp3');
  var audIntro = new Audio('audio/introTop.mp3');
  var audLefTime = new Audio('audio/leftime.mp3');
  var audCoin = new Audio('audio/coin.mp3');
  var audLetsGo = new Audio('audio/letsgo.mp3');
  var audBye = new Audio('audio/bye.mp3');
  var audApla = new Audio('audio/aplausos.mp3');

  audIntro.play();

 // functions


  function welcome() {
    swal({
    title: "WELCOME TO PASAPALABRA!", button: "Continue",})
   }
  welcome();
 
  function continueIni() {
     
     audIntro.pause();
     audioConf.play();
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
      audioConf.play();
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
      audCoin.play();
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
        if (contNRound===0) {
        var randomNumber=getRandom();
        numRanFixed=randomNumber;
        numPass.push(numRanFixed);
       parapAsk.innerHTML=questions[inc].question[numRanFixed];
       } 
       parapAsk.innerHTML=questions[inc].question[numPass[inc]];
       letterOnly.innerHTML=questions[inc].letter.toUpperCase();
       shownCom.style=shownComSty;
       shownCom.innerHTML=questions[inc].prequestion + questions[inc].letter.toUpperCase();
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
        audApla.play();
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
     if (answer===questions[inc].answer[numRanFixed]) {
       audSucc.play();
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
       audFault.pause();
       audFault.play();
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
       pasapal.play();
       document.getElementsByClassName("letter")[inc].style="background-color:#254287";
       inc++;
       result.style=resultSty;
       result.style.backgroundColor="#254287";
       result.innerHTML="PASAPALABRA!";
       document.getElementById("enterAns").value="";
       ask();      
  }

   function getRandom() {       
        return Math.floor(Math.random() * (((questions[inc].question.length -1) - 0) + 1) + 0);
     }

  function exit() {
      pasapal.play();
      swal({
        title: "Are you sure you want to leave the game?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((Exit) => {
        if (Exit) {
            audLefTime.pause(); audGameO.pause(); 
            swal("Thanks for playing with us, Bye!");
            window.location.href = "images/bye.jpg";
            audBye.play();
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
      pasapal.play();
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
     audLetsGo.play();
     downTime = setInterval(function(){
        timeLeft--;
        if (timeLeft<11) {
            audLefTime.play();
            showTime.style.color = "red";
        }
        showTime.textContent = timeLeft;
        if (timeLeft<=0) {
             audLefTime.pause();
             audGameO.play();
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
      audioConf.play();
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
                 audLefTime.pause(); audGameO.pause(); 
                 audBye.play();
                 swal({title:"Thanks for playing with us, Bye!",});
                 document.getElementById("finish").style="opacity: 0.4"; finish.disabled= true; 
                 document.getElementById("answer").style="opacity: 0.65";butPasa.disabled= true; butConf.disabled= true; enterAns.disabled=true;
                }
              }
            });  
  }

  function refresh() {
        clearInterval(downTime);
        audLefTime.pause(); audGameO.pause(); 
        butPasa.disabled= true; butConf.disabled= true; finish.disabled= true; enterAns.disabled=true;
        parapAsk.innerHTML=""; letterOnly.innerHTML=""; inc=0; successes=0; faults=0; contNRound=0; numPass=[]; numRanFixed="";
        showTime.textContent = 25; showTime.style="color: white";
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
        audioConf.play();
        swal({
          title: "INSTRUCTIONS",
          text: "- You have to introduce your name and then confirm if you want to start the game. - Will be shown a question for each letter and you have to introduce an answer. - You had to enter the words in lowercase and without accent. - If you do not know it and you want to go to the next letter, press 'Pasapalabra'. - In the case that you answer the question correctly, you will win 1 point. - To end the game press 'Finish'. - To exit the game at any time, press 'Exit'.",
          icon: "info",
        });
    }
       
   

