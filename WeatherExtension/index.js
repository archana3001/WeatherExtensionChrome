
function include(file) {
  
    var script  = document.createElement('script');
    script.src  = file;
    script.type = 'text/javascript';
    script.defer = true;
    
    document.getElementsByTagName('head').item(0).appendChild(script);   
  }
  include('icons.js');

const url="https://api.openweathermap.org/data/2.5/weather?q=";
const key="2b2bb557a3dbe3617f0d2169517c9cda";
   
let s= new Date().toLocaleTimeString();
console.log(s.substring(9));
var ele=document.createElement('p');
ele.setAttribute("class","sourceText");
if(s.substring(9)=='PM'){
    ele.innerHTML='<i class="fas fa-3x fa-moon moon" style="font-size: 38px;"></i>';
}
else{
    ele.innerHTML='<i class="fas fa-3x fa-sun sun" style="font-size: 38px;"></i>';
    
}
document.getElementById('daynight').appendChild(ele);
let city='PATNA';
let country='IN';
fetch(url+city+','+country+'&appid='+key).then(data=>data.json()).then(weather=>{
    const wtemp=weather.main;
    const wsys=weather.sys;
    var sunrise=new Date(wsys.sunrise*1000).toLocaleTimeString();
   weatherWidgetRow1=document.getElementById('weatherWidgetRow1');
   weatherWidgetRow1.innerHTML=((wtemp.temp-273).toFixed(0))+`<sup>o </sup>C`;
   
   weatherWidgetRow2=document.getElementById('weatherWidgetRow2');
   weatherWidgetRow2.innerHTML='min : '+((wtemp.temp_min-273).toFixed(0))+`<sup>o</sup> C`+` and max : ${(wtemp.temp_max-273).toFixed(0)}<sup>o</sup> C`;

   weatherWidgetRow3=document.getElementById('weatherWidgetRow3');
   weatherWidgetRow3.innerHTML=`Humidity: ${wtemp.humidity} %`;

   weatherWidgetRow4=document.getElementById('weatherWidgetRow4');
   weatherWidgetRow4.innerHTML=`Sunrise : ${sunrise} <br>  Sunset : ${new Date(wsys.sunset*1000).toLocaleTimeString()} `;
   
   

   

});