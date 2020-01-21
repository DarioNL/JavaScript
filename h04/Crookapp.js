var slideholdermond = document.getElementById("slideholdermond");
slideholdermond.style.backgroundImage = "url('img/crookapp/mond1.jpg')";
var tellermond = 1;


slideholdermond.addEventListener("click", function () {
    slideholdermond.style.backgroundImage = "url('img/crookapp/mond" + volgendeAfbeeldingmond() + ".jpg')";
});

function volgendeAfbeeldingmond() {
    tellermond++;
    if(tellermond >= 4) {
        tellermond= 1;
    }
    console.log(tellermond);
    return tellermond;
}


var slideholderneus = document.getElementById("slideholderneus");
slideholderneus.style.backgroundImage = "url('img/crookapp/neus1.jpg')";
var tellerneus = 1;


slideholderneus.addEventListener("click", function () {
    slideholderneus.style.backgroundImage = "url('img/crookapp/neus" + volgendeAfbeeldingneus() + ".jpg')";
});

function volgendeAfbeeldingneus() {
    tellerneus++;
    if(tellerneus >= 4) {
        tellerneus= 1;
    }
    console.log(tellerneus);
    return tellerneus;
}



var slideholderogen = document.getElementById("slideholderogen");
slideholderogen.style.backgroundImage = "url('img/crookapp/hoofd1.jpg')";
var tellerogen = 1;


slideholderogen.addEventListener("click", function () {
    slideholderogen.style.backgroundImage = "url('img/crookapp/hoofd" + volgendeAfbeeldingogen() + ".jpg')";
});

function volgendeAfbeeldingogen() {
    tellerogen++;
    if(tellerogen >= 4) {
        tellerogen= 1;
    }
    console.log(tellerogen);
    return tellerogen;
}