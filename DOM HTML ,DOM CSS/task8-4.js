let IMG = [
    { foto: "Task8-4/1.jpeg" },
    { foto: "Task8-4/2.jpeg" },
    { foto: "Task8-4/3.jpeg" },
    { foto: "Task8-4/4.jpeg" },
    { foto: "Task8-4/5.jpeg" },
    { foto: "Task8-4/6.jpeg" },
    { foto: "Task8-4/7.jpeg" },
    { foto: "Task8-4/8.jpeg." },
    { foto: "Task8-4/9.jpeg." }
]
let i = 0
let fotoscan = IMG[i].foto

function toClickNext() {
    i++;
    if (i >= IMG.length) {
        i = 0;
    }
    Picture.src = IMG[i].foto;
}

function toClickBack() {
    i--;
    if (i == -1) {
        i = 8;
    }
    Picture.src = IMG[i].foto;
}