const myObj = {
    js: "javascript",
    cpp: "C++",
    swift: "Swift",
    rb: "ruby",
}
for (const key in myObj) {
    //  console.log(`${key} shortcut is for ${myObj[key]}`);
}

const programming = ["Phython", "rb", "js", "c++"];
for (const key in programming) {
    //console.log(programming[key]);
}

const map = new Map();

map.set("USA", "UNITED STATES OF AMERICA")
map.set("RSA", "RUSSIA")
map.set("AUS", "AUSTRIALIA")

for (const key in map) {
    console.log(key);
}
//Maps cannot be iterable