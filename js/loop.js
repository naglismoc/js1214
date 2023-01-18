

for (let i = 0; i < 10; i++) {
    console.log("labas " + i);
}

// let i = 0;
// while (i < 3) {
//     console.log("while " + i);
//     i++;
// }

while (Math.random() < 0.75) {
    console.log("sukames");
}

for (let i = 3; i < 7; i++) {
    console.log(i);
}

// 7 / 2 = 3.5;
// 7 % 2 = 1;  7 - 2 = 5; 5 - 2 = 3; 3 - 2 = 1; 

// 23 % 10 = 3;  23 - 10 = 13; 13 - 10 = 3;

// 7 % 2 == 0;

// 6 % 2 == 0; 6 - 2 = 4; 4 - 2 = 2; 2 - 2 = 0;

/*Atspausdinkite kas antrą skaičių nuo 10 iki 50. (pornius) Jei skaičius dalinasi iš 10 be liekanos jo nespausdinkite. ( naudokite continue.) (atspausdinti visus porinius skaičius, išskyrus tuos kurie dalinasi iš 10 be liekanos)*/

for (let i = 10; i < 50; i++) {
    if (i % 2 == 0) {
        if (i % 10 == 0) {
            continue;
        }
        console.log(i);
    }
}
console.log("---------------");

let i = 0;
for (; true;) {
    console.log(i);
    i++;
    if (i >= 10) {
        break;
    }
}
console.log("---------------");

for (let i = 0; i < 25; i += 4) {
    console.log(i);
}

console.log("---------------");

for (let i = 24; i >= 0; i--) {
    console.log(i);
}


let sk = 0;
//  0               1           2       3       4       5       6
let draugai = ['Saulius', 'Arnoldas', 'Jovita', 'Matas', 'Saulius', 'Arnas', 'Darius'];

console.log(draugai);

console.log(draugai[3]);

draugai[0] = 'Saulius B';
draugai[4] = 'Saulius P';

console.log("labas " + draugai[0]);
console.log("labas " + draugai[1]);
console.log("labas " + draugai[2]);
console.log("labas " + draugai[3]);
console.log("labas " + draugai[4]);

console.log(draugai.length);

for (let i = 0; i < draugai.length; i++) {
    console.log(draugai[i]);
}

console.log("---------------");

draugai[draugai.length] = "Ugnė";
draugai[draugai.length] = "Ugnė";
draugai[draugai.length] = "Ugnė";
draugai[draugai.length] = "Ugnė";
draugai[draugai.length] = "Ugnė";
draugai[draugai.length] = "Ugnė";
draugai[draugai.length] = "Ugnė";

for (let i = 0; i < draugai.length; i++) {
    console.log(draugai[i]);
}

for (let a = 1; a <= 10; a++) {
    let row = "";
    for (let i = 1; i <= 10; i++) {
        if (a * i % 2 == 0) {
            row += "P ";
        } else {
            row += "N ";
        }
        //row += a * i + " ";
    }
    console.log(row);
}


let count = 0;
for (let o = 0; o < 20; o++) {
    if (o % 2 == 0) {
        count++;
    }
}

console.log(count);

// Suskaičiuokite kiek 3čio uždavinio masyve yra žodžių trumpesnių nei 5 simboliai, ir kiek ilgesnių nei 7 simboliai. Skaičiuojam abu atskirai.

let count5 = 0;
let count7 = 0;
for (let i = 0; i < draugai.length; i++) {
    if (draugai[i].length < 5) {
        count5++;
        continue;
    }

    if (draugai[i].length > 7) {
        count7++;
    }
}

console.log("Vardų trumpensių nei 5 simboliai yra " + count5, ", o ilgesnių nei 7 simboliai yra " + count7);

let students = [["Ugnė", "moteris"], ["Saulius", "vyras"], ["Jurgis", "vyras"], ["Anastasija", "moteris"], ["Luka", "moteris"]];
let countMen = 0;
let countWomen = 0;
for (let i = 0; i < students.length; i++) {
    if (students[i][1] == "moteris") {
        countWomen++;
        continue;
    }

    if (students[i][1] == "vyras") {
        countMen++;
    }
}

console.log("Vyrų yra " + countMen, ", moterų yra " + countWomen);

let arrWomen = [];
let arrMen = [];
for (let i = 0; i < students.length; i++) {
    if (students[i][1] == "moteris") {
        arrWomen.push(students[i][0]);
        // arrWomen[i] = students[i][0];
        continue;
    }

    if (students[i][1] == "vyras") {
        arrMen.push(students[i][0]);
        // arrMen[i] = students[i][0];

    }
}

console.log(arrWomen);
console.log(arrMen);