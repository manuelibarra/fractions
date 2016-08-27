var bootState = {
    preload: function () {
        //Progress bar image
        game.load.image('progressBar', 'resource/img/global/pgbar.png');
        //loading flags (manually)
        game.load.image('flag_BR', 'resource/img/flag/BRAZ.jpg');
        game.load.image('flag_PE', 'resource/img/flag/PERU.jpg');
    },
    create: function() {
        //game settings
        game.stage.backgroundColor = '#cce5ff';
        game.physics.startSystem(Phaser.Physics.ARCADE);
        var style = { font: "32px Arial", fill: "#00804d", align: "center" };
        
        //generating language selection
         //es_PE
        var title1 = game.add.text(this.game.world.centerX-10, 100, "FRACCIONES", style);
        title1.anchor.setTo(1, 0.5);
        var flag1 = game.add.sprite(this.game.world.centerX, 100, 'flag_PE');       
        flag1.anchor.setTo(0, 0.5);
        flag1.inputEnabled = true;
        flag1.input.useHandCursor = true;
        flag1.events.onInputDown.add(this.setLang,{lang:"es_PE"});
         //pt_BR
        var title2 = game.add.text(this.game.world.centerX-10, 300, "FRACÇÕES", style);
        title2.anchor.setTo(1, 0.5);
        var flag2 = game.add.sprite(this.game.world.centerX, 300, 'flag_BR');       
        flag2.anchor.setTo(0, 0.5);
        flag2.inputEnabled = true;
        flag2.input.useHandCursor = true;
        flag2.events.onInputDown.add(this.setLang,{lang:"pt_BR"});
    },
    
    setLang: function(){
        //set language
        lang = this.lang;
        //start resource loading
        game.state.start('load');
    },
};

var loadState = {
    preload: function () {
        // Displaying the progress bar
        var progressBar = game.add.sprite(game.world.centerX, game.world.centerY, 'progressBar');
        progressBar.anchor.setTo(0.5, 0.5);
        game.load.setPreloadSprite(progressBar);
        
        // Loading dictionary
        game.load.json('dictionary', 'resource/lang/'+lang+'.json');
        
        // Loading global assets (sprites and images)
        var baseimg = 'resource/img/global/';
        
        game.load.image('bgimage', baseimg+'bg.jpg');
        game.load.image('bgmap', baseimg+'bg_map.jpg');
        game.load.image('cloud', baseimg+'cloud.png');
        game.load.image('floor', baseimg+'floor.png');
        game.load.image('road', baseimg+'road.png');
        game.load.image('place', baseimg+'place.png');
        game.load.image('pointer', baseimg+'pointer.png');
        
         //games list buttons
        game.load.image('game1', baseimg+'game/one.png');
		game.load.image('game2', baseimg+'game/two.png');
		game.load.image('game3', baseimg+'game/three.png');
		game.load.image('game4', baseimg+'game/four.png');
         //header menu
        game.load.image('back', baseimg+'menu/back.png');
        game.load.image('home', baseimg+'menu/home.png');
        game.load.image('info', baseimg+'menu/info.png');
        game.load.image('world', baseimg+'menu/language.png');
        game.load.image('list', baseimg+'menu/list.png');
        game.load.image('help', baseimg+'menu/view.png');
        game.load.image('pgbar', baseimg+'menu/progressBar.png');
        game.load.image('block', baseimg+'menu/block.png');
         //operators
		game.load.image('add', baseimg+'operator/add.png');
		game.load.image('subtract', baseimg+'operator/subtract.png');
		game.load.image('separator', baseimg+'separator.png');
        
        // Loading assets based on lang
        var basesrc = 'resource/img/'+lang+'/';
        
        game.load.spritesheet('kid', basesrc+'kid/frame.png', 90, 149, 12);
        game.load.image('balloon', basesrc+'/airballoon_upper.png');
        game.load.image('balloon_basket', basesrc+'/airballoon_base.png');
        game.load.image('house', basesrc+'/house.png');
        game.load.image('school', basesrc+'/school.png');
        game.load.image('tree1', basesrc+'/tree.png');
        game.load.image('tree2', basesrc+'/tree2.png');
                
        // Loadgind Sound Effects
        game.load.audio('sound_ok', ['resource/fx/ok.ogg', 'resource/fx/ok.mp3']);
        game.load.audio('sound_error', ['resource/fx/error.ogg', 'resource/fx/error.mp3']);
        game.load.audio('sound_beep', ['resource/fx/beep.ogg', 'resource/fx/beep.mp3']);
        
    },
    create: function() {
        // Go to the menu state
        game.state.start('menu');
    }
};