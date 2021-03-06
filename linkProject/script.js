"use-strict";

// Fill in all of the course links into objects.
// These objects fill into the 3rd selector, on the right.
// The link is then passed to the "Llevame al Curso" link 'a' HTML.

const tresAñosClasses = {
  tutora:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=65",
  musica:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=69",
  inglés:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=68",
  religionCatólica:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=66",
  religionEvangélica:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=67",
};

const cuatroAñosClasses = {
  tutora:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=65",
  musica:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=69",
  inglés:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=68",
  religionCatólica:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=66",
  religionEvangélica:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=67",
};

const cincoAñosClasses = {
  tutoraA:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=76",
  tutoraB:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=77",
  musica:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=152",
  inglésA:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=78",
  inglésB:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=79",
  religionCatólica:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=154",
  religionEvangélica:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=153",
};

const primeroClasses = {
  lengua1:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=155",
  mates1A:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=85",
  mates1B:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=86",
  inglés1:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=156",
  cienciasNaturales1:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=157",
  cienciasSociales1:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=158",
  artes1:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=159",
  educaciónFisica1:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=161",
  música1:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=160",
  religiónCatólica1:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=163",
  religiónEvangélica1:
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
  inglés2:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=165",
  cienciasNaturales2:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=166",
  cienciasSociales2:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=167",
  artes2:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=168",
  educaciónFisica2:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=169",
  música2:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=170",
  religionCatólica2:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=172",
  religionEvangélica2:
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
  inglés3:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=174",
  cienciasNaturales3:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=175",
  cienciasSociales3:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=176",
  artes3:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=177",
  educaciónFisica3:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=179",
  música3:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=178",
  religiónCatólica3:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=181",
  religiónEvangélica3:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=180",
  valores3:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=204",
};

const cuartoClasses = {
  lengua4:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/enrol/index.php?id=118",
  mates4:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/enrol/index.php?id=117",
  inglés4:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/enrol/index.php?id=119",
  cienciasNaturales4:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/enrol/index.php?id=121",
  cienciasSociales4:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/enrol/index.php?id=120",
  artes4:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/enrol/index.php?id=126",
  educaciónFisica4:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=123",
  música4:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=122",
  religiónCatólica4:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=124",
  religiónEvangélica4:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=125",
  valores4:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/enrol/index.php?id=205",
};

const quintoClasses = {
  lengua5:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/enrol/index.php?id=118",
  mates5:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/enrol/index.php?id=117",
  inglés5:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/enrol/index.php?id=119",
  cienciasNaturales5:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/enrol/index.php?id=121",
  cienciasSociales5:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/enrol/index.php?id=120",
  artes5:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/enrol/index.php?id=126",
  educaciónFisica5:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=123",
  música5:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=122",
  religiónCatólica5:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=124",
  religiónEvangélica5:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=125",
  valores5:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/enrol/index.php?id=205",
};

const sextoClasses = {
  lengua6:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=137",
  mates6:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=138",
  inglés6:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=139",
  cienciasNaturales6:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=140",
  cienciasSociales6:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=141",
  artes6:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=142",
  educaciónFisica6:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=143",
  música6:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=144",
  religiónCatólica6:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=145",
  religiónEvangélica6:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=146",
  valores6:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=207",
};

const compTerceroClasses = {
  compensatoriaMates3:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=183",
  compensatoriaLengua3:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=182",
};

const compCuartoClasses = {
  compensatoriaMates4:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=185",
  compensatoriaLengua4:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=184",
};

const compQuintoClasses = {
  compensatoriaMates5:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=187",
  compensatoriaLengua5:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=186",
};

const compSextoClasses = {
  compensatoriaMates6:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/index.php?categoryid=26",
  compensatoriaLengua6:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=188",
};

// Element selectors.
const seccionSelectElement = document.getElementById("seccion");
const gradoSelectElement = document.getElementById("grado");
const cursoSelectElement = document.getElementById("curso");
const linkCurso = document.getElementById("link-curso");
const logo = document.getElementById("logo");

// Fill in the objects for each grade section.
// These are selected by the 2nd selector, in the middle.
// Then, the selection here is passed to the 3rd selector, on the right.
const infantil = {
  tresAños: tresAñosClasses,
  cuatroAños: cuatroAñosClasses,
  cincoAños: cincoAñosClasses,
};

const primaria = {
  primero: primeroClasses,
  segundo: segundoClasses,
  tercero: terceroClasses,
  cuarto: cuartoClasses,
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
const fillSelect = function (selectElement, data, text) {
  selectElement.innerHTML = " "; // Clears the input field.
  selectElement.innerHTML = `<option value="elegir-seccion">${text}</option>`; // Adds the default HTML
  Object.keys(data).forEach((item) => {
    let gradoOption = document.createElement("option");
    gradoOption.value = item;
    gradoOption.text =
      item.charAt(0).toUpperCase() +
      item
        .slice(1)
        .split(/(?=[A-Z])/)
        .join(" ")
        .split(/(0*[1-9][0-9]*)/)
        .join(" ");

    console.log(`gradeOption.text: ${gradoOption.text}`);

    // Adds the selection as an "option" element to the drop down menu.
    selectElement.add(gradoOption);
  });
};

// Event listeners.

// This is auto loaded when the page loads and fills the first selector.
document.addEventListener("DOMContentLoaded", function (event) {
  fillSelect(seccionSelectElement, secciones, "1. Elegir Sección");
  seccionSelectElement.classList.remove("hide");
});

// This is the event listener for the first selector, on the left.
// It passes its selection data to the second selector, in the middle.
seccionSelectElement.addEventListener("change", function (event) {
  fillSelect(
    gradoSelectElement,
    secciones[event.target.value],
    "2. Elegir Grado"
  );
  seccionChoiceElement = document.getElementById("seccion-choice");
  seccionChoiceElement.innerText =
    event.target.value.charAt(0).toUpperCase() +
    event.target.value
      .slice(1)
      .split(/(?=[A-Z])/)
      .join(" ")
      .split(/(0*[1-9][0-9]*)/)
      .join(" ");
  seccionChoiceElement.classList.remove("hide");
  seccionSelectElement.classList.add("hide");
  gradoSelectElement.classList.remove("hide");
  logo.style.width = `70%`;
});

// This is the event listener for the second selector, in the middle.
// It passes its selection data to the third selector, on the right.
gradoSelectElement.addEventListener("change", function (event) {
  fillSelect(
    cursoSelectElement,
    secciones[seccionSelectElement.value][event.target.value],
    "3. Elegir Curso"
  );
  gradoChoiceElement = document.getElementById("grado-choice");
  gradoChoiceElement.innerText =
    event.target.value.charAt(0).toUpperCase() +
    event.target.value
      .slice(1)
      .split(/(?=[A-Z])/)
      .join(" ")
      .split(/(0*[1-9][0-9]*)/)
      .join(" ");
  gradoChoiceElement.classList.remove("hide");
  gradoSelectElement.classList.add("hide");
  cursoSelectElement.classList.remove("hide");
});

// This is the event listener for the third selector, on the right.
// It passes its selection data to the link a href.
// This is the element we click to go to the webpage link.
cursoSelectElement.addEventListener("change", function (event) {
  linkCurso.href =
    secciones[seccionSelectElement.value][gradoSelectElement.value][
      event.target.value
    ];
  linkCurso.removeAttribute("class");
  cursoChoiceElement = document.getElementById("curso-choice");
  cursoChoiceElement.innerText =
    event.target.value.charAt(0).toUpperCase() +
    event.target.value
      .slice(1)
      .split(/(?=[A-Z])/)
      .join(" ")
      .split(/(0*[1-9][0-9]*)/)
      .join(" ");
  cursoChoiceElement.classList.remove("hide");
  cursoSelectElement.classList.add("hide");
});
