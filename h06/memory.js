var timerRunning = false;

var kaarten =document.getElementById("kaarten");

var speler1score = 0;

var speler1beurt = true;

var speler2score = 0;

createHolders();
createScore();
createBeurt();

var match = false;

var selectedelements = [];

var selectedpictures = [];

var correctlychosenpictures = [];




function startTimer() {
    var seconds = 0;
    var minutes = 0;
    var hours = 0;

    var secondeinterval;



    secondeintervalinterval = setInterval(function () {
        console.log("timer werkt");
        document.getElementById("klok").innerHTML = minutes + " mins " + seconds + " secs";
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        if (minutes === 60) {
            hours++;
            minutes = 0;
        }
    }, 1000);}

function createScore() {
    console.log("test");
    document.getElementById("speler1").innerHTML = "Speler1: "+speler1score;
    document.getElementById("speler2").innerHTML = "Speler2: "+speler2score;
}

function createBeurt() {
    if (speler1beurt === true) {
        document.getElementById("beurt").innerHTML = "Aan de beurt: Speler1";
    }
    if (speler1beurt === false) {
        document.getElementById("beurt").innerHTML = "Aan de beurt: Speler2";
    }
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
    if (!timerRunning) {
        startTimer();
        timerRunning = true;
    }
    var timerstarter = 0;
    timerstarter++;
    if (timerstarter === 1){
    }
    if (selectedpictures.length !== 2) {
        selectedelements.push(this);
        console.log(selectedelements);
            this.style.backgroundImage = 'url("img/dog' + this.className + '.jpg")';
            selectedpictures.push(this.className);
            correctlychosenpictures.push(this);
    }
    if (selectedpictures.length === 2){
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
            createScore();
            checkWin();
            correctlychosenpictures[0].removeEventListener("click", dogSelector );
            correctlychosenpictures[1].removeEventListener("click", dogSelector );
            correctlychosenpictures = [];
            match = false;
            knop.style.visibility = 'hidden';
        } else {
            speler1beurt = false;
            createBeurt();
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
            createBeurt();
            console.log("ik werk 1");
            selectedpictures = [];
            selectedelements = [];
            speler2score++;
            createScore();
            checkWin();
            match = false;
            correctlychosenpictures = [];
            knop.style.visibility = 'hidden';
        } else {
            speler1beurt = true;
            createBeurt();
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
        win()
    }
}

function win() {
    winner = document.getElementById("gewonnen");
    winner.style.visibility = 'visible';
    if (speler1score > speler2score){
    winner.innerHTML = "Speler1 heeft gewonnen " +
        "het spel duurde";
    }else {
        winner.innerHTML = "Speler2 heeft gewonnen " +
            "het spel duurde";
    }
}



