
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5
var ground;


function setup() {
	createCanvas(1000, 700);
	engine = Engine.create();
	world = engine.world;
  
 bob1=new bob(270,550,100);
 rope1=new Rope(bob1.body,ground.body,-50*2,3)
 bob2=new bob(350,550,100);
 rope2=new Rope(bob2.body,ground.body,-50*2,3)
 bob3=new bob(470,550,100);
 rope3=new Rope(bob3.body,ground.body,-50*2,3)
 bob4=new bob(550,550,100);
 rope4=new Rope(bob4.body,ground.body,-50*2,3)
 bob5=new bob(670,550,100);
 rope5=new Rope(bob5.body,ground.body,-50*2,3)

	ground=createSprite(500,100,700,50);
	ground.shapeColor=color("silver")

	

	var options={
		bodyA:bob1.body,
		bodyB:ground.body,
		stiffness: 0.04,
		lenght:10
	}

	var rope=constraint.create(options)
	World.add(world,rope);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  if (keyCode === UP_ARROW){
	  Matter.body.applyForce(bob1.body,bob1.body.position,{x:45,y:85})
  }
  drawSprites();

  strokeWeight(3);
  line(bob1.body.position.x,bob1.body.position.y,ground.body.position.x,ground.body.position.y);
 
}



