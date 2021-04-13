var hball, database, position;

function setup(){
    
    database = firebase.database();

    createCanvas(500,500);

    hball = createSprite(250,250,10,10);
    hball.shapeColor = "red";

    var hballpos = database.ref('ball/position');
    hballpos.on("value", readpos, showerror);

}

function writepos(x,y) {

    database.ref('ball/position').set({

        'x': position.x + x,
        'y': position.y + y

    })

}

function readpos(data) {

    position = data.val();
    hball.x = position.x;
    hball.y = position.y;

}

function showerror() {

    console.log("Error writing into database.");

}

function draw(){

    background("white");

    if (position !== undefined) {

        if(keyDown(LEFT_ARROW)){
        writepos(-1,0);
        }

        else if(keyDown(RIGHT_ARROW)){
        writepos(1,0);
        }

        else if(keyDown(UP_ARROW)){
        writepos(0,-1);
        }

        else if(keyDown(DOWN_ARROW)){
        writepos(0,1);
        }

        drawSprites();

    }

}