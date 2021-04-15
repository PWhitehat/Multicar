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

    start() {

        if (gameState === 0) {

            player = new Player();
            player.getpCount();
            form = new Form();
            form.display();

        }

    }

}