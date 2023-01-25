

// console.log("*******************");
// console.log("*******************");
// console.log("*******************");
// console.log("*******************");
// console.log("*******************");
// console.log("*******************");
// console.log("*******************");
// console.log("*******************");


// for (let i = 0; i < 100; i++) {
//     console.log("*******************");

// }


let row = "-";

row = row + "*"; // -*
row = row + "*"; // -**
row += "*";


for (let a = 0; a < 10; a++) {
    row = "";
    for (let i = 0; i < 10; i++) {
        row += "*";
    }
    console.log(row);
}

console.log("========== 5a ==========");



while (true) {
    let chance = Math.round(Math.random());
    if (chance) {
        console.log("H");
        break;
    } else {
        console.log("S");
    }
}

// let shouldGo = true;
// while (shouldGo) {
//     let chance = Math.round(Math.random());
//     if (chance == 0) {
//         console.log("H");
//         shouldGo = false;
//     } else {
//         console.log("S");
//     }
// }


console.log("========== 5b ==========");


let count = 0;
while (true) {
    let chance = Math.round(Math.random());
    if (chance) {
        console.log("H");
        count++;
    } else {
        console.log("S");
    }

    if (count == 3) {
        break;
    }
}


console.log("========== 5c ==========");

count = 0;
while (true) {
    let chance = Math.round(Math.random());
    if (chance) {
        console.log("H");
        count++;
    } else {
        console.log("S");
        count = 0;
    }

    if (count == 3) {
        break;
    }
}


console.log("========== 6 ==========");

    let petroSuminiaiTaskai = 0;
    let kazioSuminiaiTaskai = 0;
while (true) {
  
    let petras = 10 + Math.round(Math.random() * (10));
    let kazys = 5 + Math.round(Math.random() * (20));
    petroSuminiaiTaskai += petras;
    kazioSuminiaiTaskai += kazys;
    console.log("petras " + petras + " kazys " + kazys);
    if (petroSuminiaiTaskai >= 222 || kazioSuminiaiTaskai >= 222) {
        break;
    }
}

if (petroSuminiaiTaskai < kazioSuminiaiTaskai) {
    console.log("Žaidimą laimėjo: laimėtojo Kazys, surinko " + kazioSuminiaiTaskai + " taškų, o jo konkurentas " + petroSuminiaiTaskai);
} else {
    console.log("Žaidimą laimėjo: laimėtojo Petras, surinko " + petroSuminiaiTaskai + " , o jo konkurentas " + kazioSuminiaiTaskai);
}


console.log("========== 8a ==========");

for (let i = 0; i < 5; i++) {
    let nailDepth = 0;
    let taukstCount = 0;
    while (nailDepth < 85) {
        let taukst = 5 + Math.round(Math.random() * (15));
        nailDepth += taukst;
        taukstCount++;
    }
    console.log((i + 1 ) + "-asis vinis buvo įkaltas " + taukstCount + " smūgiais. gylis -", nailDepth);
}

console.log("========== 8b ==========");

for (let i = 0; i < 5; i++) {
    let nailDepth = 0;
    let taukstCount = 0; 
    while (nailDepth < 85) {
        if(Math.round(Math.random())){
            let taukst = 20 + Math.round(Math.random() * (10));
            console.log("pataikiau, įkaliau "+ taukst);
            nailDepth += taukst;
        }else{
            console.log("nepataikiau");
        }
        taukstCount++;
    }
    console.log((i + 1 ) + "-asis vinis buvo įkaltas " + taukstCount + " smūgiais. gylis -", nailDepth);
}