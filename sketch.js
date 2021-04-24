var PLAY = 1;
var END = 0;
var gameState = PLAY;
var ironmanImg,alien4,loki,alienImg;
var alienGroup, alien1,alien2,alien3,alien;
var score;
var laser,laserImg;
var laserGroup;
var score;

function preload(){
  ironmanImg = loadImage("images/ironman-1.jpg");
  alienImg = loadImage("images/Fanchara_xenomorph_blackmetallic_color.jpeg");
  laserImg = loadImage("images/red-laser-beam-png-png-download-colorfulness-11562893668g2hzexg23n.png");
}

function setup(){

createCanvas(windowWidth,windowHeight);
ironman = createSprite(100,100,30,30);
loki = createSprite(200,200,30,30);

ironman.setCollider("rectangle",45,-13,20,20);
ironman.debug = true;

score = 0;

alienGroup = new Group();
laserGroup = new Group();

}


function draw() {
background("blue");
  
spawnAliens();

ironman.addImage(ironmanImg);


if(keyDown(UP_ARROW)){
  ironman.y = ironman.y-5;
}

if(keyDown(DOWN_ARROW)){
  ironman.y = ironman.y+5;
}

if(keyDown(LEFT_ARROW)){
  ironman.x = ironman.x-5;
}

if(keyDown(RIGHT_ARROW)){
  ironman.x = ironman.x+5;
}

if(keyDown("space")){
  Laser()
}

if(laserGroup.isTouching(alienGroup)){
  alienGroup.destroyEach();
  laserGroup.destroyEach();
  score = score+1;
}


if(alienGroup.isTouching(ironman)){
  gameState===END
}

text("kills = "+ score,800,20)

drawSprites();
}

function spawnAliens(){
if(frameCount%50===0){
  var alien = createSprite(windowWidth,350,20,20);
   alien.addImage(alienImg);
  alien.scale = 0.1;
  alien.y = Math.round(random(100,1000));
  alien.velocityX = -4;
  var rand = Math.round(random(1,4));
  switch(rand){
    case 1:alien1;
    break;
    case 2:alien2;
    break;
    case 3:alien3;
    break;
    case 4:alien4;
    default:break;
  }
  alien.lifetime = 400;
}
  alienGroup.add(alien);
}

//function mousePressed(){
//  laser.visibility = true;
//  laser();
//}

//function mouseReleased(){


//}

function Laser(){

  var laser = createSprite(300,500,20,20);
  laser.addImage(laserImg);
  laser.scale = 0.1;
  laser.x = ironman.x;
  laser.y = ironman.y;
  laser.velocityX = 10;
  laser.lifetime = 800;
  laserGroup.add(laser);




}