var kaarten =document.getElementById("kaart");
createHolders();
createDogImage();

var speler1beurt = true;

var speler1score = 0;

var speler2score = 0;

var selectedpictures = [];

function createHolders() {
    for(var i = 0; i < 18; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "kaarten";
        pictureHolder.id = "kaarten-holder-" + i;
        kaarten.appendChild(pictureHolder);
    }
}

function createDogImage(){
    pictureHolders = document.getElementsByClassName("kaarten");
    for (var i = 0; i < pictureHolders.length; i++) {
        var correctie;
        favoriet = document.createElement("div");
        if (i < 9) {
            correctie = 0;
            kleurAfbeelding = document.createElement("img");
            kleurAfbeelding.src = "img/dog" + (i + 1 - correctie) + ".jpg";
            kleurAfbeelding.className = (i + 1 - correctie);
            kleurAfbeelding.addEventListener("click", function () {
                maakFavoriet(this.id);
            });
            pictureHolders[i].appendChild(favoriet);
            pictureHolders[i].appendChild(kleurAfbeelding);
        }else{
            correctie = 9;
            kleurAfbeelding = document.createElement("img");
            kleurAfbeelding.src = "img/dog" + (i + 1 - correctie) + ".jpg";
            kleurAfbeelding.className = (i + 1 - correctie);
            kleurAfbeelding.addEventListener("click", function () {
                maakFavoriet(this.id);
            });
            pictureHolders[i].appendChild(favoriet);
            pictureHolders[i].appendChild(kleurAfbeelding);
        }

    }
}



function createDogArray() {
}

function occurencesInArray(arr, str, i) {

}

function checkMatch() {

}

function checkWin() {

}

function clear() {

}

var mijnhonden = createDogArray();

