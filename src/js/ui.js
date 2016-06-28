var hello = require('./../src/js/hello.js').hello;

$(document).ready(function(){
  $("h1").text(hello);
});
