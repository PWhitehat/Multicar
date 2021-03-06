class Form {

    constructor() {

        this.title = createElement('h2');
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h2');
        this.reset = createButton('Reset');

    }

    hide() {

        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.title.hide();

    }

    display() {

        this.title.html("Car Racing Game");
        this.title.position(displayWidth / 2 - 50, 0);

        this.input.position(displayWidth / 2 - 40, displayHeight / 2 - 80);
        this.button.position(displayWidth / 2 + 30, displayHeight / 2);

        this.reset.position(displayWidth - 100, 20);

        this.button.mousePressed(() => {

            this.input.hide();
            this.button.hide();

            player.name = this.input.value();

            playerCount = playerCount + 1;
            player.index = playerCount;
            player.update();
            player.updatepCount(playerCount);

            this.greeting.html("Hello " + player.name + ", others will join soon!");
            this.greeting.position(displayWidth / 2 - 70, displayHeight / 4);

        });

        this.reset.mousePressed(() => {

            player.updatepCount(0);
            game.updateState(0);
            database.ref('/').update({
                
                players: null,
                finishedPlayers: 0

            });
        
        });

    }

}