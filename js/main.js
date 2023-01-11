//5. Sukurkite keturis kintamuosius ir ​Math.random()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. (sprendimui masyvo nenaudoti).

let num51 = Math.round(Math.random() * 2);
let num52 = Math.round(Math.random() * 2);
let num53 = Math.round(Math.random() * 2);
let num54 = Math.round(Math.random() * 2);

console.log(num51, num52, num53, num54);

let count0 = 0;
let count1 = 0;
let count2 = 0;

if (num51 == 0) {
    count0++;
}

if (num52 == 0) {
    count0++;
}

if (num53 == 0) {
    count0++;
}

if (num54 == 0) {
    count0++;
}

if (num51 == 1) {
    count1++;
}

if (num52 == 1) {
    count1++;
}

if (num53 == 1) {
    count1++;
}

if (num54 == 1) {
    count1++;
}

if (num51 == 2) {
    count2++;
}

if (num52 == 2) {
    count2++;
}

if (num53 == 2) {
    count2++;
}

if (num54 == 2) {
    count2++;
}

console.log(count0, count1, count2);
console.log("nulių radome " + count0);
console.log("vienetų radome " + count1);
console.log("dvejetų radome " + count2);

// 6. Naudokite funkcija Math.random(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti  laužtiniuose skliaustuose [], 0 -  (), didesni už 0 {}. 

let min = -10;
let max = 10;

let num61 = min + Math.round(Math.random() * (max - min));
let num62 = min + Math.round(Math.random() * (max - min));
let num63 = min + Math.round(Math.random() * (max - min));

let string61 = "";

if (num61 < 0) {
    string61 += "[" + num61 + "] ";
}

if (num61 == 0) {
    string61 += "(" + num61 + ") ";
}

if (num61 > 0) {
    string61 += "{" + num61 + "} ";
}

if (num62 < 0) {
    string61 += "[" + num62 + "] ";
}
if (num62 == 0) {
    string61 += "(" + num62 + ") ";
}
if (num62 > 0) {
    string61 += "{" + num62 + "} ";
}

if (num63 < 0) {
    string61 += "[" + num63 + "] ";
}
if (num63 == 0) {
    string61 += "(" + num63 + ") ";
}
if (num63 > 0) {
    string61 += "{" + num63 + "} ";
}

console.log(string61);

// let superDuperUltraAwesomeString = "";
// superDuperUltraAwesomeString += "labas ";

// if (Math.random() > 0.5) {
//     superDuperUltraAwesomeString += "rytas ";
// }else{
//     superDuperUltraAwesomeString += "vakras ";
// } 

// if(Math.random() > 0.5){
//     superDuperUltraAwesomeString += "studentai!";
// }else{
//     superDuperUltraAwesomeString += "merginos!"
// }

// console.log(superDuperUltraAwesomeString);

let manoUgis = 190;
let sauliausUgis = 187;
let jovitosUgis = 164;

let naujokoUgis = 184;

if (naujokoUgis <= jovitosUgis) {
    console.log("Jovita aukstesne");
}

if (naujokoUgis > jovitosUgis && naujokoUgis <= sauliausUgis){
    console.log("Saulius aukstesnis");
}

if (naujokoUgis > sauliausUgis && naujokoUgis <= manoUgis){
    console.log("Naglis aukstesnis");
}

if(naujokoUgis > manoUgis){
    console.log("naujokas aukstensis");
}

let actorName = "Leonardas jr Dicaprio";
console.log(actorName.length);
console.log(actorName.toLowerCase() );
console.log(actorName.toUpperCase() );

console.log(actorName.charAt(0));
console.log(actorName.substring(0,1));
console.log(actorName.substring(actorName.length - 3));

console.log(actorName.replace("a","u"));
console.log(actorName.replaceAll("a","u"));
console.log(actorName.replace(/\s+/g,'-'));

let weirdText = "Star Wars: Episode "+ " ".repeat( Math.ceil(Math.random() * 10))+(Math.ceil (Math.random() * 7)+1) + " - A New Hope";
console.log(weirdText);