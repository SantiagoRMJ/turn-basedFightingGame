// Transicion de pantallas.
const primeraPantalla = document.getElementById('primeraPantalla');
const segundaPantalla = document.getElementById('segundaPantalla');
const terceraPantalla = document.getElementById('terceraPantalla');

primeraPantalla.style.display = 'none';
segundaPantalla.style.display = "";
terceraPantalla.style.display = 'none';

//primera pantalla debe contener la selección de tu personaje a elegir entre cuatro

//primera pantalla debe contener la selección del personaje enemigo

//primera pantalla debe contener un botón que indique el comienzo de la lucha y nos lleve a segundapantalla

//segunda pantalla debe presentar a los personajes seleccionados con sus respectivas barras de vida

//segunda pantalla debe incluir las interacciones del jugador, (ataques)

//comenzar por segunda pantallla para crear los ataques y comprobar el codigo en la consola

let turn = 1;

//prueba boton ataque


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
let kabesaso = normalAttack;
let pinchaso = pinchaMortadelo;
let bataso = batasoMike;
let sacaDientes = sacaDientesMortadelo;

function sacaDientesMortadelo(enemy){
    let golpe = (this.attack - enemy.defense) * this.speed; 
    enemy.life -= parseInt(golpe);
    console.log(this.name + ' ha usado sacaDientes en ' + enemy.name);
} 
function pinchaMortadelo(enemy){
    let golpe = (this.attack - enemy.defense) * this.speed; 
    enemy.life -= parseInt(golpe);
    console.log(this.name + ' ha usado pinchaso en ' + enemy.name);
} 
function batasoMike(enemy){
    let golpe = (this.attack - enemy.defense) * this.speed; 
    enemy.life -= parseInt(golpe);
    console.log(this.name + ' ha usado bataso en ' + enemy.name);
} 

function normalAttack (enemy){
    let golpe = (this.attack - enemy.defense) * this.speed; 
    enemy.life -= parseInt(golpe);
    console.log(this.name + ' ha usado kabesaso en ' + enemy.name);
} 

let mike = new Fighter("Mike", 56, 0.3, 8, 2, kabesaso, bataso);
let mortadelo = new Fighter("Abe", 52, 0.4, 6, 4, pinchaMortadelo, sacaDientes);
    
  

//if turno = 1 mike ataca a mortadelo
function turnAttack(){
  
    if(turn == 1){
        mike.skill1(mortadelo);
        turn = 2;
        //console.log(mike.life);
        console.log(mortadelo.life);
        //const NombreBoton = document.getElementById("skill1").innerHTML = "kabesaso";
    }else{
        mortadelo.skill1(mike);
        turn = 1;
        console.log(mike.life);
        //console.log(mortadelo.life);
        //const NombreBoton = document.getElementById("skill1").innerHTML = this.skill1;
    }
}
function turnAttack2(){
  
    if(turn == 1){
        mike.skill2(mortadelo);
        turn = 2;
        //console.log(mike.life);
        console.log(mortadelo.life);
        //const NombreBoton = document.getElementById("skill1").innerHTML = "kabesaso";
    }else{
        mortadelo.skill2(mike);
        turn = 1;
        console.log(mike.life);
        //console.log(mortadelo.life);
        //const NombreBoton = document.getElementById("skill1").innerHTML = this.skill1;
    }
}
document.getElementById("skill1").addEventListener("click", turnAttack);
document.getElementById("skill2").addEventListener("click", turnAttack2);


    





//console.log(mike.life);



/////////////////////////////////////////////////////////////


//console.log(mike.life);


