const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stone, rubber,hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
   hammer=new Hammer( 600,300)
   rubber=new Rubber(300,400,50)
   stone=new Stone(700,400,100,50)
   iron=new Iron(800,400)

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

   
    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    iron.display();
   

 
}
