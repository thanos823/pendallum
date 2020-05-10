const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
function setup(){
  createCanvas(400,700)
  engine = Engine.create()
  world = engine.world
  var options = {
    isStatic:true
  }
  holder = Bodies.rectangle(100,100,100,20,options)
  World.add(world,holder)
  var options1 = {
    restitution:1.0
  }
  pendallum = Bodies.circle(100,150,40,options1)
  World.add(world,pendallum)
  var options3 = {
    bodyA:holder,bodyB:pendallum,length:10,stiffness:0.001
  }
  var chain = Matter.Constraint.create(options3)
  World.add(world,chain)
}
function draw(){
  Engine.update(engine)
  background("white")
  rectMode(CENTER)
  rect(holder.position.x,holder.position.y,100,20)
  circle(pendallum.position.x,pendallum.position.y,40)
  line(holder.position.x,holder.position.y,pendallum.position.x,pendallum.position.y)
}