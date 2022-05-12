
exports.handler = async function (event, context) {
  
  // https://api.rock.so/webhook/bot?method=createTask&auth=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  var request = new XMLHttpRequest();
    request.open("POST", "'https://api.rock.so/webhook/bot?method=createTask&auth=aFvy5SnlY6sEiX3MbowzGUSVnB8JAVjFG5ZT8csnBVE'");

    request.setRequestHeader('Content-type', 'application/json');

    var params = {
      username: "My Webhook Name",
      avatar_url: "",
      content: "The message to send"
    }

    return request.send(JSON.stringify(params));
      
  
  // return {
  //   statusCode: 200,
  //   body: JSON.stringify({ message: "Hello World" }),
  // } catch (err) {
  //   return { statusCode: 500, body: err.toString() }
  // };
}