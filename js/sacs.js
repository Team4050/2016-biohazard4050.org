 //SuperAwesomeContentSwitcher
var currentlyShown = "content-home";

$(document).ready(function () {
  makeAppear("#content-home");
  makeGone("#content-about");
  makeGone("#content-members");
  makeGone("#content-mentors");
  makeGone("#content-sponsors");
  makeGone("#content-awards");
  makeGone("#content-contact");

  $(".nav-button").click(function () {
    $(".side-nav a.active").removeClass("active");
    $(this).addClass("active");
    window.scrollTo(0, 0);
  });

  $(".btnHome").click(function () {
    if (currentlyShown != "content-home") {
      makeGone("#" + currentlyShown);
    }

    currentlyShown = "content-home";
    makeAppear("#content-home");
    console.log("Home Button Pressed - " + currentlyShown);
    
  });

  $(".btnAbout").click(function () {
    if (currentlyShown != "content-about") {
      makeGone("#" + currentlyShown);
      
    }

    currentlyShown = "content-about";
    makeAppear("#content-about");
    console.log("About Button Pressed - " + currentlyShown);
  });

  $(".btnMembers").click(function () {
    if (currentlyShown != "content-members") {
      makeGone("#" + currentlyShown);
    }

    currentlyShown = "content-members";
    makeAppear("#content-members");
    console.log("Members Button Pressed - " + currentlyShown);
  });

  $(".btnMentors").click(function () {
    if (currentlyShown != "content-mentors") {
      makeGone("#" + currentlyShown);
    }

    currentlyShown = "content-mentors";
    makeAppear("#content-mentors");
    console.log("Mentors Button Pressed - " + currentlyShown);
  });

  $(".btnSponsors").click(function () {
    if (currentlyShown != "content-sponsors") {
      makeGone("#" + currentlyShown);
    }

    currentlyShown = "content-sponsors";
    makeAppear("#content-sponsors");
    console.log("Sponsors Button Pressed - " + currentlyShown);
  });

  $(".btnAwards").click(function () {
    if (currentlyShown != "content-awards") {
      makeGone("#" + currentlyShown);
    }

    currentlyShown = "content-awards";
    makeAppear("#content-awards");
    console.log("Awards Button Pressed - " + currentlyShown);
  });

  $(".btnContact").click(function () {
    if (currentlyShown != "content-contact") {
      makeGone("#" + currentlyShown);
    }

    currentlyShown = "content-contact";
    makeAppear("#content-contact");
    console.log("Contact Button Pressed - " + currentlyShown);
  });
});

function makeGone(element) {
  $(element).velocity({
    opacity: 0
  }, {
    duration: 150,
    display: "none"
  });
}

function makeAppear(element) {
  $(element).velocity({
    opacity: 1
  }, {
    duration: 150,
    delay: 125,
    display: "auto"
  });
}
