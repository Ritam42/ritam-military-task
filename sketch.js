var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody, ground, redground, leftwall, rightwall;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic: true, friction: 0});
	World.add(world, packageBody);

	ground = new Ground(width/2, height-35, width,10); 
	redground = new Ground(400, 650, 200, 20);
	leftwall = new Ground(300, 610, 20, 100);
	rightwall = new Ground(500, 610, 20, 100); 
  
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  ground.display();
  packageSprite.display();
  helicopterSprite.display();
  redground.display();
  leftwall.display();
  rightwall.display();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	 Body.setStatic(packageBody, false);
  }
}



