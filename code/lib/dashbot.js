var secret = require('secret');
var http = require('http');
var console = require('console');
var apiKey = secret.get('dashbotApiKey');
var options = {  format: 'json',passAsJson: true};
var baseUrl = "https://tracker.dashbot.io/track?platform=universal&v=10.1.1-rest";

function incoming(userInfo,message,intent) {
   
   var params = {
      text: message,
      userId: userInfo.userId,
      intent: {
          name: intent
      },
      platformJson: {
        sessionId: userInfo.sessionId
      }
   };

   var response = http.postUrl(baseUrl + "&type=incoming&apiKey=" + apiKey,params,options);

   console.log('dashbot.incoming',response);

}
function outgoing(userInfo,message,intent) {
   
   var params = {
      text: message,
      userId: userInfo.userId,
      intent: {
          name: intent
      },
      platformJson: {
        sessionId: userInfo.sessionId
      }
   };

   var response = http.postUrl(baseUrl + "&type=outgoing&apiKey=" + apiKey,params,options);

  console.log('dashbot.outgoing',response);
}

module.exports = {
  incoming: incoming,
  outgoing: outgoing 
};