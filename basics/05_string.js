const name = "Anu-singh"
const repoCount = 39

console.log(`Hello,${name} and my repo is ${repoCount}`);

const gameName = new String('VideoGame')
console.log(gameName.__proto__);
console.log(gameName)

console.log(gameName[1]);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(0));

console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4)  //0-3 show like Vide
console.log(newString);

const anotherString = gameName.slice(-8,4) // for negative case start with end character
console.log(anotherString);

const againAnotherString = "   Anuradha         "
console.log(againAnotherString)
console.log(againAnotherString.trim());// remove starting and end space

const url = "https://www.overleaf.com/project/"
console.log(url.replace('https', 'www.com'));

console.log(url.includes('sundar'));

const str1 = new String("anuradha-singh-rajput")
console.log(str1.split('-'));






