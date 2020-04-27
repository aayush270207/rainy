const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var rain;



function setup() {
  createCanvas(800,400);
  engine=Engine.create;
  world=engine.world;

  rain = new Rain(200,400);
}

function draw() {
  background(0,0,0);  
  Engine.update=engine;
  console.log(rain.body.position.x);
  console.log(rain.body.position.y);
  rain.display();
  drawSprites();
}