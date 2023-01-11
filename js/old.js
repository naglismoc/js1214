vardas = "Naglis";
pavarde = "Mockevičius";
console.log(vardas);
console.log(pavarde);

let skaicius = 17;
var sk2 = 30;

let manoVardas = "Naglis";
console.log(manoVardas);
manoVardas = "Jonas";
console.log(manoVardas);

const PI = 3.14;
console.log(PI);
// PI = 3.1428;
console.log("zemiau konstantos");

console.log(3 + 5 + " yra 8");
console.log("astuoni gaunasi sudėjus " + 3 + 8);
console.log("astuoni gaunasi sudėjus " + (3 + 8));

console.log("labas " + "rytas");

let num = 10;
console.log(num);
num = 12;
console.log(num);
num = 14;
console.log(num);
num = 16;
console.log(num);
console.log(num);
console.log(num);
console.log(num);
num = 10;
console.log(num);

console.log("teiginys");

if (5 > 3) {
    console.log("yra");
} else {
    console.log("Nėra");
}
console.log("teisingas!");

if (5 < 7 && 14 > 10) {
    console.log("abu teiginiai teisingi");
}

if (5 < 7 || 14 < 10) {
    console.log("bent vienas teiginys yra teisingas");
}

if (5 === "5") {
    console.log("lygu");
}

console.log(Math.random() * 10);
console.log(Math.random() * 10);
console.log(Math.random() * 10);
console.log(Math.random() * 10);
console.log(Math.random() * 10);
console.log(Math.random() * 10);
console.log(Math.random() * 10);
console.log(Math.random() * 10);
console.log(Math.random() * 10);
console.log(Math.random() * 10);
console.log(Math.random() * 10);
console.log(Math.random() * 10);
console.log(Math.random() * 10);
console.log(Math.random() * 10);
console.log(Math.random() * 10);
console.log(Math.random() * 10);
console.log(Math.ceil(0.11891981891));

console.log("-------------------");
let rnd = Math.random();
console.log(rnd);
console.log(rnd * 10); // 0 * 10 = 0; 0.999 * 10 = 9.99
console.log(Math.round(rnd * 10)); // 0 * 10 = 0; 0.999 * 10 = 9.99

let min = 5;
let max = 15;
let result = min + (Math.round(Math.random() * (max - min)));
console.log(result);
result = 5 + (Math.round(Math.random() * 10));
//    result = -5 + (Math.round(Math.random() * (15 - -5))); 

let rndNum = 0.61651646545648;

console.log(Math.round(rndNum * 100) / 100);

console.log("kintamojo reiksme yra " + result);

console.log("======= uzd1 ========");

let name = "Naglis";
let surname = "Mockevičius";
let birthYear = 1990;
let currentYear = 2023;
//"Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".
console.log("Aš esu " + name + " " + surname + ". Man yra " + (currentYear - birthYear) + "metai(ų).");


let num1 = Math.round(Math.random() * 4);
let num2 = Math.round(Math.random() * 4);
console.log(num1, num2);
//jeigu num1 NĖRA LYGUS nuliui IR num2 NĖRA LYGUS nuliui, tada vykdom koda esanti zemiau
if (num1 > num2) {
    console.log(num1 / num2);
} else {
    console.log(num2 / num1);
}

if (4 != 5) {
    console.log("if salygoe pvz kaip patikrinti ar reiksmes nelygios");
}



num1 = (Math.random() * 4); //3
num2 = (Math.random() * 4); //0
console.log(num1);
console.log(num2);

num1 = 4;
num2 = 0;

// if (num1 != 0 && num2 != 0) {
//     if (num1 > num2) {
//         console.log(Math.round(num1 / num2 * 100) / 100);
//     } else {
//         console.log(Math.round(num2 / num1 * 100) / 100);
//     }
// } else {
//     console.log("dalyba is nulio negalima");
// }

if (num1 != 0 && num2 != 0 && num1 > num2) {
    console.log(Math.round(num1 / num2 * 100) / 100);
}

if (num1 != 0 && num2 != 0 && num1 < num2) {
    console.log(Math.round(num2 / num1 * 100) / 100);
}

if(a + b > c && a + c > b && b + c > a){
    console.log("turime trikampi");
}else{
    console.log("neturime");
}






