document.body.style.backgroundColor = "rgb(204,229,255)"
const fejlec = document.getElementById("fej")
const kep = document.getElementById("kep")
const main = document.getElementById("minden")
const megallok = ["Centenáriumi lakótelep megálló","Futórózsa utca megálló","Sasvár utca megálló","Budapesti út megálló","Olga utca megálló","Sasvár utca megálló","Margit utca megálló","Gida utca megálló","Mátyásföld, repülőtér H megálló","Jókai Mór utca (Rendőrség) megálló","Fuvallat utca megálló","Sashalom H megálló","Thököly út megálló","Nagyicce H megálló","Egyenes utcai lakótelep megálló","Rákosfalva H megálló","Örs vezér tere M+H megálló"
]

fejlec.style.backgroundColor= "rgb(102,178,255)"
fejlec.style.padding = "20px"
fejlec.style.paddingBottom = "200px"
//kep.style.borderStyle = "solid"
kep.style.width = "250px"

fejlec.style.position = "relative"
kep.style.position = "absolute"


let kepPozicio = 0
const fejlecSzelesseg = fejlec.offsetWidth
const kepSzelesseg = kep.offsetWidth
const maxMozgas = fejlecSzelesseg - kepSzelesseg
let kepIrany = "jobbra"
csinaljMaint()
setInterval(function(){mozog()},5)

function mozog(){
    if(kepPozicio >= maxMozgas){
        kepIrany = "balra"
    }
    else if(kepPozicio <= 0){
        kepIrany = "jobbra"
    }
    if(kepIrany == "jobbra"){
        kepPozicio+=2
    }
    else{
        kepPozicio-=2
    }
    kep.style.left = kepPozicio + "px"
}

const megallokLista = []
function csinaljMaint(){
    const alcim = document.createElement('h2')
    alcim.innerText = "Ikarus"
    main.appendChild(alcim)
    const alalcim = document.createElement('h3')
    alalcim.innerText = "44-es busz"
    main.appendChild(alalcim)

    for(let item of megallok){
        const sor = document.createElement('div')
        const buszHelye = document.createElement('div')
        buszHelye.classList.add("busz")
        buszHelye.style.width = "30px"
        sor.appendChild(buszHelye)
        const megalloFelirat = document.createElement("span")
        megalloFelirat.innerText = "Megalló neve: "
        sor.appendChild(megalloFelirat)
        const megallo = document.createElement("span")
        megallo.innerHTML = item + "<br>"
        sor.appendChild(megallo)
        main.appendChild(sor)
    }
}

csinaljMaint()

const busz =  document.createElement("div")
busz.style.width = "10px"
busz.style.aspectRatio  = "1"
busz.style.backgroundColor = "blue"


const fel = document.createElement("button")
fel.innerText = "Egy megállóval feljebb"
fel.addEventListener('click', function()(menjfel()))


