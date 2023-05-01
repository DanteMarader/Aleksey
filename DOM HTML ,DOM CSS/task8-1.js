let users = [
    { login: "aleksey", password: "qwerty" },
    { login: "aibar", password: "qqwwqqee" },
    { login: "aryslan", password: "123456a" },
    { login: "dilshat", password: "asdfg" },
    { login: "iliyas", password: "zxcvb123" }
];

function toCheck() {
    let log = document.getElementById('inputLog');
    let pass = document.getElementById('inputPass');

    let text = false;
    for (let user of users) {
        if (log.value == user.login && pass.value == user.password) {
            text = true;
            break;
        }
    }

    if (text) {
        alert("You are authenticated");
    } else {
        log.style.border = "1px solid red";
        pass.style.border = "1px solid red";
    }
}