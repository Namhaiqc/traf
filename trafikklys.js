let rød = document.getElementById('rød');
let gul = document.getElementById('gul');
let grønn = document.getElementById('grønn');
let farlig = document.getElementById('rød').style.backgroundColor

function krapp(num) {
setTimeout(hva, 0) 
setTimeout(hvor, 2000) 
setTimeout(hvem, 4000) 
setTimeout(hvorfor, 6000) 

}

function hva() {
    rød.style.backgroundColor = `red`;

}
function hvor() {
    gul.style.backgroundColor = `yellow`;

}
function hvem() {
    rød.style.backgroundColor = `grey`;
    gul.style.backgroundColor = `grey`;
    grønn.style.backgroundColor = `green`;

}
function hvorfor() {
    grønn.style.backgroundColor = `grey`;

}

function farg() {
    rød.classList.toggle("dort");

}
function fargd() {
    gul.classList.toggle("dirt");
}
function farge() {
    grønn.classList.toggle("mine");
}


function knapp(num) {
    location.reload();
}