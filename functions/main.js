$(document).ready(function(){
  // mobile menu toggle function
  const dlh = $("#nav-bar").height;
    $("#logo").click(function(){
        $("#nav-bar").toggle(
          function(){
            $("#nav-bar").animate({
              height: "0",
            }, 300)},
          function(){
            $("#nav-bar").animate({
              height: dlh,
            }, 300)},
        );
      });
});