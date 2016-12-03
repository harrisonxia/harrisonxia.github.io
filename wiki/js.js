$(document).ready(function() {
  var link = "https://en.wikipedia.org/w/api.php?action=opensearch&search=";
  var prop = "&limit=10&namespace=0&format=json";
  $("#butt").click(function(event){
    link+=$("#searchText").val()+prop;
    console.log(link);
    $.ajax( {
      url: link,
      dataType: 'jsonp',
      success:function(data) {
        $('#stage').append("<p>You Searched For "+data[0]+"</p>");
        for(var i=0; i<10; i++){
          //$('#stage').append("<p>"+data[1][i]+"</p>");

          $('#stage').append("<a href=\""+data[3][i]+"\" target=\"_blank\">"+data[1][i]+"</a>");
          $('#stage').append("<p>"+data[2][i]+"</p>");
        }
      }
    });
  });
});
