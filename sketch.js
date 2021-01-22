var mouse, mouseImg
var cat1, cat5, cat3, catImg


function preload() {
    //load the images here
   catImg = loadImage(" cat2.png")
   cat1 = loadImage("cat1.png")
   cat3 = loadImage("cat3.png")
   mouseImg = loadAmimation("mouse1.png, mouse2.png, mouse3.png, mouse4.png")
  backImg = loadImage ("garden.png")
}

function setup(){
    createCanvas(400,600);
    //create tom and jerry sprites here
    var background = createSprite(0, 0 ,400, 600)
    var cat = createSprite(0,0, 200, 300)
    var mouse = createSprite(0,0, 300, 350)
   
 }

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
   if(cat.x - mouse.x < (cat.width - mouse.width)/2)
  {
    cat.velocityX = 0; 
    mouse.velocityX = 0
    cat.addAnimation(cat3)
  }

    drawSprites();
    text(mouseX + ',' + mouseY, 10, 45)
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation(catImg)
  }

}
