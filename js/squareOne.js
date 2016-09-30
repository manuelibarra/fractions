// Tractor and Square states

/****************************** MENU ****************************/
var menuSquareOne={
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
        var stairWidth = 85; //Width of a stair
        var startStair = 240;
        var startSymbol = 150;
        var startSquare = (startSymbol/2)+startStair+stairWidth*5;
        
         //First stairs, plus, 5 levels, blue circle
        var blueSquare = game.add.graphics(startSquare, 175);
            blueSquare.anchor.setTo(0.5,0.5);
            blueSquare.lineStyle(2, 0x31314e);
            blueSquare.beginFill(0xefeff5);
            blueSquare.drawRect(0, 0, 80, 40);
            blueSquare.endFill();
        var bplus = game.add.sprite(startSymbol, 195, 'add');
            bplus.frame = 0;
            bplus.scale.setTo(0.7);
            bplus.anchor.setTo(0.5,0.5);
        
        var stairsPlus = [];
        for(var i=1;i<=5;i++){
            //stair
            var x1 = startStair+(stairWidth*(i-1));
            var y1 = 135+maxHeight-i*stairHeight;
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
            stairsPlus[i].events.onInputDown.add(this.loadMap, {beep: beepSound, difficulty: i, operator: 'Plus' });
            stairsPlus[i].events.onInputOver.add(function (item) { item.alpha=0.5; }, this);
            stairsPlus[i].events.onInputOut.add(function (item) { item.alpha=1; }, this);
            //label
            var xl = x1+stairWidth/2; //x label
            var yl = y1+(stairHeight*i)/2; //y label
            var label = game.add.text(xl, yl, i, { font: '25px Arial', fill: '#ffffff', align: 'center' });
                label.anchor.setTo(0.5, 0.4);
        }
        
        //Second stairs, minus, 5 levels, red Square
        var redSquare = game.add.graphics(startSquare, 330);
            redSquare.anchor.setTo(0.5,0.5);
            redSquare.lineStyle(2, 0xb30000);
            redSquare.beginFill(0xefeff5);
            redSquare.drawRect(0, 0, 80, 40);
            redSquare.endFill();
        var rminus = game.add.sprite(startSymbol, 350, 'subtract');
            rminus.frame = 5;
            rminus.scale.setTo(0.7);
            rminus.anchor.setTo(0.5,0.5);
        
        var stairsMinus = [];
        for(var i=1;i<=5;i++){
            //stair
            var x1 = startStair+(stairWidth*(i-1));
            var y1 = 285+maxHeight-i*stairHeight;
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
            stairsMinus[i].events.onInputDown.add(this.loadMap, {beep: beepSound, difficulty: i, operator: 'Minus' });
            stairsMinus[i].events.onInputOver.add(function (item) { item.alpha=0.5; }, this);
            stairsMinus[i].events.onInputOut.add(function (item) { item.alpha=1; }, this);
            //label
            var xl = x1+stairWidth/2; //x label
            var yl = y1+(stairHeight*i)/2; //y label
            var label = game.add.text(xl, yl, i, { font: '25px Arial', fill: '#ffffff', align: 'center' });
                label.anchor.setTo(0.5, 0.4);
        } 
        
        //Thrid stairs, mixed, 5 levels, two Squares
        /* TEMPORARY DISABLED
        var bSquare = game.add.graphics(startSquare-30, 460);
            bSquare.anchor.setTo(0.5,0.5);
            bSquare.lineStyle(2, 0x31314e);
            bSquare.beginFill(0xefeff5);
            bSquare.drawRect(0, 0, 80, 40);
            bSquare.endFill();
        var pplus = game.add.sprite(startSymbol-40, 500, 'add');
            pplus.frame = 0;
            pplus.scale.setTo(0.5);
            pplus.anchor.setTo(0.5,0.5);
        
        var rSquare = game.add.graphics(startSquare+40, 500);
            rSquare.anchor.setTo(0.5,0.5);
            rSquare.lineStyle(2, 0xb30000);
            rSquare.beginFill(0xefeff5);
            rSquare.drawRect(0, 0, 80, 40);
            rSquare.endFill();
        var pminus = game.add.sprite(startSymbol+40, 500, 'subtract'); 
            pminus.frame = 5;
            pminus.scale.setTo(0.5);
            pminus.anchor.setTo(0.5,0.5);
        
        var stairsMixed = [];
        for(var i=1;i<=5;i++){
            //stair
            var x1 = startStair+(stairWidth*(i-1));
            var y1 = 435+maxHeight-i*stairHeight;
            var x2 = stairWidth;//x1 + 40;
            var y2 = stairHeight*i;//y1 + 24;
            
            stairsMixed[i] = game.add.graphics(0, 0);
            stairsMixed[i].lineStyle(1, 0xFFFFFF, 1);
            stairsMixed[i].beginFill(0xb366ff);
            stairsMixed[i].drawRect(x1, y1, x2, y2);
            stairsMixed[i].endFill();
            
            //event
            stairsMixed[i].inputEnabled = true;
            stairsMixed[i].input.useHandCursor = true;
            stairsMixed[i].events.onInputDown.add(this.loadMap, {beep: beepSound, difficulty: i, operator: 'Mixed' });
            stairsMixed[i].events.onInputOver.add(function (item) { item.alpha=0.5; }, this);
            stairsMixed[i].events.onInputOut.add(function (item) { item.alpha=1; }, this);
            //label
            var xl = x1+stairWidth/2; //x label
            var yl = y1+(stairHeight*i)/2; //y label
            var label = game.add.text(xl, yl, i, { font: '25px Arial', fill: '#ffffff', align: 'center' });
                label.anchor.setTo(0.5, 0.4);
        } 
        */
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
        onePosition = 0; //Map position
        oneMove = true; //Move no next point
        oneDifficulty  = this.difficulty; //Number of difficulty (1 to 5)
        oneOperator = this.operator; //Operator of game
        if(onePosition<5){
            game.state.start('mapSOne');
        }else{
            game.state.start('unofinal');
        }
    }
    
};

/****************************** MAP ****************************/
var mapSquareOne={
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
        this.back.events.onInputDown.add(this.viewMenuSquareOne, {beep: this.beepSound});
        
        // Styles for labels
        var stylePlace = { font: '26px Arial', fill: '#400080', align: 'center'};
        var styleMenu = { font: '30px Arial', fill: '#000000', align: 'center'};
        
        // Progress bar
        var percentText = onePosition*20;
        var percentBlocks = onePosition;
        for(var p=1;p<=percentBlocks;p++){
            var block = game.add.image(680+(p-1)*30, 10, 'block');
            block.scale.setTo(2, 1); //Scaling to double width
        }
        game.add.text(840, 10, percentText+'%', styleMenu);
        game.add.text(670, 10, words.difficulty + ' ' + oneDifficulty, styleMenu).anchor.setTo(1,0);
        game.add.image(680, 10, 'pgbar');
        
        
        // Map
        //Garage
        var garage = game.add.image(30, 90, 'garage');
            garage.scale.setTo(0.4);
        //Farm
        var farm = game.add.image(750, 60, 'farm');
            farm.scale.setTo(0.6);
         //Road
        this.points = {
        'x': [ 100, 180, 620, 780, 470, 480, 780 ],
        'y': [ 240, 390, 530, 370, 300, 150, 220 ]
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
        trees[0] = game.add.image(90, 580, 'tree1');
        trees[1] = game.add.image(290, 200, 'tree2');
        trees[2] = game.add.image(470, 450, 'tree1');
        trees[3] = game.add.image(560, 300, 'tree1');
        trees[4] = game.add.image(800, 550, 'tree2');
        for (var i = 0; i <= 4; i ++){
            trees[i].anchor.setTo(0.5,1);
            trees[i].scale.setTo(0.3);
        }
        
        // tractor start position
        this.tractor = game.add.sprite(this.points.x[onePosition], this.points.y[onePosition], 'tractor');
        this.tractor.anchor.setTo(0.5, 1);
        this.tractor.scale.setTo(0.5);
        game.physics.arcade.enable(this.tractor);
        var walk = this.tractor.animations.add('walk',[0,1,2,3,4]);
        this.tractor.animations.play('walk', 5, true);
        
        // Delay to next level
        this.count = 0;
        this.wait = 120;
        
    },

    update: function() {
        
        // Wait 2 seconds before moving or staring a game
        this.count ++;
        if(this.count<=this.wait) return;
        
        // If movement is stopped or position is 6 (final), load game
        if(onePosition==6){
            oneMove = false;
        }
        if(!oneMove){
            this.loadGame();
        }
        
        // If momevent is enabled, move to next point from actual
        if(oneMove){
            game.physics.arcade.moveToXY(
                this.tractor, 
                this.points.x[onePosition+1],
                this.points.y[onePosition+1],
                100
            );
            
            // I tractor reached the end, stop movement
            if(Math.ceil(this.tractor.x)==this.points.x[onePosition+1] || Math.ceil(this.tractor.y)==this.points.y[onePosition+1]){
                oneMove=false;
                onePosition += 1; //Update position
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
    viewMenuSquareOne: function(){
        this.beep.play();
        game.state.start('menuSOne');
    },
        
    //MapLoading function
    loadGame: function(){
        this.beepSound.play();
        if(onePosition<6){
            game.state.start('gameSOne');
        }else{
            game.state.start('endSOne');
        }
    }
};

/****************************** GAME ****************************/
var gameSquareOne={
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
        var styleFraction = { font: '15px Arial', fill: '#000080', align: 'center'};
        var styleMenu = { font: '30px Arial', fill: '#000000', align: 'center'};
        
        //Floor and road
        var startX = 170; //Initial tractor and place position
        if(oneOperator=='Minus') startX = 730;
        this.startX = startX; //Workaround for initial position inside update
        var blockWidth = 100; //Width of blocks and floor spaces
        var blockHeight = 40; //Height of blocks and floor spaces
        for(var i=0;i<9;i++){
            game.add.image(i*100, 501, 'floor');
        }
                
        //Control variables
        this.clicked = false; //Floor blocks or apilled blocks clicked
        this.hideLabels = false; //Labels of blocks
        this.animate = false; //Start move animation
        this.checkCollide = false; //Check if tractor fon't any block left or floor hole
        this.result = false; //Game is correct
        this.move = false; //Continue tractor animation
        this.moveCounter = 0; //Move counter
        this.moveEnd = 140; //Move end counter
                
        //tractor
        var tractorAlign = -80;
        if(oneOperator=='Minus'){
            tractorAlign *= -1;
        } 
        this.tractor = game.add.sprite(startX+tractorAlign, 445, 'tractor');
        this.tractor.anchor.setTo(0.5, 0.5);
        this.tractor.scale.setTo(0.8);
        this.tractor.animations.add('right',[0,1,2,3,4]);
        this.tractor.animations.add('left',[5,6,7,8,9]);
        if(oneOperator=='Minus'){
            this.tractor.frame = 5;
        }
        
         //generator
        //Blocks and fractions
        var maxBlocks = 10; //Maximum blocks
        if(oneDifficulty==1) maxBlocks = 5;
        this.blocks = game.add.group(); //Fraction arrays (apilled)
        this.numBlocks = game.rnd.integerInRange(1, maxBlocks); //Number of blocks
        this.curBlock = 0; //Actual index block
        this.blockDirection = []; //Directions right(plus), left (minus)
        this.blockDistance = []; //Displacement distance of the blocks
        this.blockLabel = game.add.group(); //Labels of the blocks
        this.blockSeparator = game.add.group(); //Separator of the labels
        //this.blockAngle = []; //Angles of blocks
        //this.blockTraceColor = []; //Trace colors
        this.endPosition = startX; //Ending position, accumulative
        if(oneOperator=='Minus') this.endPosition -= blockWidth;
        else this.endPosition += blockWidth;
        //Game A exclusive variables 
        this.floorBlocks = game.add.group(); //Selectable floor blocks
        this.floorIndex = -1; //Selected floor block
        this.floorCount = 5; //Number of floor blocks
        this.floorClicked = false; //If clicked portion of floor
        //Game B exclusive variables
        this.arrowPlace = this.startX; //Fixed place for help arrow
        if(oneOperator=='Minus') this.arrowPlace  -= blockWidth;
        else this.arrowPlace += blockWidth;
        this.fractionClicked = false; //If clicked a fraction (game B)
        this.fractionIndex = -1; //Index of clicked fraction (game B)
        
        for(var p=0;p<this.numBlocks;p++){

            var portion = game.rnd.integerInRange(1, oneDifficulty); //Portion of the circle, according to difficulty

            var direction = '';
            //var lineColor = '';
            if(oneOperator=='Mixed'){
                var directions = ['Right','Left'];
                var rndIndex = game.rnd.integerInRange(0, 1);
                direction = directions[rndIndex];
                if(rndIndex==0) lineColor = 0x31314e;
                else lineColor = 0xb30000;
            }else if(oneOperator=='Plus'){
                direction = 'Right';    
                lineColor = 0x31314e;
            }else if(oneOperator=='Minus'){
                direction = 'Left';
                lineColor = 0xb30000;
            }
            
            var block = game.add.graphics(startX, 460-p*blockHeight);
                block.anchor.setTo(0.5, 0.5);
                block.lineStyle(2, lineColor);
                block.beginFill(0xefeff5);
            
            this.blockDirection[p] = direction;
            if(portion == 2) portion = 1;
            if(portion==1){
                block.drawRect(0, 0, blockWidth, blockHeight);
                
                this.blockDistance.push(blockWidth);
                //this.blockAngle.push(360);

                if(oneLabel){
                    var labelX = startX;
                    if(oneOperator=='Minus') labelX -= (15+blockWidth);
                    else labelX += blockWidth+15;
                    var label = game.add.text(labelX, 480-p*blockHeight, portion , styleLabel);
                    label.anchor.setTo(0.5, 0.5);
                    this.blockLabel.add(label);
                }
            }else{
                //if(portion==3 || portion==4 || portion==5) portion==2; //Workaround for not even numbers (problems here)
                portion = 2;
                var distance = blockWidth/portion;
                
                block.drawRect(0, 0, distance, blockHeight);
                //block.arc(0, 0, 40, game.math.degToRad(distance), 0, true);
                
                this.blockDistance.push(distance);
                //this.blockDistance.push(Math.floor(placeDistance/portion));
                //this.blockAngle.push(distance);

                if(oneLabel){
                    var labelX = startX;
                    if(oneOperator=='Minus') labelX -= (15+distance);
                    else labelX += 15+distance;
                    var separator = game.add.sprite(labelX, 480-p*blockHeight, 'separator');
                    separator.scale.setTo(0.6);
                    separator.anchor.setTo(0.5, 0.5);
                    this.blockSeparator.add(separator);
                    var label = game.add.text(labelX, 483-p*blockHeight, '1\n'+portion , styleFraction);
                    label.anchor.setTo(0.5, 0.5);
                    this.blockLabel.add(label);
                }
            }

            if(direction=='Right'){
                this.endPosition += Math.floor(blockWidth/portion);
            }else if(direction=='Left'){
                this.endPosition -= Math.floor(blockWidth/portion);
                block.scale.x *= -1;
            }

            block.endFill();
            
            //If game is type B, (select fractions, adding event)
            if(oneType=='B'){
                block.inputEnabled = true;
                block.input.useHandCursor = true;
                //block.events.onInputDown.add(, this);
            }
            
            this.blocks.add(block);
        }
        
        //Calculate next block
        if(this.blockDirection[this.curBlock]=='Right'){
            this.nextEnd = startX+this.blockDistance[this.curBlock];
        }else{
            this.nextEnd = startX-this.blockDistance[this.curBlock];
        }
        
        //If end position is out of bounds, restart
        if (oneOperator=='Plus' && (this.endPosition<(startX+blockWidth) || this.endPosition>(startX+6*blockWidth))){
            game.state.start('gameSOne');
        }else if (oneOperator=='Minus' && (this.endPosition>(startX) || this.endPosition<(startX-(6*blockWidth)))){
            game.state.start('gameSOne');
        }
        
        //If game is type B, selectiong a random block floor place
        if(oneType=='B'){
            var end = game.rnd.integerInRange(1, this.numBlocks);
            for(var i=0;i<end;i++){
                if(this.blockDirection[i]=='Right')
                    this.arrowPlace += this.blockDistance[i];
                else if(this.blockDirection[i]=='Left')
                    this.arrowPlace -= this.blockDistance[i];
            }
        }
        
        //Selectable floor
        this.floorCount = 5;
        var widFloor = blockWidth;
        if(oneDifficulty==1 || oneDifficulty==2){
            this.floorCount = 5;
            widFloor = blockWidth
        }else{
            this.floorCount = 10;
            widFloor = blockWidth/2;
        }
        
        for(var i = 0; i<this.floorCount; i++){
            var posX = startX;
            
            if(oneOperator=='Minus') posX -= (blockWidth + i*widFloor);
            else posX += (blockWidth + i*widFloor);
            
            if(oneType=='B'){
                if(oneOperator=='Minus'){
                    if(posX<=this.arrowPlace){
                        this.floorCount = i+1;
                        this.floorIndex = i-1;
                        break;
                    }
                }else{
                    if(posX>=this.arrowPlace){
                        this.floorCount = i+1;
                        this.floorIndex = i-1;
                        break;
                    }
                }
            }
            var block = game.add.graphics(posX, 500);
                block.anchor.setTo(0.5, 0);
                block.lineStyle(0.2, 0xffffff);
                block.beginFill(0x000000);
                block.drawRect(0, 0, widFloor, blockHeight);
                block.endFill();
            if(oneOperator=='Minus') block.scale.x *= -1;
            this.floorBlocks.add(block);     
        }
        for(var i=0;i<=5;i++){
            var posX = startX;
            if(oneOperator=='Minus')posX -= ((6-i)*blockWidth);
            else posX+=((i+1)*blockWidth);
            
            game.add.text(posX, 560, i , stylePlace).anchor.setTo(0.5, 0.5); 
        }
        
                    
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
        this.back.events.onInputDown.add(this.viewMenuSquareOne, {beep: this.beepSound});
         // Help button
        this.help = game.add.sprite(160, 10, 'help');
        this.help.inputEnabled = true;
        this.help.input.useHandCursor = true;
        this.help.events.onInputDown.add(this.viewHelp, {beep: this.beepSound, endPosition: this.endPosition});
         //Help arrow
        this.arrow = game.add.sprite(this.arrowPlace, 480, 'down');
        this.arrow.anchor.setTo(0.5, 0.5);
        this.arrow.alpha = 0.5;
    },

    update: function() {
        
        if (game.input.activePointer.isDown && !this.move){
            //Positionate arrow - Game A
            if(oneType=='A'){
                if(game.input.mousePointer.y>60){ //Dead zone for click
                    
                    var xPos = game.input.mousePointer.x;
                    if(oneOperator=='Minus'){
                        if(xPos<(this.startX-600) || xPos>(this.startX-100)){
                            return;
                        }
                    }else{
                        if(xPos<(this.startX+100) && xPos>(this.startX+600)){
                            return;
                        }
                    }
                    
                    this.arrow.alpha = 1;
                    this.clicked = true;
                    this.animate = true;
                    this.beepSound.play();
                    if(this.blockDirection[this.curBlock]=='Right'){
                        this.tractor.animations.play('right', 5, true);
                    }else{
                        this.tractor.animations.play('left', 5, true);
                    }

                    if(oneLabel){ //Hiding labels
                        this.blockLabel.visible = false;
                        this.blockSeparator.visible = false;
                    }
                    //cleaning path
                    if(oneOperator=='Minus'){
                        for(var i=0; i< this.floorCount; i++){
                            if(this.floorBlocks.children[i].x<xPos){
                                this.floorBlocks.children[i].alpha = 0;
                            }
                        }
                    }else{
                        for(var i=0; i< this.floorCount; i++){
                            if(this.floorBlocks.children[i].x>xPos){
                                this.floorBlocks.children[i].alpha = 0;
                            }
                        }
                    }
                    
                }
            }else if(oneType=='B'){ //Delete unselected blocks
                var mouseY = game.input.mousePointer.y;
                var mouseX = game.input.mousePointer.x;
                                
                //check x limits
                if(oneOperator=='Minus'){
                    if(mouseX<(this.startX-100) || mouseX>(this.startX))
                        return;
                }else
                    if(mouseX<(this.startX) || mouseX>(this.startX+100))
                        return;
                
                //check y limits
                if(mouseY<(this.blocks.children[this.numBlocks-1].y) || mouseY>(this.blocks.children[0].y+40)){
                    return;
                }
                
                var minusBlocks = 0;
                for(var i=0;i<this.numBlocks;i++){
                    var lowEnd = this.blocks.children[i].y+40;
                    var uppEnd = this.blocks.children[i].y-40;

                    if(mouseY<uppEnd){
                        this.blocks.children[i].alpha = 1;
                    }else if(mouseY>uppEnd && mouseY<lowEnd){
                        this.blocks.children[i].alpha = 1;
                    }else{
                        this.blocks.children[i].visible = false; //Delete unselected block
                        minusBlocks +=1; //number of blocks to reduce
                    }
                }
                this.numBlocks -= minusBlocks; //Final reduced blocks
                
                this.arrow.alpha = 1;
                this.clicked = true;
                this.animate = true;
                this.beepSound.play();
                if(this.blockDirection[this.curBlock]=='Right'){
                    this.tractor.animations.play('right', 5, true);
                }else{
                    this.tractor.animations.play('left', 5, true);
                }

                if(oneLabel){ //Hiding labels
                    this.blockLabel.visible = false;
                    this.blockSeparator.visible = false;
                }
            }
        }
        
        if(!this.clicked){
            if(!this.move){
                if(oneType=='A'){
                    //Follow mouse
                    if (game.physics.arcade.distanceToPointer(this.arrow, game.input.activePointer) > 8){
                        var xPos = game.input.mousePointer.x;
                        if(oneOperator=='Minus'){
                            if(xPos>(this.startX-600) && xPos<(this.startX-100)){
                                this.arrow.x = xPos;
                            }
                        }else{
                            if(xPos>(this.startX+100) && xPos<(this.startX+600)){
                                this.arrow.x = xPos;
                            }
                        }
                    }
                    
                    //Alpha = 1 to selected blocks
                    var mouseY = game.input.mousePointer.y;
                    var mouseX = game.input.mousePointer.x;
                
                    for(var i=0;i<this.floorCount;i++){
                        
                        var lowEnd = this.floorBlocks.children[i].y+40;
                        var uppEnd = this.floorBlocks.children[i].y;
                        var rigEnd = this.floorBlocks.children[i].x;
                        var lefEnd = this.floorBlocks.children[i].x;
                        
                        var size = oneDifficulty*100;
                        if(oneDifficulty==3 || oneDifficulty==5) size = oneDifficulty/(oneDifficulty-1);
                        
                        if(oneOperator=='Minus') lefEnd -= size;
                        else rigEnd += size;
                        
                        
                        if(oneOperator=='Minus'){
                            if(mouseX<rigEnd){
                                this.floorBlocks.children[i].alpha = 1;
                                this.floorIndex = i;
                            }else if(mouseX>rigEnd && mouseX<lefEnd){
                                this.floorBlocks.children[i].alpha = 1;
                                this.floorIndex = i;
                            }else{
                                this.floorBlocks.children[i].alpha = 0.5;
                            }
                        }else{
                            if(mouseX>rigEnd){
                                this.floorBlocks.children[i].alpha = 1;
                                this.floorIndex = i;
                            }else if(mouseX<rigEnd && mouseX>lefEnd){
                                this.floorBlocks.children[i].alpha = 1;
                                this.floorIndex = i;
                            }else{
                                this.floorBlocks.children[i].alpha = 0.5;
                            } 
                        }
                    }
                    
                    //Block index is last block
                    this.blockIndex = this.numBlocks - 1;
                    
                }else if (oneType=='B'){
                    
                    //Alpha = 1 to selected blocks
                    var mouseY = game.input.mousePointer.y;
                    var mouseX = game.input.mousePointer.x;
                
                    for(var i=0;i<this.numBlocks;i++){
                        
                        var lowEnd = this.blocks.children[i].y+40;
                        var uppEnd = this.blocks.children[i].y;
                        var rigEnd = this.blocks.children[i].x;
                        var lefEnd = this.blocks.children[i].x;
                        
                        if(oneOperator=='Minus') lefEnd -= 100;
                        else rigEnd += 100;
                        
                        if(rigEnd>mouseX && lefEnd<mouseX){
                            if(mouseY<uppEnd){
                                this.blocks.children[i].alpha = 1;
                                this.blockIndex = i;
                            }else if(mouseY>uppEnd && mouseY<lowEnd){
                                this.blocks.children[i].alpha = 1;
                                this.blockIndex = i;
                            }else{
                                this.blocks.children[i].alpha = 0.5;
                            }
                        }else{
                            this.blocks.children[i].alpha = 0.5;
                            this.blockIndex = -1;
                        }
                    }
                }
            }
        }
        
        //Start animation
        if(this.animate){

            if(this.blockDirection[this.curBlock]=='Right'){
                this.tractor.x+=2;
            }else if(this.blockDirection[this.curBlock]=='Left'){
                this.tractor.x-=2;
            }
                        
            for(var i=0;i<this.numBlocks;i++){ //Moving every block
                if(this.blockDirection[this.curBlock]=='Right'){
                    this.blocks.children[i].x +=2;
                }else{
                    this.blocks.children[i].x -=2;
                }
            }
            
            var extra = 100-this.blockDistance[this.curBlock];
            var curFloor = -1;
            if(this.blockDirection[this.curBlock]=='Right'){
                if(this.blocks.children[this.curBlock].x>=this.nextEnd+extra){
                    this.blocks.children[this.curBlock].alpha = 0;
                    this.blocks.y += 40;
                    this.curBlock+=1;
                    this.nextEnd += this.blockDistance[this.curBlock];
                    for(var i=0; i<=this.floorIndex; i++ ){
                        if(this.floorBlocks.children[i].x<(this.blocks.children[this.curBlock-1].x+this.blockDistance[this.curBlock-1])){
                            this.floorBlocks.children[i].alpha = 0.2;
                            curFloor = i;
                        }
                    }
                }
            }else{
                if(this.blocks.children[this.curBlock].x<=(this.nextEnd-extra)){
                    this.blocks.children[this.curBlock].alpha = 0;
                    this.blocks.y += 40;
                    this.curBlock+=1;
                    this.nextEnd -= this.blockDistance[this.curBlock];
                    for(var i=0; i<=this.floorIndex; i++ ){
                        if(this.floorBlocks.children[i].x>(this.blocks.children[this.curBlock-1].x-this.blockDistance[this.curBlock-1])){
                            this.floorBlocks.children[i].alpha = 0.2;
                            curFloor = i;
                        }
                    }
                }
            }
            if( this.curBlock>this.blockIndex || curFloor>=this.floorIndex){ //Final position
                this.animate= false;
                this.checkCollide = true;
            }       
        }
        
        //Check if tractor has blocks left or floor holes
        if(this.checkCollide){
            this.tractor.animations.stop();
            
            //Check left blocks
            var resultBlock = true;
            for(var i=0; i<=this.blockIndex; i++){
                if(this.blocks.children[i].alpha==1) resultBlock = false;
            }
            
            //check floor Holes
            var resultFloor = true;
            for(var i=0; i<=this.floorIndex; i++){
                if(this.floorBlocks.children[i].alpha==1) resultFloor = false;
            }
            
            if(resultBlock && resultFloor){
                this.result = true;
            }else{
                this.result = false;
            }
            this.move = true;
            this.checkCollide = false;
        }
        
        //Continue moving animation
        if(this.move){
            
            if(this.moveCounter==0){
                if(this.result){
                    if(oneOperator=='Plus'){
                        this.tractor.animations.play('right', 6, true);
                    }else{
                        this.tractor.animations.play('left', 6, true);
                    }
                    this.okSound.play();
                }else{
                    this.errorSound.play();
                }
            }
            
            this.moveCounter += 1;
            
            if(this.result){
                if(oneOperator=='Minus'){
                    this.tractor.x -=2;
                }else{
                    this.tractor.x +=2;
                }
            }
            
            if(this.moveCounter>=this.moveEnd){
                if(this.result){
                    oneMove = true;
                }else{
                    oneMove = false;
                }
                game.state.start('mapSOne');
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
    viewMenuSquareOne: function(){
        this.beep.play();
        game.state.start('menuSOne');
    },
    viewHelp: function(){
        var pointer = game.add.image(this.endPosition, 490, 'pointer');
        pointer.anchor.setTo(0.5, 0);
        pointer.alpha = 0.8;
    }
    
};
/****************************** END ****************************/
var endSquareOne={
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
        game.add.text(670, 10, words.difficulty + ' ' + oneDifficulty, styleMenu).anchor.setTo(1,0);
        game.add.image(680, 10, 'pgbar');
        
        //Farm and trees
        game.add.sprite(600, 270 , 'farm');
        game.add.sprite(30, 260 , 'tree1').scale.setTo(0.7);
        game.add.sprite(360, 210 , 'tree2').scale.setTo(0.8);
        
        //tractor
        this.tractor = game.add.sprite(0, 460 , 'tractor');
        this.tractor.anchor.setTo(0.5,0.5);
        this.tractor.scale.setTo(0.8);
        if(oneOperator=='Plus'){
            this.tractor.animations.add('right', [0,1,2,3,4]);
            this.tractor.animations.play('right', 5, true);
        }else{
            this.tractor.scale.x *= -1;
            this.tractor.animations.add('left',[5,6,7,8,9]);
            this.tractor.animations.play('left', 5, true);
        }
    },

    update: function() {
        if(this.tractor.x<=700){
            this.tractor.x += 2;
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
