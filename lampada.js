"user strict"

const lampada = document.getElementById("lampada")

function lampadaInteira() {
    return !lampada.src.includes("quebrada")
}

function botoesLigaDesliga (estadoLiga, estadoDesliga) {
    const ligar = document.getElementById("ligar")
    const desligar = document.getElementById("desligar")
}

function quebrarLampada() {
    lampada.src = "img/quebrada.jpg"
    botoesLigaDesliga(true, true)
}




function ligarLamp() {

    if(lampadaInteira()) {
    lampada.src = "img/ligada.jpg"
    botoesLigaDesliga(true, false)
    }
}

document.getElementById("ligar")
    .addEventListener("click", ligarLamp)


    function desligarLamp() {

        if (lampadaInteira()) {
        lampada.src = "img/desligada.jpg"
        botoesLigaDesliga(false, true)
     }
    }


    //eventos
document.getElementById("desligar")
    .addEventListener("click", desligarLamp)


document.getElementById("lampada") 
    .addEventListener("mouseover", ligarLamp)

document.getElementById("lampada")
    .addEventListener("mouseout", desligarLamp)

document.getElementById("lampada")
    .addEventListener("dblclick", quebrarLampada)