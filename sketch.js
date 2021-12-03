var rua,ship;
var ruaImg,shipImg;
var edges
var solo2
var solo3

function preload(){
  ruaImg = loadImage("road_.png");
  shipImg1 = loadAnimation("Runner-1.png","runner-2.png",
                            "Runner-1.png","runner-2.png");
}

function setup(){
  createCanvas(400,400);
  background("gray");

  // Movendo o fundo
  rua=createSprite(200,200);
  rua.addImage(ruaImg);
  rua.velocitY = -5;
  rua.scale=1;


  ship = createSprite(200,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.1;
   
  solo2= createSprite(30,200,50,400);
  solo2.visible=false
solo3= createSprite(370,200,50,400)
solo3.visible=false
}

edges = createEdgeSprites();


function draw() {
  ship.x = World.mouseX;
  background(0);
  rua.velocityY = -3;

 //código para redefinir o fundo
 if(rua.y <0){
  rua.y = 500;
  

}
ship.collide(solo2)
 ship.collide(solo3)
  drawSprites();
}