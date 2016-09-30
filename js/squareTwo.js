// Fractions Comparison Square states
/****************************** MENU ****************************/
var menuSquareTwo={
    create: function() {
        
        // Creating sound variable
        var beepSound = game.add.audio('sound_beep');
        
        // Reading dictionary
        var words = game.cache.getJSON('dictionary');
                
        // Menu options
          // Return to language button
        this.world = game.add.sprite(10, 10, 'world'); 
        this.world.inputEnabled = true;
        this.world.input.useHandCursor = true;
        this.world.events.onInputDown.add(this.loadBoot, {beep: beepSound});
          // Return to menu button
        this.list = game.add.sprite(60, 10, 'list'); 
        this.list.inputEnabled = true;
        this.list.input.useHandCursor = true;
        this.list.events.onInputDown.add(this.viewMenu, {beep: beepSound});
        
        // Setting title
        var style = { font: '28px Arial', fill: '#00804d', align: 'center' };
        var title = game.add.text(this.game.world.centerX, 70, words.game_menu_title, style);
        title.anchor.setTo(0.5,0.5);
        
        //Showing Games and Levels
        var maxHeight = 120; //Max height of a stair
        var stairHeight = 29; //height growth of a stair
        var stairWidth = 80; //Width of a stair
        var startStair = 240;
        var startSymbol = 150;
        var startSquare = (startSymbol/2)+startStair+stairWidth*5;
        
        var bplus = game.add.sprite(startSymbol, 300, 'equal');
            bplus.frame = 0;
            bplus.scale.setTo(0.7);
            bplus.anchor.setTo(0.5,0.5);
            
         //First stairs, 6 levels

        var stairsPlus = [];
        for(var i=1;i<=6;i++){
            //stair
            var x1 = startStair+(stairWidth*(i-1));
            var y1 = 150+maxHeight-i*stairHeight;
            var x2 = stairWidth;//x1 + 40;
            var y2 = stairHeight*i;//y1 + 24;
            
            stairsPlus[i] = game.add.graphics(0, 0);
            stairsPlus[i].lineStyle(1, 0xFFFFFF, 1);
            stairsPlus[i].beginFill(0x99b3ff);
            stairsPlus[i].drawRect(x1, y1, x2, y2);
            stairsPlus[i].endFill();
            
            //event
            stairsPlus[i].inputEnabled = true;
            stairsPlus[i].input.useHandCursor = true;
            stairsPlus[i].events.onInputDown.add(this.loadMap, {beep: beepSound, difficulty: i, type: 'A' });
            stairsPlus[i].events.onInputOver.add(function (item) { item.alpha=0.5; }, this);
            stairsPlus[i].events.onInputOut.add(function (item) { item.alpha=1; }, this);
            //label
            var xl = x1+stairWidth/2; //x label
            var yl = y1+(stairHeight*i)/2; //y label
            var label = game.add.text(xl, yl, i, { font: '25px Arial', fill: '#ffffff', align: 'center' });
                label.anchor.setTo(0.5, 0.4);
        }
        
        //Second stairs, 6 levels
        /*var rminus = game.add.sprite(startSymbol, 390, 'subtract');
            rminus.frame = 5;
            rminus.scale.setTo(0.7);
            rminus.anchor.setTo(0.5,0.5);*/
        
        var stairsMinus = [];
        for(var i=1;i<=6;i++){
            //stair
            var x1 = startStair+(stairWidth*(i-1));
            var y1 = 340+maxHeight-i*stairHeight;
            var x2 = stairWidth;//x1 + 40;
            var y2 = stairHeight*i;//y1 + 24;
            
            stairsMinus[i] = game.add.graphics(0, 0);
            stairsMinus[i].lineStyle(1, 0xFFFFFF, 1);
            stairsMinus[i].beginFill(0xff6666);
            stairsMinus[i].drawRect(x1, y1, x2, y2);
            stairsMinus[i].endFill();
            
            //event
            stairsMinus[i].inputEnabled = true;
            stairsMinus[i].input.useHandCursor = true;
            stairsMinus[i].events.onInputDown.add(this.loadMap, {beep: beepSound, difficulty: i, type: 'B' });
            stairsMinus[i].events.onInputOver.add(function (item) { item.alpha=0.5; }, this);
            stairsMinus[i].events.onInputOut.add(function (item) { item.alpha=1; }, this);
            //label
            var xl = x1+stairWidth/2; //x label
            var yl = y1+(stairHeight*i)/2; //y label
            var label = game.add.text(xl, yl, i, { font: '25px Arial', fill: '#ffffff', align: 'center' });
                label.anchor.setTo(0.5, 0.4);
        } 

    },
    
    //Navigation functions
    loadBoot: function(){
        this.beep.play();
        game.state.start('boot');
    },
    viewMenu: function(){
        this.beep.play();
        game.state.start('menu');
    },
        
    //MapLoading function
    loadMap: function(){
        this.beep.play();
        twoPosition = 0; //Map position
        twoMove = true; //Move no next point
        twoDifficulty  = this.difficulty; //Number of difficulty (1 to 5)
        twoType = this.type; //Operator of game
        if(twoPosition<5){
            game.state.start('mapSTwo');
        }else{
            game.state.start('unofinal');
        }
    }
    
};

/****************************** MAP ****************************/
var mapSquareTwo={
    create: function() {
        
        // Creating sound variable
        this.beepSound = game.add.audio('sound_beep');
        
        // Reading dictionary
        var words = game.cache.getJSON('dictionary');

        // Background
        game.add.image(0, 0, 'bgmap');
        
        // Menu options
          // Return to language selection button
        this.world = game.add.sprite(10, 10, 'world'); 
        this.world.inputEnabled = true;
        this.world.input.useHandCursor = true;
        this.world.events.onInputDown.add(this.loadBoot, {beep: this.beepSound});
          // Return to menu button
        this.list = game.add.sprite(60, 10, 'list'); 
        this.list.inputEnabled = true;
        this.list.input.useHandCursor = true;
        this.list.events.onInputDown.add(this.viewMenu, {beep: this.beepSound});
          // Back button
        this.back = game.add.sprite(110, 10, 'back'); 
        this.back.inputEnabled = true;
        this.back.input.useHandCursor = true;
        this.back.events.onInputDown.add(this.viewMenuSquareTwo, {beep: this.beepSound});
        
        // Styles for labels
        var stylePlace = { font: '26px Arial', fill: '#400080', align: 'center'};
        var styleMenu = { font: '30px Arial', fill: '#000000', align: 'center'};
        
        // Progress bar
        var percentText = twoPosition*20;
        var percentBlocks = twoPosition;
        for(var p=1;p<=percentBlocks;p++){
            var block = game.add.image(680+(p-1)*30, 10, 'block');
            block.scale.setTo(2, 1); //Scaling to double width
        }
        game.add.text(840, 10, percentText+'%', styleMenu);
        game.add.text(670, 10, words.difficulty + ' ' + twoDifficulty, styleMenu).anchor.setTo(1,0);
        game.add.image(680, 10, 'pgbar');
        
        // Map
         //House
        var house = game.add.image(10, 400, 'house');
            house.scale.setTo(0.5);
         //School
        var school = game.add.image(730, 50, 'school');
            school.scale.setTo(0.5);
         //Road
        this.points = {
        'x': [ 120, 320, 120, 530, 520, 800, 780 ],
        'y': [ 545, 450, 180, 160, 460, 400, 220 ]
        };
        this.road = this.add.bitmapData(this.game.width, this.game.height);
        this.road.addToWorld();
        this.road.clear();

        var x = 1 / game.width;
        for (var i = 0; i <= 1; i += x){
            var px = this.math.catmullRomInterpolation(this.points.x, i)-7;
            var py = this.math.catmullRomInterpolation(this.points.y, i)-7;

            this.road.rect(px, py, 14, 14, 'rgba(204, 153, 102, 1)');
        }

        for (var p = 0; p < this.points.x.length; p++){
            game.add.image(this.points.x[p]-3, this.points.y[p]-3, 'place').anchor.setTo(0.5, 0.5);
            if(p>0 && p<this.points.x.length-1){
                game.add.text(this.points.x[p]-3, this.points.y[p], p, stylePlace).anchor.setTo(0.5, 0.5);
            }
        }
        
        //Trees
        var trees = [];
        trees[0] = game.add.image(90, 380, 'tree1');
        trees[1] = game.add.image(290, 300, 'tree2');
        trees[2] = game.add.image(420, 480, 'tree1');
        trees[3] = game.add.image(660, 200, 'tree1');
        trees[4] = game.add.image(800, 550, 'tree2');
        for (var i = 0; i <= 4; i ++){
            trees[i].anchor.setTo(0.5,1);
            trees[i].scale.setTo(0.3);
        }
        
        // Kid start position
        this.kid = game.add.sprite(this.points.x[twoPosition], this.points.y[twoPosition], 'kid');
        this.kid.anchor.setTo(0.5,1);
        this.kid.scale.setTo(0.5);
        game.physics.arcade.enable(this.kid);
        var walk = this.kid.animations.add('walk',[0,1,2,3,4,5]);
        this.kid.animations.play('walk', 6, true);
        
        // Delay to next level
        this.count = 0;
        this.wait = 120;

    },

    update: function() {
        
        // Wait 2 seconds before moving or staring a game
        this.count ++;
        if(this.count<=this.wait) return;
        
        // If movement is stopped or position is 6 (final), load game
        if(twoPosition==6){
            twoMove = false;
        }
        if(!twoMove){
            this.loadGame();
        }
        
        // If momevent is enabled, move to next point from actual
        if(twoMove){
            game.physics.arcade.moveToXY(
                this.kid, 
                this.points.x[twoPosition+1],
                this.points.y[twoPosition+1],
                100
            );
            
            // I tractor reached the end, stop movement
            if(Math.ceil(this.kid.x)==this.points.x[twoPosition+1] || Math.ceil(this.kid.y)==this.points.y[twoPosition+1]){
                twoMove=false;
                twoPosition += 1; //Update position
            }
        }
    },
    
    //Navigation functions
    loadBoot: function(){
        this.beep.play();
        game.state.start('boot');
    },
    viewMenu: function(){
        this.beep.play();
        game.state.start('menu');
    },
    viewMenuSquareTwo: function(){
        this.beep.play();
        game.state.start('menuSTwo');
    },
        
    //MapLoading function
    loadGame: function(){
        this.beepSound.play();
        if(twoPosition<6){
            game.state.start('gameSTwo');
        }else{
            game.state.start('endSTwo');
        }
    }
};

/****************************** GAME ****************************/
var gameSquareTwo={
    create: function() {  
        this.points = [2,4,6,8,9,10,12,14,15,16,18,20];
        
        // Creating sound variable
        this.beepSound = game.add.audio('sound_beep');
        this.okSound = game.add.audio('sound_ok');
        this.errorSound = game.add.audio('sound_error');
        
        // Reading dictionary
        var words = game.cache.getJSON('dictionary');

        // Background
        game.add.image(0, 0, 'bgimage');
                
        // Styles for labels
        var stylePlace = { font: '26px Arial', fill: '#400080', align: 'center'};
        var styleLabel = { font: '26px Arial', fill: '#000080', align: 'center'};
        var styleFraction = { font: '20px Arial', fill: '#000080', align: 'center'};
        var styleMenu = { font: '30px Arial', fill: '#000000', align: 'center'};
        
        //Floor
        for(var i=0;i<9;i++){
            game.add.image(i*100, 501, 'floor');
        }
             
        //kid
        this.kid = game.add.sprite(100, 470, 'kid');
        this.kid.anchor.setTo(0.5, 0.5);
        this.kid.scale.setTo(0.8);
        this.kid.animations.add('right',[0,1,2,3,4,5]);
        this.kid.animations.add('left',[6,7,8,9,10,11]);
        this.kidDirection = 'right';
        this.kid.animations.play('right', 6, true);
        
        //Control variables
        this.sizeA = 0; //Size of first block
        this.sizeB = 0; //Size of second block
        this.blockA = 0; //Number of shadowed blocks for a
        this.blockB = 0; //Number of shadowed blocks for b
        this.valueA = 0; //Number of clicked blocks for a
        this.valueB = 0; //Number of clicked blocks for b
                
        this.clickA = false; //If block A is clicked
        this.clickB = false; //If block B is clicked
        this.animateA = false; //Animate A selected blocks to position
        this.animateB = false; //Animate B selected blocks to position
        this.result = false; //Game is correct
        this.animate = false; //Final animation sequence
        
         //generator
        this.sizeA = this.points[game.rnd.integerInRange(twoDifficulty,2*twoDifficulty-1)];
        this.sizeB =  this.getRndDivisor(this.sizeA);
        this.blockB = game.rnd.integerInRange(1, this.sizeB);
        this.blockA = (this.sizeA/this.sizeB) * this.blockB;
        
        //Blocks and fractions group
        this.blocksA = game.add.group(); //Main blocks A
        this.blocksB = game.add.group(); //Main blocks B
        this.auxblqA = game.add.group(); //Auxiliar blocks A
        this.auxblqB = game.add.group(); //Auxiliar blocks B
        
         //Creating blocks
        var xA=230, yA=90;
        var width = 400;
        var height = 50;
        var xB=xA, yB=yA+3*height+30;
                
        //equal sign
        this.equals = game.add.sprite(xA + width + 90, yA + 1.8*height, 'equal');
        this.equals.alpha = 0;
        
        //Copy for global
        this.xA = xA;
        this.yA = yA;
        this.xB = xB;
        this.yB = yB;
        this.blockW = width;
        this.blockH = height;
        
        //Blocks A
        var widthA = width/this.sizeA;
        var lineColor = 0x1e2f2f;
        var fillColor = 0x83afaf;
        var fillColorS = 0xe0ebeb;
        
        this.extraA = 0;
        if(twoType=='B'){
            this.extraA = game.rnd.integerInRange(0,this.sizeA-this.blockA);
        }
        
        for(var i=0; i<this.sizeA; i++){
            //console.log("Block A"+i+": x:"+(xA+i*widthA)+", y:"+yA);
                        
            var block = game.add.graphics(xA+i*widthA, yA);
                block.anchor.setTo(0.5, 0.5);
                block.lineStyle(2, lineColor);
                block.beginFill(fillColor);
                block.drawRect(0, 0, widthA, height);                
                block.inputEnabled = true;
                block.input.useHandCursor = true;
                block.endFill();

            this.blocksA.add(block);
                        
            if(i<this.blockA){
                var block = game.add.graphics(xA+(this.extraA+i)*widthA, yA+height+10);
                    block.anchor.setTo(0.5, 0.5);
                    block.lineStyle(1, lineColor);
                    block.beginFill(fillColorS);
                    block.drawRect(0, 0, widthA, height);
                    block.alpha = 0.3;
                this.auxblqA.add(block);
            }
            
        }
        
        //label block A
        var labelX = xA+width+30;
        var labelY = yA+height/2;
        this.labelA = game.add.text(labelX, labelY, this.sizeA , styleFraction);
        this.labelA.anchor.setTo(0.5, 0.41);
        
        //label fraction
        labelX = xA+(this.extraA+this.blockA)*widthA+40;
        labelY = yA+height+34;
        this.fractionA = game.add.text(labelX, labelY, "0\n"+this.sizeA , styleFraction);
        this.fractionA.anchor.setTo(0.5, 0.41);
        this.separatorA = game.add.sprite(labelX, labelY, 'separator');
        this.separatorA.anchor.setTo(0.5, 0.5);
        
        this.fractionA.alpha = 0;
        this.separatorA.alpha = 0;
        
        //Blocks B
        var widthB = width/this.sizeB;
        lineColor = 0x260d0d;
        fillColor = 0xd27979;
        fillColorS = 0xf2d9d9;
       
        this.extraB = 0;
        if(twoType=='B'){
            this.extraB = game.rnd.integerInRange(0,this.sizeB-this.blockB);
        }
        
        for(var i=0; i<this.sizeB; i++){
            //console.log("Block A"+i+": x:"+(xA+i*widthA)+", y:"+yA);
                        
            var block = game.add.graphics(xB+i*widthB, yB);
                block.anchor.setTo(0.5, 0.5);
                block.lineStyle(2, lineColor);
                block.beginFill(fillColor);
                block.drawRect(0, 0, widthB, height);
                block.inputEnabled = true;
                block.input.useHandCursor = true;
                block.endFill();

            this.blocksB.add(block);
                        
            if(i<this.blockB){
                var block = game.add.graphics(xB+(this.extraB+i)*widthB, yB+height+10);
                    block.anchor.setTo(0.5, 0.5);
                    block.lineStyle(1, lineColor);
                    block.beginFill(fillColorS);
                    block.drawRect(0, 0, widthB, height);
                    block.alpha = 0.3;
                this.auxblqB.add(block);
            }
            
        }
        
        //label block B
        labelX = xA+width+30;
        labelY = yB+height/2;
        this.labelB = game.add.text(labelX, labelY, this.sizeB , styleFraction);
        this.labelB.anchor.setTo(0.5, 0.41);    
                
        //label fraction
        labelX = xA+(this.extraB+this.blockB)*widthB+40;
        labelY = yB+height+34;
        this.fractionB = game.add.text(labelX, labelY, "0\n"+this.sizeB , styleFraction);
        this.fractionB.anchor.setTo(0.5, 0.41);
        this.separatorB = game.add.sprite(labelX, labelY, 'separator');
        this.separatorB.anchor.setTo(0.5, 0.5);
        
        this.fractionB.alpha = 0;
        this.separatorB.alpha = 0;
        
        // Menu options
          // Return to language selection button
        this.world = game.add.sprite(10, 10, 'world'); 
        this.world.inputEnabled = true;
        this.world.input.useHandCursor = true;
        this.world.events.onInputDown.add(this.loadBoot, {beep: this.beepSound});
          // Return to menu button
        this.list = game.add.sprite(60, 10, 'list'); 
        this.list.inputEnabled = true;
        this.list.input.useHandCursor = true;
        this.list.events.onInputDown.add(this.viewMenu, {beep: this.beepSound});
          // Back button
        this.back = game.add.sprite(110, 10, 'back'); 
        this.back.inputEnabled = true;
        this.back.input.useHandCursor = true;
        this.back.events.onInputDown.add(this.viewMenuSquareTwo, {beep: this.beepSound});
         // Help button
        this.help = game.add.sprite(160, 10, 'help');
        this.help.inputEnabled = true;
        this.help.input.useHandCursor = true;
        this.help.events.onInputDown.add(this.viewHelp, {beep: this.beepSound, endPosition: this.endPosition});
        
        this.counter = 0; //Final counter
        this.endCounter = 300; //End final counter
    },

    update: function() {
        
        if(!(this.clickedFirst && this.clickedSecond) && !this.animate){
            if(this.direction=='right'){
                this.kid.x += 2;
                if(this.kid.x>=800){
                    this.direction='left';
                    this.kid.animations.play('left', 6, true);
                }
            }else{
                this.kid.x -= 2;
                if(this.kid.x<=100){
                    this.direction='right';
                    this.kid.animations.play('right', 6, true);
                }
            }
        }
        
        if(!this.clickA || !this.clickB){
            var xPos = game.input.mousePointer.x;
            var yPos = game.input.mousePointer.y;
            //First blocks selection
            if(!this.clickA && !this.animateA){
                if(xPos>this.xA && xPos<(this.xA+this.blockW) && yPos>this.yA && yPos<(this.yA+this.blockH)){
                    for(var i=this.extraA;i<(this.extraA+this.blockA);i++){
                        var xMin = this.blocksA.children[i].x;
                        var xMax = xMin+this.blockW;
                        if(xMax<xPos){
                            this.blocksA.children[i].alpha = 0.5;
                        }else if(xMax>xPos && xMin<xPos){
                            this.blocksA.children[i].alpha = 0.5;
                            this.valueA = i+1-this.extraA;
                        }else{
                            this.blocksA.children[i].alpha = 1;
                        }
                    }
                }else{
                    for(var i=0;i<this.sizeA;i++){
                        this.blocksA.children[i].alpha = 1;
                    }
                }
            }
            //Second blocks selection
            if(!this.clickB && !this.animateB){
                if(xPos>this.xB && xPos<(this.xB+this.blockW) && yPos>this.yB && yPos<(this.yB+this.blockH)){
                    for(var i=this.extraB;i<(this.extraB+this.blockB);i++){
                        var xMin = this.blocksB.children[i].x;
                        var xMax = xMin+this.blockW;
                        if(xMax<xPos){
                            this.blocksB.children[i].alpha = 0.5;
                        }else if(xMax>xPos && xMin<xPos){
                            this.blocksB.children[i].alpha = 0.5;
                            this.valueB = i+1-this.extraB;
                        }else{
                            this.blocksB.children[i].alpha = 1;
                        }
                    }
                }else{
                    for(var i=0;i<this.sizeB;i++){
                        this.blocksB.children[i].alpha = 1;
                    }
                }
            }
            
        }
        
        if(game.input.activePointer.isDown && (!this.clickA || !this.clickB)){
            var xPos = game.input.mousePointer.x;
            var yPos = game.input.mousePointer.y;
            //First blocks selection
            if(!this.clickA){
                if(xPos>this.xA && xPos<(this.xA+this.blockW) && yPos>this.yA && yPos<(this.yA+this.blockH)){
                    this.animateA = true;
                    this.labelA.alpha = 0;
                    this.beepSound.play();
                }
            }
            //Second blocks selection
            if(!this.clickB){
                if(xPos>this.xB && xPos<(this.xB+this.blockW) && yPos>this.yB && yPos<(this.yB+this.blockH)){
                    this.animateB = true;
                    this.labelB.alpha = 0;
                    this.beepSound.play();
                }
            }
        }
        
        if(this.animateA){ //If clicked A only, animate
            console.log("i:"+this.extraA+" -> "+this.valueA);
            for(var i=this.extraA;i<(this.extraA+this.valueA);i++){
                this.blocksA.children[i].y +=2;
            }
            if(this.blocksA.children[this.extraA].y>=this.auxblqA.children[0].y){
                this.animateA = false;
                this.clickA = true;
                this.fractionA.alpha = 1;
                this.fractionA.setText(this.valueA+"\n"+this.sizeA);
                this.separatorA.alpha = 1;
            }
        }
        if(this.animateB){ //If clicked B only, animate
            console.log("i:"+this.extraB+" -> "+this.valueB);
            for(var i=this.extraB;i<(this.extraB+this.valueB);i++){
                this.blocksB.children[i].y +=2;
            }
            if(this.blocksB.children[this.extraB].y>=this.auxblqB.children[0].y){
                this.animateB = false;
                this.clickB = true;
                this.fractionB.alpha = 1;
                this.fractionB.setText(this.valueB+"\n"+this.sizeB);
                this.separatorB.alpha = 1;
            }
        }
        
        if(this.clickA && this.clickB && !this.animate){
            //Check result
            if((this.valueA/this.sizeA) == (this.valueB/this.sizeB)){
                this.result = true;
                twoMove = true;
                this.okSound.play();
                this.equals.alpha = 1;
            }else{
                this.result = false;
                twoMove = false;
                this.errorSound.play();
                this.kid.animations.stop();
            }
            this.animate = true;
        }
        
        if(this.animate){
            this.counter++;
            if(this.counter>this.endCounter){
                game.state.start('mapSTwo');
            }
        }
    },
  
    //Navigation functions
    loadBoot: function(){
        this.beep.play();
        game.state.start('boot');
    },
    viewMenu: function(){
        this.beep.play();
        game.state.start('menu');
    },
    viewMenuSquareTwo: function(){
        this.beep.play();
        game.state.start('menuSTwo');
    },
    viewHelp: function(){
        var pointer = game.add.image(this.endPosition, 490, 'pointer');
        pointer.anchor.setTo(0.5, 0);
        pointer.alpha = 0.8;
    },
    //Calculation help functions
    getRndDivisor: function(number){ //Get random divisor for a number
        var div = []; //Divisors found
        var p = 0; //current dividor index
        for(var i=2; i<number;i++){
            if(number%i==0){
                div[p] = i;
                p++;
            }
        }
        var x = game.rnd.integerInRange(0,p-1);
        return div[x];
    }
    
};
/****************************** END ****************************/
var endSquareTwo={
    create: function() {  
        
        // Creating sound variable
        this.beepSound = game.add.audio('sound_beep');
        this.okSound = game.add.audio('sound_ok');
        this.errorSound = game.add.audio('sound_error');
        
        // Reading dictionary
        var words = game.cache.getJSON('dictionary');

        // Background
        game.add.image(0, 0, 'bgimage');
                
        // Styles for labels
        var stylePlace = { font: '26px Arial', fill: '#400080', align: 'center'};
        var styleLabel = { font: '26px Arial', fill: '#000080', align: 'center'};
        var styleMenu = { font: '30px Arial', fill: '#000000', align: 'center'};
        
        //Floor
        for(var i=0;i<9;i++){
            game.add.image(i*100, 501, 'floor');
        }
        
        // Progress bar
        for(var p=1;p<=5;p++){
            var block = game.add.image(680+(p-1)*30, 10, 'block');
            block.scale.setTo(2, 1); //Scaling to double width
        }
        game.add.text(830, 10, '100%', styleMenu);
        game.add.text(670, 10, words.difficulty + ' ' + twoDifficulty, styleMenu).anchor.setTo(1,0);
        game.add.image(680, 10, 'pgbar');
        
        //School and trees
        game.add.sprite(600, 210 , 'school');
        game.add.sprite(30, 260 , 'tree1').scale.setTo(0.7);
        game.add.sprite(360, 210 , 'tree2').scale.setTo(0.8);
        
        //kid
        this.kid = game.add.sprite(0, 460, 'kid');
        this.kid.anchor.setTo(0.5,0.5);
        this.kid.scale.setTo(0.8);
        this.kid.animations.add('walk', [0,1,2,3,4,5]);
        this.kid.animations.play('walk', 6, true);
    },

    update: function() {                
        if(this.kid.x<=700){
            this.kid.x += 2;
        }else{
            game.state.start('menu');
        }
    },
    
    verPrincipal: function(){
        game.state.start('welcome');
    },
    
    verMenu: function(){
        game.state.start('menu');
    }        
};
