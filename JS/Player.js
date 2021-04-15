class Player {

    constructor() {



    }

    getpCount() {

        var pcref = database.ref('playerCount');

        pcref.on("value", function(data) {

            playerCount = data.val();
        
        });

    }

    updatepCount(count) {

        database.ref('/').update({playerCount: count});

    }

    update(name) {

        var playerIndex = "player" + playerCount;

        database.ref(playerIndex).set({name: name});

    }

}