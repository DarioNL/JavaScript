var kaarten =document.getElementById("kaarten");
createHolders();

var speler1beurt = true;

var speler1score = 0;

var speler2score = 0;

var selectedpictures = [];

function createHolders() {
    var dogArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];
    var shuffledDogArray = shuffleDogArray(dogArray);

    for(var i = 0 ; i < dogArray.length ; i++) {
        console.log("Stapje " + i);
        pictureHolder = document.createElement("div");
        pictureHolder.style.width = "100px";
        pictureHolder.style.height = "100px";
        pictureHolder.className = "kaarten-holder" + shuffledDogArray[i];
        pictureHolder.id = "kaart" + shuffledDogArray[i];
        kaarten.appendChild(pictureHolder);
        pictureHolder.style.backgroundImage = 'url("img/dog' + dogArray[i] + '.jpg")';
    }
}

function shuffleDogArray(array) {
    var j, x, i;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    return array;
}



