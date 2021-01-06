const btnRandom = document.getElementById('btnRandom')
const btnRepeat = document.getElementById('btnRepeat')
const container = document.getElementById('container')
const antGjett = document.getElementById('antGjett')
const riktig = document.getElementById('lydRiktig')
const feil = document.getElementById('lydFeil')

let instrumenter = [
    {
        navn: 'fagott',
        bilde: '/media/fagott.jpg',
        lyd: '/media/fagott.mp3',
        verdi: ''
    },
    {
        navn: 'floyte',
        bilde: '/media/floyte.gif',
        lyd: '/media/floyte.mp3',
        verdi: ''
    },
    {
        navn: 'klarinett',
        bilde: '/media/klarinett.jpg',
        lyd: '/media/klarinett.mp3',
        verdi: ''
    },
    {
        navn: 'obo',
        bilde: '/media/obo.jpg',
        lyd: '/media/obo.mp3',
        verdi: ''
    },
    {
        navn: 'valthorn',
        bilde: '/media/valthorn.jpg',
        lyd: '/media/valthorn.mp3',
        verdi: ''
    }
]

let teller = 0
let randomNumber;



function createHTML () {
    for(i = 0; i < instrumenter.length; i ++) {
        container.innerHTML += `
        <div onclick='chechAnswer(this.id)' class='divContainer' id='nr${i}'>
            <audio id='${i}' src="${instrumenter[i].lyd}"></audio>
            <img src='${instrumenter[i].bilde}'>
            <h2> ${instrumenter[i].navn} </h2>
        </div>
        ` 
        
    }
}
createHTML();

function makeNumber () {
    randomNumber = Math.floor(Math.random() * instrumenter.length);
    document.getElementById(randomNumber).play();
    console.log(randomNumber)
}

function repeatSound() {
    document.getElementById(randomNumber).duration = 5;
    document.getElementById(randomNumber).play();
}

document.getElementsByClassName('divContainer')
function chechAnswer(clicked_id) {
    if(clicked_id === `nr${randomNumber}`) {
        riktig.play();
        instrumenter.splice(randomNumber, 1);
        container.innerHTML = '';
        if(instrumenter.length === 0) {
            alert(`du bruke ${teller} forsøk`)
        } else {
            createHTML();
            makeNumber();
        }  
    } else {
        feil.play()
        teller ++
        antGjett.innerHTML = teller
    }
    console.log(clicked_id)
}


btnRepeat.onclick = repeatSound;
btnRandom.onclick = makeNumber;



