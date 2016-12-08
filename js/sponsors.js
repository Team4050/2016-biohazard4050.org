var xmlhttp = new XMLHttpRequest();
var url = "data/sponsorData.json";
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

// do something if the fetch works
function xhrSuccess() {
    descriptions = this.responseText;
    this.callback.apply(this, this.arguments);
}

// otherwise, do this
function xhrError() {
    console.error(this.statusText);
}

// convert sponsor stuff to html elements
function handleJSON() {
    descriptions = JSON.parse(descriptions);
    var descriptionArray = Object.keys(descriptions);

    // var tierTwo = document.getElementById("tier-two-sponsors");
    // var tierThree = document.getElementById("tier-three-sponsors");
    // var tierFour = document.getElementById("tier-four-sponsors");
    // var tierFive = document.getElementById("tier-five-sponsors");
    // var tierSix = document.getElementById("tier-five-sponsors");
    // var tierSeven = document.getElementById("tier-five-sponsors");

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
                if (document.getElementById('tier-one-sponsors')) {
                    document.getElementById("tier-one-sponsors").getElementsByClassName('collapsible')[0].appendChild(sponsorListItem);
                }
                else {
                    var div = document.createElement('div');
                    div.setAttribute('id', 'tier-one-sponsors');
                    var header = document.createElement('h5');
                    header.innerHTML = "Titanium ($15,000+)";
                    div.appendChild(header);
                    var collapsibleContainer = document.createElement('ul');
                    collapsibleContainer.setAttribute('class', 'collapsible');
                    div.appendChild(collapsibleContainer);
                    document.getElementById('sponsor-container').appendChild(div);
                    collapsibleContainer.appendChild(sponsorListItem);
                }
                break;
            case "tierTwo":
                if (document.getElementById('tier-two-sponsors')) {
                    document.getElementById("tier-two-sponsors").getElementsByClassName('collapsible')[0].appendChild(sponsorListItem);
                }
                else {
                    var div = document.createElement('div');
                    div.setAttribute('id', 'tier-two-sponsors');
                    var header = document.createElement('h5');
                    header.innerHTML = "Platinum ($10,000 - $14,999)";
                    div.appendChild(header);
                    var collapsibleContainer = document.createElement('ul');
                    collapsibleContainer.setAttribute('class', 'collapsible');
                    div.appendChild(collapsibleContainer);
                    document.getElementById('sponsor-container').appendChild(div);
                    collapsibleContainer.appendChild(sponsorListItem);
                }
                break;
            case "tierThree":
                if (document.getElementById('tier-three-sponsors')) {
                    document.getElementById("tier-three-sponsors").getElementsByClassName('collapsible')[0].appendChild(sponsorListItem);
                }
                else {
                    var div = document.createElement('div');
                    div.setAttribute('id', 'tier-three-sponsors');
                    var header = document.createElement('h5');
                    header.innerHTML = "Gold ($5,000 - $9,999)";
                    div.appendChild(header);
                    var collapsibleContainer = document.createElement('ul');
                    collapsibleContainer.setAttribute('class', 'collapsible');
                    div.appendChild(collapsibleContainer);
                    document.getElementById('sponsor-container').appendChild(div);
                    collapsibleContainer.appendChild(sponsorListItem);
                }
                break;
            case "tierFour":
                if (document.getElementById('tier-four-sponsors')) {
                    document.getElementById("tier-four-sponsors").getElementsByClassName('collapsible')[0].appendChild(sponsorListItem);
                }
                else {
                    var div = document.createElement('div');
                    div.setAttribute('id', 'tier-four-sponsors');
                    var header = document.createElement('h5');
                    header.innerHTML = "Silver ($2,500 - $4,999)";
                    div.appendChild(header);
                    var collapsibleContainer = document.createElement('ul');
                    collapsibleContainer.setAttribute('class', 'collapsible');
                    div.appendChild(collapsibleContainer);
                    document.getElementById('sponsor-container').appendChild(div);
                    collapsibleContainer.appendChild(sponsorListItem);
                }
                break;
            case "tierFive":
                if (document.getElementById('tier-five-sponsors')) {
                    document.getElementById("tier-five-sponsors").getElementsByClassName('collapsible')[0].appendChild(sponsorListItem);
                }
                else {
                    var div = document.createElement('div');
                    div.setAttribute('id', 'tier-five-sponsors');
                    var header = document.createElement('h5');
                    header.innerHTML = "Bronze ($1,000 - $2,499)";
                    div.appendChild(header);
                    var collapsibleContainer = document.createElement('ul');
                    collapsibleContainer.setAttribute('class', 'collapsible');
                    div.appendChild(collapsibleContainer);
                    document.getElementById('sponsor-container').appendChild(div);
                    collapsibleContainer.appendChild(sponsorListItem);
                }
                break;
            case "tierSix":
                if (document.getElementById('tier-six-sponsors')) {
                    document.getElementById("tier-six-sponsors").getElementsByClassName('collapsible')[0].appendChild(sponsorListItem);
                }
                else {
                    var div = document.createElement('div');
                    div.setAttribute('id', 'tier-six-sponsors');
                    var header = document.createElement('h5');
                    header.innerHTML = "Professional ($500 - $999)";
                    div.appendChild(header);
                    var collapsibleContainer = document.createElement('ul');
                    collapsibleContainer.setAttribute('class', 'collapsible');
                    div.appendChild(collapsibleContainer);
                    document.getElementById('sponsor-container').appendChild(div);
                    collapsibleContainer.appendChild(sponsorListItem);
                }
                break;
            case "tierSeven":
                if (document.getElementById('tier-seven-sponsors')) {
                    document.getElementById("tier-seven-sponsors").getElementsByClassName('collapsible')[0].appendChild(sponsorListItem);
                }
                else {
                    var div = document.createElement('div');
                    div.setAttribute('id', 'tier-seven-sponsors');
                    var header = document.createElement('h5');
                    header.innerHTML = "Community ($50 - $499)";
                    div.appendChild(header);
                    var collapsibleContainer = document.createElement('ul');
                    collapsibleContainer.setAttribute('class', 'collapsible');
                    div.appendChild(collapsibleContainer);
                    document.getElementById('sponsor-container').appendChild(div);
                    collapsibleContainer.appendChild(sponsorListItem);
                }
                break;
            default:
                console.log("error with " + sponsorLevel);
        }
    }

    $('#sponsor-container').append($('#tier-one-sponsors'));
    $('#sponsor-container').append($('#tier-two-sponsors'));
    $('#sponsor-container').append($('#tier-three-sponsors'));
    $('#sponsor-container').append($('#tier-four-sponsors'));
    $('#sponsor-container').append($('#tier-five-sponsors'));
    $('#sponsor-container').append($('#tier-six-sponsors'));
    $('#sponsor-container').append($('#tier-seven-sponsors'));


}

// fetch a file
loadFile(url, handleJSON);
