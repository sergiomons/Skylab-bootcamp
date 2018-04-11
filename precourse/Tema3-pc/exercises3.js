// a)
function myName(firstName) {
  console.log("Hello " + firstName);
}
myName("Sergio");

// b)
function myName(firstName) {
   return "Hello " + firstName;
}
myName("Sergio");

// c)
function myName(firstName, myAge) {
   return "Hello my name is " + firstName + " and I,m " + myAge + " years old";
}
myName("Sergio", 29);

// d)
var myName=function (firstName, myAge) {
   return "Hello my name is " + firstName + " and I,m " + myAge + " years old";
}
myName("Sergio", 29);

// e)
function myName(firstName) {
   return "My name is " + firstName;
}
var showName= myName("Sergio");

function myAge(showAge) {
     return showAge;
}
var showAge=myAge(29);
console.log(showName+ " and I,m "  + showAge " years old.");

   // OR
var myName=function (firstName, Age) {
   return "My name is " + firstName + " and I,m " + Age + " years old.";
}
myName("Sergio", 29);

var myAge=function (showAge) {
     return showAge;
}
console.log(myAge(myName("Sergio", 29)));

// e1)
var myName=function (firstName) {
   return "My name is " + firstName;
}
myName("Sergio", 29);

var myAge=function (showAge) {
     return showAge;
}
console.log(myName("Sergio") + " and I,m " + myAge((29 + Math.floor(Math.random()*10))) + " years old.");

// f)
var xName="Sergio";
var xAge=29;
 var myName=function (firstName) {
   return "My name is " + firstName;
}
myName("Sergio", 29);

var myAge=function (showAge) {
     return showAge;
}
console.log(myName(xName) + " and I,m " + myAge((xAge + Math.floor(Math.random()*10))) + " years old.");  
// g)
function fatherall() {
  var x=myName(xName);
  var y=myAge(xAge);
 return x + " and I,m " + y + " years old."; 
}
console.log(fatherall());

   //OR

var xName="Sergio";
var xAge=29;
 var allfather= function fatherall() {
  var myName=function (firstName) {
   return "My name is " + firstName;
   }
  myName("Sergio");
 var x=myName(xName);
  var myAge=function (showAge) {
     return " and I,m " + showAge + " year old."; 
  }
  myAge(29)  
  var y=myAge(xAge);
 return x + y;
}
console.log(allfather());

// h)
var xName="Sergio";
var xAge=29;
  var fatherall= function () {
    var numRandom=function () {
    	var resulRandom = Math.floor(Math.random()*10);
    	return resulRandom;
    }
    numRandom();
    var myName=function (firstName) {
     return "My name is " + firstName;
    }
    myName("Sergio");
    var myAge=function (showAge) {
     return " and I,m " + showAge + " year old."; 
    }
    myAge(29);
   var x=myName(xName);
   var y=myAge(numRandom());
  return x + y;
 }
console.log(fatherall());

// i)
var xName="Sergio";
var xAge=29;
var resulRandom = Math.floor((Math.random() * (50 - 0 + 1)) + 0);
  var fatherall= function () {
    var numRandom=function () {
      return resulRandom;
    }
    numRandom();
    var myName=function (firstName) {
     return "Your name is " + firstName;
    }
    myName("Sergio");
   var x=myName(xName);
    var myAge=function (showAge) {
     return " and you're " + showAge + " year old."; 
    }
    myAge(29)  
   var y=myAge(resulRandom);
    if (resulRandom<=20) {
      return x + y + "\n" + "Are you sure " + xName + "?";
    } else if (resulRandom>20 && resulRandom<51) {
       return x + y + "\n" + "Ok " + xName + ", you're " + resulRandom + " years old."
    } else {
       return x + y + "\n" + "What the fuck??"
       // Si sale esta última es que algo ha ido muy mal. Es imposible que salga.
    }
 }
console.log(fatherall());

// j)
var xName="Sergio";
var xAge=29;
var resulRandom = Math.floor((Math.random() * (50 - 0 + 1)) + 0);
  var fatherall= function () {
    var numRandom=function () {
      return resulRandom;
    }
    numRandom();
    var myName=function (firstName) {
     return "Your name is " + firstName;
    }
    myName("Sergio");
   var x=myName(xName);
    var myAge=function (showAge) {
     return " and you're " + showAge + " year old."; 
    }
    myAge(29)  
   var y=myAge(resulRandom);
    if (resulRandom<=20) {
      return x + y + "\n" + "Are you sure " + xName + "?";
    } else if (resulRandom>20 && resulRandom<51) {
       return x + y + "\n" + "Ok " + xName + ", you're " + resulRandom + " years old."
    } else {
       return x + y + "\n" + "What the fuck??"
       // Si sale esta última es que algo ha ido muy mal. Es imposible que salga.
    }
 }
console.log(fatherall());

// k)
var xName="Sergio";
var xAge=29;
var resulRandom = Math.floor((Math.random() * (50 - 0 + 1)) + 0);
  var fatherall= function () {
    var numRandom=function () {
      return resulRandom;
    }
    numRandom();
    var myName=function (firstName) {
     return "Your name is " + firstName;
    }
    myName("Sergio");
   var x=myName(xName);
    var myAge=function (showAge) {
     return " and you,re " + showAge + " year old."; 
    }
    myAge(29)  
   var y=myAge(resulRandom);
   
      return "The first function return: " + numRandom() + "." + "\n" + "The second function return: " + x + "." + "\n" + "The thrist function return: " + y;  
 }
console.log(fatherall());

// l)

var xName="Sergio";
var xAge=29;
var resulRandom = Math.floor((Math.random() * (50 - 0 + 1)) + 0);
  var fatherall= function () {
    var numRandom=function () {
      return resulRandom;
    }
    numRandom();
    var myName=function (firstName) {
     return "Your name is " + firstName;
    }
    myName("Sergio");
   var x=myName(xName);
    var myAge=function (showAge) {
     return " You're " + showAge + " year old."; 
    }
    myAge(29)  
   var y=myAge(resulRandom);
    if (xName!=="Sergio") {
       return "The second function return: " + xName+ "; You are not Sergio!!";
    }
      return "The first function return: " + numRandom() + "." + "\n" + "The second function return: " + x + "." + "\n" + "The thrist function return: " + y;  
 }
console.log(fatherall());

// m)

var xName="Sergio";
var xAge=29;
var xRandom = Math.floor((Math.random() * (50 - 0 + 1)) + 0);

 function generateRandom(){    
    return xRandom; 
 }
 var fatherall= function () {
    var numR= generateRandom();    
    var myName=function (firstName) {
     return "Your name is " + firstName;
    }
    myName("Sergio");
   var x=myName(xName);
    var myAge=function (showAge) {
     return " You're " + showAge + " year old."; 
    }
    myAge(29)  
   var y=myAge(xRandom);
  
      return x + y
  }
console.log(fatherall());

// n)
var xName="Sergio";
var xAge=29;
var xRandom = Math.floor((Math.random() * (50 - 0 + 1)) + 0);

 function generateRandom(){    
    return xRandom; 
 }
 var fatherall= function () {
    var numR= generateRandom();    
  
    var myName=function (firstName) {
     return "Your name is " + firstName;
    }
    myName("Sergio");
   var x=myName(xName);
    var myAge=function (showAge) {
     return " You're " + showAge + " year old."; 
    }
    myAge(29)  
   var y=myAge(xRandom);
      return x + y + " " + generateRandom();  
  }
console.log(fatherall());

// ñ)
var xName="Sergio";
var xAge=29;
var xRandom = Math.floor((Math.random() * (50 - 0 + 1)) + 0);

 function generateRandom(){    
    return xRandom; 
 }
 var fatherall= function () {
    var numR= generateRandom();  
    var myName=function (firstName) {
     return "Your name is " + firstName;
    }
    myName("Sergio");
   var x=myName(xName);
    var myAge=function (showAge) {
     return "You're " + showAge + " year old"; 
    }
    myAge(29)  
    var y=myAge(xRandom);
     var allresults=[];
      allresults.push(x,y,generateRandom())
   return  allresults.join(", ");  
  }
console.log(fatherall());

// o)
var xName="Sergio";
var xAge=29;
var allResults=[];

 var fatherAll= function () {
  var xRandom = Math.floor((Math.random() * (50 - 0 + 1)) + 0);   
  
    function generateRandom(){    
    return xRandom; 
    }
  var numR= generateRandom();

    var myName=function (firstName) {
     return "Your name is " + firstName;
    }
    myName("Sergio");
  var x=myName(xName);

    var myAge=function (showAge) {
     return "You,re " + showAge + " year old"; 
    }
    myAge(29) 
  var y=myAge(xRandom); 
   
  function pusheo() {
    allResults.push(x,y,numR);
    return allResults;
  }
  return pusheo();
} //cierre de fatherAll

function callFather() {
  var addR=allResults.push("hello from the side dark...")
   return fatherAll();
}
callFather();


// p)


function fatherAll() {
   var xName="Sergio";
   var xAge=29;
   var allResults=[];

   var names = ["hulk", "ironMan", "pinocho","spiderman"];
   var selectedName=[Math.floor(Math.random()*names.length)];
   var selectedName2=[Math.floor(Math.random()*names.length)];
   var selecN1=Math.floor((Math.random() * (50 - 0 + 1)) + 0);
   var selecN2=Math.floor((Math.random() * (50 - 0 + 1)) + 0);
   var xRandom = Math.floor((Math.random() * (50 - 0 + 1)) + 0);   
   var resultMatch={}


      function generateRandom(){    
        return xRandom; 
      }
 
      var myName=function (firstName) {
        return "Your name is " + firstName;
      }
    myName("Sergio");
  var x=myName(xName);

      var myAge=function (showAge) {
        return "You,re " + showAge + " year old"; 
      }
    myAge(29) 
  var y=myAge(xRandom); 
   
  allResults.push(x,y,generateRandom());

      var callFather= function (o) {
        return o;
      }

      function assigRandom(a) {
        return a
      }

      function charapter(name, mark) {
         this.name = name;
         this.mark = mark;
     }
      
        function matchCharapter (){
       MarkNum1= assigRandom(selecN1)
       MarkNum2= assigRandom(selecN2)
       character1=callFather(selectedName)
       character2=callFather(selectedName2)
       if(MarkNum1 > MarkNum2) {
        var asdf = new charapter(names[character1], MarkNum1);
         var ken = new charapter(names[character2], MarkNum2);
         console.log(asdf)
         console.log("is better than")
         console.log(ken)
          resultMatch["name"]=names[character1] + ": " + MarkNum1 + " is better than " + names[character2] + ": " + MarkNum2
          resultMatch["mark"]="fsdf"
          console.log(resultMatch)
       } else if(MarkNum1< MarkNum2) {
           resultMatch[0]=names[character1] + ": " + MarkNum1 + " is worse than " + names[character2] + ": " + MarkNum2
           resultMatch[1]="dsa"
          console.log(resultMatch)     
       } else {
        resultMatch[0]="The same person: equal battle"
          console.log(resultMatch)  
     } 
    }
   matchCharapter();
  }
fatherAll();










function allFather() {

var names = ['hulk', 'ironMan', 'pinocho',"spiderman"];
var selectedName=[Math.floor(Math.random()*names.length)];
var selectedName2=[Math.floor(Math.random()*names.length)];
 
  function getRandom1() {
   return selectedName;
  }

  function getRandom2() {
   return selectedName2;
  }

   function callFather(){
      
      var sel1=getRandom1();
      var sel2=getRandom2();
      if(sel1 > sel2) {
          console.log(names[sel1] + " is better than " + names[sel2])
    } else if(sel1 === sel2) {
           console.log(names[sel1] + " is equal than " + names[sel2])
     } else {
        console.log(names[sel1] + " is worse than " + names[sel2])
     }

  }
}
callFather();

function gandFather(selectedName,selectedName2){
    
 return fatherAll();
// p1)

// p2)


// o
var xName="Sergio";

var xAge=29;
var allResults=[];


 var fatherAll= function () {


  var xRandom = Math.floor((Math.random() * (50 - 0 + 1)) + 0);   
  

    function generateRandom(){    
    return xRandom; 
    }
  var numR= generateRandom();

    var myName=function (firstName) {
     return "Your name is " + firstName;
    }
    myName("Sergio");
  var x=myName(xName);

    var myAge=function (showAge) {
     return "You,re " + showAge + " year old"; 
    }
    myAge(29) 
  var y=myAge(xRandom); 
   
 allResults.push(x,y,numR);
  return allResults;
  }
 var callFather= function (o) {
      var addR=allResults.push("hello from the side dark...")
   return fatherAll();
  }

callFather();
callFather();




//Preguntas

function allFather(selecN) {
   var names = ['hulk', 'ironMan', 'pinocho',"spiderman"]
      var selectedName=[Math.floor(Math.random()*names.length)];
      var selectedName2=[Math.floor(Math.random()*names.length)];
      console.log(selecN)
}
allFather(selectedName)

