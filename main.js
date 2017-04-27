//create our main state that will contain the game
var mainStage = {preload: function () {
//this function will be executed at the beginning
//thats where we load the images and sound
game.load.image()'bird', 'assets/bird.png');
game.load.image('pipe', 'assets/pipe.png');
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
//Create an empty group
this.pipes = game.add.group();
    //timer for pipes
    this.timer = game.time.events.loop(1500, this.addRowOfPipes, this);
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
    
//Add pipe
//add one pipe
addOnePipe:funtion(x, y){
//create a pipe at the position x and y
var pipe = game.add.sprite(x, y, 'pipe');
//Add pipe to group
this.pipes.add(pipe);
//enable physics
game.physics.arcade.enable(pipe);
//add velocity to the pipe to make it move left
pipe.body.velocity.x = -200;
//Automatically kill pipe when it is no longer visable
pipe.checkWorldBounds= true;
pipe.outfBoundsKill = true;
},
//Many pipes
addRowOf Pipes: function () {
//randomly pick a number between 1 and 5
//This will be the hole position in the pipe
var hole = math.floor(Math.random(1) * 5) + 1;  
//add 6 pipes
for (var i = 0; i < 8; i++)
if(i != hole && i != hole +1)
this.addOnePipe(400, i * 60 + 10);    
},
},
//initialise phaser, and create a 400px x 490px game
var game = new phaser.Game(400, 490)
//add the main state and call it main
game.state.add('main', mainState);
//start the state to actually start the game
game.state.start('main');}