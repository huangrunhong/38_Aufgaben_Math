// =========================
//      Math-Level-1_1
// =========================
console.log("%c===== Math-Level-1_1=====", "color:yellowgreen");

const PI = Math.PI;
const roundedPI = PI.toFixed(2);
console.log(PI);
console.log(roundedPI);

// =========================
//      Math-Level-1_2
// =========================
console.log("%c===== Math-Level-1_2=====", "color:yellowgreen");

let array = [3.14, 193.4464, 0.8596433607, -2.940629089];

const zahlRound = (number) => {
  const ganzZahl = Math.round(number);
  console.log(ganzZahl);
};
array.forEach((num) => {
  zahlRound(num);
});

// =========================
//      Math-Level-1_3
// =========================
console.log("%c===== Math-Level-1_3=====", "color:yellowgreen");
const numberRandom1 = Math.random();
const numberRandom2 = Math.floor(Math.random() * 10);
const numberRandom3 = Math.floor(Math.random() * 100);
console.log(numberRandom1);
console.log(numberRandom2);
console.log(numberRandom3);

// =========================
//      Math-Level-1_4
// =========================
console.log("%c===== Math-Level-1_4=====", "color:yellowgreen");

const numArr = [
  393, 205, 479, 47, 376, 267, 385, 2, 190, 383, 286, 462, 115, 138, 331, 409,
  427, 245, 224, 276, 483, 55, 147, 177, 208, 347, 135, 282, 33, 270, 475, 426,
  476, 453, 474, 351, 219, 358, 354, 410, 240, 139, 371, 356, 277, 202, 264,
  204, 447, 488,
];

const minNum = Math.min(...numArr);
const maxNum = Math.max(...numArr);
console.log(minNum);
console.log(maxNum);

// =========================
//      Math-Level-2_1
// =========================
console.log("%c===== Math-Level-2_1=====", "color:yellowgreen");

const roundTo = (Zahl, Genauigkeit) => {
  return Number(Zahl.toFixed(Genauigkeit));
};
console.log(roundTo(3.1415926535, 5));
console.log(roundTo(5.234556926535, 3));

// =========================
//      Math-Level-2_2
// =========================
console.log("%c===== Math-Level-2_2=====", "color:yellowgreen");

let zahlRandom = Math.round(Math.random() * 10);
let zahlGeben = window.prompt("Schätzen Sie die Nummer zwischen 1 und 10");

const spielFunction = () => {
  if (zahlGeben == zahlRandom) {
    console.log("Korrekt!", "color:green");
  } else {
    console.log(`Du hast verloren. Die Nummer lautet ${zahlRandom}`);
  }
};
spielFunction();
