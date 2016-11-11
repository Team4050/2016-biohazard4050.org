var xmlhttp = new XMLHttpRequest();
var url = "data/sponsorData.json";
var descriptions;
var column = 1;

function xhrSuccess() {
  descriptions = this.responseText;
  this.callback.apply(this, this.arguments);
}

function xhrError() {
  console.error(this.statusText);
}

function loadFile(sURL, fCallback /*, argumentToPass1, argumentToPass2, etc. */ ) {
  var oReq = new XMLHttpRequest();
  oReq.callback = fCallback;
  oReq.arguments = Array.prototype.slice.call(arguments, 2);
  oReq.onload = xhrSuccess;
  oReq.onerror = xhrError;
  oReq.open("get", sURL, true);
  oReq.send(null);
}

function handleJSON() {
  descriptions = JSON.parse(descriptions);
  var descriptionArray = Object.keys(descriptions);

  var tierOne = document.getElementById("tier-one-sponsors");
  var tierTwo = document.getElementById("tier-two-sponsors");
  var tierThree = document.getElementById("tier-three-sponsors");
  var tierFour = document.getElementById("tier-four-sponsors");
  var tierFive = document.getElementById("tier-five-sponsors");
  var tierSix = document.getElementById("tier-five-sponsors");
  var tierSeven = document.getElementById("tier-five-sponsors");

  var sponsorContainer = document.createElement("ul");
  sponsorContainer.setAttribute("class", "collapsible");
  // container.appendChild(tierOne);
  // container.appendChild(tierTwo);
  // container.appendChild(tierThree);
  // container.appendChild(tierFour);
  // container.appendChild(tierFive);
  for (i = 0; i < descriptionArray.length; i++) {

    var name = descriptions[i].name;
    var nameSanSpace = name.toLowerCase().replace(/\s+/g, '-').replace("\.", '');
    var description = descriptions[i].description;
    var sponsorLevel = descriptions[i].sponsorLevel;
    var logo = descriptions[i].logo;

    var sponsorListItem = document.createElement("li");

    var collapsibleSponsorHeader = document.createElement("div");
    collapsibleSponsorHeader.setAttribute("class", "collapsible-header");
    collapsibleSponsorHeader.innerHTML = name;

    var collapsibleSponsorBody = document.createElement("div");
    collapsibleSponsorBody.setAttribute("class", "collapsible-body");
    collapsibleSponsorBody.innerHTML = "<p>" + description + "</p>";

    sponsorListItem.appendChild(collapsibleSponsorHeader);
    sponsorListItem.appendChild(collapsibleSponsorBody);

    // sponsorContainer.appendChild(sponsorListItem);

    switch (sponsorLevel) {
    case "tierOne":
      tierOne.firstElementChild.appendChild(sponsorListItem);
      break;
    case "tierTwo":
      tierTwo.firstElementChild.appendChild(sponsorListItem);
      break;
    case "tierThree":
      tierThree.firstElementChild.appendChild(sponsorListItem);
      break;
    case "tierFour":
      tierFour.firstElementChild.appendChild(sponsorListItem);
      break;
    case "tierFive":
      tierFive.firstElementChild.appendChild(sponsorListItem);
      break;
      case "tierSix":
        tierSix.firstElementChild.appendChild(sponsorListItem);
        break;
      case "tierSeven":
        tierSeven.firstElementChild.appendChild(sponsorListItem);
        break;
    default:
      console.log("error with " + sponsorLevel);
    }
  }
}

loadFile(url, handleJSON);
