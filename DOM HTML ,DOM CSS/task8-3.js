let cards = [
    { id1: "4413", id2: "4341", id3: "3534", id4: "2424", cvv: "123", log: "ILYAS ZHUANYSHEV" },
    { id1: "4413", id2: "7090", id3: "5656", id4: "4444", cvv: "321", log: "ILYAS ZHUANYSHEV" },
    { id1: "1", id2: "2", id3: "3", id4: "4", cvv: "444", log: "a" }
];

function toCheck() {
    let id01 = document.getElementById("input1")
    let id02 = document.getElementById("input2")
    let id03 = document.getElementById("input3")
    let id04 = document.getElementById("input4")
    let nameSur = document.getElementById("nameSurname")
    let pass = document.getElementById("inputPass")

    let scan = false;
    for (let cadr of cards) {
        if (id01.value == cadr.id1 && id02.value == cadr.id2 && id03.value == cadr.id3 && id04.value == cadr.id4
            && nameSur.value == cadr.log && pass.value == cadr.cvv) {
            scan = true;
            break;
        }
    }

    if (scan) {
        alert("Transaction completed")
    } else {
        alert("Invalid Data")
    }
}