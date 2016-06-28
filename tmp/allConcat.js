$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

var hello = require('./../src/js/hello.js').hello;

$(document).ready(function(){
  $("h1").text(hello);
});

$(document).ready(function(){
  $('#time').text(moment());
});
