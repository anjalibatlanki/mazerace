
var block1, block2, block3;
var game;
var database;
var gameState = 0;
var player, form;
var playerCount, allPlayers;
var maze1, maze2, maze3, maze4, maze5, maze6, maze7, maze8, maze9, maze10;
var player1, player2, player3, players;
var player1img, player2img, player3img;

function preload(){
player1img = loadImage("monkey1.png");
player2img = loadImage("monkey2.png");
player3img = loadImage("monkey3.png");

}

function setup() {
  createCanvas(800,900);

  database = firebase.database();

  maze1 = new Maze(100,600,40,100);
  maze2 = new Maze(200, 590, 20, 110);
  maze3 = new Maze(270, 590, 50, 60);
  maze4 = new Maze(370, 590, 50, 110);
  maze5 = new Maze(470, 530, 50, 70);
  maze6 = new Maze(470, 650 , 50, 50);
  maze7 = new Maze(570, 0, 20, 700);
  
  maze8 = new Maze(420, 478, 100, 50);
  maze9 = new Maze(265, 478, 100, 50);
  maze10 = new Maze(130, 478, 70, 50);

  maze11 = new Maze(30, 0, 20, 700);

  maze12 = new Maze(50, 370, 100, 50);
  maze13 = new Maze(470, 370, 100, 50);

  maze14 = new Maze(370, 315 ,50, 100);
  maze15 = new Maze(200, 370, 100, 50);
  maze16 = new Maze(250, 270, 50, 100);
  maze17 = new Maze(100,210, 100, 100);

  maze18 = new Maze(470, 270, 50, 50);
  maze19 = new Maze(380, 217, 100, 50);

  maze20 = new Maze(200, 210, 100, 10);
  
  maze21 = new Maze(50,120, 50,50);
  maze22 = new Maze(150, 80, 50, 90);
  maze23 = new Maze(200, 160, 200, 10);
  maze24 = new Maze(470, 110, 100, 60);
  maze25 = new Maze(100,40, 100, 40);
  maze26 = new Maze(250, 50, 50, 80);
  maze27 = new Maze(300, 50, 200, 20);
  maze28 = new Maze(340, 110, 130, 10);
  maze29 = new Maze(190, 0, 10,40);
  maze30 = new Maze(200, 50, 50, 10);
  maze31 = new Maze(520, 220, 50,10);
  maze32 = new Maze(470, 170, 10, 45);
  
  maze33 = new Maze(250, 0, 320, 7);
  maze34 = new Maze(50, 0 , 140, 7);
  
  maze35 = new Maze(50, 690, 50, 10);
  
  maze36 = new Maze(220, 690, 100, 10);
  maze37 = new Maze(520, 690, 50, 10);
 

  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background("black");
  if(playerCount === 3){
  game.update(1);
  }
  if(gameState === 1){
  maze1.display();
  maze2.display();
  maze3.display();
  maze4.display();
  maze5.display();
  maze6.display();
  maze7.display();
  maze8.display();
  maze9.display();
  maze10.display();
  maze11.display();
  maze12.display();
  maze13.display();
  maze14.display();
  maze15.display();
  maze16.display();
  maze17.display();
  maze18.display();
  maze19.display();
  maze20.display();
  maze21.display();
  maze22.display();
  maze23.display();
  maze24.display();
  maze25.display();
  maze26.display();
  maze27.display();
  maze28.display();
  maze29.display();
  maze30.display();
  maze31.display();
  maze32.display();
  maze33.display();
  maze34.display();
  maze35.display();
  maze36.display();
  maze37.display();
  
  game.play();
  
  }
  drawSprites();
  
}

