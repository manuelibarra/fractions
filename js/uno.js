var mapaUno={
    create: function() {
        
        this.levelSound = game.add.audio('slevel');
        
        //mensajetotal
        var styleplace = { font: "26px Arial", fill: "#400080", align: "center"};
        var stylelevel = { font: "32px Arial", fill: "#000000", align: "center"};

        //mapa y camino
        game.add.image(0, 0, 'mapa'); //añadimos imagen de fondo
        game.add.image(40, 515, 'road').scale.setTo(1,0.8); //el camino
        for(var p=0;p<=10;p++){//puntos de parada
            dot = game.add.image(20+p*81,508,'place'); //puntos
            dot.scale.setTo(1,0.7);//achatamos puntos
            if(p<10){
                game.add.text(38+p*81, 540, p+1 , styleplace); //escribimos numeros de nivel
            }else{
                game.add.text(30+p*81, 540, "Fin", styleplace); //Mensaje Fin!
            }
        }
        
        //barra y porcentaje avance
        if(unomov){
            for(var p=0;p<=unopos;p++){
                game.add.image(640+p*15, 10, 'block');
            }
            game.add.text(800, 10, ((unopos+1)*10)+"%", stylelevel);
        }else{
            for(var p=0;p<unopos;p++){
                game.add.image(640+p*15, 10, 'block');
            }
            game.add.text(800, 10, (unopos*10)+"%", stylelevel);
        }
        game.add.image(640, 10, 'progress'); //añadimos barra progreso
        
        //niño
        this.kid = game.add.sprite(26+unopos*81, 460, 'kid7'); //cargamos sprite niño
        var walk = this.kid.animations.add('walk'); //creamos animacion camina
        this.kid.animations.play('walk', 5, true); //iniciamos animacion hacia la derecha
        
        //home
        this.inicio = game.add.sprite(10, 10, 'home');
        this.inicio.inputEnabled = true;
        this.inicio.input.useHandCursor = true;
        this.inicio.events.onInputDown.add(this.verPrincipal,null);
        //menu
        this.omenu = game.add.sprite(70, 10, 'menu');
        this.omenu.inputEnabled = true;
        this.omenu.input.useHandCursor = true;
        this.omenu.events.onInputDown.add(this.verMenu, null);
        
        //niño posicion inicial
        if(unomov){ //Si hay que mover al niño
            ini = 26+unopos*81; //posicion inicial
            this.fin = ini+81; //posicion final
        }
        if(!unomov){ //si es la primera vez que se ingresa al menu
            this.cuenta = 0;
            this.espera = 120;
        }
        
    },

    update: function() {
        
        if(!unomov){
            this.cuenta = this.cuenta+1;
            if(this.cuenta==this.espera){
                this.cargaNivel();
            }
        }
        
        if(unomov){ //si hay que mover a uno
            this.kid.x +=1; //movemos            
            if(this.kid.x>=this.fin){ //si llega al fin, detenemos y aumentamos posicion
                unomov = false;
                unopos += 1;
                this.cargaNivel();
            }
        }
    },
    
    verPrincipal: function(){
        game.state.start('welcome');
    },
    
    cargaNivel: function(){
        this.levelSound.play();
        if(unopos<10){
            game.state.start('unouno');
        }else{
            game.state.start('unofinal');
        }
    },
    
    verMenu: function(){
        game.state.start('menu');
    }
    
};
/*********************************************** NIVEL 1 *******************************************/
var unoUno={
    create: function() {  
        
        //sonidos
        this.levelSound = game.add.audio('slevel');
        this.levelError = game.add.audio('serror');
        this.levelOk = game.add.audio('sok');
        
        //titulo nivel
        var style = { font: "32px Arial", fill: "#24248f", align: "center" };
        var styleplace = { font: "30px Arial", fill: "#fffff0", align: "center" };
        game.add.text(700, 10, "Nivel : "+(unopos+1), style);
        
        //variables de control
        this.clicked = false; //posicionar globo
        this.anima = false; //empezar animacion
        this.checkover = false; //verificar resultado
        this.resultado = false; //si ha llegado al lugar
        this.volar = false; //animacion volar
        this.volarc = 0; //contador volar
        this.volarf = 140; //contador volar fin
        
        //piso y camino
        for(var i=0;i<9;i++){
            game.add.image(i*100, 501, 'piso');
        }
        game.add.image(45, 515, 'road').scale.setTo(0.97,1); //el camino
        for(var p=0;p<=3;p++){//puntos de parada
            dot = game.add.image(66+p*260,526,'place'); //puntos
            dot.anchor.setTo(0.5, 0.5);
            game.add.text(56+p*260, 550, p , styleplace); 
        }
        
        //fracciones
        this.blocks = game.add.group(); //arreglo de fracciones
        this.numit = game.rnd.integerInRange(1, 3); //número de medios y enteros
        this.curitem = 0; //item actual
        this.bindex = []; //movimientos por item
        this.bangle = []; //angulo por item
        this.finalpos = 66; //posicion final
        for(var p=0;p<this.numit;p++){
            var img = game.rnd.integerInRange(1, 2); //mitad o entero
            
            var item = game.add.graphics(60, 485-p*80);
            item.anchor.setTo(0.5,0.5);
            item.scale.y *= -1;
            item.lineStyle(2, 0x31314e);
            item.beginFill(0xefeff5);
            
            if(img==1){
                item.drawCircle(0, 0, 80);
                
                this.finalpos += 260;
                this.bindex.push(260);
                this.bangle.push(360);

            }else{
                item.arc(0, 0, 40, game.math.degToRad(185), 0, true);
                
                this.finalpos += 130;
                this.bindex.push(130);
                this.bangle.push(185);
            }
            
            item.endFill();
            item.angle +=90;

            this.blocks.add(item);
        }
        this.nextend = 60+this.bindex[this.curitem]; //proximo final
        
        //niño
        this.kid = game.add.sprite(66, 465-this.numit*80, 'kid'); //cargamos sprite niño
        this.kid.anchor.setTo(0.5,0.5); //ancla del niño al centro
        this.kid.scale.setTo(0.8); //reducimos tamaño original
        var walk = this.kid.animations.add('walk',[0,1,2,3,4,5]); //cramos animacion camina
        this.kid.animations.play('walk', 5, true); //iniciamos animacion hacia la derecha
        
        //globo
        this.globo = game.add.sprite(this.game.world.centerX, 350, 'globo');
        this.globo.anchor.setTo(0.5,0.5);
        this.base = game.add.sprite(this.game.world.centerX, 472, 'base');
        this.base.anchor.setTo(0.5,0.5);
        
        //home
        this.inicio = game.add.sprite(10, 10, 'home');
        this.inicio.inputEnabled = true;
        this.inicio.input.useHandCursor = true;
        this.inicio.events.onInputDown.add(this.verPrincipal, null);
        //menu
        this.omenu = game.add.sprite(70, 10, 'menu');
        this.omenu.inputEnabled = true;
        this.omenu.input.useHandCursor = true;
        this.omenu.events.onInputDown.add(this.verMenu, null);
        //ayuda
        this.ayuda = game.add.sprite(130, 10, 'help');
        this.ayuda.inputEnabled = true;
        this.ayuda.input.useHandCursor = true;
        this.ayuda.events.onInputDown.add(this.verAyuda, {finalpos:this.finalpos});
    },

    update: function() {
        
        //psicionar globo
        if (game.input.activePointer.isDown && !this.volar){
            if(game.input.mousePointer.y>60){ //zona muerta (el menu)
                this.clicked = true;
                this.anima = true;
                this.levelSound.play();
            }
        }
        
        //si no se posiciono globo, seguir mouse
        if(!this.clicked){
            if(!this.volar){
                if (game.physics.arcade.distanceToPointer(this.globo, game.input.activePointer) > 8){
                    this.globo.x = game.input.mousePointer.x;
                    this.base.x = game.input.mousePointer.x;
                }
            }
            
        }
        
        //si empieza animacion
        if(this.anima){
            this.kid.x+=2; //movemos niño
            
            var avance = new Phaser.Rectangle(60, 526, this.kid.x-60, 2); //dibujamos linea
            game.debug.geom(avance,'#31314e');
            
            for(var i=0;i<this.numit;i++){ //movemos uno a uno a los elementos (enteros y medios)
                this.blocks.children[i].x +=2;
            }
            
            //this.blocks.children[this.curitem].angle +=2.77;
            this.bangle[this.curitem] -= 2.77;
            this.blocks.children[this.curitem].clear();
            this.blocks.children[this.curitem].lineStyle(2, 0x31314e);
            this.blocks.children[this.curitem].beginFill(0xefeff5);
            this.blocks.children[this.curitem].arc(0, 0, 40, game.math.degToRad(this.bangle[this.curitem]), 0, true);
            this.blocks.children[this.curitem].endFill();
            
            if(this.blocks.children[this.curitem].x>=this.nextend){
                this.blocks.children[this.curitem].visible = false;
                this.blocks.y += 80;
                this.kid.y += 80;
                this.curitem+=1;
                this.nextend += this.bindex[this.curitem];
            }
            
            if(this.kid.x>=this.finalpos){ //si llega al final
                this.anima= false;
                this.checkover = true;
            }
        }
        
        //verifica resultado
        if(this.checkover){
            this.kid.animations.stop();
            if(this.checkOverlap(this.base,this.kid)){
                this.resultado = true;
            }else{
                this.resultado = false;
            }
            this.volar = true;
            this.checkover = false;
        }
        
        //animacion volar
        if(this.volar){
            
            if(this.volarc==0){
                if(this.resultado){
                    this.levelOk.play();
                }else{
                    this.levelError.play();
                }
            }
            
            this.volarc += 1;
            this.globo.y -= 2;
            this.base.y -= 2;
            if(this.resultado){
                this.kid.y -=2;
            }
            
            if(this.volarc>=this.volarf){
                if(this.resultado){
                    unomov = true;
                }
                game.state.start('uno');
            }
        }
    },
    
    verPrincipal: function(){
        game.state.start('welcome');
    },
    
    verMenu: function(){
        game.state.start('menu');
    },
    
    verAyuda: function(){
        game.add.image(this.finalpos-50, 490,'hand');
    },
    
    checkOverlap: function (spriteA, spriteB) {
        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();

        return Phaser.Rectangle.intersects(boundsA, boundsB);
    }
    
};
/*****************ANIMACION LLEGA ESCUELA ********************/
var unoFinal={
    create: function() {  
        
        //titulo nivel
        var stylelevel = { font: "32px Arial", fill: "#24248f", align: "center" };
        var stylelevel = { font: "30px Arial", fill: "#fffff0", align: "center" };
        
        
        game.add.image(0, 0, 'final'); //añadimos imagen de fondo
        
        //barra y porcentaje avance
        for(var p=0;p<10;p++){
            game.add.image(640+p*15, 10, 'block');
        }
        game.add.text(800, 10, "100%", stylelevel);
        game.add.image(640, 10, 'progress'); //añadimos barra progreso
        
        //niño
        this.kid = game.add.sprite(0, -152 , 'kid'); //cargamos sprite niño
        this.kid.anchor.setTo(0.5,0.5); //ancla del niño al centro
        this.kid.scale.setTo(0.8); //reducimos tamaño original
        var walk = this.kid.animations.add('walk',[0,1,2,3,4,5]); //cramos animacion camina
        
        //globo
        this.globo = game.add.sprite(0, -260, 'globo');
        this.globo.anchor.setTo(0.5,0.5);
        this.base = game.add.sprite(0, -150, 'base');
        this.base.anchor.setTo(0.5,0.5);
        
        //home
        this.inicio = game.add.sprite(10, 10, 'home');
        this.inicio.inputEnabled = true;
        this.inicio.input.useHandCursor = true;
        this.inicio.events.onInputDown.add(this.verPrincipal, null);
        //menu
        this.omenu = game.add.sprite(70, 10, 'menu');
        this.omenu.inputEnabled = true;
        this.omenu.input.useHandCursor = true;
        this.omenu.events.onInputDown.add(this.verMenu, null);
    },

    update: function() {                
        if(this.kid.y>=460){
            this.kid.animations.play('walk', 5, true);
            if(this.kid.x<=700){
                this.kid.x += 2;
            }else{
                game.state.start('menu');
            }
        }else{
            this.globo.y += 2;
            this.base.y += 2;
            this.kid.y +=2;
            this.globo.x += 1;
            this.base.x += 1;
            this.kid.x +=1;
        }
    },
    
    verPrincipal: function(){
        game.state.start('welcome');
    },
    
    verMenu: function(){
        game.state.start('menu');
    }        
};
