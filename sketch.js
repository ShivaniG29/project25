
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   
	ground = new Ground(400,550,800,20)
    leftside = new Dustbin(535,490,20,100);
	rightside = new Dustbin(705,490,20,100);
	bottom = new Dustbin(620,530,150,20);
	paper = new Paper(100,100,25);
	
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  //leftside.display();
  //rightside.display();
  bottom.display();
  paper.display();

  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
     Matter.Body.applyForce(paper.body,paper.position,{x:70,y:-70})
	}
}

