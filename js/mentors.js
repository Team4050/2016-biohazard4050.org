var xmlhttp = new XMLHttpRequest();
var url = "data/mentorData.json";
var descriptions;
var column = 1;

// fetch a file
function loadFile(sURL, fCallback /*, argumentToPass1, argumentToPass2, etc. */) {
    var oReq = new XMLHttpRequest();
    oReq.callback = fCallback;
    oReq.arguments = Array.prototype.slice.call(arguments, 2);
    oReq.onload = xhrSuccess;
    oReq.onerror = xhrError;
    oReq.open("get", sURL, true);
    oReq.send(null);
}

// do stuff on file fetch success
function xhrSuccess() {
    descriptions = this.responseText;
    this.callback.apply(this, this.arguments);
}

//do stuff if the fetch fails
function xhrError() {
    console.error(this.statusText);
}

// convert the json data to HTML elements
function handleJSON() {
    descriptions = JSON.parse(descriptions);
    var descriptionArray = Object.keys(descriptions);

    container = document.getElementById("content-mentors");
    var mentorList = document.createElement("ul");
    mentorList.setAttribute("class", "collection");
    for (i = 0; i < descriptionArray.length; i++) {

        var name = descriptions[i].name;
        var nameSanSpace = name.toLowerCase().replace(/\s+/g, '-').replace("\.", '');
        var description = descriptions[i].description;
        if (description === "") {
            description = "Student Advisor/Chaperone";
        }
        var bio = descriptions[i].bio;
        var image = descriptions[i].image;

        var mentorCollectionItem = document.createElement("li");
        mentorCollectionItem.setAttribute("class", "collection-item avatar");

        var mentorImage = document.createElement("img");
        mentorImage.setAttribute("src", "images/mentors/" + nameSanSpace + ".jpg");
        mentorImage.setAttribute("onerror", "if (this.src != 'images/mentors/unknown.jpg') this.src = 'images/mentors/unknown.jpg';");
        mentorImage.setAttribute("alt", "");
        mentorImage.setAttribute("class", "circle");

        var mentorName = document.createElement("span");
        mentorName.setAttribute("class", "title");
        mentorName.innerHTML = name;

        var mentorJob = document.createElement("p");
        mentorJob.innerHTML = description;

        var actionButton = document.createElement("a");
        actionButton.setAttribute("class", "secondary-content waves-effect waves-light green accent-4 btn modal-trigger");
        actionButton.setAttribute("href", "#" + nameSanSpace);
        actionButton.innerHTML = "More...";


        mentorCollectionItem.appendChild(mentorImage);
        mentorCollectionItem.appendChild(mentorName);
        mentorCollectionItem.appendChild(mentorJob);
        mentorCollectionItem.appendChild(actionButton);

        mentorList.appendChild(mentorCollectionItem);


        // var cardContainer = document.createElement("div");
        // cardContainer.setAttribute("class", "col s12 m6");
        //
        // var card = document.createElement("div");
        // card.setAttribute("class", "card member-card extra-small grey darken-1");
        //
        // // var cardImageContainer = document.createElement("div");
        // // cardImageContainer.setAttribute("class", "card-image");
        //
        // // var cardImage = document.createElement("img");
        // // cardImage.setAttribute("src", "images/mentors/" + image);
        //
        // var cardTitle = document.createElement("span");
        // cardTitle.setAttribute("class", "card-title");
        // cardTitle.innerHTML = name;
        //
        // var cardContent = document.createElement("div");
        // cardContent.setAttribute("class", "card-content white-text");
        // // cardContent.innerHTML = "<p>" + description + "</p>";
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
        // // cardImageContainer.appendChild(cardImage);
        // // cardImageContainer.appendChild(cardTitle);
        //
        // cardAction.appendChild(actionButton);
        //
        // cardContent.appendChild(cardTitle);
        // cardContent.appendChild(cardText);
        //
        // // card.appendChild(cardImageContainer);
        // card.appendChild(cardContent);
        // card.appendChild(cardAction);
        //
        // cardContainer.appendChild(card);
        //
        // if (i === 0 || i % 2 === 0) {
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

        // $('.modal').leanModal();

    }
    container.appendChild(mentorList);

}

// fetch the file
loadFile(url, handleJSON);
