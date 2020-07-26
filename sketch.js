var bullet, wall, speed, weight, thickness;

var damage;

function setup (){
  createCanvas(1000,400)


speed=random(55,90);
weight=random(400,1500);
thickness=random(22,83);

bullet = createSprite(20,200,10,20);

wall=createSprite(980,200,20,100);
bullet.velocityX=speed;

}

function draw (){
  background(0);
if (hasCollided(bullet,wall)){
bullet.velocityX=0
  damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

if (damage>10){
  wall.shapeColor=color(255,0,0);
}

if (damage<10){
  wall.shapeColor=color(0,255,0);
}



}

function hasCollided(Lbullet, Lwall){

bulletRightEdge = Lbullet.x + Lbullet.width;
  wallLeftEdge = Lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
return true;
  }
  return false;
}
drawSprites();
}