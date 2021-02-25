"use-strict";

// Fill in all of the course links into objects.
// These objects fill into the 3rd selector, on the right.
// The link is then passed to the "Llevame al Curso" link 'a' HTML.

const threeYearsClasses = {
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
};

const fourYearsClasses = {
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
};

const fiveYearsClasses = {
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
};

const primeroClasses = {
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
  educaciónFisica1:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=161",
  musica1:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=160",
  religionCatólica1:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=163",
  religionEvangelica1:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=162",
  valores1:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=202",
};

const segundoClasses = {
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
};

const terceroClasses = {
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
};

const quartoClasses = {
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
};

const quintoClasses = {
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
};

const sextoClasses = {
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
};

const compTerceroClasses = {
  compMates3:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=183",
  compLengua3:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=182",
};

const compCuartoClasses = {
  compMates4:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=185",
  compLengua4:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=184",
};

const compQuintoClasses = {
  compMates5:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=187",
  compLengua5:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=186",
};

const compSextoClasses = {
  compMates6:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/index.php?categoryid=26",
  compLengua6:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=188",
};

// Element selectors.
const seccionSelectElement = document.getElementById("seccion");
const gradoSelectElement = document.getElementById("grado");
const cursoSelectElement = document.getElementById("curso");
const linkCurso = document.getElementById("link-curso");

// Fill in the objects for each grade section.
// These are selected by the 2nd selector, in the middle.
// Then, the selection here is passed to the 3rd selector, on the right.
const infantil = {
  threeYears: threeYearsClasses,
  fourYears: fourYearsClasses,
  fiveYears: fiveYearsClasses,
};

const primaria = {
  primero: primeroClasses,
  segundo: segundoClasses,
  tercero: terceroClasses,
  quarto: quartoClasses,
  quinto: quintoClasses,
  sexto: sextoClasses,
};

const compensatoria = {
  compTercero: compTerceroClasses,
  compCuarto: compCuartoClasses,
  compQuinto: compQuintoClasses,
  compSexto: compSextoClasses,
};

// Fill in the object of the basic grades.
// These are controlled by the 1st selector, on the left,
// Then, the selection is passed to the second selector, in the middle.
const secciones = {
  infantil: infantil,
  primaria: primaria,
  compensatoria: compensatoria,
};

// Function to dynamically display all the courses in the selectors.
const fillSelect = function (selectElement, data) {
  Object.keys(data).forEach((item) => {
    let gradoOption = document.createElement("option");
    gradoOption.value = item;
    gradoOption.text = item.charAt(0).toUpperCase() + item.slice(1);
    selectElement.add(gradoOption);
  });
};

// Event listeners.

// This is auto loaded when the page loads and fills the first selector.
document.addEventListener("DOMContentLoaded", function (event) {
  fillSelect(seccionSelectElement, secciones);
});

// This is the event listener for the first selector, on the left.
// It passes its selection data to the second selector, in the middle.
seccionSelectElement.addEventListener("change", function (event) {
  fillSelect(gradoSelectElement, secciones[event.target.value]);
});

// This is the event listener for the second selector, in the middle.
// It passes its selection data to the third selector, on the right.
gradoSelectElement.addEventListener("change", function (event) {
  fillSelect(
    cursoSelectElement,
    secciones[seccionSelectElement.value][event.target.value]
  );
});

// This is the event listener for the third selector, on the right.
// It passes its selection data to the link a href.
// This is the element we click to go to the webpage link.
cursoSelectElement.addEventListener("change", function (event) {
  linkCurso.href =
    secciones[seccionSelectElement.value][gradoSelectElement.value][
      event.target.value
    ];
});
