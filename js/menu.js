
var menuState={
    create: function() {
        
        var levelSound = game.add.audio('slevel');
        
        //titulo
        var style = { font: "32px Arial", fill: "#00804d", align: "center" };
        var title = game.add.text(this.game.world.centerX, 80, "SELECCIONE UNA OPCION", style);
        title.anchor.setTo(0.5,0.5);
        //botones
        this.menu1 = game.add.sprite(280, 140, 'opc1');
        this.menu2 = game.add.sprite(490, 140, 'opc2');
        this.menu3 = game.add.sprite(280, 300, 'opc3');
        this.menu4 = game.add.sprite(490, 300, 'opc4');
        this.inicio = game.add.sprite(10, 10, 'home');
        
        //acciones para los botones
        this.menu1.inputEnabled = true;
        this.menu1.input.useHandCursor = true;
        this.menu1.events.onInputDown.add(this.verJuego,{num:1, levelSound:levelSound});
        
        this.menu2.inputEnabled = true;
        this.menu2.input.useHandCursor = true;
        this.menu2.events.onInputDown.add(this.verJuego,{num:2, levelSound:levelSound});
        
        this.menu3.inputEnabled = true;
        this.menu3.input.useHandCursor = true;
        this.menu3.events.onInputDown.add(this.verJuego,{num:3, levelSound:levelSound});
        
        this.menu4.inputEnabled = true;
        this.menu4.input.useHandCursor = true;
        this.menu4.events.onInputDown.add(this.verJuego,{num:4, levelSound:levelSound});
        
        this.inicio.inputEnabled = true;
        this.inicio.input.useHandCursor = true;
        this.inicio.events.onInputDown.add(this.verPrincipal,null);
        
        //piso
        for(var i=0;i<9;i++){
            game.add.image(i*100, 501, 'piso');
        }
        
    },

    update: function() {  

    },
    
    verJuego: function(){
        if(this.num==1){
            unopos = 0; //Posicion del niño mapa 1
            unomov = false; //Si mover o no
            this.levelSound.play();
            game.state.start('uno');
        }else if(this.num==2){
            dospos = 0; //Posicion del niño mapa 1
            dosmov = false; //Si mover o no
            this.levelSound.play();
            game.state.start('dos');
        }
            
    },
    
    verPrincipal: function(){
        game.state.start('welcome');
    }
    
};

