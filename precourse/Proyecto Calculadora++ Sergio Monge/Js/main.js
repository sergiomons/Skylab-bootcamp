// Global vars
var screen=document.getElementById('screenOper');
screen.innerHTML="";
var num="0";
var saveN1="0";
var checkIni="noIni";
var stateOper="des";
var checkOn= "";
var checkOff= "";

// functions
  function showNums (n){
    if (checkOff==="" && checkOn==="On") {
      if (checkIni==="noIni" || num==="0" ) {
        screen.innerHTML = n;
        num=n
        if (num==".") { 
          screen.innerHTML="0."; 
          num="0.";  
        }
      } else { 
        if ((num.indexOf(".")===-1) && n===".") { 
           screen.innerHTML+=n;
           num+=n;
        } else if ((num.indexOf(".")!==-1) && (n===".")) {
           screen.innerHTML=num; 
        } else {
           screen.innerHTML+=n;
           num+=n;
        }
      }
    }else {
       screen.innerHTML="";
    }
   checkIni="ini";
  }

  function operations(oper) {
     if (checkOff==="" && checkOn==="On") {
         result();
         saveN1= num;
         stateOper=oper;
         checkIni="noIni";
    } else {
      screen.innerHTML="";
    }
  }

  function result() {
    if (checkOff==="" && checkOn==="On") {
      if (stateOper==="des") { 
        screen.innerHTML= num;
      } else { 
        var res=saveN1+stateOper+num; 
        var resul=eval(res);
        if (isNaN(resul)) {
           screen.innerHTML="Indetermined"; 
         stateOper="des";
        checkIni="noIni";
        } else {
        screen.innerHTML=resul; 
        stateOper="des";
        checkIni="noIni";
        num=resul;
        }  
      }
    } else {
      screen.innerHTML="";
    }
  }

  function recoil(){ 
    if (checkOff==="" && checkOn==="On") {
      if (num.length<2) {
          num="0";
          screen.innerHTML=num;;
      } else {
          numLenght=num.length; 
          num=num.substr(0,numLenght-1);
         screen.innerHTML=num;
      } 
    } else {
      screen.innerHTML="";
    }
  }

  function refresh() {
    if (checkOff==="" && checkOn==="On") {
        num="0"; 
        stateOper="des"; 
        saveN1="0";
        checkIni="noIni";
        screen.innerHTML=num;
    } else {
      screen.innerHTML="";
    }
  }
       
  function x2() {
    if (checkOff==="" && checkOn==="On") {
        num=Math.pow(num,2) 
        screen.innerHTML=num; 
        stateOper="des";
        checkIni="noIni"; 
    } else {
      screen.innerHTML="";
    }  
  }

  function squart() {
    if (checkOff==="" && checkOn==="On") {
         num=Math.sqrt(num) 
         screen.innerHTML=num; 
         stateOper="des";
         checkIni="noIni"; 
    } else {
      screen.innerHTML="";
    }  
  }

  function moreLess() { 
    if (checkOff==="" && checkOn==="On") {
         var numConver=Number(num); 
         numConver=-numConver; 
         num=String(numConver); 
         screen.innerHTML=num; 
    } else {
      screen.innerHTML="";
    }  
  }

  function porcent() { 
    if (checkOff==="" && checkOn==="On") {
         num=(num/100) 
         screen.innerHTML=num; 
         result() 
         checkIni="noIni"
    } else {
      screen.innerHTML="";
    }      
  }
  
  function on() {
        if (checkOn==="On") {
          screen.innerHTML=num;
        } else {
         num="0";
         checkIni="noIni";
         stateOper="des";
         screen.innerHTML=num;
         checkOn="On";
         checkOff="";
      }
  }

   function off() {
        if (screen.innerHTML="") {
          screen.innerHTML="";
        } else {
           screen.innerHTML="";
           checkOff="Off";
           checkOn="";
      }
  }



 