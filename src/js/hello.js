exports.hello = function() {
  var greetings = [
    "Hello, World!",
    "Welcome to Hell, Bitches!",
    "Greetings, Earthling",
    "Good Day, Sir."
  ];
  var x = Math.floor(Math.random() * greetings.length+1);
  return greetings[x];
};
