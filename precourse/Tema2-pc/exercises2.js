/*a)*/

var avenger = {name : "Sergio", class : "I", id : 1};
function shownames(obj) {
  console.log(Object.keys(obj))
}
shownames(avenger);
 
/*b)*/
function showvalues(obj2) {
  console.log(Object.values(obj2));
}
showvalues(avenger);

/*c)*/
avenger.class="XI";
console.log(avenger);

/*d)*/
delete avenger.id;
console.log(avenger.id);  /*undefined*/

/*e)*/
avenger.city="Barcelona";

/*e1)*/
console.log(avenger.city);

/*f)*/
function showlength() {
var numlength=Object.keys(avenger);
console.log(numlength.length);
}
showlength();

/*g)*/
var avenger = {fullname : "Sergio", class : "I", id : 1, city : "Barcelona"};

/*g1)*/
console.log(avenger.fullname);

/*h)*/
console.log("My name is " + avenger.fullname + ", my class is "+ avenger.class + ", my id is " + avenger.id+ " and my city is "+ avenger.city + ".")

/*h1)*/
avenger.country="Spain";
avenger.job="Developer web";

/*h2)*/
console.log(avenger.job);

/*i)*/
function avenger(fullName, city, job, studies,markAv) {
    this.fullName = fullName;
    this.city = city;
    this.job= job;
    this.studies= studies;
    this.markAv = markAv;
}
var SergioM= new avenger ("SergioM", "Barcelona", "Developer Web", "MIT", 10)
console.log(SergioM);

/*j)*/
var otherPerson= new avenger ("Armando Jaleo", "Bujíos", "Domador de sirenas", "De la esquina", 225)
console.log(otherPerson);

/*k)*/
function avenger(fullName, city, job, studies,markAv) {
    this.fullName = fullName;
    this.city = city;
    this.job= job;
    this.studies= studies;
    this.markAv = markAv;
    this.description= function (){
      console.log(this.fullName + ", "+ this.city+", "  +this.job+ ", "+this.studies+", " +this.markAv+".");
    }
}
var sergioM= new avenger ("SergioM", "Barcelona", "Developer Web", "MIT", 10);
sergioM.description();

/*l)*/
function avenger(fullName, city, job, studies,markAv) {
    this.fullName = fullName;
    this.city = city;
    this.job= job;
    this.studies= studies;
    this.markAv = markAv;
    this.description= function (){
      console.log(this.fullName + ", "+ this.city+", "  +this.job+ ", "+this.studies+", " +this.markAv+".")
    }
    this.shownames= function (){
       return sergioM.fullName + ", " + otherPerson.fullName;
    }
}

var sergioM= new avenger ("SergioM", "Barcelona", "Developer Web", "MIT", 10);

var otherPerson= new avenger ("Armando Jaleo", "Bujíos", "Domador de sirenas", "De la esquina", 225);


sergioM.shownames();

/*m)*/
  /* WITH FILTER */
var matchobj=[{fullName: "SergioM", city: "Barcelona", job: "Developer Web", studies: "MIT", markAv: 200},{fullName: "Armando", city: "Barcelona", job: "Domador de sirenas", studies: "De la esquina", markAv: 225}];
var result2=[];
var cont=0;
function most(obj){
    if (obj.city==="Barcelona") {
     result2+=obj.fullName + ", ";
      ++cont;
    } 
}
var filteref=matchobj.filter(most);
console.log("Are " + cont + " avengers living in Barcelona: " + result2);

 /* WITH FOREACH */
var matchobj=[{fullName: "SergioM", city: "Barcelona", job: "Developer Web", studies: "MIT", markAv: 200},
              {fullName: "Armando", city: "Barcelona", job: "Domador de sirenas", studies: "De la esquina", markAv: 225}];

  var result=[];
  var cont=0; 
   var shownamess=function() {
    matchobj.forEach(function(e) {
      if (e.city.indexOf("Barcelona")!== -1) {
         result+=e.fullName + ", ";
        ++cont;
          }         
    });
    console.log("Are " + cont + " avengers living in Barcelona: "+ result);
}
shownamess();


   /* AND */
   var matchobj=[{fullName: "SergioM", city: "Barcelona", job: "Developer Web", studies: "MIT", markAv: 200},{fullName: "Armando", city: "Barcelona", job: "Domador de sirenas", studies: "De la esquina", markAv: 225}];

  var result=[];
  var contab=0; 
    var shownamess=function() {
     matchobj.forEach(function(obj) {
      if (obj.city.indexOf("Barcelona")!== -1) {
         result.push(obj.fullName);
        ++contab;
          }         
    });
     console.log("Are " + contab + " avengers living in Barcelona: "+ result.join(", "));
}
shownamess();


  /*OR*/
  var matchobj=[{fullName: "SergioM", city: "Barcelona", job: "Developer Web", studies: "MIT", markAv: 200},{fullName: "Armando", city: "Barcelona", job: "Buscador de sirenas", studies: "De la esquina", markAv: 225}];
  var cont=0;
    matchobj.forEach(function (element) {
      if (element.city=="Barcelona") {
         
        console.log(element.fullName);
      ++cont;          
      }  
    });
  var conttotal=cont;
  console.log("Are " + conttotal + " avengers living in Barcelona:" );

/*n)*/
var mediaTotal = 0;
matchobj.forEach(function (obj,index) {
  console.log("MarkAv to " + obj.fullName + " is " + obj.markAv);  
  mediaTotal += parseInt(obj.markAv);
});
var mediamarkAv= mediaTotal/matchobj.length;
console.log("Media= "+ mediamarkAv);

/*ñ)*/
var pair=[{id: 1, class: "Person", fullName: "SergioM", city: "Barcelona", job: "Developer Web", studies: "MIT", markAv: 300},
          {id: 2, class: "Person", fullName: "Armando", city: "Barcelona", job: "Buscador de sirenas", studies: "De la esquina", markAv: 225}, 
          {id: 3, class: "Animados", fullName: "Homer", city: "Springfield", job: "Supervisor sector 7-G", studies: "Donuts", markAv: 400}, 
          {id: 4, class: "Animados", fullName: "Peter", city: "USA", job: "Comercial", studies: "None", markAv: 360}];

 function showpairs(selectNum,selectNum2){
      
      if(pair[selectNum].markAv > pair[selectNum2].markAv) {
        return pair[selectNum].fullName + " vs " + pair[selectNum2].fullName + "=> " +pair[selectNum].fullName + " is better! " 
      } else if (pair[selectNum].markAv < pair[selectNum2].markAv) {
        return pair[selectNum].fullName + " vs " + pair[selectNum2].fullName + "=> " +pair[selectNum2].fullName + " is better! "  
      } else {
       return pair[selectNum].fullName + " vs " + pair[selectNum2].fullName + "=> " + "They are equals";
      }
    
}   
console.log(showpairs(1,2) + "\n" + showpairs(2,3))

// OR

 function showpairs(){
    var showpairs1=function (){
          if(pair[0].markAv > pair[1].markAv) {
        return pair[0].fullName + " vs " + pair[1].fullName + "=> " +pair[0].fullName + " is better! " 
      } else if (pair[0].markAv < pair[selectNum2].markAv) {
        return pair[0].fullName + " vs " + pair[1].fullName + "=> " +pair[1].fullName + " is better! "  
      } else {
       return "They are equals";
      }
    }

      var showpairs2=function() {
          if(pair[2].markAv > pair[3].markAv) {
        return pair[2].fullName + " vs " + pair[3].fullName + "=> " +pair[2].fullName + " is better! " 
      } else if (pair[2].markAv < pair[selectNum2].markAv) {
        return pair[2].fullName + " vs " + pair[3].fullName + "=> " +pair[3].fullName + " is better! "  
      } else {
       return "They are equals";
      }
     }
     console.log(showpairs1() + "\n" + showpairs2()) 
}   
  showpairs();                         
         


/*ñ1)*/
var pair=[{id: 1, class: "Person", fullName: "SergioM", city: "Barcelona", job: "Developer Web", studies: "MIT", markAv: 300},
          {id: 2, class: "Person", fullName: "Armando", city: "Barcelona", job: "Buscador de sirenas", studies: "De la esquina", markAv: 225}, 
          {id: 3, class: "Animados", fullName: "Homer", city: "Springfield", job: "Supervisor sector 7-G", studies: "Donuts", markAv: 400}, 
          {id: 4, class: "Animados", fullName: "Peter", city: "USA", job: "Comercial", studies: "None", markAv: 360}];

  function getRandom() {
      var randomNum=Math.floor(Math.random() * pair.length);
      return randomNum
  }

 function showpairs(){
      
      var selectNum=getRandom();
      var selectNum2=getRandom();

      if(pair[selectNum].markAv > pair[selectNum2].markAv) {
        return pair[selectNum].fullName + " vs " + pair[selectNum2].fullName + "=> " +pair[selectNum].fullName + " is better! " 
      } else if (pair[selectNum].markAv < pair[selectNum2].markAv) {
        return pair[selectNum].fullName + " vs " + pair[selectNum2].fullName + "=> " +pair[selectNum2].fullName + " is better! "  
      } else {
       return pair[selectNum].fullName + " vs " + pair[selectNum2].fullName + "=> " + "They are equals";
      }
    
}   
   console.log(showpairs() + "\n" + showpairs()) 
      

  //OR
  var pair=[{id: 1, class: "Person", fullName: "SergioM", city: "Barcelona", job: "Developer Web", studies: "MIT", markAv: 300},
          {id: 2, class: "Person", fullName: "Armando", city: "Barcelona", job: "Buscador de sirenas", studies: "De la esquina", markAv: 225}, 
          {id: 3, class: "Animados", fullName: "Homer", city: "Springfield", job: "Supervisor sector 7-G", studies: "Donuts", markAv: 400}, 
          {id: 4, class: "Animados", fullName: "Peter", city: "USA", job: "Comercial", studies: "None", markAv: 360}];

  function getRandom() {
      var randomNum=Math.floor(Math.random() * pair.length);
      return randomNum
  }

 function showpairs(){
      
      var selectNum=getRandom();
      var selectNum2=getRandom();

      if(pair[selectNum].markAv > pair[selectNum2].markAv) {
        console.log(pair[selectNum].fullName + " vs " + pair[selectNum2].fullName + "=> " +pair[selectNum].fullName + " is better! ") 
      } else if (pair[selectNum].markAv < pair[selectNum2].markAv) {
        console.log(pair[selectNum].fullName + " vs " + pair[selectNum2].fullName + "=> " +pair[selectNum2].fullName + " is better! ")  
      } else {
       console.log(pair[selectNum].fullName + " vs " + pair[selectNum2].fullName + "=> " + "They are equals");
      }
    
}   
    
  function pairsRandom() {
    i=0
    while  (i<4) {
      i++
      showpairs();
  }   
}
  pairsRandom();              
         

// Other way

var pair=[{id: 1, class: "Person", fullName: "SergioM", city: "Barcelona", job: "Developer Web", studies: "MIT", markAv: 300},
          {id: 2, class: "Person", fullName: "Armando", city: "Barcelona", job: "Buscador de sirenas", studies: "De la esquina", markAv: 225}, 
          {id: 3, class: "Animados", fullName: "Homer", city: "Springfield", job: "Supervisor sector 7-G", studies: "Donuts", markAv: 400}, 
          {id: 4, class: "Animados", fullName: "Peter", city: "USA", job: "Comercial", studies: "None", markAv: 360}];
function getRandom() {
      var randomNum=Math.floor(Math.random() * pair.length);
      return randomNum
}


      console.log(pair[selectNum].fullName + ": " + pair[selectNum].markAv + " " + pair[selectNum2].fullName + ": " + pair[selectNum2].markAv)
      if(pair[selectNum].markAv > pair[selectNum2].markAv) {
        console.log(pair[selectNum].fullName + " is better than " + pair[selectNum2].fullName)
      } else if (pair[selectNum].markAv < pair[selectNum2].markAv) {
        console.log(pair[selectNum].fullName + " is worse than " + pair[selectNum2].fullName)
      } else {
       console.log(pair[selectNum].fullName + " is equal than " + pair[selectNum2].fullName)
      }
}   
  showpairs(); 





var pair=[{id: 1, class: "Person", fullName: "SergioM", city: "Barcelona", job: "Developer Web", studies: "MIT", markAv: 300},
          {id: 2, class: "Person", fullName: "Armando", city: "Barcelona", job: "Buscador de sirenas", studies: "De la esquina", markAv: 225}, 
          {id: 3, class: "Animados", fullName: "Homer", city: "Springfield", job: "Supervisor sector 7-G", studies: "Donuts", markAv: 400}, 
          {id: 4, class: "Animados", fullName: "Peter", city: "USA", job: "Comercial", studies: "None", markAv: 360}];
function getRandom() {
      var randomNum=Math.floor(Math.random() * pair.length);
      return randomNum
}

 function showpairs(){
  cont=0
  i=0
      while(cont<=2) {
        cont++
        if()
      }
      
  showpairs(); 


function myName(n1){
    return n1
}
function myAge (a1){
    return a1
}
function info(){
    var x=myName("Núria")
    var y=myAge(32)
    return x+y
}
 info();