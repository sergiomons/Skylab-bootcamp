/*STRINGS*/ 

/*a)*/ 

var firstname ="Sergio";
console.log("Mi name has " + firstname.length + "letters");
/*b)*/ 
var lastname ="Monge";
var name = firstname + " " + lastname;
console .log("My name and lastname are " + name);

/*c)*/ 
console.log("Mi name is " + name.substr(0,6));

/*d)*/ 
console.log("Mi last name is " + name.substr(7,5));

/*d1)*/ 
var newlastname = name.substr(7,5);
console.log(name + ", " + newlastname);

/*e)*/ 
var newfirstname = "Mr. ";
var newname = newfirstname + " " + lastname;
console.log("Hello, " + newname);

/*f)*/ 
console.log(lastname.toUpperCase());

/*g)*/ 
var message = firstname + " is awesome";
console.log(message);

/*h)*/ 
console.log(firstname.substr(0,1) + "." + lastname.substr(0,1))


/*ARRAYS*/ 

/*a)*/ 
var myname=["S","E","R","G","I","O","M","O","N","G","E"];
var mynamejoin=myname.join("/");
console.log(mynamejoin);

/*b)*/ 
console.log(myname.slice(6).join("|"));

/*c)*/ 
for (i=0;i<6;i++) {
  console.log((i+1) + "º " + myname[i]);

/*d)*/ 
for (i=myname.indexOf("M",0);i<myname.length;i++) {
  console.log((i+1)+ "º " + myname[i]);

/*e)*/ 
console.log(myname[0]+"."+ myname[6]);

/*f)*/ 
var myname=["Sergio", "Monge", 29];

console.log("My name is " + myname[0] + ", and I,m " + myname[2] + " years old");

/*g)*/ 
 var myaddCity=myname.push("Barcelona");
  function addcity() {
   console.log(myname);
}
addcity();

/*h)*/ 
var mydeleteCity=myname.pop();
 function deletecity() {
  console.log(myname);
}
deletecity();

/*j)*/ 
var mydeletefirstName=myname.shift();
 function deletefirstname() {
  console.log(myname);
}
deletefirstname();

/*k)*/ 
 var myputfirstName=myname.unshift("Sergio");
   function putfirstname() {
     console.log(myname);
}
putfirstname();

/*l)*/ 
var numbers = [0,1,2,3,4,5,6,7,8,9,10];
 var multByTwo = numbers.map(x=>x*2);
   console.log(multByTwo);

/*l 1)*/ 
var num = 3; 
 function multByNum(num){
  var arrayMult=numbers.map(x=>x*num);
    return arrayMult;
}
console.log(multByNum(num));

/*m)*/          
var sortnum=multByNum(num).sort(function(a, b){
      return b-a;
 });
  console.log(sortnum)

   /* Otra forma con reverse*/
  console.log(multByNum(num).reverse());

/*n)*/ 

var i = 0;
var counter = 0;
while (i != -1)
{
var i = name.indexOf(Search,i);
if (i != -1)
{
i++;
counter++;
}
}
console.log(counter);

/*n 1)*/ 




/*NUMBERS*/ 

/*a)*/ 
var hour= 10.45;
var hourstring= hour.toString();
console.log(hourstring);
  
/*b)*/ 
console.log(hour.toFixed());

/*c)*/ 
console.log(Math.round(hour));


/*d)*/ 
var num1=7
var num2=3
var sum=num1+num2;
console.log(sum);

/*d1)*/ 
var subst=num1-num2;
console.log(subst);

/*d2)*/ 
var mult=num1*num2;
console.log(mult);

/*d3)*/ 
var div=num1/num2;
console.log(div);

/*d4)*/ 
var letters="Hour";
var sum2=num1*letters;
console.log(sum2);

/*e)*/ 
if(isNaN(sum2)) {
  console.log("No puedes multplicar un número por letras");

} else {
  console.log(sum2);
}
