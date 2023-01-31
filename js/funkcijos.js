
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

console.log(numSq(100));

console.log(numSq(skaicius));

console.log(skaicius);



function pasisveikinimas(parosLaikas, vardas) {
    if (parosLaikas == "Rytas") {
        console.log("labas rytas " + vardas.toUpperCase());
    }

    if (parosLaikas == "Vakaras") {
        console.log("labanaktis " + vardas.toUpperCase());
    }
}

pasisveikinimas("Rytas", "Mindaugas");
pasisveikinimas("Rytas", "Jonas");
pasisveikinimas("Vakaras", "Saulius");


document.getElementById("labas").inn
// uzsisakytiGerima("latte");
// uzsisakytiGerima("karstas sokoladas");

// function uzsisakytiGerima(gerimas) {
//     let money = countMoney();
//     if(enough(money)){
//         checkWaterLevel();
//         checkIngredients(gerimas);
//         checkCup();
//         heatTheWater();
//         heatMilk();
//         makeBeverage();
//     }
// }



// Sukurkite funkciją kuri priimtų du kintamuosius, juos sudaugintų ir atspausdintų sandaugą į konsolę.
function multiply(a, b) {
    console.log(a * b);
}
multiply(16, 40);
// Sukurkite funkciją kuri priimtų vieną kintamąjį, vardą. Ir konsolėje išspausdintų “labas “ ir tą paduotą vardą. 
function sayHiTo(name) {
    console.log("labas " + name);
}
sayHiTo("Jokūbai");
// Sukurkite funkciją  kuri priimtų vieną kintamąjį, tekstą. Ir konsolėje išspausdintų kiek simbolių yra tame tekste.
function countLetters(text) {
    console.log(text.length);
}
countLetters("labas vakaras");
// Sukurkite funkciją kuri priimtų 2 kintamuosius tekstus, vardą, pavardę ir atspausdintų inicialus. T.y vardo ir pavardės pirmąsias raides DIDŽIOSIOMIS raidėmis.
function initials(name, surname) {
    console.log((name.charAt(0) + surname.charAt(0)).toUpperCase());
}
initials("Naglis", "Mockevičius");
// Sukurkite HTML div’ą su id “numberPlace”. Parašykite funkciją kuri priimtų kintamąjį, skaičių ir jį atspausdintų tame HTML elemente.

function toHTML(num) {
    document.getElementById("numberPlace").innerText = num;
}
toHTML(10);

//Parašykite funkciją kuri sugeneruotų 3 random skaičius nuo 0 iki 5 ir atspausdintų konsolėje vienoje eilutėje atskirtus kableliais. Po paskutinio skaičiaus kablelio neturi būti.

function threeLittlePiggies() {
    console.log(
        Math.round(Math.random() * 5) + "," +
        Math.round(Math.random() * 5) + "," +
        Math.round(Math.random() * 5)

    );
}
threeLittlePiggies();


function threeLittlePiggies2(len) {
    let result = "";
    for (let i = 0; i < len; i++) {
        result += Math.round(Math.random() * 5) + ","
    }
    console.log(result.substring(0, result.length - 1));
}
threeLittlePiggies2(20);

//Sukurkite HTML div’ą su id “sequence”. Parašykite funkciją kuri sugeneruotų 10 p tagų su skaičiais juose nuo 1 iki 10 ir atiduotų į tą HTML elementą. Rezultate HTML’e turi matytis 10 p tagų su skaičiais. Šie TURI BŪTI SUGENERUOTI JAVASCRIPTU.

function pTags10() {
    let HTML = "";
    for (let i = 1; i < 11; i++) {
        HTML += "<p>" + i + "</p>";
    }
    console.log(HTML);
    document.getElementById("sequence").innerHTML = HTML;
}
pTags10();



function pasisveikinimas2(parosLaikas, vardas) {
    if (parosLaikas == "Rytas") {
        return "labas rytas " + vardas;
    }

    if (parosLaikas == "Vakaras") {
        return "labanaktis " + vardas;
    }

    return "kazkas ne to";
}


//Parašykite funkciją kuri priimtų du kintamuosius “nuo” ir “iki”. Funkcija turi sugeneruoti random skaičių tame intervale ir jį GRAŽINTI.

function rndNum(nuo, iki) {
    return nuo + Math.round(Math.random() * (iki - nuo));
}

let randomNumber = rndNum(40, 46);
console.log(randomNumber);

console.log(rndNum(40, 46));

if (Math.round(Math.random())) {

}

function grazina() {
    return "kazkas ka grazina";
}

let result = grazina();

console.log(result);

console.log(grazina());

// tie du vidutiniai pirmas =)

/*
Sukurkite funkciją kuri pakeltų paduotą skaičių n laipsniu, ir gražintų reikšmę (paduodate du parametrus, skaičių ir laipsnį) NENAUDOTI jau esamų js funkcijų! Nenaudoti ** operatoriaus! Galima naudoti for, if, kintamuosius. */

3 * 3 * 3 * 3

function customPow(num, pow) {
    let result = 1; // 3
    for (let i = 0; i < pow; i++) {
        result *= num;
        // result = result * num; // 3 * 3 = 9; 9 * 3 = 27; 27 * 3 = 81;
    }

    return result;
}

let res = customPow(3, 4)

console.log(res);

console.log(customPow(3, 1));
console.log(customPow(3, 0));

/*
 Sukurkite funkciją kuri priims tris parametrus. skaičių, laipsnį ir HTML elemento id. Ši funkcija naudos pirmają funkciją ir jos rezultatą gražins į HTML elementą.
*/

function funWith3(num, pow, id) {
    // console.log( customPow(num, pow) );
    document.getElementById(id).innerHTML = "<h1>" + customPow(num, pow) + "</h1>";
}

funWith3(4, 6, "forPow");
funWith3(2, 3, "forPow");


function fromSQLToHTML() {
    let result = getDataFromDB();
    let HTML = "";
    for (let i = 0; i < result.length; i++) {
        HTML += "<p>" + result[i] + "</p>";

    }
    document.getElementById("someId").innerHTML = HTML;
}


function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz012345678901234567890123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

console.log(makeid(55));

function rndStrToH1(str) {
    console.log(str);
    let HTML = "";
    let nums = "";//14
    for (let i = 0; i < str.length; i++) {
        if (str[i] * 0 == 0) {// jei skaicius
            nums += str[i];
            if (i + 1 == str.length) {
                console.log("<h1>" + nums + "</h1>");
                HTML += "<h1>" + nums + "</h1>";
            }
        } else { // jei raidė
            if (nums != "") {
                console.log("<h1>" + nums + "</h1>");
                HTML += "<h1>" + nums + "</h1>";
                nums = "";
            }
            console.log("<p>" + str[i] + "</p>");
            HTML += "<p>" + str[i] + "</p>";
        }
    }

    // if(nums != ""){
    //     console.log("<h1>" + nums + "</h1>");
    //     HTML += "<h1>" + nums + "</h1>";
    // }
    console.log(HTML);
    document.getElementById("sun3").innerHTML = HTML;
}

rndStrToH1(makeid(10) + "684");

console.log(sumOfIntegersInString("12.4"));
function sumOfIntegersInString(s) {
    let sum = 0;
    let tempNum = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] * 0 == 0) {
            tempNum += s[i];
            console.log(tempNum);
        } else {
            if (tempNum != 0) {
                sum += tempNum * 1;
                tempNum = "";
            }
        }
    }
    if (tempNum != 0) {
        sum += tempNum * 1;
    }
    return sum;
}

console.log(alphabetPosition("The sunset sets at twelve o' clock.")); 
/**
 * 
 * @param {string} text 
 * @returns 
 */
function alphabetPosition(text) {
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let res = "";
    for (let i = 0; i < text.length; i++) {
        let pos = letters.indexOf((text[i]));
        if( pos == -1){
            continue;
        }
        if(pos >= letters.length / 2){
            pos -= letters.length /2;
        }
        res += pos + 1 + " ";
    }
    return res.trim();
}

