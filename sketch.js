
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Ground(400,50,500,40)
  
  ball1 = new Ball(400,450,50)
  rope1= new Slingshot(ball1.body,roof.body,0,0)
  ball2 = new Ball(500,450,50)
  rope2 = new Slingshot(ball2.body,roof.body,100,0)
  ball3 = new Ball(300,450,50)
  rope3 = new Slingshot(ball3.body,roof.body,-100,0)
  ball4 = new Ball(600,450,50)
  rope4 = new Slingshot(ball4.body,roof.body,200,0)
  ball5 = new Ball(200,450,50)
  rope5 = new Slingshot(ball5.body,roof.body,-200,0)
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  roof.display()
  ball1.display()
  rope1.display()
  ball2.display()
  rope2.display()
  ball3.display()
  rope3.display()
  ball4.display()
  rope4.display()
  ball5.display()
  rope5.display()
  
  

 
}

function keyPressed(){
  if(keyCode===RIGHT_ARROW){
    Matter.Body.applyForce(ball4.body,ball4.body.position,{x:100,y:-50})
  }
}



