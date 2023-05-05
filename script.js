
let eggs = [];

let coordinates = [];

let eggIndex = -1;
let currentQueue = 0;
let score = 0;
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

eggs[2] = [
    document.getElementById("egg31"),
    document.getElementById("egg32"),
    document.getElementById("egg33"),
    document.getElementById("egg34"),
    document.getElementById("egg35"),
    document.getElementById("egg36"),
    document.getElementById("egg37")
];

eggs[3] = [
    document.getElementById("egg41"),
    document.getElementById("egg42"),
    document.getElementById("egg43"),
    document.getElementById("egg44"),
    document.getElementById("egg45"),
    document.getElementById("egg46"),
    document.getElementById("egg47")
];

for(let i = 0; i < 4; i++) {
    for(let k = 0; k < 7; k++) {
        eggs[i][k].style.display = "none";
    }
}

for(let i = 0; i < 4; i++) {
    console.log(coordinates[i][0] + " " + coordinates[i][1]);
}

window.addEventListener("keydown", function(event)
    {
        var key = event.key;
        if(key === 'w') {
            currX = coordinates[0][0];
            currY = coordinates[0][1];
        }else if(key === 's') {
            currX = coordinates[1][0];
            currY = coordinates[1][1];
        }else if(key === 'e') {
            currX = coordinates[2][0];
            currY = coordinates[2][1];
        }else if(key === 'd') {
            currX = coordinates[3][0];
            currY = coordinates[3][1];
        }
    }
);

function eggFall(currentQueue) {
    eggIndex++;
    if(eggIndex === 0) {
        eggs[currentQueue][eggIndex].style.display = "block";
    }else {
        eggs[currentQueue][eggIndex - 1].style.display = "none";
        eggs[currentQueue][eggIndex].style.display = "block";
        if(eggIndex === 6) {
            if(currX === coordinates[currentQueue][0] && currY === coordinates[currentQueue][1]) {
                score++;
            }
            eggs[currentQueue][eggIndex].style.display = "none";
            eggIndex = -1;
        }
    }
    console.log(score);
}

let inter = setInterval(function() {
    eggFall(currentQueue);
}, 500);

setInterval(function() {
    currentQueue = Math.floor(Math.random() * 4);
    console.log(eggIndex);
    inter;
}, 500*7);

