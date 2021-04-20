var gameState = 0; 
var database;
var canvas, bgimg;
var playerCount = 0;
var form, player, game;
var allPlayers;
var distance = 0;

function setup(){

    canvas = createCanvas(400,400);
    
    database = firebase.database();

    game = new Game();
    game.getGamestate();
    game.start();

}

function showerror() {

    console.log("Error writing into database.");

}

function draw() {

    if (playerCount === 4) {

        game.updateState(1);

    }

    if (gameState === 1) {

        clear();
        game.play();

    }

}