//create our main state that will contain the game
var mainStage = {preload: function () {
    //this function will be executed at the beginning
    //thats where we load the images and sound
},
create: function(){
//This function is called after the preload function
    //here we setup the game, display sprites, etc.
},
                 {
update: function()
//
                }

                }
                //initialise phaser, and create a 400px x 490px game
                var game = new phaser.Game(400, 490)
                //add the main state and call it main
                game.state.add('main', mainState);
//start the state to actually start the game
game.state.start('main');