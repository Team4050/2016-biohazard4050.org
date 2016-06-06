//SuperAwesomeContentSwitcher
var currentlyShown = "cntHome";

$(document).ready(function () {
    makeAppear("#cntHome");
    makeGone("#cntAbout");
    makeGone("#cntMembers");
    makeGone("#cntMentors");
    makeGone("#cntSponsors");
    makeGone("#cntAwards");
    makeGone("#cntContact");

    $(".nav-button").click(function() {
      $(".side-nav a.active").removeClass("active");
      $(this).addClass("active");
      window.scrollTo(0, 0);
    });

    $(".btnHome").click(function () {
        if (currentlyShown != "cntHome") {
          makeGone("#" + currentlyShown);
        }

        currentlyShown = "cntHome";
        makeAppear("#cntHome");
        console.log("Home Button Pressed - " + currentlyShown);
    });

    $(".btnAbout").click(function () {
      if (currentlyShown != "cntAbout") {
          makeGone("#" + currentlyShown);
      }

      currentlyShown = "cntAbout";
      makeAppear("#cntAbout");
      console.log("About Button Pressed - " + currentlyShown);
    });

    $(".btnMembers").click(function () {
      if (currentlyShown != "cntMembers") {
          makeGone("#" + currentlyShown);
      }

      currentlyShown = "cntMembers";
      makeAppear("#cntMembers");
      console.log("Members Button Pressed - " + currentlyShown);
    });

    $(".btnMentors").click(function () {
      if (currentlyShown != "cntMentors") {
          makeGone("#" + currentlyShown);
      }

      currentlyShown = "cntMentors";
      makeAppear("#cntMentors");
      console.log("Mentors Button Pressed - " + currentlyShown);
    });

    $(".btnSponsors").click(function () {
      if (currentlyShown != "cntSponsors") {
          makeGone("#" + currentlyShown);
      }

      currentlyShown = "cntSponsors";
      makeAppear("#cntSponsors");
      console.log("Sponsors Button Pressed - " + currentlyShown);
    });

    $(".btnAwards").click(function () {
      $(".side-nav a.active").removeClass("active");
      $(this).addClass("active");

      if (currentlyShown != "cntAwards") {
          makeGone("#" + currentlyShown);
      }

      currentlyShown = "cntAwards";
      makeAppear("#cntAwards");
      console.log("Awards Button Pressed - " + currentlyShown);
    });

    $(".btnContact").click(function () {
      if (currentlyShown != "cntContact") {
          makeGone("#" + currentlyShown);
      }

      currentlyShown = "cntContact";
      makeAppear("#cntContact");
      console.log("Contact Button Pressed - " + currentlyShown);
    });
});

function makeGone(element) {
  $(element).velocity({opacity: 0}, {duration: 150, display: "none"});
}

function makeAppear(element) {
  $(element).velocity({opacity: 1}, {duration: 150, delay: 125, display: "auto"});
}
