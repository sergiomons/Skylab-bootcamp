// 1º
var flights = [
{id: 0, to: "New York", from: "Barcelona", cost: 700, scale: false},
{id: 1, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true},
{id: 2, to: "Paris", from: "Barcelona", cost: 210, scale: false},
{id: 3, to: "Roma", from: "Barcelona", cost: 150, scale: false},
{id: 4, to: "London", from: "Madrid", cost: 200, scale: false},
{id: 5, to: "Madrid", from: "Barcelona", cost: 90, scale: false},
{id: 6, to: "Tokyo", from: "Madrid", cost: 1500, scale: true},
{id: 7, to: "Shangai", from: "Barcelona", cost: 800,scale: true},
{id: 8, to: "Sydney", from: "Barcelona", cost: 150,scale: true},
{id: 9, to: "Tel-Aviv", from: "Madrid", cost: 150,scale: false}
]

var operationFlights=function() {
    // PREGUNTAMOS EL NOMBRE AL USUARIO Y LE DAMOS LA BIENVENIDA
     var enterName=  function(){
         var intname= prompt("¿What is your name?");
           while (intname==="") { 
               alert("Introduce your name");
               intname= prompt("¿What is your name?");
               }
               alert("Welcome " + intname + "!");   
      }
      enterName();

     // MOSTRAMOS LOS VUELOS DISPONIBLES
       var showFlightsFriendly= function() {
         var showFlights=[];
        flights.forEach(function (o) {
            if (o.scale===false) {
              o.scale="none";
            } else {
              o.scale="1 o more";
            }
           showFlights += ("*The flight to " + o.to + " from " + o.from + " cost " + o.cost + " euros" + " with " + o.scale + " scales." + "\n");
       });
        alert(showFlights);    
     } 
       showFlightsFriendly();

    // MOSTRAMOS EL COSTE MEDIO DE TODOS LOS VUELOS
       var showAverageCost= function(){
        var totalCost=0
         flights.forEach((o) =>{
         totalCost+=o.cost
        });
       var averageCost=totalCost/flights.length;
        alert("The average cost of flights is " + averageCost + " euros.");
      }
     showAverageCost();

     // MOSTRAR CUANTOS VUELOS TIENEN ESCALAS Y CUALES SON
      var resultScales=[];
      var cont=0
       var flightsWithScales= function(obj) {
        if (obj.scale!=="none") {
         resultScales.push("* " + obj.from + " - " + obj.to + "\n");
         cont++;
         }
       }
      var filterFlights=flights.filter(flightsWithScales);
      alert("Are " + cont + " flights with scales:" +"\n"+ resultScales.join(""));

    // MOSTRAR LOS 5 ULTIMOS VUELOS

     var resultLastFlights=[];
      var lastFlights= function(obj) {
        if (obj.id>=5) {
         resultLastFlights.push("* " + obj.to+ "\n");
        }
     }
     var filterLastFlights= flights.filter(lastFlights);
     alert("The last flights are to: " + "\n" + resultLastFlights.join(""));
 }
 operationFlights();

/*var stringNombre= function(nombre) { 
return "Hola, soy" + " " + nombre; 
}; 
stringNombre("Matias");

var mostrarSaludo = function (saludo) {
alert(saludo);
};

//mostrarSaludo(stringNombre("Matias"));*/


// Pro
var admin="";
var flights = [
{id: 0, to: "New York", from: "Barcelona", cost: 700, scale: false},
{id: 1, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true},
{id: 2, to: "Paris", from: "Barcelona", cost: 210, scale: false},
{id: 3, to: "Roma", from: "Barcelona", cost: 150, scale: false},
{id: 4, to: "London", from: "Madrid", cost: 200, scale: false},
{id: 5, to: "Madrid", from: "Barcelona", cost: 90, scale: false},
{id: 6, to: "Tokyo", from: "Madrid", cost: 1500, scale: true},
{id: 7, to: "Shangai", from: "Barcelona", cost: 800,scale: true},
{id: 8, to: "Sydney", from: "Barcelona", cost: 150,scale: true},
{id: 9, to: "Tel-Aviv", from: "Madrid", cost: 150,scale: false}
]

var operationFlights=function() {
    // PREGUNTAMOS EL NOMBRE AL USUARIO Y LE DAMOS LA BIENVENIDA
     var enterName=  function(){
         var intname= prompt("¿What is your name?");
           while (intname==="") { 
               alert("Introduce your name");
               intname= prompt("¿What is your name?");
               }
               alert("Welcome " + intname + "!");   
      }
      enterName();

     // MOSTRAMOS LOS VUELOS DISPONIBLES
       var showFlightsFriendly= function() {
         var showFlights=[];
        flights.forEach(function (o) {
            if (o.scale===false) {
              o.scale="none";
            } else {
              o.scale="1 o more";
            }
           showFlights += ("*The flight to " + o.to + " from " + o.from + " cost " + o.cost + " euros" + " with " + o.scale + " scales." + "\n");
       });
        alert(showFlights);    
     } 
       showFlightsFriendly();

    // MOSTRAMOS EL COSTE MEDIO DE TODOS LOS VUELOS
       var showAverageCost= function(){
        var totalCost=0
         flights.forEach((o) =>{
         totalCost+=o.cost
        });
       var averageCost=totalCost/flights.length;
        alert("The average cost of flights is " + averageCost + " euros.");
      }
     showAverageCost();

     // MOSTRAR CUANTOS VUELOS TIENEN ESCALAS Y CUALES SON
      var resultScales=[];
      var cont=0
       var flightsWithScales= function(obj) {
        if (obj.scale!=="none") {
         resultScales.push("* " + obj.from + " - " + obj.to + "\n");
         cont++;
         }
       }
      var filterFlights=flights.filter(flightsWithScales);
      alert("Are " + cont + " flights with scales:" +"\n"+ resultScales.join(""));

    // MOSTRAR LOS 5 ULTIMOS VUELOS

     var resultLastFlights=[];
      var lastFlights= function(obj) {
        if (obj.id>=5) {
         resultLastFlights.push("* " + obj.to+ "\n");
        }
     }
     var filterLastFlights= flights.filter(lastFlights);
     alert("The last flights are to: " + "\n" + resultLastFlights.join(""));

     function adminUser() {
      var askAdm=prompt("Are you admin or user?");
      admin=askAdm;
      operAdmUser();
     }
     adminUser();

     function operAdmUser() {
      if(admin==="admin") {
          operAdm();
          } else {
            operUser();
          }
     }

     function operAdm() {
        var createOrRemove=prompt("Do you want create or remove flights?");
           if(createOrRemove==="create") {
              if (flights.length>=14) {
                alert("You can't create more flights")
              } else {
              createF();
              }
            } else if(createOrRemove==="remove") {
              removeF();
            }
      }

     function createF() {
           var from=prompt("From:");
           var to=prompt("To:");
           var cost=prompt("Cost:");
           var scale=prompt("With scale:(none/1 or more)");
           var newflight={id:10, to: to, from: from, cost: cost, scale: scale};
           flights.push(newflight);
           var showFlights=[];
          alert("New flight created! Look at your flights"); 
           flights.forEach(function (o) {
           showFlights += ("*The flight to " + o.to + " from " + o.from + " cost " + o.cost + " euros" + " with " + o.scale + " scales." + "\n");
       });
        alert(showFlights);   
          var createAgain=prompt("Do you want to create another flight?(yes/no)");
          if (createAgain==="yes") {
            createF();
          } else {
          operAdm();
        }
     }

     function removeF() {
         var introId=prompt("Introduce id");
        if (introId) {
          flights.splice(introId,1)
          /*function filter(r) {
            return r.id !== introId;
          }
          flights = flights.filter(filter);*/
          
          alert("Fligth removed succesful!");
           var showFlights=[];
           flights.forEach(function (o) {
           showFlights += ("*The flight to " + o.to + " from " + o.from + " cost " + o.cost + " euros" + " with " + o.scale + " scales." + "\n");
        });
           alert(showFlights); 
        var removeAgain=prompt("Do you want to remove another flight?(yes/no)");
          if (removeAgain==="yes") {  
          removeF();
         } else {
          operAdm();
         }
       }
    }   

      function operUser(){
        var searchF=prompt("Do you want to search a flight?(yes/no)");
         if (searchF) {
  
         searchWithFilter();
         } else {
          operAdmUser();
         }
      }

      function searchWithFilter() {
         var searchFilter=prompt("Do you want to use a filter?(price-max/highest-price/lowest-price/minToMax/standar-search)");
             if (searchFilter) {

                switch (searchFilter) {
                  case "price-max":
                  var enterPMax=prompt("Introduce the maximus price");
                  var resHp=[];
                    flights.filter(function(hP) {
                      if(hP.cost<=enterPMax) {
                       resHp+="*The flight to " + hP.to + " from " + hP.from + " cost " + hP.cost + " euros" + " with " + hP.scale + " scales." + "\n";
                       }
                    });
                    alert(resHp);
                    operUser();
                    break;

                  case "highest-price":
                      var max = 0;
                      resu=[];
                    for(var i=0,len=flights.length;i<len;i++){
                       if(max < flights[i].cost){
                            max = flights[i].cost;
                        }
                     }
                      flights.filter(function(hhP) {
                            if(hhP.cost===max) {
                              resu+="*The flight to " + hhP.to + " from " + hhP.from + " cost " + hhP.cost + " euros" + " with " + hhP.scale + " scales." + "\n";
                            }
                      });
                        alert(resu)
                      break;
                   
                      case "lowest-price":

                      resMin=[]; 
                      showMin=[];
                      for(var i=0,len=flights.length;i<len;i++){
                          resMin.push(flights[i].cost);
                        }
                        resMin.sort(function(a, b){return a-b});
                        resMin=resMin[0];
                        flights.filter(function(minP) {
                            if(minP.cost===resMin) {
                              showMin+="*The flight to " + minP.to + " from " + minP.from + " cost " + minP.cost + " euros" + " with " + minP.scale + " scales." + "\n";
                            }
                      });
                        alert(showMin);
                      break;

                      case "minToMax":
                       var showResMinMax=[];
                      function compare(a,b) {
                          if (a.cost < b.cost) {
                              return -1;
                            }
                          if (a.cost> b.cost) {
                             return 1;
                            }
                         return 0;
                      }
                      //En una linea: flights.sort(function(a,b) {return (a.last_nom > b.last_nom) ? 1 : ((b.last_nom > a.last_nom) ? -1 : 0);} );
                      var minMax=flights.sort(compare);

                        minMax.filter(function(minP) {
                              showResMinMax+="*The flight to " + minP.to + " from " + minP.from + " cost " + minP.cost + " euros" + " with " + minP.scale + " scales." + "\n";
                      });
                        alert(showResMinMax);
                      break;
                }
             }
      }
  }
 operationFlights();