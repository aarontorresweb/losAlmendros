"use-strict";

// Fill in all of the course links into objects.
// These objects fill into the 3rd selector, on the right.
// The link is then passed to the "Llevame al Curso" link 'a' HTML.

const tresAñosClasses = {
  Tutora:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=65",
  Música:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=69",
  Inglés:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=68",
  "Religión Católica":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=66",
  "Religión Evangélica":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=67",
};

const cuatroAñosClasses = {
  "Tutora 4A":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=70",
  "Tutora 4B":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=75",
  Inglés:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=151",
  Música:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=147",
  "Religión Católica":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=149",
  "Religión Evangélica":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=150",
};

const cincoAñosClasses = {
  "Tutora 5A":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=76",
  "Tutora 5B":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=77",
  Música:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=152",
  "Inglés 5A":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=78",
  "Inglés 5B":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=79",
  "Religión Católica":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=154",
  "Religión Evangélica":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=153",
};

const primeroClasses = {
  Lengua:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=155",
  "Mates 1A":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=85",
  "Mates 1B":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=86",
  Inglés:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=156",
  "Ciencias Naturales":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=157",
  "Ciencias Sociales":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=158",
  Artes:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=159",
  "Educación Física":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=161",
  Música:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=160",
  "Religión Católica":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=163",
  "Religión Evangélica":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=162",
  Valores:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=202",
};

const segundoClasses = {
  Lengua:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=164",
  "mates 2A":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=96",
  "mates 2B":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=97",
  Inglés:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=165",
  "Ciencias Naturales":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=166",
  "Ciencias Sociales":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=167",
  Artes:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=168",
  "Educación Física":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=169",
  Música:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=170",
  "Religión Católica":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=172",
  "Religión Evangélica":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=171",
  Valores:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=203",
};

const terceroClasses = {
  Lengua:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=173",
  "Mates 3A":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=108",
  "Mates 3B":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=109",
  Inglés:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=174",
  "Ciencias Naturales 3":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=175",
  "Ciencias Sociales":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=176",
  Artes:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=177",
  "Educación Física":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=179",
  Música:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=178",
  "Religión Católica":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=181",
  "Religión Evangélica":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=180",
  Valores:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=204",
};

const cuartoClasses = {
  Lengua:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/enrol/index.php?id=118",
  Mates:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/enrol/index.php?id=117",
  Inglés:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/enrol/index.php?id=119",
  "Ciencias Naturales":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/enrol/index.php?id=121",
  "Ciencias Sociales":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/enrol/index.php?id=120",
  Artes:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/enrol/index.php?id=126",
  "Educación Física":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=123",
  Música:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=122",
  "Religión Católica":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=124",
  "Religión Evangélica":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=125",
  Valores:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/enrol/index.php?id=205",
};

const quintoClasses = {
  Lengua:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=127",
  Mates:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=128",
  Inglés:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=129",
  "Ciencias Naturales":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=130",
  "Ciencias Sociales":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=131",
  Artes:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=132",
  "Educación Física":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=133",
  Música:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=134",
  "Religión Católica":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=135",
  "Religión Evangélica":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=136",
  Valores:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=206",
};

const sextoClasses = {
  "Sexto Lengua y Mates":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=57",
  Lengua:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=137",
  Mates:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=138",
  Inglés:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=139",
  "Ciencias Naturales":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=140",
  "Ciencias Sociales":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=141",
  Artes:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=142",
  "Educación Física":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=143",
  Música:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=144",
  "Religión Católica":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=145",
  "Religión Evangélica":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=146",
  Valores:
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=207",
};

const compTerceroClasses = {
  "Comp. Mates":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=183",
  "Comp. Lengua":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=182",
};

const compCuartoClasses = {
  "Comp. Mates":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=185",
  "Comp. Lengua":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=184",
};

const compQuintoClasses = {
  "Comp. Mates":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=187",
  "Comp. Lengua":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=186",
};

const compSextoClasses = {
  "Comp. Mates":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/index.php?categoryid=26",
  "Comp. Lengua":
    "https://aulavirtual35.educa.madrid.org/cp.losalmendros.madrid/course/view.php?id=188",
};

// Fill in the objects for each grade section.
// These are selected by the 2nd selector, in the middle.
// Then, the selection here is passed to the 3rd selector, on the right.
const infantil = {
  "3 Años": tresAñosClasses,
  "4 Años": cuatroAñosClasses,
  "5 Años": cincoAñosClasses,
};

const primaria = {
  "1º Primero": primeroClasses,
  "2º Segundo": segundoClasses,
  "3º Tercero": terceroClasses,
  "4º Cuarto": cuartoClasses,
  "5º Quinto": quintoClasses,
  "6º Sexto": sextoClasses,
};

const compensatoria = {
  "3º Tercero": compTerceroClasses,
  "4º Cuarto": compCuartoClasses,
  "5º Quinto": compQuintoClasses,
  "6º Sexto": compSextoClasses,
};

// Fill in the object of the basic grades.
// These are controlled by the 1st selector, on the left,
// Then, the selection is passed to the second selector, in the middle.
const secciones = {
  infantil: infantil,
  primaria: primaria,
  compensatoria: compensatoria,
};

// Element selectors.
const seccionSelectElement = document.getElementById("seccion");
const cursoSelectElement = document.getElementById("curso");
const asignaturaSelectElement = document.getElementById("asignatura");
const seccionChoiceElement = document.getElementById("seccion-choice");
const cursoChoiceElement = document.getElementById("curso-choice");
const asignaturaChoiceElement = document.getElementById("asignatura-choice");
const linkCurso = document.getElementById("link-curso");
const logo = document.getElementById("logo");
const reiniciar = document.getElementById("reiniciar");

// Function to dynamically display all the courses in the selectors.
const fillSelect = function (selectElement, data, text) {
  selectElement.innerHTML = " "; // Clears the input field.
  selectElement.innerHTML = `<option selected value="elegir-seccion" disabled>${text}</option>`; // Adds the default HTML
  Object.keys(data).forEach((item) => {
    let gradoOption = document.createElement("option");
    gradoOption.value = item;
    gradoOption.text = item.charAt(0).toUpperCase() + item.slice(1);

    console.log(`gradeOption.text: ${gradoOption.text}`);

    // Adds the selection as an "option" element to the drop down menu.
    selectElement.add(gradoOption);
  });
};

// Event listeners.
// This is auto loaded when the page loads and fills the first selector.
document.addEventListener("DOMContentLoaded", function (event) {
  fillSelect(seccionSelectElement, secciones, "Elegir Sección");
  seccionSelectElement.classList.remove("hide");
});

// This is the event listener for the first selector, on the left.
// It passes its selection data to the second selector, in the middle.
seccionSelectElement.addEventListener("change", function (event) {
  fillSelect(cursoSelectElement, secciones[event.target.value], "Elegir Curso");
  seccionChoiceElement.innerText =
    event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1);
  seccionChoiceElement.classList.remove("hide");
  seccionSelectElement.classList.add("hide");
  cursoSelectElement.classList.remove("hide");
  reiniciar.classList.remove("hide");
  logo.classList.add("smaller");
});

// This is the event listener for the second selector, in the middle.
// It passes its selection data to the third selector, on the right.
cursoSelectElement.addEventListener("change", function (event) {
  fillSelect(
    asignaturaSelectElement,
    secciones[seccionSelectElement.value][event.target.value],
    "Elegir Asignatura"
  );
  cursoChoiceElement.innerText =
    event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1);
  cursoChoiceElement.classList.remove("hide");
  cursoSelectElement.classList.add("hide");
  asignaturaSelectElement.classList.remove("hide");
});

// This is the event listener for the third selector, on the right.
// It passes its selection data to the link a href.
// This is the element we click to go to the webpage link.
asignaturaSelectElement.addEventListener("change", function (event) {
  linkCurso.href =
    secciones[seccionSelectElement.value][cursoSelectElement.value][
      event.target.value
    ];
  linkCurso.removeAttribute("class");
  asignaturaChoiceElement.innerText =
    event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1);
  asignaturaChoiceElement.classList.remove("hide");
  asignaturaSelectElement.classList.add("hide");
});

reiniciar.addEventListener("click", function (event) {
  // 1. Clear the HTML "choices" div elements.
  seccionChoiceElement.innerHTML = " ";
  seccionChoiceElement.classList.add("hide");
  cursoChoiceElement.innerHTML = " ";
  cursoChoiceElement.classList.add("hide");
  asignaturaChoiceElement.innerHTML = " ";
  asignaturaChoiceElement.classList.add("hide");
  // 2. Clear the extra select elements that might be on the page.
  seccionSelectElement.classList.add("hide");
  cursoSelectElement.classList.add("hide");
  asignaturaSelectElement.classList.add("hide");
  // 3. Hide the link and the reset button.
  linkCurso.classList.add("hide");
  reiniciar.classList.add("hide");
  // 4. Resize the logo.
  logo.classList.remove("smaller");
  // 5. Reset the initial state.
  fillSelect(seccionSelectElement, secciones, "Elegir Sección");
  seccionSelectElement.classList.remove("hide");
});
