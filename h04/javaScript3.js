var mijnauto ={
    merk: "Ford",
    type: "Mondeo",
    aantalwielen: 4,
    kleur: "blauw",
    snelheid: 0,
    gasgeven: function () {
        this.snelheid +=5
        console.log(mijnauto.snelheid);
    },
    toeteren: function () {
        console.log("toet")
    }

};

console.log(mijnauto.kleur);
mijnauto.gasgeven();
mijnauto.toeteren();