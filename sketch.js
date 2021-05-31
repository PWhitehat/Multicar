var gameState = 0; 
var database;
var canvas, bgimg;
var playerCount = 0;
var form, player, game;
var allPlayers;
var distance = 0;
var cars, car1, car2, car3, car4;
var c1img, c2img, c3img, c4img, timg, gold, silver, bronze;
var finishedPlayer, passedFinish = false;

function preload() {

    c1img = loadImage("../images/car1.png");
    c2img = loadImage("../images/car2.png");
    c3img = loadImage("../images/car3.png");
    c4img = loadImage("../images/car4.png");
    timg = loadImage("../images/track.png");
    gold = loadImage("../images/gold.png");
    silver = loadImage("../images/silver.png");
    bronze = loadImage("../images/bronze.png");

}

function setup(){

    canvas = createCanvas(displayWidth - 50, displayHeight - 80);
    
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

    if (finishedPlayer === 4) {

        game.updateState(2);

    }

    if (gameState === 2 && finishedPlayer === 4) {

        game.displayRank();

    }

}