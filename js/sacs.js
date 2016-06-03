//SuperAwesomeContentSwitcher
var currentlyShown = "cntHome";

$(document).ready(function () {
    $("#cntHome").show();
    $("#cntAbout").hide();
    $("#cntMembers").hide();
    $("#cntMentors").hide();
    $("#cntSponsors").hide();
    $("#cntResources").hide();
    $("#cntContact").hide();

    $(".nav-button").click(function() {
      $(".side-nav a.active").removeClass("active");
      $(this).addClass("active");
      window.scrollTo(0, 0);
    });

    $(".btnHome").click(function () {
        if (currentlyShown != "cntHome") {
            $("#" + currentlyShown).hide(400);
        }

        currentlyShown = "cntHome";
        $("#cntHome").show(400);
        console.log("Home Button Pressed - " + currentlyShown);
    });

    $(".btnAbout").click(function () {
      if (currentlyShown != "cntAbout") {
          $("#" + currentlyShown).hide(400);
      }

      currentlyShown = "cntAbout";
      $("#cntAbout").show(400);
      console.log("About Button Pressed - " + currentlyShown);
    });

    $(".btnMembers").click(function () {
      if (currentlyShown != "cntMembers") {
          $("#" + currentlyShown).hide(400);
      }

      currentlyShown = "cntMembers";
      $("#cntMembers").show(400);
      console.log("Members Button Pressed - " + currentlyShown);
    });

    $(".btnMentors").click(function () {
      if (currentlyShown != "cntMentors") {
          $("#" + currentlyShown).hide(400);
      }

      currentlyShown = "cntMentors";
      $("#cntMentors").show(400);
      console.log("Mentors Button Pressed - " + currentlyShown);
    });

    $(".btnSponsors").click(function () {
      if (currentlyShown != "cntSponsors") {
          $("#" + currentlyShown).hide(400);
      }

      currentlyShown = "cntSponsors";
      $("#cntSponsors").show(400);
      console.log("Sponsors Button Pressed - " + currentlyShown);
    });

    $(".btnResources").click(function () {
      $(".side-nav a.active").removeClass("active");
      $(this).addClass("active");

      if (currentlyShown != "cntResources") {
          $("#" + currentlyShown).hide(400);
      }

      currentlyShown = "cntResources";
      $("#cntResources").show(400);
      console.log("Resources Button Pressed - " + currentlyShown);
    });

    $(".btnContact").click(function () {
      if (currentlyShown != "cntContact") {
          $("#" + currentlyShown).hide(400);
      }

      currentlyShown = "cntContact";
      $("#cntContact").show(400);
      console.log("Contact Button Pressed - " + currentlyShown);
    });
});
