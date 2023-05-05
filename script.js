
let eggs = [];

let coordinates = [];

coordinates[0] = [
    document.getElementById("egg17").getBoundingClientRect().top,
    document.getElementById("egg17").getBoundingClientRect().left
];

coordinates[1] = [
    document.getElementById("egg27").getBoundingClientRect().top,
    document.getElementById("egg27").getBoundingClientRect().left
];


coordinates[2] = [
    document.getElementById("egg37").getBoundingClientRect().top,
    document.getElementById("egg37").getBoundingClientRect().left
];

let currX = 0;
let currY = 0;

coordinates[3] = [
    document.getElementById("egg47").getBoundingClientRect().top,
    document.getElementById("egg47").getBoundingClientRect().left
];

eggs[0] = [
    document.getElementById("egg11"),
    document.getElementById("egg12"),
    document.getElementById("egg13"),
    document.getElementById("egg14"),
    document.getElementById("egg15"),
    document.getElementById("egg16"),
    document.getElementById("egg17")
];

eggs[1] = [
    document.getElementById("egg21"),
    document.getElementById("egg22"),
    document.getElementById("egg23"),
    document.getElementById("egg24"),
    document.getElementById("egg25"),
    document.getElementById("egg26"),
    document.getElementById("egg27")
];

eggs[3] = [
    document.getElementById("egg31"),
    document.getElementById("egg32"),
    document.getElementById("egg33"),
    document.getElementById("egg34"),
    document.getElementById("egg35"),
    document.getElementById("egg36"),
    document.getElementById("egg37")
];

eggs[4] = [
    document.getElementById("egg41"),
    document.getElementById("egg42"),
    document.getElementById("egg43"),
    document.getElementById("egg44"),
    document.getElementById("egg45"),
    document.getElementById("egg46"),
    document.getElementById("egg47")
];

for(let i = 0; i < 4; i++) {
    console.log(coordinates[i][0] + " " + coordinates[i][1]);
}

document.addEventListener("keypress", (event) => {
    var name = event.key;
    var code = event.code;
    console.log(`Key pressed ${name} \r\n Key code value: ${code}`);
}, false);