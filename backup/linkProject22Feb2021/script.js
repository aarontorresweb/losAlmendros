"use-strict";

const gradoSelectElement = document.getElementById('grado')
const courseSelectElement = document.getElementById('course')
const courseLinkElement = document.getElementById('course-link')
const aCourse = {lengua1: "the_link"}
const ourCategory = [{primaria: aCourse}]


document.addEventListener('DOMContentLoaded', function (event) {
  console.log("¡Estamos en vivo!");

  gradoSelectElement.add()
});

const primeroClasses = {mates1: "the_link", lengua1: "other_link"}
const segundoClasses = {mates1: "the_link", lengua1: "other_link"}
const primaria = {
  primero: primeroClasses,
  segundo: segundoClasses
}

const grados = {
  primaria: primaria
}
console.log(grados)

const eduPrimaria = [
  (primaria1 = {
    lengua1:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=155",
    mates1A:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=85",
    mates1B:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=86",
    ingles1:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=156",
    natSci1:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=157",
    socSci1:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=158",
    arts1:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=159",
    eduFisica1:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=161",
    musica1:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=160",
    religionCat1:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=163",
    religionEva1:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=162",
    valores1:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=202",
  }),
  (primaria2 = {
    lengua2:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=164",
    mates2A:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=96",
    mates2B:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=97",
    ingles2:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=165",
    natSci2:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=166",
    socSci2:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=167",
    arts2:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=168",
    eduFisica2:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=169",
    musica2:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=170",
    religionCat2:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=172",
    religionEva2:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=171",
    valores2:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=203",
  }),
  (primaria3 = {
    lengua3:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=173",
    mates3A:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=108",
    mates3B:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=109",
    ingles3:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=174",
    natSci3:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=175",
    socSci3:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=176",
    arts3:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=177",
    eduFisica3:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=179",
    musica3:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=178",
    religionCat3:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=181",
    religionEva3:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=180",
    valores3:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=204",
  }),
  (primaria4 = {
    lengua4:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/enrol/index.php?id=118",
    mates4:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/enrol/index.php?id=117",
    ingles4:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/enrol/index.php?id=119",
    natSci4:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/enrol/index.php?id=121",
    socSci4:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/enrol/index.php?id=120",
    arts4:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/enrol/index.php?id=126",
    eduFisica4:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=123",
    musica4:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=122",
    religionCat4:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=124",
    religionEva4:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=125",
    valores4:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/enrol/index.php?id=205",
  }),
  (primaria5 = {
    lengua5:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=127",
    mates5:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=128",
    ingles5:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=129",
    natSci5:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=130",
    socSci5:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=131",
    arts5:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=132",
    eduFisica5:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=133",
    musica5:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=134",
    religionCat5:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=135",
    religionEva5:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=136",
    valores5:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=206",
  }),
  (primaria6 = {
    lengua6:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=137",
    mates6:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=138",
    ingles6:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=139",
    natSci6:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=140",
    socSci6:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=141",
    arts6:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=142",
    eduFisica6:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=143",
    musica6:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=144",
    religionCat6:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=145",
    religionEva6:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=146",
    valores6:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=207",
  }),
];

const eduInfantil = [
  (infantil3años = {
    tutora3años:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=65",
    musica3años:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=69",
    ingles3años:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=68",
    religionCat3años:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=66",
    religionEva3años:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=67",
  }),
  (infantil4años = {
    tutora4añosA:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=70",
    tutora4añosB:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=75",
    musica4años:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=147",
    ingles4años:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=151",
    religionCat4años:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=149",
    religionEva4años:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=150",
  }),
  (infantil5años = {
    tutora5añosA:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=76",
    tutora5añosB:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=77",
    musica5años:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=152",
    ingles5añosA:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=78",
    ingles5añosB:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=79",
    religionCat5años:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=154",
    religionEva5años:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=153",
  }),
];

const compensatoria = [
  (compPrimaria3 = {
    compMates3:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=183",
    compLengua3:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=182",
  }),
  (compPrimaria4 = {
    compMates4:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=185",
    compLengua4:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=184",
  }),
  (compPrimaria5 = {
    compMates5:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=187",
    compLengua5:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=186",
  }),
  (compPrimaria6 = {
    compMates6:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/index.php?categoryid=26",
    compLengua6:
      "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=188",
  }),
];

let gradeSelectUserInput = [];

console.log(eduPrimaria.primaria1);
console.log(eduPrimaria[1].keys);


// primaryArts1 = Array.find() = function {
//   let p1 = eduPrimaria[0].primaria1;
//   console.log(p1);
// };

// console.log(primaryArts1);

// gradeSelectUserInput[0] = Number(
//   prompt("Elige tu grado. 1. Primaria 1 / 2. Primaria 2 / ")
// );
console.log(gradeSelectUserInput);

switch (gradeSelectUserInput[0]) {
  case 1:
    console.log(eduPrimaria[0]);
    break;
  case 2:
    console.log(eduPrimaria[1]);
    break;
}

