$(document).ready(function(e) {
  function apiCall(chan){
    $.ajax({
      url: 'https://wind-bow.gomix.me/twitch-api/streams/'+chan,
      dataType: 'jsonp',
      success: function(data){
        var text = "";
        if(data.status===404){
           text = "<p><b>"+chan+"</b>"+"does not exist.</p>";
        }
        else if(data.stream !== null){
          text = '<p class="channelName"> <a href="https://www.twitch.tv/'+ chan+'" target="_blank">' + data.stream.channel.display_name+'</a></p>';
          text += '<p class="channelDetail">' + data.stream.channel.game+ ": "+data.stream.channel.status + '</p>';
        }
        else{
          text = '<p><b><a href="https://www.twitch.tv/' + chan +'" target="_blank">'+chan+ '</b></a> is <em>offline</em>. </p>'
        }
        $('#meat').append(text);
      },
      error: function(){
      }
    });
  }

  $(document).ready(function(){
    apiCall("freecodecamp");

    apiCall("monstercat");
    apiCall("comster404 ");


  })


  });
