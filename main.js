//create our main state that will contain the game
var mainStage = {preload: function () {
//this function will be executed at the beginning
//thats where we load the images and sound
},
create: function(){
//This function is called after the preload function
//here we setup the game, display sprites, etc.    
//Change the background colour to blue in the game
game.stage.backgroundColor = '71c5cf';    
//set the physics for the game
game.physics.startSystem(Phaser.Physics.ARCADE);
//Display the bird at the possition of x=100 and y=245
this.bird = game.add.sprite(100, 245, 'bird');
//add the physics to the bird
//Needed for: movement, gravity, collisions, ect.
game.physiics.arcade.enable(this.bird);
//Add gravity to the bird to make it fall
this.bird.body.gravity.y = 1000;
//call 'jump' fuction when the spacebar is pressed
var spaceBar = game.input.keyboard.addKey(
Phaser.Keyboard.SPACEBAR);
spaceBar.onDown.add(this.jump, this);
},
update: function(){
//this functionn is called 60 times per second
//thats where we load the images and sound
//load the bird sprite
if(this.bird.y <0 || this.bird.y > 490)
this.restartGame();
},
jump: function() {
this.bird.velocity.y = -350;
},
//restart the game
restartGame function() {
game,state.start('main');
},
game.load.image()'bird', 'assets/bird.png');
},
//initialise phaser, and create a 400px x 490px game
var game = new phaser.Game(400, 490)
//add the main state and call it main
game.state.add('main', mainState);
//start the state to actually start the game
game.state.start('main');}