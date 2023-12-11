// header toggle function
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

// three link
function three(){window.open("ddd.html");}

function goodYou(){window.open("good-for-you.html");}

function innocent(){window.open("innocent.html");}

function coins(){window.open("coins.html");}