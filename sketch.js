var office, freddy, bonnie, chica, fredbear
var freddyimg, bonnieimg, chicaimg, fredbearimg
var gamestate = 0
function preload(){
  office=loadImage("officefnaf.png")
  fredbearimg=loadImage("fredbearscare.jpg")
}
function setup(){
createCanvas(displayWidth, displayHeight)
officebg=createSprite(width/2,height/2,displayWidth,displayHeight)
officebg.addImage(office)
fredbear=createSprite(windowWidth/2,windowHeight/2,10,10)
fredbear.addImage(fredbearimg)
fredbear.scale=0.5
fredbear.visible=false
}
function draw(){
  background(255)
  drawSprites()
}