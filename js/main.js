
const primeraPantalla = document.getElementById('primeraPantalla');
const segundaPantalla = document.getElementById('segundaPantalla');
const terceraPantalla = document.getElementById('terceraPantalla');
const pantalla1pj = document.getElementById('pantalla1pj');


primeraPantalla.style.display = '';
segundaPantalla.style.display = 'none';
pantalla1pj.style.display = 'none'
terceraPantalla.style.display = 'none';


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

function ladronPush(){
    personajes.push(ladron);
    let player1 = personajes[0];
    let player2 = personajes[1];
    console.log('player1 ha elegido a' + personajes[0].name);
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
function barbaroPush(){    
    personajes.push(barbaro);
    console.log(personajes);
    let player1 = personajes[0];
    let player2 = personajes[1];
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
  function pistoleroPush(){    
    personajes.push(pistolero);
    console.log(personajes);
    let player1 = personajes[0];
    let player2 = personajes[1];
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
  function guerreraPush(){    
    personajes.push(guerrera);
    console.log(personajes);
    let player1 = personajes[0];
    let player2 = personajes[1];
    
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
    console.log(this.name + ' ha usado sacadientes en ' + enemy.name);
}
function pinchaBarbaro(enemy){
    let golpe = (this.attack - enemy.defense) * this.speed;
    enemy.life -= parseInt(golpe);
    console.log(this.name + ' ha usado mazazo en ' + enemy.name);
}
function golpeBajoLadron(enemy){
    let golpe = (this.attack - enemy.defense) * this.speed;
    enemy.life -= parseInt(golpe);
    console.log(this.name + ' ha usado golpe bajo en ' + enemy.name);
}

function normalAttack(enemy){
    let golpe = (this.attack - enemy.defense) * this.speed;
    enemy.life -= parseInt(golpe);
    console.log(this.name + ' ha usado puñalada en ' + enemy.name);
}
function culatazoPistolero(enemy){
    let golpe = (this.attack - enemy.defense) * this.speed;
    enemy.life -= parseInt(golpe);
    console.log(this.name + ' ha usado culatazo en ' + enemy.name);
}
function disparoPistolero(enemy){
    let golpe = (this.attack - enemy.defense) * this.speed;
    enemy.life -= parseInt(golpe);
    console.log(this.name + ' ha usado disparo en ' + enemy.name);
}
function corteGuerrera(enemy){
    let golpe = (this.attack - enemy.defense) * this.speed;
    enemy.life -= parseInt(golpe);
    console.log(this.name + ' ha usado corte en ' + enemy.name);
}
function golpeEscudoGuerrera(enemy){
    let golpe = (this.attack - enemy.defense) * this.speed;
    enemy.life -= parseInt(golpe);
    console.log(this.name + ' ha usado golpe de escudo en ' + enemy.name);
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

let ladron = new Fighter("Ladron", 56, 0.3, 8, 2, puñalada, golpeBajo);
let barbaro = new Fighter("Barbaro", 52, 0.4, 6, 4, pinchaBarbaro, sacaDientes);
let pistolero = new Fighter("Pistolero", 34, 0.4, 3, 2, culatazo, disparo);
let guerrera = new Fighter("Guerrera", 60, 2, 9, 0.4, corte, golpeEscudo);


//Mecánica de juego para dos jugagores
/*
function turnAttack(){

    if(turn == 1){
        setTimeout(()=>{
        ladron.skill1(barbaro);
        turn = 2;
        //console.log(ladron.life);
        console.log(barbaro.life);
        const NombreBoton = document.getElementById("skill1").innerHTML = "puñalada";
    }, 500);
    }else{
        setTimeout(()=>{
        let skillArr = [this.skil1, this.skill2, this.skill3, this.skill4];
        const random = Math.random() * (4 - 1 + 1);
        //randomAttak = ()=> Math.floor(Math.random() * skillArr.length);
        barbaro.skill1(ladron);
        turn = 1;
        console.log(ladron.life);
        //console.log(barbaro.life);
        //const NombreBoton = document.getElementById("skill1").innerHTML = this.skill1;
        }, 500);
    }
}
*/
// Mecanica para dos jugadores
function turnAttack1(){
    if(personajes[0].life <= 0 || personajes[1].life <= 0){
        segundaPantalla.style.display = 'none';
        terceraPantalla.style.display = '';
        primeraPantalla.style.display = 'none';
        segundaPantalla.style.display = 'none';
        pantalla1pj.style.display = 'none'
    }else {
        if(turn == 1){
            setTimeout(()=>{
            personajes[0].skill1(personajes[1]);
            turn = 2;
            console.log(personajes[1].life);
            document.getElementById('quePasa1').innerHTML = ( 'la vida del enemigo es: ' + personajes[1].life);
            },5);
        }else{
            setTimeout(()=>{
            personajes[1].skill1(personajes[0]);
            turn = 1;
            document.getElementById('quePasa2').innerHTML = ( 'tu vida es: ' + personajes[0].life);
            console.log(personajes[0].life);
            }, 5);
        }   
    }
}
document.getElementById("skill1").addEventListener("click", turnAttack1);

function turnAttack2(){
    if(personajes[0].life <= 0 || personajes[1].life <= 0){
        segundaPantalla.style.display = 'none';
        terceraPantalla.style.display = '';
        primeraPantalla.style.display = 'none';
        segundaPantalla.style.display = 'none';
        pantalla1pj.style.display = 'none'
    }else {
        if(turn == 1){
            setTimeout(()=>{
            personajes[0].skill2(personajes[1]);
            turn = 2;
            document.getElementById('quePasa1').innerHTML = ( 'la vida del enemigo es: ' + personajes[1].life);
            console.log(personajes[1].life);
            },1);
        }else{
            setTimeout(()=>{
            personajes[1].skill2(personajes[0]);
            turn = 1;
            document.getElementById('quePasa2').innerHTML = ( 'tu vida es: ' + personajes[0].life);
            console.log(personajes[0].life);
            }, 1);
        }   
    }
}
document.getElementById("skill2").addEventListener("click", turnAttack2);

//Mecánica de juego para un jugador

function turnoCorrido(){  
    
    if(personajes[0].life <= 0 || personajes[1].life <= 0){
        segundaPantalla.style.display = 'none';
        terceraPantalla.style.display = '';
        primeraPantalla.style.display = 'none';
        segundaPantalla.style.display = 'none';
        pantalla1pj.style.display = 'none'
    }else {
        personajes[0].skill1(personajes[1]);
        document.getElementById('quePasa1solo').innerHTML = ( 'la vida del enemigo es: ' + personajes[1].life);
        console.log( 'la vida del enemigo es: ' + personajes[1].life);
        setTimeout(()=>{
            personajes[1].skill1(personajes[0]);
            document.getElementById('quePasa2solo').innerHTML = ( 'tu vida es: ' + personajes[0].life);
            console.log('tu vida es: ' + personajes[0].life);
        }, 5);
    }
}
function turnoCorrido2(){  
    
    if(personajes[0].life <= 0 || personajes[1].life <= 0){
        segundaPantalla.style.display = 'none';
        terceraPantalla.style.display = '';
        primeraPantalla.style.display = 'none';
        segundaPantalla.style.display = 'none';
        pantalla1pj.style.display = 'none'
        
    }else {
        personajes[0].skill2(personajes[1]);
        document.getElementById('quePasa1solo').innerHTML = ( 'la vida del enemigo es: ' + personajes[1].life);
        
        console.log( 'la vida del enemigo es: ' + personajes[1].life);
        setTimeout(()=>{
            personajes[1].skill2(personajes[0]);
            document.getElementById('quePasa2solo').innerHTML = ( 'tu vida es: ' + personajes[0].life);
            console.log('tu vida es: ' + personajes[0].life);
        }, 5);
    }
}
document.getElementById("skill1solo").addEventListener("click", turnoCorrido);
document.getElementById("skill2solo").addEventListener("click", turnoCorrido2);






/////////////////////////////////////////////////////////////

