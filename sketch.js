
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var ball;
var dustbinObj1;
function preload(){
	dustbinObj1=loadImage("dustbingreen.png");
}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	
ball=new Ball(100,300,50);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
 

  groundObject.display();
  dustbinObj.display();
  image(dustbinObj1,1000,350,360,350);
ball.display();
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:180,y:-180});
	}
}
