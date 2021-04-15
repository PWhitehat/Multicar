class Form {

    constructor() {



    }

    display() {

        var title = createElement('h2');
        var input = createInput("Name");
        var button = createButton('Play');

        title.html("Car Racing Game");
        title.position(450, 100);

        input.position(450, 160);
        button.position(450, 200);

        button.mousePressed(function(){

            input.hide();
            button.hide();

            var name = input.value();

            playerCount = playerCount + 1;
            player.update(name);
            player.updatepCount(playerCount);

            var greet = createElement('h3');
            greet.html("Hello " + name + ", others will join soon!");
            greet.position(400,160);

        });

    }

}