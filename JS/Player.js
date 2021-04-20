class Player {

    constructor() {

        this.index = null;
        this.distance = 0;
        this.name = null;

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

    update() {

        var playerIndex = "players/player" + this.index;

        database.ref(playerIndex).set({name: this.name, distance: this.distance});

    }

    static getPlayerinfo() {

        var playerInforef = database.ref('players');
        playerInforef.on("value", (data) => {allPlayers = data.val();});
        
    }

}