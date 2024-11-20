$(document).ready(function() {

  var body = $("body");
  var darkmode_btn = $("#darkmode-toggle");
  var darkmode_toggled = true;


  darkmode_btn.click(function() {
    if (!darkmode_toggled) {
	body.css({"background-color":"#f2f2f2", "color":"#333333"});
	darkmode_btn.css({"background-color":"#333333", "color":"#f2f2f2"});
	darkmode_btn.html('');
	darkmode_toggled = true;
    }
    else {
	body.css({"background-color":"#333333", "color":"#f2f2f2"});
	darkmode_btn.css({"background-color":"#f2f2f2", "color":"#333333"});
	darkmode_btn.html('');
	darkmode_toggled = false;
    }
  });

});
