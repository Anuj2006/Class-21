var fixRect, movingRect;
var gameObject1, gameObject2,gameObject3;
function setup() {
  createCanvas(800,400);
  fixRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(600,200,50,20);
  fixRect.shapeColor="green";
  movingRect.shapeColor="green";

  gameObject1=createSprite(100,100,60,60);
  gameObject1.shapeColor="red";

  gameObject2=createSprite(200,100,60,60);
  gameObject2.shapeColor="red";
  gameObject2.velocityX=1;

  gameObject3=createSprite(300,100,60,60);
  gameObject3.shapeColor="yellow";
  gameObject3.velocityX=-1;


}

function draw() {
  background(2,88,109);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  bounceOff(gameObject2,gameObject3);
   if(isTouching(movingRect,gameObject1)){
      
    gameObject1.shapeColor=(random(20,70),random(100,200),random(150,250));
    movingRect.shapeColor=(random(45,60),random(250,200),random(190,250));
  }
  else{
     
    gameObject1.shapeColor="green";
    movingRect.shapeColor="green";
  }
  
   
  drawSprites();
}

