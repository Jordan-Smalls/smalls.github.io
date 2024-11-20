var darkmode_btn = $('#darkmode-toggle');

$(document).ready(function() {
  darkmode_btn.click(function() {
    $('body').css("background-color","black");
  });
});
