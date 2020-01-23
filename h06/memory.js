var kaarten =document.getElementById("kaarten");
createHolders();

var speler1beurt = true;

var speler1score = 0;

var speler2score = 0;

var selectedpictures = [];

function createHolders() {
    var dogArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];

    for(var i = 0 ; i < dogArray.length ; i++) {
        console.log("Stapje " + i);
        pictureHolder = document.createElement("div");
        pictureHolder.style.width = "100px";
        pictureHolder.style.height = "100px";
        pictureHolder.className = "kaarten-holder" + dogArray[i];
        pictureHolder.id = "kaart" + i;
        if(i === 6) pictureHolder.innerHTML = "<br>";
        kaarten.appendChild(pictureHolder);
        pictureHolder.style.backgroundImage = 'url("img/dog' + dogArray[i] + '.jpg")';
    }
}