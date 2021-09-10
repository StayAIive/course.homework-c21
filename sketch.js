
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

var ground;

var leftwall,rightwall

function preload() {

}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(windowWidth / 2, windowHeight * 3 / 4, windowWidth, 20);
	leftwall = new Ground(1000,windowHeight * 3 / 4 - 40,20,100);
	rightwall = new Ground (1400, windowHeight *3/4 - 40, 20,100);
	//Create the Bodies Here.
	var options = {
		restitution: 0.3,
		friction:0,
		density:1.2
	}


	ball = Bodies.circle(200, 100, 20, options);
	World.add(world, ball);

	ellipseMode(RADIUS);

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background("black");

	ground.show();
	leftwall.show();
	rightwall.show();

	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:30,y:-50});
	}


	fill ("white");
	ellipse(ball.position.x, ball.position.y, 20);

	Engine.update(engine);

	drawSprites();

}




