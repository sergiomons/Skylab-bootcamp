function calculator(num1,num2) { 

  function sum() {  //Hacer todo en funciones.
  }

 var Sum=num1+num2;
 var Subtract=num1-num2;
 var Multiply=num1*num2;
 var Division=num1/num2;
  
 var Sumstring="Sum = ";
 var Subtstring="Subtract = ";
 var Multstring="Multiply = ";
 var Divstring="Division = ";
  
  var operations=[Sum,Subtract,Multiply,Division];
  var operstring=[Sumstring,Subtstring,Multstring,Divstring];  

   if(isNaN(num1)||isNaN(num2)) {

       return "Introduce a valid number";  
     
  
   } else if ((num1=="")&&(num2!==isNaN(num2))) {
  
       return "Square1 = " + Math.pow(num2,2);
  

   } else if ((num2=="")&&(num1!==isNaN(num1))) {
  
       return "Square2 = " + Math.pow(num1,2);
  
  
   } else  {
  
      for (var i=0;i<operations.length;i++) { 
        if   (operations[i]!==Math.floor(operations[i])) {
             console.log(operstring[i] + operations[i].toFixed(3));

        } else  {
          console.log(operstring[i] + operations[i]);
            }
         }
      }
    }

calculator(3,5);
      
//PRO
function father() {
var results="";

function calculator() { 

 var args=arguments;

  function sum() {
     sumN=args[0];
    for (var i=0;i<args.length-1;i++) {
     sumN+=args[i+1];
    }
   return sumN;
}

 function substract() {
    subsN=args[0];
    for (var i=0;i<args.length-1;i++) {
     subsN-=args[i+1];
    }
   return subsN;
}
 
/*
function substract() {
    subsN=arguments[0]*2;
    for (i in arguments) {
    console.log(subsN)
    console.log(i)
     subsN-=arguments[i];
    }
   return subsN;
}
  substract(2,4,5);
  */

 function multiply() {
   multN=args[0];
    for (var i=0;i<args.length-1;i++) {
     multN*=args[i+1];
    }
   return multN;
}

  function division() {
   divN=args[0];
    for (var i=0;i<args.length-1;i++) {
     divN/=args[i+1];
    }
   return divN;
}
  
 var Sumstring="Sum = ";
 var Subtstring="Subtract = ";
 var Multstring="Multiply = ";
 var Divstring="Division = ";
  
  var operations=[sum(),substract(),multiply(),division()];
  var operstring=[Sumstring,Subtstring,Multstring,Divstring];  
  
      for (var i=0;i<operations.length;i++) { 
        if   (operations[i]!==Math.floor(operations[i])) {
             console.log(operstring[i] + operations[i].toFixed(3));
        } else  {
          console.log(operstring[i] + operations[i]);
        }
      }
    }
calculator(3,5,8);

function reAgain() {
        var again=confirm("Would you like to do another operation?")
        if (again) {
          save1=calculator(3,5,8);
          results+=calculator(2,4)
         console.log(save1);
         console.log(results);
        reAgain();
        }
       
      }
reAgain();
}
father();









var num1=2.4;
var num2=2;


function operations(num1,num2) {

  var sum=num1+num2;
  var subt=num1-num2;
  var mult=num1*num2;
  var div=num1/num2;
  
  var Sum="Sum = " + sum;
  var Subtract="Subtract = " + subt;
  var Multiply="Multiplication = " + mult;
  var Division="Division = " + div;

    var result=[Sum,Subtract,Multiply,Division];

  if(num.toString().indexOf('.') !== -1){
  console.log(parseFloat(sum).toFixed(3))
}else{
  console.log('no tiene')
      
  if (sum!==Math.floor(sum)) {
      sum=parseFloat(sum).toFixed(3);
  } else {
     sum=Math.floor(sum);
  }
 
 for (var i=0;i<result.length;i++) { 
      
   if(isNaN(num1)||isNaN(num2)) {

   return "Introduce a valid number";   
  
   } else if ((num1=="")&&(num2!==isNaN(num2))) {
  
       return "Square1 = " + Math.pow(num2,2);
  

   } else if ((num2=="")&&(num1!==isNaN(num1))) {
  
       return "Square2 = " + Math.pow(num1,2);
  
  
   } else {
  
        if (sum!==Math.floor(sum)) {
          return  parseFloat(sum).toFixed(3);
        } else {

        }  if (sum!==Math.floor(sum)) {
      sum=parseFloat(add).toFixed(3);  
          }
      return result;
   }
  }
 }
  
  
    
  console.log(operations(num1,num2).toString().replace(/,/g,"; "));
    
  console.log(operations(num1,num2).toString().replace(/,/g,"; "));


  