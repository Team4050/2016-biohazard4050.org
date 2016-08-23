// var descriptions = {
//   "Fred": "Fred likes ice cream, but is allergic to milk.",
//   "Bob": "Bob is addicted to math."
// };

var xmlhttp = new XMLHttpRequest();
var url = "data/memberData.json";
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

  container = document.getElementById("content-members");
  var memberList = document.createElement("ul");
  memberList.setAttribute("class", "collection");
  for (i = 0; i < descriptionArray.length; i++) {

    var name = descriptions[i].name;
    var nameSanSpace = name.toLowerCase().replace(/\s+/g, '-').replace("\.", '');
    var description = descriptions[i].description;
    var bio = descriptions[i].bio;
    var image = descriptions[i].image;

    var memberCollectionItem = document.createElement("li");
    memberCollectionItem.setAttribute("class", "collection-item avatar");

    var memberImage = document.createElement("img");
    memberImage.setAttribute("src", "images/members/" + nameSanSpace + ".jpg");
    memberImage.setAttribute("onerror", "if (this.src != 'images/members/unknown.jpg') this.src = 'images/members/unknown.jpg';");
    memberImage.setAttribute("alt", "");
    memberImage.setAttribute("class", "circle");

    var memberName = document.createElement("span");
    memberName.setAttribute("class", "title");
    memberName.innerHTML = name;

    var memberJob = document.createElement("p");
    memberJob.innerHTML = description;

    var actionButton = document.createElement("a");
    actionButton.setAttribute("class", "secondary-content waves-effect waves-light green accent-4 btn modal-trigger");
    actionButton.setAttribute("href", "#" + nameSanSpace);
    actionButton.innerHTML = "More...";


    memberCollectionItem.appendChild(memberImage);
    memberCollectionItem.appendChild(memberName);
    memberCollectionItem.appendChild(memberJob);
    memberCollectionItem.appendChild(actionButton);

    memberList.appendChild(memberCollectionItem);









    // var cardContainer = document.createElement("div");
    // cardContainer.setAttribute("class", "col s12 m6");
    //
    // var card = document.createElement("div");
    // card.setAttribute("class", "card member-card extra-small grey darken-1");
    //
    // var cardTitle = document.createElement("span");
    // cardTitle.setAttribute("class", "card-title");
    // cardTitle.innerHTML = name;
    //
    // var cardContent = document.createElement("div");
    // cardContent.setAttribute("class", "card-content white-text");
    //
    // var cardText = document.createElement("p");
    // cardText.innerHTML = description;
    //
    // var cardAction = document.createElement("div");
    // cardAction.setAttribute("class", "card-action right-align");
    //
    // var actionButton = document.createElement("a");
    // actionButton.setAttribute("class", "waves-effect waves-light green accent-4 btn modal-trigger");
    // actionButton.setAttribute("href", "#" + nameSanSpace);
    // actionButton.innerHTML = "More...";
    //
    // cardAction.appendChild(actionButton);
    //
    // cardContent.appendChild(cardTitle);
    // cardContent.appendChild(cardText);
    //
    // card.appendChild(cardContent);
    // card.appendChild(cardAction);
    //
    // cardContainer.appendChild(card);
    //
    // if (i == 0 || i % 2 == 0) {
    //   var row = document.createElement("div");
    //   row.setAttribute("class", "row");
    //   row.appendChild(cardContainer);
    //   container.appendChild(row);
    // } else {
    //   row.appendChild(cardContainer);
    // }




    var modal = document.createElement("div");
    modal.setAttribute("id", nameSanSpace);
    modal.setAttribute("class", "modal modal-fixed-footer");

    var modalContent = document.createElement("div");
    modalContent.setAttribute("class", "modal-content");
    modalContent.innerHTML = "<h4>" + name + "</h4>\n<div class=\"divider div-green\"></div>\n<p class=\"bio\">" + bio + "</p>";

    var modalFooter = document.createElement("div");
    modalFooter.setAttribute("class", "modal-footer");
    modalFooter.innerHTML = '<a href="#!" class="modal-action modal-close waves-effect waves-accentGreen btn-flat ">Close</a>';

    modal.appendChild(modalContent);
    modal.appendChild(modalFooter);

    container.appendChild(modal);

    $('.modal-trigger').leanModal();

  }

  container.appendChild(memberList);
}

loadFile(url, handleJSON);
