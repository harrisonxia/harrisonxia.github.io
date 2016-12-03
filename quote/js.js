$(document).ready(function(e) {
  var curContent = "";
  var curTitle="";
  var cont = [];
  var tit = [];

  // $.getJSON("https://crossorigin.me/http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=30&callback=", function(a) {
  //   $("#quoteBox").append(a[0].content + "<p>— " + a[0].title + "</p>");
  //   for(var i=0; i<30; i++){
  //     cont[i] = a[i].content.replace("<p>","");
  //     cont[i] = cont[i].replace("</p>","");
  //     tit[i] = a[i].title;
  //   }
  //   curContent = cont[0];
  //   curTitle = tit[0];
  // }).fail(function(jqXHR, textStatus, errorThrown){
  //   alert(jqXHR.status);
  //   alert("textStatus: "+textStatus+"  errorThrown:  "+ errorThrown)});
  //
    $.ajax( {
      url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=30',
      success: function(a) {
        $("#quoteBox").append(a[0].content + "<p>— " + a[0].title + "</p>");
        for(var i=0; i<30; i++){
          cont[i] = a[i].content.replace("<p>","");
          cont[i] = cont[i].replace("</p>","");
          tit[i] = a[i].title;
        }
        curContent = cont[0];
        curTitle = tit[0];
      },
      cache: false
    });





    var num = 0;
    $("#butt").click(function() {
      $("#quoteBox").empty();
      num = Math.floor((Math.random() * 30));
      $("#quoteBox").append(cont[num] + "<p>— " + tit[num] + "</p>");
      curContent = cont[num];
      curTitle=tit[num];
    });
    $("#tweet").click(function() {
      $('#ahref').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent('"' + curContent + '"' + curTitle));
    });

  });
