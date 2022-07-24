
var hours=document.getElementById("hours");
var minutes=document.getElementById("minutes");
var seconds=document.getElementById("seconds");
var session=document.getElementById("session");
var time=document.querySelector('.time');
var btn=document.getElementById("btn");


function currentTime() {
var date =new Date();
var hour =date.getHours();
var min =date.getMinutes();
var sec =date.getSeconds();
    hour=updateTime(hour);
    min=updateTime(min);
    sec=updateTime(sec);
    
    setTimeout(function() {currentTime()}, 1000);
};

   function updateTime(k){
    if (k<10) {
      return "0"+k;
    }
    else{
      return k;
    }
   }
   currentTime();
  session.innerHTML=date.getHours()<=12? 'PM':'AM'




