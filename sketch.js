const Bodies=Matter.Bodies;
const World=Matter.World;
var player1,obstacle1,obstacle2,obstacle3,obstacle4;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  //In this game, the player has to evade the obstacles to reach the crown. 

  player1=new Player(400,200,20,20)
obstacle1=new Obstacles(200,200,20,20)
obstacle2=new Obstacles(210,210,20,20)
obstacle3=new Obstacles(220,220,20,20)
obstacle4=new Obstacles(230,230,20,20)

  drawSprites();
}