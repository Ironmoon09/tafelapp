let tafelinpObj = document.getElementById("inputTafel");
let tafeloutpObj = document.getElementById("outputTafel");
let oefentafelinpObj = document.getElementById("inputOefenTafel");
let oefentafeloutpObj = document.getElementById("outputOefenTafel");
let antwoefentafelwinpObj = document.getElementById("inputAntwOefenTafel");
let feedbackObj = document.getElementById("feedbackOefenTafel");

let berekend_antw = 0;

function toonTafel()
{
    let output = "";
    let uitkomst = 0;
    for (let teller = 1; teller < 11; teller++){
        uitkomst = teller * tafelinpObj.value;
        output += teller + " x " + tafelinpObj.value + " = " + uitkomst + "<br>";
    }
    tafeloutpObj.innerHTML = output;
}

function toonOpgave()
{
    feedbackObj.innerHTML = "";
    antwoefentafelwinpObj.value = "";

    let getal = Math.floor(Math.random()*10) + 1;
    berekend_antw = getal * oefentafelinpObj.value;
    let output = getal + " x " + oefentafelinpObj.value + " = ";
    oefentafeloutpObj.innerHTML = output;
}

function controleerAntw()
{
    if(antwoefentafelwinpObj.value == berekend_antw) {
        feedbackObj.innerHTML = '<span class="text-success">Antwoord is goed!</span>';
    } else {
        feedbackObj.innerHTML = '<span class="text-danger">Antwoord is fout (oefen de tafel nog een keer)</span>';
    }
}
