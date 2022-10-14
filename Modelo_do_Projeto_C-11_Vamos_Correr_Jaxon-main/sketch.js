var oi=0
var  j
var jl
var p
var b
var pl
var bl
var bls
function preload(){
  //imagens pré-carregadas
  j= loadAnimation("j.png","jl.png")
  p= loadImage("path.png")
  
  b= loadImage("bomb.png")
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  pl=createSprite(200,200)
  jl=createSprite(200,200)
jl.addAnimation("j",j)
jl.scale=0.1
bls=new Group ()
pl.addImage("p",p)
}

function draw() {
 


if (bls.collide(jl)) {
  background("black")
text("perdeu",200,200)
oi=1
}
if (oi==0) { 
  background(0);
  jl.x=World.mouseX
  drawSprites()
  pl.velocityY=5
if (pl.y>400) {
  pl.y=0
}
if (frameCount%50==0) {
 bl=createSprite(random(0,400),0)
bl.addImage("b",b)
bl.velocityY=10
  bl.scale=0.2
bls.add(bl)

}
}
}
