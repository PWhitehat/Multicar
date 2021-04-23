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
        car2 = createSprite(300, 200);
        car3 = createSprite(500, 200);
        car4 = createSprite(700, 200);
        cars = [car1, car2, car3, car4];

    }

    play() {

        form.hide();

        //textSize(30);
        //text("Starting the game...", 120, 100);

        Player.getPlayerinfo();

        if (allPlayers !== undefined) {

            // local var to compare car number
            var index = 0;

            // initial position of drivers
            var x = 0;
            var y;

            //var disp_position = 130;

            for (var plr in allPlayers) {

                index = index + 1;
                x = x + 200;
                y = displayHeight - allPlayers[plr].distance;

                cars[index - 1].x = x;
                cars[index - 1].y = y;

                if (index === player.index) {

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

        drawSprites();

    }

}