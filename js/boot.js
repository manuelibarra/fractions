var bootState = {
    preload: function () {
        // Load the image
        game.load.image('progressBar', 'img/progressBar.png');
        },
    create: function() {
        // Set some game settings
        game.stage.backgroundColor = '#cce5ff';
        game.physics.startSystem(Phaser.Physics.ARCADE);
        // Start the load state
        game.state.start('load');
    }
};