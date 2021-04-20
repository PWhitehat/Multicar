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

    }

    play() {

        form.hide();

        textSize(30);
        text("Starting the game...", 120, 100);

        Player.getPlayerinfo();

        if (allPlayers !== undefined) {

            var disp_position = 130;

            for (var plr in allPlayers) {

                if (plr === "player" + player.index) {

                    fill("red");

                }

                else {

                    fill("black");

                }

                disp_position += 20;

                textSize(15);
                text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120, disp_position);

            }

        }

        if (keyIsDown(UP_ARROW) && player.index !== null) {

            player.distance += 50;
            player.update();

        }

    }

}