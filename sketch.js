	
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5
var ground1;


function setup() {
	createCanvas(1000, 700);
	engine = Engine.create();
	world = engine.world;
 ground1= new Ground(470,250,20) 
 bob1=new bob(270,550,100);
 rope1=new Rope(bob1.body,ground1.body,-50*2,3)
 bob2=new bob(350,550,100);
 rope2=new Rope(bob2.body,ground1.body,-50*2,3)
 bob3=new bob(470,550,100);
 rope3=new Rope(bob3.body,ground1.body,-50*2,3)
 bob4=new bob(550,550,100);
 rope4=new Rope(bob4.body,ground1.body,-50*2,3)
 bob5=new bob(670,550,100);
 rope5=new Rope(bob5.body,ground1.body,-50*2,3)

	
	

	

	
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
rope1.display();	
	rope2.display();	
rope3.display();	
rope4.display();	
rope5.display();
ground1.display();	

	
	
	
	

  if (keyCode === UP_ARROW){
	  Matter.body.applyForce(bob1.body,bob1.body.position,{x:45,y:85})
  }
 
}



