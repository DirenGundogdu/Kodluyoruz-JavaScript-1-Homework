// Getting a Name
let name = prompt("Adınız nedir?");

document.getElementById("name").innerHTML = name;



// Clock and Day
function time() {
  let myDate = new Date();
  let day = myDate.getDay();
  let daym = myDate.getDate();
  const dayarray = [ "Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi",];


  let myTime = new Date();
  let h = myTime.getHours();
  let m = myTime.getMinutes();
  let s = myTime.getSeconds();
  if(h == 24){
      h = 0;
  }else if (h > 12){
      h = h - 0;
  }

  if(h < 10){
      h = "0" + h;
  }
  
  if(m < 10){
      m = "0" + m;
  }
  
  if(s < 10){
      s = "0" + s;
  }
  
  let clock = document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s + " "  + dayarray[day];


  setTimeout("time()", 1000);
}

time();
