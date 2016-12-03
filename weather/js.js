$(document).ready(function(e) {
  var city = "";
  var temp = "";
  $.when(
    $.get("https://ipinfo.io", function (response) {
      //$("#ip").html("IP: " + response.ip);
      $("#address").html("Hi there, friend from " + response.city + ", " + response.region);
      city = response.city.replace(/ /g,'');
      $("#details").html(JSON.stringify(response, null, 4));
    }, "jsonp")
  ).done(function(){
    $.getJSON("https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric"+"&APPID=979f2ca628b06aa6cf0e93f4427eec60",function(data){
      $("#mainweather").html(JSON.parse(JSON.stringify(data.weather[0].main)));
      temp = Math.round(JSON.parse(JSON.stringify(data.main.temp)) * 10) / 10;
      $("#degree").html(temp +" C");

      var ic = JSON.parse(JSON.stringify(data.weather[0].icon));
      $("#icon").attr("src","http://openweathermap.org/img/w/"+ic+".png");

    });
  });
  var i = 0;
  $("#cng").click(function(){
    if(i===0){
      temp  = Math.round(temp*1.8+32) * 100 / 100;
      $("#degree").html(temp +" F");
      i=1;
    }
    else{
      temp = Math.round((temp-32)*(5/9)) * 100 / 100;
      $("#degree").html(temp +" C");
      i=0;
    }
  });

});
