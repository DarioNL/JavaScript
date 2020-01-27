var kaarten =document.getElementById("kaarten");
createHolders();
createScore();
var speler1beurt = true;

var speler1score = 0;

var speler2score = 0;

var match = false;

var selectedelements = [];

var selectedpictures = [];

var correctlychosenpictures = [];

function createScore() {
    speler1 = document.getElementById("speler1");
    speler1.innerHTML = "speler1: " + speler1score;
}

function createHolders() {
    var dogArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];
    var shuffledDogArray = shuffleDogArray(dogArray);

    for(var i = 0 ; i < dogArray.length ; i++) {
        console.log("Stapje " + i);
        pictureHolder = document.createElement("div");
        pictureHolder.style.width = "100px";
        pictureHolder.style.height = "100px";
        pictureHolder.className = shuffledDogArray[i];
        pictureHolder.id = "kaart" + shuffledDogArray[i];
        pictureHolder.addEventListener("click", dogSelector);
        kaarten.appendChild(pictureHolder);
        pictureHolder.style.backgroundImage = 'url("img/background.jpg")';
    }
}

function dogSelector() {
    console.log(selectedpictures);
    if (selectedpictures.length < 2) {
        this.style.backgroundImage = 'url("img/dog' + this.className + '.jpg")';
        selectedpictures.push(this.className);
        correctlychosenpictures.push(this);
        selectedelements.push(this);
    }else {
        checkMatch()
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

function checkMatch() {
    match = selectedpictures[0] === selectedpictures[1];
    console.log(match);
    knop = document.getElementById("next-knop");
    knop.style.visibility = 'visible';

}

function nextTurn() {
    if (speler1beurt === true) {
        if (match === true) {
            speler1beurt = false;
            console.log("ik werk 1");
            selectedpictures = [];
            selectedelements = [];
            speler1score++;
            correctlychosenpictures[0].removeEventListener("click", dogSelector );
            correctlychosenpictures[1].removeEventListener("click", dogSelector );
            correctlychosenpictures = [];
            match = false;
            knop.style.visibility = 'hidden';
        } else {
            speler1beurt = false;
            selectedelements[0].style.backgroundImage = 'url("img/background.jpg")';
            selectedelements[1].style.backgroundImage = 'url("img/background.jpg")';
            console.log("ik werk 2");
            selectedpictures = [];
            correctlychosenpictures = [];
            selectedelements = [];
            knop.style.visibility = 'hidden';
        }
    }else {
        if (match === true) {
            speler1beurt = true;
            console.log("ik werk 1");
            selectedpictures = [];
            selectedelements = [];
            speler2score++;
            match = false;
            correctlychosenpictures = [];
            knop.style.visibility = 'hidden';
        } else {
            speler1beurt = true;
            selectedelements[0].style.backgroundImage = 'url("img/background.jpg")';
            selectedelements[1].style.backgroundImage = 'url("img/background.jpg")';
            console.log("ik werk 2");
            selectedpictures = [];
            correctlychosenpictures = [];
            selectedelements = [];
            knop.style.visibility = 'hidden';
        }
    }



}

function checkWin() {
    if (speler1score + speler2score === 9){
        console.log("gewonen");
    }
}



