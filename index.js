 function convertTemperature () {
   var temperature=document.getElementById("celsius").value;
   var Farharenheit= ((temperature * 9/5) +32).toFixed(2);
   //  console.log(Farharenheit);
   if(!temperature){
      document.getElementById("result").innerHTML= "<p> Farharenheit: " + "NAN" + "</p>";
   }
   else{
   document.getElementById("result").innerHTML= "<p> Farharenheit: " + Farharenheit + "</p>";
   }
}