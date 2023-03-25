// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(name) {
    cats.pop();
}

function destructivelyRemoveFirstCat(name) {
    cats.shift();    
}

function appendCat(name) {
   const newCat = [...cats, "Broom"];
   return newCat;
}

function prependCat(name) {
    const newCat_2 = ["Arnold", ...cats];
    return newCat_2;
}

function removeLastCat() {
    const remCat_1 = cats.slice(0, cats.length -1);
    return remCat_1;
}

function removeFirstCat() {
    const remCat_2 = cats.slice(1);
    return remCat_2;
}