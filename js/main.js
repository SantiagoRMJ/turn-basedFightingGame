
const primeraPantalla = document.getElementById('primeraPantalla');
const segundaPantalla = document.getElementById('segundaPantalla');
const terceraPantalla = document.getElementById('terceraPantalla');
const pantalla1pj = document.getElementById('pantalla1pj');
const pantallaHasGanado = document.getElementById('pantallaHasGanado');

primeraPantalla.style.display = '';
segundaPantalla.style.display = 'none';
pantalla1pj.style.display = 'none'
terceraPantalla.style.display = 'none';
pantallaHasGanado.style.display = 'none';


let turn = 1;


// Crear la clase de los personajes

class Fighter{
    constructor(name, attack, speed, defense, luck, skill1, skill2, skill3, skill4){
        this.name = name;
        this.attack = attack;
        this.speed = speed;
        this.defense = defense;
        this.luck = luck;
        this.life = 1000;
        this.skill1 = skill1;
        this.skill2 = skill2;
        this.skill3 = skill3;
        this.skill4 = skill4;
    }
}

//Selección de personaje

let personajes = [];


function arrMax(){
    if(personajes.length < 2){
        
        document.getElementById('barbaroCont').disabled = false;
        document.getElementById('ladronCont').disabled = false;
        document.getElementById('pistoleroCont').disabled = false;
        document.getElementById('guerreraCont').disabled = false;
      }if(personajes.length == 2){
        document.getElementById('barbaroCont').disabled = true;
        document.getElementById('ladronCont').disabled = true;
        document.getElementById('pistoleroCont').disabled = true;
        document.getElementById('guerreraCont').disabled = true;
      }
}
let imagenP1 = document.getElementById('fotoP11');
let imagenP2 = document.getElementById('fotoP21');
function ladronPush(){
    personajes.push(ladron);
    let player1 = personajes[0];
    let player2 = personajes[1];
    if (ladron = personajes[0]) {
        imagenP1.InnerHTML = '<img src="./img/ladron.png"></img>';
    }else if (ladron = personajes[1]){
        imagenP2.InnerHTML = '<img src=“./img/ladron.png”></img>';
    }
    arrMax();
}
function barbaroPush(){    
    personajes.push(barbaro);
    let player1 = personajes[0];
    let player2 = personajes[1];
    arrMax();
  }
  function pistoleroPush(){    
    personajes.push(pistolero);
    let player1 = personajes[0];
    let player2 = personajes[1];
    arrMax();
  }
  function guerreraPush(){    
    personajes.push(guerrera);
    let player1 = personajes[0];
    let player2 = personajes[1]; 
    arrMax();
  }
  

document.getElementById("barbaroCont").addEventListener("click", barbaroPush);
document.getElementById("ladronCont").addEventListener("click", ladronPush);
document.getElementById("pistoleroCont").addEventListener("click", pistoleroPush);
document.getElementById("guerreraCont").addEventListener("click", guerreraPush);

///////////////////////////////////////////////////////////////////////////////////
// funciones de los tipos de juego

function twoPlayers(){  
        primeraPantalla.style.display = 'none';
        segundaPantalla.style.display = '';
    }
   
document.getElementById("dosJugadores").addEventListener("click", twoPlayers);


function onePlayer(){
    primeraPantalla.style.display = 'none';
    segundaPantalla.style.display = 'none';
    pantalla1pj.style.display = ''
    terceraPantalla.style.display = 'none';
}
document.getElementById("unJugador").addEventListener("click", onePlayer);

//Definir las habilidades de cada uno

function sacaDientesBarbaro(enemy){
    let golpe = (this.attack - enemy.defense) * this.speed;
    enemy.life -= parseInt(golpe);
    document.getElementById('queAtaque1solo').innerHTML = ( this.name + ' ha usado sacadientes en ' + enemy.name);
    document.getElementById('queAtaque1').innerHTML = ( this.name + ' ha usado sacadientes en ' + enemy.name);    
}
function pinchaBarbaro(enemy){
    let golpe = (this.attack - enemy.defense) * this.speed;
    enemy.life -= parseInt(golpe);
    document.getElementById('queAtaque1solo').innerHTML = ( this.name + ' ha usado mazazo en ' + enemy.name);
    document.getElementById('queAtaque1').innerHTML = ( this.name + ' ha usado mazazo en ' + enemy.name);
}
function golpeBajoLadron(enemy){
    let golpe = (this.attack - enemy.defense) * this.speed;
    enemy.life -= parseInt(golpe);
    document.getElementById('queAtaque1solo').innerHTML = ( this.name + ' ha usado golpe bajo en ' + enemy.name);
    document.getElementById('queAtaque1').innerHTML = ( this.name + ' ha usado golpe bajo en ' + enemy.name);
}

function normalAttack(enemy){
    let golpe = (this.attack - enemy.defense) * this.speed;
    enemy.life -= parseInt(golpe);
    document.getElementById('queAtaque1solo').innerHTML = ( this.name + ' ha usado puñalada en ' + enemy.name);
    document.getElementById('queAtaque1').innerHTML = ( this.name + ' ha usado puñalada en ' + enemy.name);
}
function culatazoPistolero(enemy){
    let golpe = (this.attack - enemy.defense) * this.speed;
    enemy.life -= parseInt(golpe);
    document.getElementById('queAtaque1solo').innerHTML = (this.name +  ' ha usado culatazo en ' + enemy.name);
    document.getElementById('queAtaque1').innerHTML = ( this.name + ' ha usado culatazo en ' + enemy.name);
}
function disparoPistolero(enemy){
    let golpe = (this.attack - enemy.defense) * this.speed;
    enemy.life -= parseInt(golpe);
    document.getElementById('queAtaque1solo').innerHTML = ( this.name + ' ha usado disparo en ' + enemy.name);
    document.getElementById('queAtaque1').innerHTML = ( this.name + ' ha usado disparo en ' + enemy.name);
}
function corteGuerrera(enemy){
    let golpe = (this.attack - enemy.defense) * this.speed;
    enemy.life -= parseInt(golpe);
    document.getElementById('queAtaque1solo').innerHTML = ( this.name + ' ha usado corte en ' + enemy.name);
    document.getElementById('queAtaque1').innerHTML = ( this.name + ' ha usado corte en ' + enemy.name);
}
function golpeEscudoGuerrera(enemy){
    let golpe = (this.attack - enemy.defense) * this.speed;
    enemy.life -= parseInt(golpe);
    document.getElementById('queAtaque1solo').innerHTML = ( this.name + ' ha usado golpe de escudo en ' + enemy.name);
    document.getElementById('queAtaque1').innerHTML = ( this.name + ' ha usado golpe de escudo en ' + enemy.name);
}
let puñalada = normalAttack;
let mazazo = pinchaBarbaro;
let golpeBajo = golpeBajoLadron;
let sacaDientes = sacaDientesBarbaro;
let disparo = disparoPistolero;
let culatazo = culatazoPistolero;
let corte = corteGuerrera;
let golpeEscudo = golpeEscudoGuerrera;

//defino a los personajes

let ladron = new Fighter("Ladron", 156, 0.3, 20, 2, puñalada, golpeBajo, 'url(/img/ladron.png) no-repeat center/cover;');
let barbaro = new Fighter("Barbaro", 152, 0.4, 27, 4, pinchaBarbaro, sacaDientes, 'url(/img/barbaro.png)no-repeat center/cover;');
let pistolero = new Fighter("Pistolero", 134, 0.4, 12, 2, culatazo, disparo, 'url(/img/pistolero.png) no-repeat center/cover;');
let guerrera = new Fighter("Guerrera", 160, 2, 46, 0.4, corte, golpeEscudo, 'url(/img/warrior.png) no-repeat center/cover;');

// Mecanica para dos jugadores

let vida12player = document.getElementById('barraVida2players1');
let vida22player = document.getElementById('barraVida2players2');

function turnAttack1(){
    
    if(personajes[0].life <= 0){
        segundaPantalla.style.display = 'none';
        terceraPantalla.style.display = '';
        primeraPantalla.style.display = 'none';
        segundaPantalla.style.display = 'none';
        pantalla1pj.style.display = 'none'
    }
        else if(personajes[1].life <= 0) {
            segundaPantalla.style.display = 'none';
            terceraPantalla.style.display = 'none';
            primeraPantalla.style.display = 'none';
            segundaPantalla.style.display = 'none';
            pantalla1pj.style.display = 'none'
            pantallaHasGanado.style.display = '';
          }else {
        if(turn == 1){
            personajes[0].skill1(personajes[1]);
            turn = 2;
            document.getElementById('cuantaVida1').innerHTML = ( 'la vida del enemigo es: ' + personajes[1].life);
            porcentajeVida22player = ((personajes[1].life * 10) / 10000) * 15;
            vida22player.style.width =  porcentajeVida22player + "em";
        }else{
            personajes[1].skill1(personajes[0]);
            turn = 1;
            document.getElementById('cuantaVida2').innerHTML = ( 'tu vida es: ' + personajes[0].life);
            porcentajeVida12player = ((personajes[0].life * 10) / 10000) * 15;
            vida12player.style.width =  porcentajeVida12player + "em";
        }
        }       
    
}
document.getElementById("skill1").addEventListener("click", turnAttack1);

function turnAttack2(){
    if(personajes[0].life <= 0){
        segundaPantalla.style.display = 'none';
        terceraPantalla.style.display = '';
        primeraPantalla.style.display = 'none';
        segundaPantalla.style.display = 'none';
        pantalla1pj.style.display = 'none'
    }
        else if(personajes[1].life <= 0) {
            segundaPantalla.style.display = 'none';
            terceraPantalla.style.display = 'none';
            primeraPantalla.style.display = 'none';
            segundaPantalla.style.display = 'none';
            pantalla1pj.style.display = 'none'
            pantallaHasGanado.style.display = '';
          }else {
        if(turn == 1){
            personajes[0].skill2(personajes[1]);
            turn = 2;
            document.getElementById('cuantaVida1').innerHTML = ( 'la vida del enemigo es: ' + personajes[1].life);
            porcentajeVida22player = ((personajes[1].life * 10) / 10000) * 15;
            vida22player.style.width =  porcentajeVida22player + "em";
 
        }else{
            personajes[1].skill2(personajes[0]);
            turn = 1;
            document.getElementById('cuantaVida2').innerHTML = ( 'tu vida es: ' + personajes[0].life);
            porcentajeVida12player = ((personajes[0].life * 10) / 10000) * 15;
            vida12player.style.width =  porcentajeVida12player + "em";           
        }   
    }
}
document.getElementById("skill2").addEventListener("click", turnAttack2);

//Mecánica de juego para un jugador

let vida1 = document.getElementById('barraVida1');
let vida2 = document.getElementById('barraVida2');

let botonTurnoCorrido1 = document.getElementById("skill1solo");
function turnoCorrido(){  
    
    if(personajes[0].life <= 0){
        segundaPantalla.style.display = 'none';
        terceraPantalla.style.display = '';
        primeraPantalla.style.display = 'none';
        segundaPantalla.style.display = 'none';
        pantalla1pj.style.display = 'none'
    }
        else if(personajes[1].life <= 0) {
            segundaPantalla.style.display = 'none';
            terceraPantalla.style.display = 'none';
            primeraPantalla.style.display = 'none';
            segundaPantalla.style.display = 'none';
            pantalla1pj.style.display = 'none'
            pantallaHasGanado.style.display = '';
          }else {
        personajes[0].skill1(personajes[1]);
        document.getElementById('barraVida2').innerHTML = ( 'la vida del enemigo es: ' + personajes[1].life);
        porcentajeVida2 = ((personajes[1].life * 10) / 10000) * 15;
        vida2.style.width =  porcentajeVida2 + "em";
        botonTurnoCorrido1.disabled = true;
        botonTurnoCorrido2.disabled = true;
        setTimeout(()=>{
            personajes[1].skill1(personajes[0]);
            document.getElementById('barraVida1').innerHTML = ( 'tu vida es: ' + personajes[0].life);
            porcentajeVida1 = ((personajes[0].life * 10) / 10000) * 15;
            vida1.style.width =  porcentajeVida1 + "em";
            botonTurnoCorrido1.disabled = false;
            botonTurnoCorrido2.disabled = false;
        }, 1000);
    }
}

let botonTurnoCorrido2 = document.getElementById("skill2solo");
function turnoCorrido2(){     
    if(personajes[0].life <= 0){
        segundaPantalla.style.display = 'none';
        terceraPantalla.style.display = '';
        primeraPantalla.style.display = 'none';
        segundaPantalla.style.display = 'none';
        pantalla1pj.style.display = 'none'
    }
        else if(personajes[1].life <= 0) {
            segundaPantalla.style.display = 'none';
            terceraPantalla.style.display = 'none';
            primeraPantalla.style.display = 'none';
            segundaPantalla.style.display = 'none';
            pantalla1pj.style.display = 'none'
            pantallaHasGanado.style.display = '';
          }else {
        personajes[0].skill2(personajes[1]);
        document.getElementById('barraVida2').innerHTML = ( 'la vida del enemigo es: ' + personajes[1].life);       
        porcentajeVida2 = ((personajes[1].life * 10) / 10000) * 15;
        vida2.style.width =  porcentajeVida2 + "em";
        botonTurnoCorrido1.disabled = true;
        botonTurnoCorrido2.disabled = true;
        setTimeout(()=>{
            personajes[1].skill2(personajes[0]);
            document.getElementById('barraVida1').innerHTML = ( 'tu vida es: ' + personajes[0].life);
            porcentajeVida1 = ((personajes[0].life * 10) / 10000) * 15;
            vida1.style.width =  porcentajeVida1 + "em";
            
            botonTurnoCorrido1.disabled = false;
            botonTurnoCorrido2.disabled = false;
        }, 1000);
    }
}
document.getElementById("skill1solo").addEventListener("click", turnoCorrido);
document.getElementById("skill2solo").addEventListener("click", turnoCorrido2);

/////////////////////////////////////////////////////////////

