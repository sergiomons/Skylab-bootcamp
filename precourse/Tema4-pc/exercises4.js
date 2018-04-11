
// a)
function showNums(){
	var nums = [1,2,3,4,5,6,7,8,9]
    var pairs=[];
    for(var i = 0; i < nums.length-1; i++){
        pairs.push((i + 1) + "º " + "pair is: " + nums[i]*(2) + " - " + nums[i+1]*2)
    }
  console.log(pairs)
}
showNums();

// OR with map
function showNums(){   
	var nums = [1,2,3,4,5,6,7,8,9]
    var pairs=[];
    var arrMult=nums.map(x=> x *2)
    for(var i = 0; i < nums.length-1; i++){
        pairs.push((i + 1) + "º " + "pair is: " + arrMult[i] + " - " + arrMult[i+1])   
    }  
  console.log(pairs.join("; "))
}
showNums();

// a1)
function showNums(){
    var nums = [n1,n2,n3,n4,n5,n6,n7,n8,n9]
    var pairs=[];
    var arrMult=nums.map(x=> x *2)
    for(var i = 0; i < nums.length-1; i++){
        pairs.push((i + 1) + "º " + "pair is: " + arrMult[i] + " - " + arrMult[i+1])   
    }  
  console.log(pairs.join("; "))
}
showNums(1,2,3,4,5,6,7,8,9);

// a2)
function showNums(){
    var nums = arguments
    var numsS=[]
    for(var i = 0; i < arguments.length; i++){
        numsS.push(arguments[i])
    }
    console.log(numsS)
    var pairs=[];
    numsS=numsS.map(x=> x *2)
    for(var i = 0; i < numsS.length-1; i++){
        pairs.push((i + 1) + "º " + "pair is: " + numsS[i] + " - " + numsS[i+1])   
    }  
  console.log(pairs.join("; "))
}
showNums(1,2,3,4,5,6,7,8,9);

// a3)
  function showNums(){
    var nums = arguments
    var numsS=[]
    for(var i = 0; i < arguments.length; i++){
        numsS.push(arguments[i])
    }
    console.log(numsS)
    var pairs=[];
    numsS=numsS.map(x=> x *numsS[9])
    for(var i = 0; i < (numsS[10]-1); i++){
        pairs.push((i + 1) + "º " + "pair is: " + numsS[i] + " - " + numsS[i+1])   
    }  
  console.log(pairs.join("; "))
}
showNums(1,2,3,4,5,6,7,8,9,2,3);

function showNums(n1,n2,n3,n4,n5,n6,n7,n8,n9,m1,d1){
    var nums = [n1,n2,n3,n4,n5,n6,n7,n8,n9]
    var pairs=[];
    var arrMult=nums.map(x=> x *m1)
    for(var i = 0; i < d1; i++){
        pairs.push((i + 1) + "º " + "pair is: " + arrMult[i] + " - " + arrMult[i+1])   
    }  
  console.log(pairs.join("; "))
}
showNums(1,2,3,4,5,6,7,8,9,2,3);

// b)
function fibonac(n) {
  
  var resultNums=[0,1] 
  
  for (var i=1; i<n; i++){
   var fiboNums=resultNums[i] + resultNums[i-1];
   resultNums.push(fiboNums);
  }
  console.log(resultNums.join(", "));
}
fibonac(20);

// OR
function fibonacci(n){
    var a=0;
    var b=1;
    var result=[]
    for(i=0; i<n;i++){
        var numeroTemporal=a;
        a=b;
        b=numeroTemporal+b;
        result.push(a)
    }
   console.log(result)
}
fibonacci(10)

// b2)
function fibonac(n) { 
  var resultNums=[0,1] 
  var position=0
  for (var i=1; i<n; i++){
   var fiboNums=resultNums[i] + resultNums[i-1];
   resultNums.push(fiboNums);
    position++  
    console.log(resultNums[i-1] + " Position: " + position);
  }
}
fibonac(20);

// b3)
 
function fibonac(n) { 
  var resultNums=[0,1] 
  var position=1
  for (var i=1; i<n; i++){
   var fiboNums=resultNums[i] + resultNums[i-1] ;
   resultNums.push(fiboNums);
    position++ 
  }
  console.log(resultNums.join(", "));
}
fibonac(20);

// b4)
function fibonac(n) { 
  var resultNums=[0,1] 
  var position=0
  for (var i=1; i<n; i++){
   var fiboNums=resultNums[i] + resultNums[i-1];
   resultNums.push(fiboNums);
    position++  
    console.log(resultNums[i-1] + " Position: " + position);
  }
}
fibonac(20);

// b5)
function fibonac(numAll,numStop) {
  
  var resultNums=[0,1] 
  var position=1
  
  for (var i=1; i<numAll ; i++){
    if(i<numStop){
   var fiboNums=resultNums[i] + resultNums[i-1] ;
       resultNums.push(fiboNums);
       console.log(resultNums.join(", "))
    } else {
      resultNums.pop()
      console.log(resultNums.join(", "))
    }   
  }    
 }

fibonac(20,15);

//Para cortar justo en la mitad
function fibonac(n) {
  
  var resultNums=[0,1] 
  var position=1
  
  for (var i=1; i<n; i++){
    if(i<(n/2)){
   var fiboNums=resultNums[i] + resultNums[i-1] ;
    resultNums.push(fiboNums);
       console.log(resultNums.join(", "))
    } else {
      resultNums.pop()
      console.log(resultNums.join(", "))
    }   
  }    
 }

fibonac(20);

//OR
function fibonac(numStop) {
  
  var resultNums=[0,1] 
  var position=1
  
  for (var i=1; i<numStop ; i++){

   var fiboNums=resultNums[i] + resultNums[i-1] ;
       resultNums.push(fiboNums);
       console.log(resultNums.join(", "))
  }
   for (var i=numStop; i>0 ; i--){
      resultNums.pop()
       console.log(resultNums.join(", "))
 }
} 

//OR
fibonac(4);
function fibonacci(n){
    var a=0;
    var b=1;
    var result=[]
    for(i=0; i<n;i++){
        var numeroTemporal=a;
        a=b;
        b=numeroTemporal+b;
      if(i<(n/2)) {
        result.push(a)
      console.log(result)
    } else {
      result.pop();
      console.log(result);
    }
    }
}
fibonacci(10)

// c)
 //Profe
 function codeScript(code1){
  //c1 y c2
  function disorder(code2){
     var code2=code2.toString().split(""); 
    return code2
  }
  var codeDisordered = disorder(code1)
  // c3
  function multipliedCoded(code){
    return code
  }
  var codeMultiplied = multipliedCoded(codeDisordered)
}
codeScript(3712);

  //OR
  var code=3712
   function codeScript(code1){
     var code1=code.toString().split("");
    var del1=code1.shift()
    var push1=code1.push(del1)
    code=code1.join("")
    return code1
 }
console.log(codeScript(code));

  //c1 y c2
  function disorder(code2){
     var code2=code2.toString().split(""); 

    return code1
  }

  var codeDisordered = disorder(code1)

  // c3
  function multipliedCoded(code){
    return code
  }

  var codeMultiplied = multipliedCoded(codeDisordered)
}
codeScript(3712);
//Me
var code = 3712;
function codeScript(code){
    var code=window.code.toString().split("");
    code=code[1] + code[2] + code[3] + code[0]
    window.code=code
    console.log(window.code)
}
codeScript();
codeScript();
codeScript();
codeScript();

// OR
var code = 3712;
function codeScript(code){
    var code=window.code.toString();
    code=code.charAt(1) + code.charAt(2) + code.charAt(3) + code.charAt(0)
    window.code=code
    console.log(window.code)
}
codeScript();
codeScript();
codeScript();
codeScript();

// OR
var code = 3712;
function codeScript(code1){
    var code1=code.toString()
    code1=code1.charAt(1) + code1.charAt(2) + code1.charAt(3) + code1.charAt(0)
    code=code1
    console.log(code)
}
codeScript();
codeScript();
codeScript();
codeScript();

// OR
  var code = 3712;
function codeScript(){

    code=code.toString();
    code=code.charAt(1) + code.charAt(2) + code.charAt(3) + code.charAt(0)
    console.log(code)
}
codeScript();
codeScript();
codeScript();
codeScript();

// c2)
var code1 = 3712;
var code2 = 8549;
function codeScript(code1, code2){
    var code1=window.code1.toString().split("");
    var code2=window.code2.toString().split("");
    code1=code1[1] + code1[2] + code1[3] + code1[0]
    code2=code2[1] + code2[2] + code2[3] + code2[0]
    window.code1=code1
    window.code2=code2
    console.log(window.code1 + ", " + window.code2)
}
codeScript();
codeScript();
codeScript();
codeScript();

// OR
var code1 = 3712;
var code2 = 5879;
function codeScript(code1,code2){
    var code1=window.code1.toString();
    var code2=window.code2.toString();
    code1=code1.charAt(1) + code1.charAt(2) + code1.charAt(3) + code1.charAt(0)
    code2=code2.charAt(1) + code2.charAt(2) + code2.charAt(3) + code2.charAt(0)
    window.code=code1
    window.code=code2
    console.log(window.code1 + ", " + window.code2)
}
codeScript();
codeScript();
codeScript();
codeScript();

// c3)
var code1 = 3112;
var code2 = 1342;
function codeScript(code1, code2, n){
    var code1=window.code1.toString().split("");
    var code2=window.code2.toString().split("");
    var n=2
    code1=code1[1] + code1[2] + code1[3] + code1[0]
    code2=code2[1] + code2[2] + code2[3] + code2[0]
    code1=code1.split("")
    code2=code2.split("")
    code1=code1.map(x=>x*n)
    code2=code2.map(x=>x*n)
  
   function condit(c) {
     return c<10
   } 
  if(code1.length<5 && code2.length<5 && code1.every(condit)===true && code2.every(condit)===true) {
    code1=code1.join("")
    code1=Number(code1)
    code2=code2.join("")
    code2=Number(code2)
     window.code1=code1
    window.code2=code2
    console.log(window.code1 + ", " + window.code2)   
  } else {
    console.log("You has supertated the maximun number")
  }  
}
codeScript();
codeScript();
codeScript();
codeScript();

// OR
var codeA = 3112;
var codeB = 1342;
function codeScript(code1, code2, n){
    var code1=codeA.toString().split("");
    var code2=codeB.toString().split("");
    var n=2
    code1=code1[1] + code1[2] + code1[3] + code1[0]
    code2=code2[1] + code2[2] + code2[3] + code2[0]
    code1=code1.split("")
    code2=code2.split("")
    code1=code1.map(x=>x*n)
    code2=code2.map(x=>x*n)
   function condit(c) {
     return c<10
   }
  if(code1.every(condit)===true && code2.every(condit)===true) {
    code1=code1.join("")
    code1=Number(code1)
    code2=code2.join("")
    code2=Number(code2)
     codeA=code1
     codeB=code2
    console.log(codeA + ", " + codeB)   
  } else {
    console.log("You has superated the maximun number")
  }  
}
codeScript();
codeScript();
codeScript();
codeScript();


var code1 = 3712;
var code2 = 8549;
function codeScript(code1, code2, n){
    var code1=window.code1.toString().split("");
    var code2=window.code2.toString().split("");
    var n=2
    code1=code1[1] + code1[2] + code1[3] + code1[0]
    code2=code2[1] + code2[2] + code2[3] + code2[0]
    code1=code1.split("")
  if (((code1[0]*n)>10) || ((code1[1]*n)>10) || ((code1[2]*n)>10) || ((code1[3]*n)>10)) {
    code1=code1.join("")
    code1=Number(code1)
     window.code1=code1
    window.code2=code2
    console.log(window.code1)
    
  } else {   
 console.log("You has superated the maximun number")  
  }  
}
codeScript();
codeScript();

var code1 = 3712;
var code2 = 8549;
function codeScript(code1, code2, n){
    var code1=window.code1.toString().split("");
    var code2=window.code2.toString().split("");
    var n=1
    code1=code1[1] + code1[2] + code1[3] + code1[0]
    code2=code2[1] + code2[2] + code2[3] + code2[0]
    
  code1=code1.split("")
   code1.map(x=>x*n)
  
  
     var code1 = code1.map(v => +v );
  code1=code1.join("")
    window.code1=code1
    window.code2=code2
    
    console.log(window.code1)
}
codeScript();
codeScript();
codeScript();
codeScript();

// c4)
var code=3712
function codeScript(codeP) {

 function encryp(code1){
    code1=code1.toString().split("");
    var del1=code1.shift()
    code1.push(del1)
    code=code1.join("")
    return code1.join("")
 }

 function disorder(code1){
    code2=code2.toString().split(""); 
    var del2=code2.pop();
    code2.unshift(del2);
    return code2.join("");
  }
  console.log(disorder(encryp(code)))
}
codeScript(code);

//OR 
var code=3712
function codeScript(codeP) {

 function encryp(code1){
    code1=code1.toString().split("");
    var del1=code1.shift()
    code1.push(del1)
    return code1;
 }
 console.log(encryp(3712));

 function disorder(code1,code2){
    var delDisor1=code1.pop();
    code1.unshift(delDisor1);
    var delDisor2=code2.pop();
    code2.unshift(delDisor2);
    return code1.join("") + " " + code2.join("");
  }
  console.log(disorder(encryp(3712),encryp(6845)));
}
codeScript(code);

//Or
function encryp(code1){
    code1= code1.toString().split("");
    var codeDel=code1.shift();
    code1.push(codeDel)
    return code1
  }
    var disord=encryp(3712);
   console.log(disord)

function desencryp(code2){       
        for (var i=0; i<code2.length-1; i++){
            var codeN=code2.shift();
            code2.push(codeN) 
        }
        return code2.join("");
    } 
console.log(desencryp(disord))

//OR
var codeA = 3112;
var codeB = 1342;

function codeScript(code1, code2, n){
    var code1=codeA.toString().split("");
    var code2=codeB.toString().split("");
    var n=2
    code1=code1[1] + code1[2] + code1[3] + code1[0]
    code2=code2[1] + code2[2] + code2[3] + code2[0]
    code1=code1.split("")
    code2=code2.split("")
    code1=code1.map(x=>x*n)
    code2=code2.map(x=>x*n)
   function condit(c) {
     return c<10
   }
  if(code1.every(condit)===true && code2.every(condit)===true) {
    code1=code1.join("")
    code1=Number(code1)
    code2=code2.join("")
    code2=Number(code2)
     codeA=code1
     codeB=code2
    return [codeA, codeB];  
  } else {
    return "You has superated the maximun number"
  }  
}
console.log(codeScript());

 function decrypter(desCodeA, desCodeB){
  
  desCodeA=codeAorig;
   desCodeB=codeBorig;
   return [desCodeA, desCodeB]
  
}
decrypter(window.codeA, window.codeB);

// c5)
var code=3212
 function encryp(code1){
    code1=code1.toString().split("");
    var del1=code1.shift()
    code1.push(del1)
    return code1
 }
 var encrypC=encryp(code)
 console.log(encrypC)
  
  function condit(c) {
     return c<10
     }
  
 function multipliedCoded(codeM,n){
        codeM=codeM.map(x=>x*n)
         if(codeM.every(condit)===true) {
          return codeM;  
         } else {
          return "You has superated the maximus number"
         }  
     }
 var codeMult=multipliedCoded(encrypC,2)
 console.log(codeMult)
  
 function disorder(code2,n){
    code2=code2.map(x=>x/n)
    var del2=code2.pop();
    code2.unshift(del2);
    code2=code2.join("");
    return code2
  }
  console.log(disorder(codeMult,2))
}
codeScript(code);

//OR
//para hacerlo con dos codigos
function disorder(code){
    var codeArr = code.toString().split("");
    var codeN=codeArr.shift();
    codeArr.push(codeN)
    return codeArr.join("");
  }
    var codeDisordered1 = disorder(3712);
    var codeDisordered2 = disorder(6849);
    console.log(codeDisordered1 +", "+ codeDisordered2);

//Or 
function disorder(code1,code2){
    var codeDisor1 = code1.toString().split("");
    var codeN1=codeDisor1.shift();
    codeDisor1.push(codeN1)
    var codeDisor2 = code2.toString().split("");
    var codeN2=codeDisor2.shift();
    codeDisor2.push(codeN2)
    return codeDisor1.join("") + ", " + codeDisor2.join("");
  }
    var codeDisordered=disorder(3712,6849);
    console.log(codeDisordered);

  // ME wrong
var codeA = 3112;
var codeAorig= 3112
var codeB = 1342;
var codeBorig=1342

function codeScript() {
  function encrypter(code1, code2, n){
    var code1=codeA.toString().split("");
    var code2=codeB.toString().split("");
    var n=2
    code1=code1[1] + code1[2] + code1[3] + code1[0]
    code2=code2[1] + code2[2] + code2[3] + code2[0]
    code1=code1.split("")
    code2=code2.split("")
    code1=code1.map(x=>x*n)
    code2=code2.map(x=>x*n)
     function condit(c) {
     return c<10
     }
      if(code1.every(condit)===true && code2.every(condit)===true) {
       code1=code1.join("")
       code1=Number(code1)
       code2=code2.join("")
       code2=Number(code2)
        codeA=code1
        codeB=code2
        return [codeA, codeB];  
      } else {
       return "You has superated the maximun number"
      }  
  }
  console.log(encrypter());

  function decrypter(desCodeA, desCodeB){
    desCodeA=codeAorig;
    desCodeB=codeBorig;
   return [desCodeA, desCodeB]
  }
  console.log(decrypter(window.codeA, window.codeB));
}
codeScript();
// c6)
function codeScript(code1,code2){
  function letterNum(word){
    var dictionary = {
        0: ['A', 'K', 'T', 'F', 'O', 'Y'],
        1: ['B', 'L', 'U', 'G', 'P', 'Z'],
        2: ['C', 'M', 'V', 'H', 'Q', '.'],
        3: ['D', 'N', 'W', 'I', 'R', ','],
        4: ['E', 'Ñ', 'X', 'J', 'S', ' '] 
      };
      
        var code = [];//Se crea el array para que recoja el numero al que corresponde la letra
            for(var i = 0; i < word.length; i++){
                for(prop in dictionary){//Prop es el numero del indice o la clave
                    if(dictionary[prop].indexOf(word[i]) !== -1){ //aquí se busca por todo el diccionario la letra, y si esta, se pushea en el array el numero al que corresponde del prop.
                        code.push(parseInt(prop));
                    }
                } 
    };  
    return code.join("")
  }
  var changeNumber1=letterNum(code1);
  var changeNumber2=letterNum(code2);
  console.log('TO NUMBERS => ' + changeNumber1 + ', ' + changeNumber2)

  function disorder(codeD){
    codeD = codeD.toString().split("");
    var codeN=codeD.shift();
    codeD.push(codeN);
    return codeD;
  }

    var codeDisordered1 = disorder(changeNumber1);
    var codeDisordered2 = disorder(changeNumber2);
    console.log( 'DISORDERED =>' + codeDisordered1 +" - "+ codeDisordered2)
  
  function multipliedCoded(code, num){//Se multiplica el codigo por un numero
    return code.map(function(code){
      return code*num
    })
  }
  var codeMultiplied1 = multipliedCoded(codeDisordered1,3)
  var codeMultiplied2 = multipliedCoded(codeDisordered2,6)
  console.log('MULTIPLIED =>' + codeMultiplied1+" - "+codeMultiplied2);

  function decrypter(code, numdiv){//Se divide el codigo por el mismo numero.
    return code.map(function(num){
      return num/numdiv    
    })
  }
    var decrypter1=decrypter(codeMultiplied1,3);
    var decrypter2=decrypter(codeMultiplied2,6);
    console.log( 'DECRYPTER =>' + decrypter1+" - "+decrypter2)

  function order(codeO){//Aquí se vuelve a ordenar el numero al codigo original.
    var codeC=codeO.pop();
    codeO.unshift(codeC);
    return codeO;
  }
    var order1=order(decrypter1);
    var order2=order(decrypter2);
    console.log( 'ORDERED => ' + order1+" - "+order2)
}
codeScript("ASDF","ERTY");

// El mismo

function codeScript(code1,code2){
  function letterNum(word){
    var dictionary = {
        0: ['A', 'K', 'T'],
        1: ['B', 'L', 'U'],
        2: ['C', 'M', 'V'],
        3: ['D', 'N', 'W'],
        4: ['E', 'Ñ', 'X'], 
        5: ['F', 'O', 'Y'],
        6: ['G', 'P', 'Z'],
        7: ['H', 'Q', '.'],
        8: ['I', 'R', ','],
        9: ['J', 'S', ' ']
      };

        var code = [];//Se crea el array para que recoja el numero(Prop) al que corresponde la letra
            for(var i = 0; i < word.length; i++){ //se hac eun for por el tiempo de la longitud de la palabra, para que vaya sacando los numeros de cada letra.
                for(prop in dictionary){//Prop es el numero del indice o la clave(DEL 0 AL 9)
                    if(dictionary[prop].indexOf(word[i]) !== -1){ //aquí se busca por todo el diccionario la letra, y si esta, se pushea en el array el numero al que corresponde del prop.
                        code.push(parseInt(prop));
                    }
                } 
    };  
    return code.join("")
  }
  var changeNumber1=letterNum(code1);
  var changeNumber2=letterNum(code2);
  console.log('TO NUMBERS => ' + changeNumber1 + ', ' + changeNumber2)

  function disorder(codeD){
    codeD = codeD.toString().split("");
    var codeN=codeD.shift();
    codeD.push(codeN);
    return codeD;
  }
    var codeDisordered1 = disorder(changeNumber1);
    var codeDisordered2 = disorder(changeNumber2);
    console.log( 'DISORDERED =>' + codeDisordered1 +" - "+ codeDisordered2)
  
  function multipliedCoded(code, num){//Se multiplica el codigo por un numero.
    return code.map(function(code){
      return code*num
    })
  }
  var codeMultiplied1 = multipliedCoded(codeDisordered1,3)
  var codeMultiplied2 = multipliedCoded(codeDisordered2,6)
  console.log('MULTIPLIED =>' + codeMultiplied1+" - "+codeMultiplied2);

  function decrypter(code, numdiv){//Se divide el codigo por el mismo numero.
    return code.map(function(num){
      return num/numdiv    
    })
  }
    var decrypter1=decrypter(codeMultiplied1,3);
    var decrypter2=decrypter(codeMultiplied2,6);
    console.log( 'DECRYPTER =>' + decrypter1+" - "+decrypter2)

  function order(codeO){//Aquí se vuelve a ordenar el numero al codigo original.
    var codeC=codeO.pop();
    codeO.unshift(codeC);
    return codeO;
  }
    var order1=order(decrypter1);
    var order2=order(decrypter2);
    console.log( 'ORDERED => ' + order1+" - "+order2)
}
codeScript("ASDF","ERTY");

// d)
var word="SKYLAB"
var wordConv=[];
function encryp(word1,word2) {
  word1=word.substr(0,3);
  word2=word.substr(3); 
  word1=word1.split("")
  word2=word2.split("")
  
  for (var i=0;i<word1.length; i++) {  
       wordConv.push(word1[i]+word2[i])    
       }
  word=wordConv
  console.log(word.join(""))
}
encryp()

// d2)
var word="SKYLAB"
var wordConv=[];
function encryp(word1,word2) {
  word1=word.substr(0,3).split("");
  word2=word.substr(3).split(""); 
  for (var i=0;i<word1.length; i++) {
       wordConv.push(word1[i]+word2[i])      
       }
  word=wordConv
  word=word.join("")
  wordconv=[]
}
encryp()

function descryp(word1,word2) {
  word=word.split("")
  word1=[]
  word2=[]
  for (var i=0;i<word.length; i++) {
    if(i%2==0) {
      word1.push(word[i])
    } else {
      word2.push(word[i])
    }   
  }  
   word1=word1.join("") , word2=word2.join("")
   word=word1 + word2;
   console.log(word)
}
descryp();

// d3)
function codeScript() {
 var word="SKYLAB"
 var wordConv=[];
  function encryp(word1,word2) {
  word1=word.substr(0,3).split("");
  word2=word.substr(3).split(""); 
  for (var i=0;i<word1.length; i++) {
       wordConv.push(word1[i]+word2[i])      
       }
  word=wordConv
  word=word.join("")
  wordconv=[]
  console.log(word) 
 }
 encryp()

  function descryp(word1,word2) {
  word=word.split("")
  word1=[]
  word2=[]
  for (var i=0;i<word.length; i++) {
    if(i%2==0) {
      word1.push(word[i])
    } else {
      word2.push(word[i])
    }   
  }  
   word1=word1.join("") , word2=word2.join("")
   word=word1 + word2;
   console.log(word)
 }
 descryp();
}    
codeScript();
  
// d4)
function codeScript() {
  var word="SKYLABCODERS"
  var wordConv=[];
  function encryp(word1,word2) {
  word1=word.substr(0,word.length/2).split("");
  word2=word.substr(word.length/2).split(""); 
  for (var i=0;i<word1.length; i++) {
       wordConv.push(word1[i]+word2[i])      
       }
  word=wordConv
  word=word.join("")
  wordconv=[]
  console.log(word) 
 }
 encryp()

  function descryp(word1,word2) {
  word=word.split("")
  word1=[]
  word2=[]
  for (var i=0;i<word.length; i++) {
    if(i%2==0) {
      word1.push(word[i])
    } else {
      word2.push(word[i])
    }   
  }  
   word1=word1.join("") , word2=word2.join("")
   word=word1 + word2;
   console.log(word)
 }
 descryp();
}    
codeScript();

// e)
var units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

function change(n) {
  if (n<10) {
    console.log(units[n])
  } else if(n>9&&n<20) {
    console.log(teens[n-10])
  } else {
    n=n.toString().split("");
    var tensS=tens[n[0]] + "-" + units[n[1]];
    console.log(tensS)
  }
}
change(24)

// e2)
function change(n) {
  if (n<10) {

    console.log(units[n] + "/ " + n)
  } else if(n>9&&n<20) {
    console.log(teens[n-10] + "/ " + n)
  } else {
    n=n.toString().split("");
    var tensS=tens[n[0]] + "-" + units[n[1]] + "/ " + n.join("") + " : " + tens[n[0]] + " + " + tens[n[1]] + " => " + n[0]+"0 "+ "+ " + n[1] ;
    console.log(tensS)
  }
}
change(24)

// e3)
var units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

function change(n) {
  if (n<10) {

    console.log(units[n] + "/ " + n)
  } else if(n>9&&n<20) {
    console.log(teens[n-10] + "/ " + n)
  } else if(n>19&&n<100) {
    n=n.toString().split("");
    var tensS=tens[n[0]] + "-" + units[n[1]] + "/ " + n.join("") + " : " + tens[n[0]] + " + " + units[n[1]] + " => " + n[0]+"0 "+ "+ " + n[1] ;
    console.log(tensS)
  } else if(n>99&&n<1000) {
    n=n.toString().split("");
    var hundreds= units[n[0]] + " hundred " + tens[n[1]] + " " + units[n[2]] + n.join("") + " : " + tens[n[1]] + " + " + units[n[2]] + " => " + n[0]+"00 "+ "+ " + n[1] + "0" + " + " + n[2] 
    console.log(hundreds)
  }
}
change(222)

// f)
var Lorem= "ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur."
Lorem=Lorem.replace(/\./g,",").replace(/,/g,"").replace(/dolor/g,"potato").replace(/lorem/g,"tomato").replace(/labor/g,"cucumber").replace(/consequatur/g,"garlic").replace(/ipsum/g,"onion") 
  console.log(Lorem);
  //OR
var replacem={".":"," , "," : "" , "dolor" : "potato" , "lorem" : "tomato" , "labor" : "cucumber" , "consequatur" : "garlic" , "ipsum" : "onion"}
Lorem=Lorem.replace(/\.|,|dolor|lorem|labor|consequatur|ipsum/g,function(r) {return replacem[r];})
console.log(Lorem)
// f1)
function cont() {
var Lorem= "ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur."
var replacem={".":"," , "," : "" , "dolor" : "potato" , "lorem" : "tomato" , "labor" : "cucumber" , "consequatur" : "garlic" , "ipsum" : "onion"}
var contA=0
Lorem=Lorem.replace(/\.|,|dolor|lorem|labor|consequatur|ipsum/g,function(r) 
      {contA++;
       return replacem[r];})
  console.log(contA)
console.log(Lorem)
}
cont();

//OR To order to search single words
function cont() {
  var contab=0
  Lorem=Lorem.split("")
   if (Lorem.indexOf(",")!==-1){
     for (var i=0;i<Lorem.length;i++) {
         if(Lorem[i]===",") {
           contab++;
           continue;
         }
     } 
 } 
  Lorem=Lorem.join("")
  console.log(contab)
}
 cont() 

 //OR 
 var n = Lorem.search(",");
    // displays numbers of match were found 
// OPERATIONS

