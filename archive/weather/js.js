function abbrState(input){
  var states = [
    ['Arizona', 'AZ'],
    ['Alabama', 'AL'],
    ['Alaska', 'AK'],
    ['Arizona', 'AZ'],
    ['Arkansas', 'AR'],
    ['California', 'CA'],
    ['Colorado', 'CO'],
    ['Connecticut', 'CT'],
    ['Delaware', 'DE'],
    ['Florida', 'FL'],
    ['Georgia', 'GA'],
    ['Hawaii', 'HI'],
    ['Idaho', 'ID'],
    ['Illinois', 'IL'],
    ['Indiana', 'IN'],
    ['Iowa', 'IA'],
    ['Kansas', 'KS'],
    ['Kentucky', 'KY'],
    ['Kentucky', 'KY'],
    ['Louisiana', 'LA'],
    ['Maine', 'ME'],
    ['Maryland', 'MD'],
    ['Massachusetts', 'MA'],
    ['Michigan', 'MI'],
    ['Minnesota', 'MN'],
    ['Mississippi', 'MS'],
    ['Missouri', 'MO'],
    ['Montana', 'MT'],
    ['Nebraska', 'NE'],
    ['Nevada', 'NV'],
    ['New Hampshire', 'NH'],
    ['New Jersey', 'NJ'],
    ['New Mexico', 'NM'],
    ['New York', 'NY'],
    ['North Carolina', 'NC'],
    ['North Dakota', 'ND'],
    ['Ohio', 'OH'],
    ['Oklahoma', 'OK'],
    ['Oregon', 'OR'],
    ['Pennsylvania', 'PA'],
    ['Rhode Island', 'RI'],
    ['South Carolina', 'SC'],
    ['South Dakota', 'SD'],
    ['Tennessee', 'TN'],
    ['Texas', 'TX'],
    ['Utah', 'UT'],
    ['Vermont', 'VT'],
    ['Virginia', 'VA'],
    ['Washington', 'WA'],
    ['West Virginia', 'WV'],
    ['Wisconsin', 'WI'],
    ['Wyoming', 'WY'],
  ];
  input = input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  for(i = 0; i < states.length; i++){
    if(states[i][0] == input){
      return(states[i][1]);
    }
  }
}

$(document).ready(function(e) {
  var city = "";
  var temp = "";
  var state = "";
  var loc = "";
  var detailLink;
  $.when(
    $.get("https://ipinfo.io", function (response) {
      $("#address").html("Hi there, friend from " + response.city + ", " + response.region);
        city = response.city.replace(/ /g,'_');
      state = abbrState(response.region);
      loc = response.loc;
      $("#details").html(JSON.stringify(response, null, 4));
    }, "jsonp")
  ).done(function(){
    // $.getJSON("https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric"+"&APPID=979f2ca628b06aa6cf0e93f4427eec60",function(data){
    //   $("#mainweather").html(JSON.parse(JSON.stringify(data.weather[0].main)));
    //   temp = Math.round(JSON.parse(JSON.stringify(data.main.temp)) * 10) / 10;
    //   $("#degree").html(temp +" C");
    //
    //   var ic = JSON.parse(JSON.stringify(data.weather[0].icon));
    //   $("#icon").attr("src","http://openweathermap.org/img/w/"+ic+".png");
    //
    // });
    $.ajax({
      url : "https://api.wunderground.com/api/27f3d2ce627602ed/geolookup/conditions/q/"+state+"/"+city+".json",
      dataType : "jsonp",
      success : function(parsed_json) {
        var location = parsed_json['location']['city'];
        temp = parsed_json['current_observation']['temp_c'];
        var weather = parsed_json['current_observation']['weather'];
        $("#mainweather").html(weather);
        $("#degree").html(temp +" C");
        var url = parsed_json['current_observation']['icon_url'].replace('http','https');

        $("#icon").attr("src",url);

        var observation_time = parsed_json['current_observation']['observation_time'];
        $("#observation_time").html(observation_time);
        var feelslike_string = parsed_json['current_observation']['feelslike_string'];
        $("#feelsLike").html("Feels Like "+feelslike_string);

        detailLink = parsed_json['current_observation']['forecast_url'];
      }
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

  $('#detailForcast').click(function() {
  window.open(detailLink,'_blank');
});


});
