$(document).ready(function() {

  // CONSTANTS
  const FOUR_TENTH_SEC = 400;
  const HALF_SEC = 500;

  // ELEMENTS
  var body = $("body");
  var picture = $("#picture");
  var main_view = $("#main_view");
  var about_section = $("#about_section");
  var edu_section = $("#edu_section");
  var work_section = $("#work_hist_section");
  var projects_section = $("#projects_section");

  // BUTTONS
  var darkmode_btn = $("#darkmode-toggle");
  var darkmode_toggled = true;
  var about_btn = $("#about_btn");
  var edu_btn = $("#edu_btn");
  var work_btn = $("#work_btn");
  var projects_btn = $("#projects_btn");

  // INIT FUNCTIONS
  main_view.hide();
  about_section.show();
  edu_section.hide();
  work_section.hide();
  projects_section.hide();
  main_view.fadeIn(HALF_SEC);

  about_btn.click(function() {
	about_section.fadeIn(FOUR_TENTH_SEC);
  	edu_section.hide();
  	work_section.hide();
  	projects_section.hide();
  });

  edu_btn.click(function() {
	about_section.hide();
  	edu_section.fadeIn(FOUR_TENTH_SEC);
  	work_section.hide();
  	projects_section.hide();
  });

  work_btn.click(function() {
	about_section.hide();
  	edu_section.hide();
  	work_section.fadeIn(FOUR_TENTH_SEC);
  	projects_section.hide();
  });

  projects_btn.click(function() {
	about_section.hide();
  	edu_section.hide();
  	work_section.hide();
  	projects_section.fadeIn(FOUR_TENTH_SEC);
  });

  darkmode_btn.click(function() {
    if (!darkmode_toggled) {
	body.css({"background-color":"#f2f2f2", "color":"#333333"});
  picture.css({"background-color":"#333333", "color":"#f2f2f2"});
	darkmode_btn.css({"background-color":"#333333", "color":"#f2f2f2"});
	darkmode_btn.html('');
	darkmode_toggled = true;
    }
    else {
	body.css({"background-color":"#333333", "color":"#f2f2f2"});
  picture.css({"background-color":"#f2f2f2", "color":"#333333"});
	darkmode_btn.css({"background-color":"#f2f2f2", "color":"#333333"});
	darkmode_btn.html('');
	darkmode_toggled = false;
    }
  });

});
