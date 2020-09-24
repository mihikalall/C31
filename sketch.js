const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var object 
var engine, world

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;

function setup() {
  createCanvas(400,800);
  createSprite(400, 200, 50, 50);
  engine = Engine.create()
    world = engine.world
    var options={
      isStatic: true
    }
    fill ("white");
    object = Bodies.rectangle(200,780,400,20,options)
    World.add(world,object)

  
}

function draw() {
  background(0,0,0); 
  Engine.update(engine)
  rectMode(CENTER) 
  rect(object.position.x,object.position.y,400,20);
  
}