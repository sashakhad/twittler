
var datetime = null,
        date = null;

var update = function () {
    date = moment(new Date())
    datetime = (date.fromNow());
};

 var result = [];
      $(document).ready(function(){
        var $body = $('body');
        $body.html('');


    datetime = $('#datetime');
    update();
    setInterval(update, 1000);

        var index = streams.home.length - 1;
        while(index >= 0){
          var tweet = streams.home[index];
          var $tweet = $('<div></div>');
          $tweet.text('@' + tweet.user + ': ' + tweet.message);
          //$tweet.appendTo($body);
          index -= 1;
        }

        var displayNames = {
          shawn: "Shawn Drost",
          sharks: "Sharks FoR Cheap",
          marcus: "Marcus Raucus",
          doug: "Douglas Calhoun"
        };
        var name = "";
        var image = "";
        var time = moment().fromNow();

        function prependTweets(){
          
          var user = tweet.user
          switch(user){
            case 'shawndrost':
              $user = $('<div><a  href = "1" class = "shawn">' + name + ' + </a></div>');
              user = "shawnyyboyyy"
              name = displayNames.shawn;
             
              image = '<img src = shawn.jpg>'
              break;
            case 'sharksforcheap':
              $user = $('<button  href = # class = "displayNames"></button>');
              name = displayNames.sharks
              user = "SharkzzzFoCheap"
              image = '<img src = shark.jpg>'
              break;
            case 'mracus':
              $user = $('<div class = "displayNames"><a  href = "3"></a></div');
              name =  displayNames.marcus 
              user = "MarcusTheRaucus",
              image = '<img src = marcus.jpg>'
              break;  
            case 'douglascalhoun':
              $user = $('<a  href = "4" class = "displayNames"></a>');
              name =  displayNames.doug 
              user = "beardmau5"
              image = '<img src = beard.jpg>'
              break;                
          }
          //Variables for Users, Messages, and Dates //
          $user.text('@' + user);
          var message = tweet.message
          var $message = $('<div class = "messages"></div>');
          $message.text(message);
          var created_at = tweet.created_at
          var $created_at = $('<div class = "dates"></div>');
          $created_at.text(created_at);

          index = streams.home.length - 1;
          tweet = streams.home[index]
          var $tweet = $('<div></div>');
          $tweet.text('@' + user + ': ' + message + created_at);
          //$tweet.appendTo($body);
          //console.log(streams.users);
          $body.prepend(  '<div class "group">' + image + 
                           '&nbsp' +
                          '<a href = "#" class = "displayNames">' + name + '&nbsp' + '</a>' +
                          '<p class = "userNames">' + '@' + user + '&nbsp' + '</p>' +
                          '<p class = "userNames"> · </p>' + '  ' + 
                          '<p class = "userNames">' + datetime + '</p>' + '<br/>' + '&nbsp' +
                          '<p class = "messages">' + message + '</p>' +
                          '</div>');

        }
        function timedRefresh(){
          setInterval(prependTweets, 5000)
        }
        timedRefresh();

      });
