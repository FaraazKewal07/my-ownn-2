var score=0;

var leapo,meat, ground;
var leapoImg,meatImg;
var edges;

function preload(){
  leapoImg = loadImage("leapord.png");
  meatImg = loadImage("meat.png");
}

function setup() {
  createCanvas(400, 400);
  
  ground= createSprite(0,390,1000,30);
  ground.shapeColor="green";
  
  leapo = createSprite(200, 50);
  leapo.addImage(leapoImg);
  leapo.scale = 0.3;

  meat=createSprite(200,380);
  meat.addImage(grassImg);
  meat.scale=0.2;
}

function draw() {
  background("black");
  
  edges = createEdgeSprites();
  leapo.bounceOff(edges[0]);
  leapo.bounceOff(edges[1]);
  
  meat.velocityY=-5;
  
  if(keyDown("RIGHT_ARROW")){
    leapo.velocityX=4;
    }
  if(keyDown("LEFT_ARROW")){
    leapo.velocityX=-4;
  }
  
  stroke("black");
  textSize(22);
  fill("white");
  text("Score: " +score,10,200);
  
  if ( meat.isTouching(leapo)){
    meat.x=random(30,360);
   score = score + 10;
   meat.y=380;
  }
  
  if ( meat.y<0){
    background("red");
    textSize(30);
    fill("black");
    text("YOU LOST !",130,200);
    leapo.velocityX=0;
    leapo.velocityY=0;
  }
  
  drawSprites();
}