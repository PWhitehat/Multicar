class Form {

    constructor() {

        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h2');

    }

    hide() {

        this.input.hide();
        this.button.hide();
        this.greeting.hide();

    }

    display() {

        var title = createElement('h2');

        title.html("Car Racing Game");
        title.position(450, 100);

        this.input.position(450, 160);
        this.button.position(450, 200);

        this.button.mousePressed(() => {

            this.input.hide();
            this.button.hide();

            player.name = this.input.value();

            playerCount = playerCount + 1;
            player.index = playerCount;
            player.update();
            player.updatepCount(playerCount);

            this.greeting.html("Hello " + player.name + ", others will join soon!");
            this.greeting.position(400,160);

        });

    }

}