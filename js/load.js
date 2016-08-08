var loadState = {
    preload: function () {
        // Add a 'loading...' label on the screen
        var loadingLabel = game.add.text(game.world.centerX, 150, 'Cargando...',
        { font: '30px Arial', fill: '#ffffff' });
        loadingLabel.anchor.setTo(0.5, 0.5);
        // Display the progress bar
        var progressBar = game.add.sprite(game.world.centerX, 200, 'progressBar');
        progressBar.anchor.setTo(0.5, 0.5);
        game.load.setPreloadSprite(progressBar);
        
        // Load all our assets
        game.load.image('bg', 'img/bg.jpg');
        
        game.load.spritesheet('kid', 'img/kid/frame.png', 90, 149, 12);
        game.load.spritesheet('kid7', 'img/kid7/frame.png', 42, 70, 5);
        
        game.load.image('globo', 'img/globo2.png');
        game.load.image('base', 'img/base2.png');
        
        game.load.image('road', 'img/road.png');
        game.load.image('place', 'img/place.png');
        
        game.load.image('progress', 'img/avance.png');
        game.load.image('block', 'img/bloque.png');
        game.load.image('umid', 'img/unmedio.png');
                
        game.load.image('opc1', 'img/menu1.png');
		game.load.image('opc2', 'img/menu2.png');
		game.load.image('opc3', 'img/menu3.png');
		game.load.image('opc4', 'img/menu4.png');
		game.load.image('piso', 'img/piso.png');
		game.load.image('home', 'img/home.png');
        
		game.load.image('mapa', 'img/map.jpg');
		game.load.image('final', 'img/final.jpg');
		game.load.image('menu', 'img/menu.png');
		game.load.image('help', 'img/help.png');
		game.load.image('hand', 'img/pointer.png');
        
        game.load.audio('sok', ['fx/ok.ogg', 'fx/ok.mp3']);
        game.load.audio('serror', ['fx/error.ogg', 'fx/error.mp3']);
        game.load.audio('slevel', ['fx/level.ogg', 'fx/level.mp3']);
        
    },
    create: function() {
        // Go to the menu state
        game.state.start('welcome');
    }
};