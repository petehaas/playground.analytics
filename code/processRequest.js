var dashbot = require('lib/dashbot.js'); 

module.exports.function = function processRequest (input,$vivContext) {

   var intent = 'processRequest';

  // log the input
  dashbot.incoming($vivContext,input, intent);  
  
  var response = "Okay, " + input;

  // log the output
  dashbot.outgoing($vivContext, response, intent);  

  return response;

}
