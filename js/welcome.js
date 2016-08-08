var welcomeState={
    create: function() {  
        
        this.bgi = game.add.image(0, 0, 'bg'); //asignamos ymagen de fondo y añadimos
        
        this.kid = game.add.sprite(100, 370, 'kid'); //cargamos sprite niño
        var kright = this.kid.animations.add('kright',[0,1,2,3,5]); //cramos animacion camina derecha (frames 0 a 5)
        var kleft = this.kid.animations.add('kleft',[6,7,8,9,10,11]); //cramos animacion camina izquiera (frames 6 a 11)
        this.kid.animations.play('kright', 5, true); //iniciamos animacion hacia la derecha
                
		game.input.onDown.add(this.verMenu, this); //al hacer clic en cualquier parte mostramos el menu principal
        
        //al pasar mouse mostramos manito
        this.bgi.inputEnabled = true;
        this.bgi.input.useHandCursor = true;
        
        //Contador y maximo niño corriendo
        this.dir = 'd'; //direccion
        this.max = 460; //posicion maxima
        this.ind = 10; //posicion minima
        
        this.levelSound = game.add.audio('slevel');
    },

    update: function() {
        if(this.dir=='d'){
            if(this.kid.x<= this.max){ //mientras sea menor a maximo, movemos niño
               this.kid.x += 2;
            }else{ //inverrtimos direccion
               this.dir='i';
            this.kid.animations.play('kleft', 5, true);
            }
        } else if(this.dir=='i'){
            if(this.kid.x>= this.ind){ //mientras sea mayor a minimo, movemos niño
               this.kid.x -= 2;
            }else{ //invertimos direccion
               this.dir='d';
                this.kid.animations.play('kright', 5, true);
            }
        }
    },
    
    verMenu: function(){
        this.levelSound.play();
        game.state.start('menu'); //cambiamos estado a menu
    }

};

