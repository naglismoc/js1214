
function sayHi() {
    console.log("labas");
}

sayHi();
sayHi();
sayHi();
sayHi();
sayHi();
sayHi();
sayHi();

let num = Math.random();
num = Math.round(num);

function simplifiedPI() {
    return 3.14;
}

console.log(simplifiedPI());

let skaicius = 12;

function numSq(num) {
    return num * num;
}

console.log( numSq(100) );

console.log( numSq(skaicius) );

console.log(skaicius);



function pasisveikinimas(parosLaikas, vardas) {
    if (parosLaikas == "Rytas") {
        console.log("labas rytas " + vardas.toUpperCase() );
    }
    
    if (parosLaikas == "Vakaras") {
        console.log("labanaktis " + vardas.toUpperCase() );
    }
}

pasisveikinimas("Rytas", "Mindaugas");
pasisveikinimas("Rytas", "Jonas");
pasisveikinimas("Vakaras", "Saulius");


document.getElementById("labas").inn
uzsisakytiGerima("latte");
uzsisakytiGerima("karstas sokoladas");

function uzsisakytiGerima(gerimas) {
    let money = countMoney();
    if(enough(money)){
        checkWaterLevel();
        checkIngredients(gerimas);
        checkCup();
        heatTheWater();
        heatMilk();
        makeBeverage();
    }
}














function pasisveikinimas2(parosLaikas, vardas) {
    if (parosLaikas == "Rytas") {
        return "labas rytas " + vardas;
    }
    
    if (parosLaikas == "Vakaras") {
        return "labanaktis " + vardas;
    }

    return "kazkas ne to";
}