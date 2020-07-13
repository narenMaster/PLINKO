const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;
Engine.run(engine);

  ground = new Ground(200,300,20,330);
}

function draw() {
  background(255,255,255);  
  //drawSprites();

  ground.display();
}