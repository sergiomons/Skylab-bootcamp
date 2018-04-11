var screen=document.getElementById('screenOper')
var numInital="0";
 screen.innerHTML = numInital
 var addN=[];
 var saveN1="0"
 var o=false;

function showNums (n){
	
	if ((addN.length<1) && (n===0)) {
		buttonC();
	} else {
           addN.push(n);
	       console.log(addN);
            var addNums= screen.innerHTML = addN.join("");
            console.log(addNums)
            return addNums;
           
     }
}
function buttonC () {
    var butC=screen.innerHTML = numInital;
    addN=[];  
    saveN1="0";
    o=false;
}

function recoil() {
	if (addN.length<2) {	
		screen.innerHTML = numInital
        buttonC();
	} else{
     addN.pop();
     screen.innerHTML = addN.join("");
    }
}
 function squart () {
 	 var squartN= Math.sqrt(addN.join(""));
 	 screen.innerHTML = squartN;
     addN=squartN
    


 }

 function x2() {
 	 var squareN= Math.pow(addN.join(""),2);
 	 screen.innerHTML = squareN;
 }

 function dot() {
 	   console.log(addN.indexOf("."))
 	   if (addN.indexOf(".")!==-1) {
 	   	   screen.innerHTML = addN.join("");
 	   } else {
 	      if (screen.innerHTML === numInital) {
 		      addN.push("0",".")
 		      screen.innerHTML = addN.join("");
 	      } else {
 		      addN.push(".")
 		      screen.innerHTML = addN.join("");
 	      } 
 	   }  
 }

 function operations(oper) {

 	if (addN.length<1 && oper==="-") {
 		 addN.unshift("-")
 	}  else {
 	    result();
        saveN1= addN.join("");
        console.log(saveN1)
        o=oper
        addN=[];
        console.log(o);
 }
}
function result() {
         if (o===false) { 
            screen.innerHTML= addN.join("");	
            } else { 
            var res=saveN1+o+addN.join(""); 
            console.log(addN.join(""))
            var resul=eval(res) 
              screen.innerHTML=resul 
              addN=[resul];
              o=false; 
              
            }
     }