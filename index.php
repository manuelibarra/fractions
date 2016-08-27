<!DOCTYPE html>  
<html>
    <head>  
        <meta charset="utf-8" />
        <title> Fractions </title>
        <script type="text/javascript" src="js/phaser.min.js"></script>
        <script type="text/javascript" src="js/boot.js"></script>
        <script type="text/javascript" src="js/menu.js"></script>
        <script type="text/javascript" src="js/circleOne.js"></script>
    </head>

    <body>
        <center>
            <div id="fractions-game" style="padding: 0 auto 0 auto;"></div>
        </center>
    </body>  
    
    <script type="text/javascript">
        // Initialize the game
        var game = new Phaser.Game(900, 600, Phaser.CANVAS, 'fractions-game');
        
        //global parameters
        game.global = {
         lang : "",
            // Game One 
         onePosition : 0, //Map position
         oneMove : false, //Move to next position
         oneDifficulty : 0, //From one to five 
         oneOperator: "", //Plus, Minus, Mixed
         showLabel: false, //Show block label
         oneShape : "" //Circle, square
         
        }
        //adding game states (scenes)
        game.state.add('boot', bootState);  
        game.state.add('load', loadState);
        game.state.add('menu', menuState);   
        game.state.add('menuCOne', menuCircleOne);
        game.state.add('mapCOne', mapCircleOne);
        game.state.add('gameCOne', gameCircleOne);
        game.state.add('endCOne', endCircleOne);
        //starting to boot game
        game.state.start('boot');
    </script>
</html>