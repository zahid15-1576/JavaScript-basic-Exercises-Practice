var today= new Date();
var day= today.getDay();
var daylist= ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
document.getElementById("day1").addEventListener("click", myFunction);

function myFunction(){
    document.getElementById("day1").innerHTML = ("Today is : " + daylist[day] + ".");
} 




var hour=today.getHours();
var min=today.getMinutes();
var sec=today.getSeconds();

document.getElementById("Time").addEventListener("click", time);
function time(){
    document.getElementById("Time").innerHTML = ("Current Time : "+hour + " : " + min + " : " + sec);;
    
} 





