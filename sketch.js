
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,basket,ground;
var engine,world

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100,200,40);

	basket = new Basket(1000,450,200,20);
basket1 = new Basket(900,400,20,100);
	basket2 = new Basket(1100,400,20,100);

	ground = new Ground(width/2,470,width,20);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  paper.display();
  basket.display();
  basket1.display();
  basket2.display();
  ground.display();


}

function keyPressed (){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:85 , y:-85});
	}
}