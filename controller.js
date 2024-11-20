var darkmode_btn = $("#darkmode-toggle");

$(document).ready(function() {
  darkmode_btn.click(function() {
    alert("jquery working");
    $("body").css("background-color","black");
  });
});
