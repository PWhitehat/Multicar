class Game {

    constructor() {



    }

    getGamestate() {

        var gsref = database.ref('gameState');

        gsref.on("value", function(data) {

            gameState = data.val();
        
        });

    }

    updateState(state) {

        database.ref('/').update({gameState: state});

    }

    async start() {

        if (gameState === 0) {

            player = new Player();

            var playerCountref = await database.ref('playerCount').once("value");

            if (playerCountref.exists()) {

                playerCount = playerCountref.val();
                player.getpCount();

            }

            form = new Form();
            form.display();

        }

        car1 = createSprite(100, 200);
        car1.addImage("car1", c1img);

        car2 = createSprite(300, 200);
        car2.addImage("car2", c2img);

        car3 = createSprite(500, 200);
        car3.addImage("car3", c3img);

        car4 = createSprite(700, 200);
        car4.addImage("car4", c4img);

        cars = [car1, car2, car3, car4];


    }

    play() {

        form.hide();

        //textSize(30);
        //text("Starting the game...", 120, 100);

        Player.getPlayerinfo();

        if (allPlayers !== undefined) {

            background(rgb(198, 135, 103));

            image(timg, 0, -displayHeight * 4, displayWidth, displayHeight * 7);

            // local var to compare car number
            var index = 0;

            // initial position of drivers
            var x = 100;
            var y;

            //var disp_position = 130;

            for (var plr in allPlayers) {

                index = index + 1;
                x = x + 200;
                y = displayHeight - allPlayers[plr].distance;

                cars[index - 1].x = x;
                cars[index - 1].y = y;

                if (index === player.index) {

                    stroke(10);
                    fill("red");
                    ellipse(x,y, 60, 60);
                    cars[index - 1].shapeColor = "red";
                    camera.position.x = displayWidth / 2;
                    camera.position.y = cars[index - 1].y;

                }

                //disp_position += 20;

                //textSize(15);
                //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120, disp_position);

            }

        }

        if (keyIsDown(UP_ARROW) && player.index !== null) {

            player.distance += 10;
            player.update();

        }

        if (player.distance > 3800) {

            gameState = 2;

        }

        drawSprites();

    }

    end() {

        

    }

}