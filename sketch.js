var bullet1, bullet2, bullet3, weight, speed, wall1, wall2, wall3, thickness,wall;

function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  bullet1 = createSprite(50,100,50,5);
  bullet2 = createSprite(50,200,50,5);
  bullet3 = createSprite(50,300,50,5);
  wall1 = createSprite(1200,100,thickness,80);
  wall2 = createSprite(1200,200,thickness,80);
  wall3 = createSprite(1200,300,thickness,80);

   line1 = createSprite(800,150,1600,5);
   line2 = createSprite(800,250,1600,5);
   line3 = createSprite(800,350,1600,5);
   line4 = createSprite(800,50,1600,5);

  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(22,80); 

  bullet1.velocityX = speed;
  bullet2.velocityX = speed;
  bullet3.velocityX = speed;

}


function draw() {
  background("black");

  bullet1.shapeColor = "blue";
  bullet2.shapeColor = "blue";
  bullet3.shapeColor = "blue";
  wall1.shapeColor = "white";
  wall2.shapeColor = "white";
  wall3.shapeColor = "white";
  line1.shapeColor = "white"; 
  line2.shapeColor = "white"; 
  line3.shapeColor = "white";  
  line4.shapeColor = "white";

  if(wall1.x - bullet1.x < (wall1.width/2 + bullet1.width)/2){
   bullet1.velocityX = 0;
   var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
   if(damage > 10){
      wall1.shapeColor = "red";
      bullet1.visible = true;     
   }else if(damage < 10) {
      wall1.shapeColor = "green";
      bullet1.visible = true;  
   }
 }

 if(wall2.x - bullet2.x < (wall2.width/2 + bullet2.width)/2){
   bullet2.velocityX = 0;
   var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
   
   if(damage > 10){
     wall2.shapeColor = "green";   
     
     bullet2.visible = true;
   }

   if(damage < 10){
     wall2.shapeColor = "red";  

     bullet2.visible = true;
   }
 }

 if(wall3.x - bullet3.x < (wall3.width/2 + bullet3.width)/2){
  bullet3.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
  
  if(damage > 10){
     wall3.shapeColor = "pink"; 
     bullet3.visible = true;    
  } 
  
  if(damage < 10) {
     wall3.shapeColor = "red";
     bullet3.visible = true;
  }
}


  drawSprites();
}