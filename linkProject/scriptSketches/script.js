// This is an exercise in splitting strings for this project. 5 Marzo 2021
// Splitting strings: https://stackoverflow.com/questions/7888238/javascript-split-string-on-uppercase-characterss

// A sample I found from the internet.
const string = "ThisIs2The1StringToSplit"
  .match(/[A-Z][a-z]+|[0-9]+/g)
  .join(" ");
console.log(string);

// let item = item.charAt(0).toUpperCase() + "educaciónFisica1".match(/[A-Z][a-z]+|[0-9]+/g).join(" ");
// item.replaceAll(",", " ");

let item = "educaciónFisica1";
let itemWithSpaces = "";
let itemWithSplitBeforeNumbers = "";

itemWithSpaces =
  item.charAt(0).toUpperCase() +
  item
    .slice(1)
    .split(/(?=[A-Z])/)
    .join(" ")
    .split(/(0*[1-9][0-9]*)/)
    .join(" ");

// itemWithSplitBeforeNumbers = itemWithSpaces.split(/(0*[1-9][0-9]*)/).join(" ");

//   .split(itemWithSpaces.length - 1)
//   .join(" ");
// itemWithSpaces.charAt(itemWithSpaces.length - 1);

console.log(`'item' type: ${typeof item}, Value: ${item}`);
console.log(
  `'itemWithSpaces' type: ${typeof itemWithSpaces}, Value: ${itemWithSpaces}`
);
console.log(
  `'itemWithSplitBeforeNumbers' type: ${typeof itemWithSplitBeforeNumbers}, Value: ${itemWithSplitBeforeNumbers}`
);

// .charAt(-1)
// .split()

// Regex to identify a 'char' in a string.
// /(?=[A-Z])/

// Regex to identify a number in a string.
// ([1-9][0-9]*)

// Testing to see if there are uppercase chars in the string.
// for (i = 0; i < gradoOption.text.length; i++) {
//   //console.log(gradoOption.text.length);
//   if (gradoOption.text[i] === /[A-Z]/) {
//     // console.log(`${gradoOption.text[i]} is capital.`);
//   }
// }
// if (/[A-Z]/.test(gradoOption)) {
//   //console.log("upper case true");
// }
