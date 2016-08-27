
var menuState={
    create: function() {
        
        // Creating sound variable
        var beepSound = game.add.audio('sound_beep');
        
        // Reading dictionary
        var words = game.cache.getJSON('dictionary');
        
        // Setting title
        var style = { font: "32px Arial", fill: "#00804d", align: "center" };
        var title = game.add.text(this.game.world.centerX, 80, words.menu_title, style);
        title.anchor.setTo(0.5,0.5);
        
        // Menu options
          // Return to language button
        this.world = game.add.sprite(10, 10, 'world'); 
        this.world.inputEnabled = true;
        this.world.input.useHandCursor = true;
        this.world.events.onInputDown.add(this.loadBoot, {beep: beepSound});
        
        // List buttons
        this.menu1 = game.add.sprite(280, 140, 'game1');
        this.menu2 = game.add.sprite(490, 140, 'game2');
        this.menu3 = game.add.sprite(280, 300, 'game3');
        this.menu4 = game.add.sprite(490, 300, 'game4');
        
        // Buttons actions
        this.menu1.inputEnabled = true;
        this.menu1.input.useHandCursor = true;
        this.menu1.events.onInputDown.add(this.loadGame,{num:1, beep: beepSound, shape : "Circle", label : true});
        
        this.menu2.inputEnabled = true;
        this.menu2.input.useHandCursor = true;
        this.menu2.events.onInputDown.add(this.loadGame,{num:2, beep: beepSound, shape : "Circle", label : false});
        
        this.menu3.inputEnabled = true;
        this.menu3.input.useHandCursor = true;
        this.menu3.events.onInputDown.add(this.loadGame,{num:3, beep: beepSound, shape : "Circle", label : true});
        
        this.menu4.inputEnabled = true;
        this.menu4.input.useHandCursor = true;
        this.menu4.events.onInputDown.add(this.loadGame,{num:4, beep: beepSound, shape : "Circle", label : false});
                
        // Floor
        for(var i=0;i<9;i++){
            game.add.image(i*100, 501, 'floor');
        }
        
    },
    
    loadGame: function(){
        this.beep.play();
        if( (this.num==1 || this.num==2) && this.shape=="Circle"){
            oneShape = this.shape;
            oneLabel = this.label;
            oneType = "A";
            game.state.start('menuCOne');
        }
        if( (this.num==3 || this.num==4) && this.shape=="Circle"){
            oneShape = this.shape;
            oneLabel = this.label;
            oneType = "B";
            game.state.start('menuCOne');
        }
    },
    
    loadBoot: function(){
        this.beep.play();
        game.state.start('boot');
    }
    
};

