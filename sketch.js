var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var Lrect,Mrect,Rrect,Lrectbody,Rrectbody,Mrectbody;
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

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 //Creating Red Zone
	Lrect = createSprite(290,605,20,100);
	Lrect.shapeColor = 'Red';
	Rrect = createSprite(510,605,20,100);
	Rrect.shapeColor = 'Red';
	Mrect = createSprite(400,645,200,20);
	Mrect.shapeColor = 'Red';

	
	var opt ={
        isStatic: true
    }
	 Lrect = Bodies.rectangle(290,605,20,100,opt);
	 World.add(world,Lrect);

	 Rrect = Bodies.rectangle(510,605,20,100,opt);
	 World.add(world,Rrect);

	 Mrect = Bodies.rectangle(400,635,200,20,opt);
	 World.add(world,Mrect);



	Engine.run(engine);

	//function Keypressed
  	keyPressed();
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Body.setStatic(packageBody,false);
	packageBody.restitution= 0.7;
  }
}



