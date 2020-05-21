var mainText=document.getElementById("mainText");
var mainDiv=document.getElementById("mainDiv");
var submitBtn=document.getElementById("submitBtn");
var api_current="https://io.adafruit.com/api/v2/smkhhs/feeds/current?X-AIO-Key=0b17d415412d4be189341898e6ee4482"

var api_humidity="https://io.adafruit.com/api/v2/smkhhs/feeds/humidity?X-AIO-Key=0b17d415412d4be189341898e6ee4482"

var api_power="https://io.adafruit.com/api/v2/smkhhs/feeds/power?X-AIO-Key=0b17d415412d4be189341898e6ee4482"

var api_temp="https://io.adafruit.com/api/v2/smkhhs/feeds/temperature?X-AIO-Key=0b17d415412d4be189341898e6ee4482"
var api_volt="https://io.adafruit.com/api/v2/smkhhs/feeds/voltage?X-AIO-Key=0b17d415412d4be189341898e6ee4482"

var request =new XMLHttpRequest();
var request2 =new XMLHttpRequest();
var request3 =new XMLHttpRequest();
var request4 =new XMLHttpRequest();
var request5 =new XMLHttpRequest();

request.open('GET',api_current,true);
request.onload=function()
{
  var data=JSON.parse(this.response);
  var value=data.last_value;
  console.log(value);
  document.getElementById("fruitValue").innerHTML=value;
  
}
request.send();



request2.open('GET',api_humidity,true);
request2.onload=function()
{
  var data=JSON.parse(this.response);
  var value=data.last_value;
  console.log(value);
  document.getElementById("humidity").innerHTML=value;
  
}
request2.send();

request3.open('GET',api_power,true);
request3.onload=function()
{
  var data=JSON.parse(this.response);
  var value=data.last_value;
  console.log(value);
  document.getElementById("power").innerHTML=value;
  
}
request3.send();

request4.open('GET',api_temp,true);
request4.onload=function()
{
  var data=JSON.parse(this.response);
  var value=data.last_value;
  console.log(value);
  document.getElementById("temp").innerHTML=value;
  
}
request4.send();

request5.open('GET',api_volt,true);
request5.onload=function()
{
  var data=JSON.parse(this.response);
  var value=data.last_value;
  console.log(value);
  document.getElementById("volt").innerHTML=value;
  
}
request5.send();
