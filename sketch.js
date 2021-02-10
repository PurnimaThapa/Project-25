
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,paper1
var ground
var bin,bin1


function preload()
{
	bin1.loadImage("dustbin.png")
	paper1.loadImage("paper.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper (100,100,70)
    paper.addImage("paper1")
	ground = new Ground (400,height,800,20)
	bin = new Dustbin (400,650,180,20)
	bin.addImage("bin1")

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display()
  ground.display()
  bin.display()
 
  keyPressed()
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
	}
}


