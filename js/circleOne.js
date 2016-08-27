// Kid and Circle states, games 1 and 2

/****************************** MENU ****************************/
var menuCircleOne={
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
        var startCircle = (startSymbol/2)+startStair+stairWidth*5;
        
         //First stairs, plus, 5 levels, blue circle
        var blueCircle = game.add.graphics(startCircle, 195);
            blueCircle.anchor.setTo(0.5,0.5);
            blueCircle.lineStyle(2, 0x31314e);
            blueCircle.beginFill(0xefeff5);
            blueCircle.drawCircle(0, 0, 60);
            blueCircle.endFill();
        var bplus = game.add.sprite(startSymbol, 195, 'add'); 
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
        
        //Second stairs, minus, 5 levels, red circle
        var redCircle = game.add.graphics(startCircle, 350);
            redCircle.anchor.setTo(0.5,0.5);
            redCircle.lineStyle(2, 0xb30000);
            redCircle.beginFill(0xefeff5);
            redCircle.drawCircle(0, 0, 60);
            redCircle.endFill();
        var bminus = game.add.sprite(startSymbol, 350, 'subtract'); 
            bminus.scale.setTo(0.7);
            bminus.anchor.setTo(0.5,0.5);
        
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
        
        //Thrid stairs, mixed, 5 levels, two circles
        var bCircle = game.add.graphics(startCircle-30, 500);
            bCircle.anchor.setTo(0.5,0.5);
            bCircle.lineStyle(2, 0x31314e);
            bCircle.beginFill(0xefeff5);
            bCircle.drawCircle(0, 0, 60);
            bCircle.endFill();
        var pplus = game.add.sprite(startSymbol-40, 500, 'add'); 
            pplus.scale.setTo(0.7);
            pplus.anchor.setTo(0.5,0.5);
        
        var rCircle = game.add.graphics(startCircle+40, 500);
            rCircle.anchor.setTo(0.5,0.5);
            rCircle.lineStyle(2, 0xb30000);
            rCircle.beginFill(0xefeff5);
            rCircle.drawCircle(0, 0, 60);
            rCircle.endFill();
        var pminus = game.add.sprite(startSymbol+40, 500, 'subtract'); 
            pminus.scale.setTo(0.7);
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
            game.state.start('mapCOne');
        }else{
            game.state.start('unofinal');
        }
    }
    
};

/****************************** MAP ****************************/
var mapCircleOne={
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
        this.back.events.onInputDown.add(this.viewMenuCircleOne, {beep: this.beepSound});
        
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
        this.kid = game.add.sprite(this.points.x[onePosition], this.points.y[onePosition], 'kid');
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
        if(onePosition==6){
            oneMove = false;
        }
        if(!oneMove){
            this.loadGame();
        }
        
        // If momevent is enabled, move to next point from actual
        if(oneMove){
            game.physics.arcade.moveToXY(
                this.kid, 
                this.points.x[onePosition+1],
                this.points.y[onePosition+1],
                100
            );
            
            // I kid reached the end, stop movement
            if(Math.ceil(this.kid.x)==this.points.x[onePosition+1] || Math.ceil(this.kid.y)==this.points.y[onePosition+1]){
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
    viewMenuCircleOne: function(){
        this.beep.play();
        game.state.start('menuCOne');
    },
        
    //MapLoading function
    loadGame: function(){
        this.beepSound.play();
        if(onePosition<6){
            game.state.start('gameCOne');
        }else{
            game.state.start('endCOne');
        }
    }
};

/****************************** GAME ****************************/
var gameCircleOne={
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
        
        //Floor and road
        var startX = 66; //Initial kid and place position
        if(oneOperator=='Minus') startX = 66+3*260;
        this.startX = startX; //Workaround for initial position inside update
        var placeDistance = 260; //Distance between places
        for(var i=0;i<9;i++){
            game.add.image(i*100, 501, 'floor');
        }
        game.add.image(45, 515, 'road').scale.setTo(0.97,1);
        for(var p=0;p<=3;p++){// Places
            game.add.image(66+p*placeDistance, 526, 'place').anchor.setTo(0.5, 0.5);
            game.add.text(66+p*placeDistance, 560, p , stylePlace).anchor.setTo(0.5, 0.5); 
        }
        
        //Control variables
        this.clicked = false; //Air ballon positioned
        this.hideLabels = false; //Labels animations
        this.animate = false; //Start move animation
        this.checkCollide = false; //Check kid inside ballon's basket
        this.result = false; //Game is correct
        this.fly = false; //Start ballon fly animation
        this.flyCounter = 0; //Fly counter
        this.flyEnd = 140; //Fly end counter
        //trace
        this.trace = this.add.bitmapData(this.game.width, this.game.height);
        this.trace.addToWorld();
        this.trace.clear();
        
         //generator
        //Circles and fractions
        var maxBlocks = 6; //Maximum blocks according to difficulty
        if(oneDifficulty==1) maxBlocks = 3;
        this.blocks = game.add.group(); //Fraction arrays
        this.numBlocks = game.rnd.integerInRange(1, maxBlocks); //Number of blocks
        this.curBlock = 0; //Actual index block
        this.blockDirection = []; //Directions right(plus), left (minus)
        this.blockDistance = []; //Displacement distance of the blocks
        this.blockLabel = game.add.group(); //Labels of the blocks
        this.blockSeparator = game.add.group(); //Separator of the labels
        this.blockAngle = []; //Angles of blocks
        this.blockTraceColor = []; //Trace colors
        this.endPosition = startX; //Ending position, accumulative
        //Game B exclusive variables
        this.balloonPlace = this.game.world.centerX; //Fixed place for ballon (game B)
        this.fractionClicked = false; //If clicked a fraction (game B)
        this.fractionIndex = -1; //Index of clicked fraction (game B)
        
        for(var p=0;p<this.numBlocks;p++){

            var portion = game.rnd.integerInRange(1, oneDifficulty); //Portion of the circle, according to difficulty

            var direction = '';
            var lineColor = '';
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
            this.blockTraceColor[p] = lineColor;
            var block = game.add.graphics(startX, 485-p*80);
                block.anchor.setTo(0.5,0.5);

                block.lineStyle(2, lineColor);
                block.beginFill(0xefeff5);
            if (direction == 'Right')  block.scale.y *= -1;

            this.blockDirection[p] = direction;

            if(portion==1){
                block.drawCircle(0, 0, 80);

                this.blockDistance.push(placeDistance);
                this.blockAngle.push(360);

                if(oneLabel){
                    var labelX = startX;
                    if(oneOperator=='Minus') labelX -= 65;
                    else labelX += 65;
                    var label = game.add.text(labelX, 485-p*80, portion , styleLabel);
                    label.anchor.setTo(0.5, 0.5);
                    this.blockLabel.add(label);
                }
            }else{
                var distance = 360/portion+5;
                block.arc(0, 0, 40, game.math.degToRad(distance), 0, true);

                this.blockDistance.push(Math.floor(placeDistance/portion));
                this.blockAngle.push(distance);

                if(oneLabel){
                    var labelX = startX;
                    if(oneOperator=='Minus') labelX -= 65;
                    else labelX += 65;
                    var separator = game.add.sprite(labelX, 485-p*80, 'separator');
                    separator.anchor.setTo(0.5, 0.5);
                    this.blockSeparator.add(separator);
                    var label = game.add.text(labelX, 488-p*80, '1\n'+portion , styleLabel);
                    label.anchor.setTo(0.5, 0.5);
                    this.blockLabel.add(label);
                }
            }

            if(direction=='Right'){
                this.endPosition += Math.floor(placeDistance/portion);
            }else if(direction=='Left'){
                this.endPosition -= Math.floor(placeDistance/portion);
            }

            block.endFill();
            block.angle +=90;
            
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
        if (this.endPosition<66 || this.endPosition>66+3*260 ){
            game.state.start('gameCOne');
        }
        
                
        //If game is type B, selectiong a random balloon place
        if(oneType=='B'){
            this.balloonPlace = startX;
            var end = game.rnd.integerInRange(1, this.numBlocks);
            for(var i=0;i<end;i++){
                if(this.blockDirection[i]=='Right')
                    this.balloonPlace += this.blockDistance[i];
                else if(this.blockDirection[i]=='Left')
                    this.balloonPlace -= this.blockDistance[i];
            }
        }
                
        //kid
        this.kid = game.add.sprite(startX, 465-this.numBlocks*80, 'kid');
        this.kid.anchor.setTo(0.5, 0.5);
        this.kid.scale.setTo(0.8);
        this.kid.animations.add('right',[0,1,2,3,4,5]);
        this.kid.animations.add('left',[6,7,8,9,10,11]);
        if(oneOperator=='Minus'){
            this.kid.animations.play('left', 6, true);
            this.kid.animations.stop();
        }
        //globo
        this.balloon = game.add.sprite(this.balloonPlace, 350, 'balloon');
        this.balloon.anchor.setTo(0.5, 0.5);
        this.balloon.alpha = 0.5;
        this.basket = game.add.sprite(this.balloonPlace, 472, 'balloon_basket');
        this.basket.anchor.setTo(0.5, 0.5);
            
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
        this.back.events.onInputDown.add(this.viewMenuCircleOne, {beep: this.beepSound});
         // Help button
        this.help = game.add.sprite(160, 10, 'help');
        this.help.inputEnabled = true;
        this.help.input.useHandCursor = true;
        this.help.events.onInputDown.add(this.viewHelp, {beep: this.beepSound, endPosition: this.endPosition});
    },

    update: function() {
       
        if (game.input.activePointer.isDown && !this.fly){
            //Positionate balloon - Game A
            if(oneType=='A'){
                if(game.input.mousePointer.y>60){ //Dead zone for click
                    this.balloon.alpha = 1;
                    this.clicked = true;
                    this.animate = true;
                    this.beepSound.play();
                    if(this.blockDirection[this.curBlock]=='Right'){
                        this.kid.animations.play('right', 6, true);
                    }else{
                        this.kid.animations.play('left', 6, true);
                    }

                    if(oneLabel){ //Hiding labels
                        this.blockLabel.visible = false;
                        this.blockSeparator.visible = false;
                    }
                }
            }else if(oneType=='B'){ //Delete unselected blocks
                var mouseY = game.input.mousePointer.y;
                var mouseX = game.input.mousePointer.x;
                                
                //check x limits
                if(mouseX<(this.startX-40) || mouseX>(this.startX+40)){
                    return;
                } 
                //check y limits
                if(mouseY<(this.blocks.children[this.numBlocks-1].y-40) || mouseY>(this.blocks.children[0].y+40)){
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
                        this.kid.y += 80; //Lowering kid
                    }
                }
                this.numBlocks -= minusBlocks; //Final reduced blocks
                
                this.balloon.alpha = 1;
                this.clicked = true;
                this.animate = true;
                this.beepSound.play();
                if(this.blockDirection[this.curBlock]=='Right'){
                    this.kid.animations.play('right', 6, true);
                }else{
                    this.kid.animations.play('left', 6, true);
                }

                if(oneLabel){ //Hiding labels
                    this.blockLabel.visible = false;
                    this.blockSeparator.visible = false;
                }
            }
        }
        
        if(!this.clicked){
            if(!this.fly){
                if(oneType=="A"){
                    //Follow mouse
                    if (game.physics.arcade.distanceToPointer(this.balloon, game.input.activePointer) > 8){
                        this.balloon.x = game.input.mousePointer.x;
                        this.basket.x = game.input.mousePointer.x;
                    }
                }else if (oneType=="B"){
                    
                    //Alpha = 1 to selected blocks
                    var mouseY = game.input.mousePointer.y;
                    var mouseX = game.input.mousePointer.x;
                
                    for(var i=0;i<this.numBlocks;i++){
                        var lowEnd = this.blocks.children[i].y+40;
                        var uppEnd = this.blocks.children[i].y-40;
                        var rigEnd = this.blocks.children[i].x+40;
                        var lefEnd = this.blocks.children[i].x-40;
                        
                        if(rigEnd>mouseX && lefEnd<mouseX){
                            if(mouseY<uppEnd){
                                this.blocks.children[i].alpha = 1;
                            }else if(mouseY>uppEnd && mouseY<lowEnd){
                                this.blocks.children[i].alpha = 1;
                            }else{
                                this.blocks.children[i].alpha = 0.5;
                            }
                        }else{
                            this.blocks.children[i].alpha = 0.5;
                        }
                        
                    }
                }
            }
        }
        
        
        //Start animation
        if(this.animate){
            
            var color = '';
            if(this.blockDirection[this.curBlock]=='Right'){
                this.kid.x+=2;
                color = 'rgba(0, 51, 153, 1)';
            }else if(this.blockDirection[this.curBlock]=='Left'){
                this.kid.x-=2;
                color = 'rgba(179, 0, 0, 1)';
            }
            
            this.trace.rect(this.kid.x, 526, 2, 2, color);
            
            for(var i=0;i<this.numBlocks;i++){ //Moving every block
                if(this.blockDirection[this.curBlock]=='Right'){
                    this.blocks.children[i].x +=2;
                }else{
                    this.blocks.children[i].x -=2;
                }
            }
            
            this.blockAngle[this.curBlock] -= 2.77;
            this.blocks.children[this.curBlock].clear();
            this.blocks.children[this.curBlock].lineStyle(2, this.blockTraceColor[this.curBlock]);
            this.blocks.children[this.curBlock].beginFill(0xefeff5);
            this.blocks.children[this.curBlock].arc(0, 0, 40, game.math.degToRad(this.blockAngle[this.curBlock]), 0, true);
            this.blocks.children[this.curBlock].endFill();
            
            if(this.blockDirection[this.curBlock]=='Right'){
                if(this.blocks.children[this.curBlock].x>=this.nextEnd){
                    this.blocks.children[this.curBlock].visible = false;
                    this.blocks.y += 80;
                    this.kid.y += 80;
                    this.curBlock+=1;
                    if(this.blockDirection[this.curBlock]=='Right'){
                        this.nextEnd += this.blockDistance[this.curBlock];
                        this.kid.animations.play('right', 6, true);
                    }else if(this.blockDirection[this.curBlock]=='Left'){
                        this.nextEnd -= this.blockDistance[this.curBlock];
                        this.kid.animations.play('left', 6, true);
                    }
                }
            }else{
                if(this.blocks.children[this.curBlock].x<=this.nextEnd){
                    this.blocks.children[this.curBlock].visible = false;
                    this.blocks.y += 80;
                    this.kid.y += 80;
                    this.curBlock+=1;
                    if(this.blockDirection[this.curBlock]=='Right'){
                        this.nextEnd += this.blockDistance[this.curBlock];
                        this.kid.animations.play('right', 6, true);
                    }else if(this.blockDirection[this.curBlock]=='Left'){
                        this.nextEnd -= this.blockDistance[this.curBlock];
                        this.kid.animations.play('left', 6, true);
                    }
                }
            }
            
            if(this.curBlock==this.numBlocks ){ //Final position
                this.animate= false;
                this.checkCollide = true;
            }       
        }
        
        //Check if kid is inside the basket
        if(this.checkCollide){
            this.kid.animations.stop();
            if(this.checkOverlap(this.basket,this.kid)){
                this.result = true;
            }else{
                this.result = false;
            }
            this.fly = true;
            this.checkCollide = false;
        }
        
        //Fly animation
        if(this.fly){
            
            if(this.flyCounter==0){
                if(this.result){
                    this.okSound.play();
                }else{
                    this.errorSound.play();
                }
            }
            
            this.flyCounter += 1;
            this.balloon.y -= 2;
            this.basket.y -= 2;
            
            if(this.result){
                this.kid.y -=2;
            }
            
            if(this.flyCounter>=this.flyEnd){
                if(this.result){
                    oneMove = true;
                }else{
                    oneMove = false;
                }
                game.state.start('mapCOne');
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
    viewMenuCircleOne: function(){
        this.beep.play();
        game.state.start('menuCOne');
    },
    viewHelp: function(){
        var pointer = game.add.image(this.endPosition, 490, 'pointer');
        pointer.anchor.setTo(0.5, 0);
        pointer.alpha = 0.8;
    },
    
    checkOverlap: function (spriteA, spriteB) {
        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();

        return Phaser.Rectangle.intersects(boundsA, boundsB);
    }
    
};
/****************************** END ****************************/
var endCircleOne={
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
        //game.add.text(670, 10, words.difficulty + ' ??', styleMenu).anchor.setTo(1,0);
        game.add.image(680, 10, 'pgbar');
        
        //School and trees
        game.add.sprite(600, 210 , 'school');
        game.add.sprite(30, 260 , 'tree1').scale.setTo(0.7);
        game.add.sprite(360, 210 , 'tree2').scale.setTo(0.8);
        
        //kid
        this.kid = game.add.sprite(0, -152 , 'kid');
        this.kid.anchor.setTo(0.5,0.5);
        this.kid.scale.setTo(0.8);
        var walk = this.kid.animations.add('walk', [0,1,2,3,4,5]);
        
        //globo
        this.balloon = game.add.sprite(0, -260, 'balloon');
        this.balloon.anchor.setTo(0.5,0.5);
        this.basket = game.add.sprite(0, -150, 'balloon_basket');
        this.basket.anchor.setTo(0.5,0.5);
    },

    update: function() {                
        if(this.kid.y>=460){
            this.kid.animations.play('walk', 6, true);
            if(this.kid.x<=700){
                this.kid.x += 2;
            }else{
                game.state.start('menu');
            }
        }else{
            this.balloon.y += 2;
            this.basket.y += 2;
            this.kid.y +=2;
            this.balloon.x += 1;
            this.basket.x += 1;
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
