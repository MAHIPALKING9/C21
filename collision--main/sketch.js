
var fixedRect, movingRect;
var gameObject1, gameObject2;
var car,ball;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor -= "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  car = createSprite(100,50,60,70);
  car.shapecolor="cyan";

  ball= createSprite(600,80,90,100);
  ball.shapeColor="yellow";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,car)){
    movingRect.shapeColor = "blue";
    car.shapeColor = "blue";
  }
  
  else {
    movingRect.shapeColor = "green";
  
    car.shapeColor = "cyan"
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}


