var Honden =document.getElementById("pics");

var speler1beurt = true;

var speler1score = 0;

var speler2score = 0;

var selectedpictures = [];

function createDogImage(i) {
    var picture =document.createElement("img");
    picture.src = "img/background.jpg";
    picture.className = "selection";
    picture.style.border = "3px solid black";
    picture.addEventListener("click", function () {
        picture.style.border = "3px red solid";
        picture.src = "img/dog" + i + ".jpg";
        if (selectedpictures.length < 2) {
            selectedpictures.push(picture)
        }
        if (selectedpictures.length === 2){
            checkMatch();
            checkWin();
        }
    });
    pics.appendChild(picture);
}


function createDogArray() {
    var hondnummer = 0;
    var mijnhonden = [];

    while (mijnhonden.length <= 17){
        hondnummer = Math.floor((Math.random() *9)+1);
        if (occurencesInArray(mijnhonden, hondnummer,2)) {
            mijnhonden.push(hondnummer);
        }
    }
    return mijnhonden;
}

function occurencesInArray(arr, str, i) {
    var occ = 0;
    if (arr.length === 0) {
        return true;
    } else {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === str) {
                occ++;
            }
        }
        if (occ <2) {
            return true;
        } else {
            return false;
        }
    }
}

function checkMatch() {
    if (selectedpictures[0].src === selectedpictures[1].src) {
        if (speler1beurt) {
            speler1score++;
            document.getElementById("speler1").textContent = `Speler1: ${speler1score}`;
        } else {
            speler2score++;
            document.getElementById("speler2").textContent = `Speler2: ${speler2score}`;
        }
        selectedpictures = [];
    } else {
        if (speler1beurt) {
            document.getElementById("beurt").textContent = "Aan de beurt: Speler2";
            speler1beurt = false;
        } else {
            document.getElementById("beurt").textContent = "Aan de beurt: Speler1";
            speler1beurt = true;
        }
        setTimeout(clear,1000)
    }
}

function checkWin() {
    if (speler1score + speler2score === 9) {
        if (speler1score > speler2score) {
            document.getElementById("win").textContent = "Speler 1 heeft gewonnen."
        } else {
            document.getElementById("win").textContent = "Speler 2 heeft gewonnen."
        }
        document.getElementById("win").style.visibility = "unset"
    } else return;
}

function clear() {
    for (var i = 0; i < 2; i++) {
        selectedpictures[i].style.borderColor = "black";
        selectedpictures[i].src = "img/background.jpg";
    }
    selectedpictures = [];
}

var mijnhonden = createDogArray();

for (var i = 0; i < 18; i++) {
    createDogImage(mijnhonden[i]);
}