
function pasapalabra(){
  var questions = [
      { letter: "a", answer: "abducir", status: 0, question: ("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien") },
      { letter: "b", answer: "bingo", status: 0, question: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso") },
      { letter: "c", answer: "churumbel", status: 0, question: ("CON LA C. Niño, crío, bebé") },
  ]
  
  var correct = 0;
  var incorrect = 0;
  var names=[];

  function name(){
    var n= prompt("Your name?");
    names.push(n);
  }
  name();

  // pregunta
  function ask(question){
      var answer = prompt(question)
      return answer
  }

  // checkea resultados
  function check(answer, pos){
    if(questions[pos].answer === answer){
      questions[pos].status=1;
      console.log("BIEN")
      correct++
      

    }else if(answer === "pasapalabra"){
      //questions[pos].status=2;
      console.log("pasapalabra")

    }else if(questions[pos].answer !== answer){
      questions[pos].status=1;
      console.log("oooooh...")
      incorrect++
    }
  }
  //2a ronda de las del pasapalabra
  function round2(){

    if(questions[pos].status===0){
      again()
    }else if(pos===questions.length-1 && correct+incorect===questions.length){
      console.log("FINAL")
    }else if(pos===questions.length-1){
      ask()
    }
  }


  //llama en bucle
  function again(){
    
    for (var i = 0; i < questions.length; i++) {
    var answer = ask(questions[i].question)
    check(answer, i)
    }
    
     console.log("Has acertado "+correct+" preguntas y has fallado "+incorrect+" preguntas")
  }
  again();
}
pasapalabra()