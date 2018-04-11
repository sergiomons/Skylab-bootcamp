<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Calculator++</title>
    <link rel="stylesheet" type="text/css" href="style/styles.css">
    <link href="http://allfont.es/allfont.css?fonts=ds-digital" rel="stylesheet" type="text/css" />
</head>
<body>
<div class="all">
 <div class="head">
   <p class="nameCal" style="font-size:25px"><b>Casio</b></p>
  <p id="screenOper">0</p>
 </div>
     <div class="buttonTop">
      <input type="Button" id="%" value="%" onclick=porcent()>
      <input type="Button" id="moreless" value="+/-"  onclick=moreLess()>
      <input type="Button" id="Off" value="Off"  onclick=off() style="background-color: #25201F; color: white">   
      <input type="Button" id="On" value="On" onclick=on() style="background-color: #DE523C; color: white">
     </div>
   <div class="mainKeys" style="background-color: #888991"> 
     
     <input type="Button" id="1/x" value="sqrt" class="buttonOper" onclick=squart()>
     <input type="Button" id="x2" value="x2" class="buttonOper" onclick=x2()>
     <input type="Button" id="retro" value="<=" class="buttonOper" onclick=recoil()>
     <input type="Button" id="Multiply" value="*" class="buttonOper" onclick=operations("*")>
     <input type="Button" id="7" value="7" class="button" onclick=showNums("7")>
     <input type="Button" id="8" value="8" class="button" onclick=showNums("8")>
     <input type="Button" id="9" value="9" class="button" onclick=showNums("9")>
     <input type="Button" id="Division" value="/" class="buttonOper" onclick=operations("/")>
     <input type="Button" id="4" value="4" class="button" onclick=showNums("4")>
     <input type="Button" id="5" value="5" class="button" onclick=showNums("5")>
     <input type="Button" id="6" value="6" class="button" onclick=showNums("6")>
     <input type="Button" id="Sum" value="+" class="buttonOper" onclick=operations("+")>
     <input type="Button" id="1" value="1" class="button" onclick=showNums("1")>
     <input type="Button" id="2" value="2" class="button" onclick=showNums("2")>
     <input type="Button" id="3" value="3" class="button" onclick=showNums("3")>
     <input type="Button" id="Subs" value="-" class="buttonOper" onclick=operations("-")>
     <input type="Button" id="dot" value="." class="buttonOper" style="font-size:32px" onclick=showNums(".")>
     <input type="Button" id="zero" value="0" class="button" onclick=showNums(0)>
     <input type="Button" id="C" value="C" class="buttonOper" style="color: red" onclick=refresh()>
     <input type="Button" id="result" value="=" class="buttonOper" onclick=result()>
   </div>
  </div>
 <script type="text/javascript" src="Js/main.js"></script>

</body>
</html>