<!DOCTYPE html>  
<html>
    <head>  
        <meta charset="utf-8" />
        <title> Math Fraction - Educa Apurímac </title>
        <script type="text/javascript" src="js/phaser.min.js"></script>
        <script type="text/javascript" src="js/boot.js"></script>
        <script type="text/javascript" src="js/load.js"></script>
        <script type="text/javascript" src="js/welcome.js"></script>
        <script type="text/javascript" src="js/menu.js"></script>
        <script type="text/javascript" src="js/uno.js"></script>
        <script type="text/javascript" src="js/dos.js"></script>
    </head>

    <body>

    </body>  
    <script type="text/javascript">
        // Initialize the game and start our state
        var game = new Phaser.Game(900, 600);
        game.global = {
         unopos : 0,
         unomov : false,
         dospos : 0,
         dosmov : false
        }
        game.state.add('boot', bootState);  
        game.state.add('load', loadState);  
        game.state.add('welcome', welcomeState);  
        game.state.add('menu', menuState);   
        game.state.add('uno', mapaUno);   
        game.state.add('unouno', unoUno);  
        game.state.add('unofinal', unoFinal);  
        game.state.add('dos', mapaDos);   
        game.state.add('unodos', unoDos);  
        game.state.add('dosfinal', dosFinal);  
        game.state.start('boot');
    </script>
</html>