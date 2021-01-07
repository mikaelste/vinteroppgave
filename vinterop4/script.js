const btnStart = document.getElementById('btnRandom')
const btnRepeat = document.getElementById('btnRepeat')
const container = document.getElementById('container')
const antGjett = document.getElementById('antGjett')
const riktig = document.getElementById('lydRiktig')
const feil = document.getElementById('lydFeil')

let instrumenter = [
    {
        navn: 'fagott',
        bilde: 'media/fagott.jpg',
        lyd: 'media/fagott.mp3',
        verdi: ''
    },
    {
        navn: 'floyte',
        bilde: 'media/floyte.gif',
        lyd: 'media/floyte.mp3',
        verdi: ''
    },
    {
        navn: 'klarinett',
        bilde: 'media/klarinett.jpg',
        lyd: 'media/klarinett.mp3',
        verdi: ''
    },
    {
        navn: 'obo',
        bilde: 'media/obo.jpg',
        lyd: 'media/obo.mp3',
        verdi: ''
    },
    {
        navn: 'valthorn',
        bilde: 'media/valthorn.jpg',
        lyd: 'media/valthorn.mp3',
        verdi: ''
    }
]

let btnRandom;
let teller = 0
let randomNumber;
let highscore = localStorage.getItem('highscore')

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




function makeNumber () {
    randomNumber = Math.floor(Math.random() * instrumenter.length);
    document.getElementById(randomNumber).play();
    console.log(randomNumber)
}

function repeatSound() {
    document.getElementById(randomNumber).duration = 5;
    document.getElementById(randomNumber).play();
}
function startGame() {
    createHTML();
    makeNumber();
    btnStart.innerHTML = `Pass, ny lyd!`
    btnStart = btnRandom
}

btnStart.onclick = startGame;

document.getElementsByClassName('divContainer')

function chechHighScore () {
    if(Number(highscore) === 0) {
        localStorage.setItem('highscore', teller)
        alert(`Du er førstemann til og spille og satte rekorden til ${teller} gjetninger`);
        location.reload();
    } else if ( Number(highscore) !== 0 && teller > Number(highscore)) {
        alert(`Dessverre! Du var ${teller - Number(highscore)} gjetninger unna rekorden (${highscore}). Totalt: ${teller} gjetninger`)  
        location.reload();
    } else if (Number(highscore) === teller) {
        alert(`Oioi! Du er like god som higscore med ${highscore} gjetninger. Prøv igjen!`)
    } 
    else {
        alert(`Du er best i veden og brukte bare ${teller} forsøk`)
        localStorage.setItem('highscore', teller)
        location.reload();
    }
}

function chechAnswer(clicked_id) {
    if(clicked_id === `nr${randomNumber}`) {
        riktig.play();
        instrumenter.splice(randomNumber, 1);
        container.innerHTML = '';
        if(instrumenter.length === 0) {
            chechHighScore();
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



