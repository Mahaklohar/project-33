var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
// var particles = [];
var plinkos = [];
var divisions = []

var divisionHeight=300;
var score =0;

var my_particle
var turn = 0;

var gameState = "Play";



// Function setup is here: 
function setup() 
{
  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;

// Create the ground: 
  ground = new Ground(width/2,height,width,20);

// Create the divisions: 
   for (var k = 0; k <=width; k = k + 80)
   {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

// Create the plinkos: 
    for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
       plinkos.push(new Plinko(j,375));
    }


}
 
// Function Draw is here: 
function draw() {
  
  background("black");
  gameState = "Play"

  //textSize(20)
 //text("Score : "+score,20,30);

  Engine.update(engine);

// Display the ground: 
  ground.display();
 
// Display the ground:  
  for (var i = 0; i < plinkos.length; i++) 
  { 
     plinkos[i].display();
  }

// Display the divisions: 
  for (var k = 0; k < divisions.length; k++) 
  {
     divisions[k].display();
  }

// The text for Score: 
     textSize(25);
     stroke("Black");
     strokeWeight(3);
     fill("White");
     text("Score = "+score, 30, 50);

// The points for divisions: 

// 500 as a score: 
  text("500", 20, 760);
  text("500", 100, 760);
  text("500", 180, 760);
  text("500", 260, 760);

// 100 as a score:
  text("100", 340, 760);
  text("100", 420, 760);
  text("100", 500, 760);

// 200 as a score: 
  text("200", 580, 760);
  text("200", 660, 760);
  text("200", 740, 760);

  if(my_particle!= null && gameState === "Play")
  {
    my_particle.display()

    if(my_particle.body.position.y>760)
      {
        if(my_particle.body.position.x<300){
          score = score+500
          //my_particle = null;
          /*if( turn >= 5){
            gameState = "End";
          }*/
        }

        if(my_particle.body.position.x<550 && my_particle.body.position.x>301 ){
          score = score+100
         // my_particle = null;
          /*if( turn >= 5){
            gameState = "End";
          }*/
        }

        if(my_particle.body.position.x<799 && my_particle.body.position.x>551 ){
          score = score+200
          //my_particle = null;
          
        }

        my_particle = null;
        

      }

    }

    if( turn>= 5){
      gameState = "End";
      
      textSize(50);
      fill("red");
      text("Game Over", 300, 430);
      console.log("this condition exists")

    }
        
}
    
     
if(gameState === "Play"){
function mousePressed(){

    turn = turn+1;
    console.log(turn)
    my_particle = new Particle(mouseX, 10); 
}
}
