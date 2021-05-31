class Player {

    constructor() {

        this.index = null;
        this.distance = 0;
        this.name = null;
        this.rank = null;

    }

    getpCount() {

        var pcref = database.ref('playerCount');

        pcref.on("value", (data) => {

            playerCount = data.val();
        
        });

    }

    getfinPlayers() {

        database.ref('finishedPlayers').on("value", (data) => {

            finishedPlayer = data.val();

        });

    }

    static updatefinPlayers() {

        database.ref('/').update({

            finishedPlayers: finishedPlayer + 1

        });

        this.rank = this.rank + 1;

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