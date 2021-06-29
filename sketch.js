var background, backgroundImg;
var cat, catImg;
var mouse, mouseImg;
function preload() {
    backgroundImg = loadImage("images/garden.png");
    catImg = loadImage("images/cat1.png");
    mouseImg = loadImage("images/mouse2.png");
    catImg1 = loadAnimation("images/cat3.png", "images/cat2.png");
    mouseImg1 = loadImage("images/mouse3.png");
    catImg2 = loadImage("images/cat4.png");
    mouseImg2 = loadImage("images/mouse1.png");
}

function setup(){
    createCanvas(600, 600);
    
    bg = createSprite(300, 300, 50, 50);
    bg.addImage(backgroundImg);

    cat = createSprite(500, 500, 10, 10);
    cat.addImage(catImg);
    cat.scale = 0.13;

    mouse = createSprite(100, 500, 10, 10);
    mouse.addImage(mouseImg);
    mouse.scale = 0.13;


    

}

function draw() {

    background(225);

    if (cat.x - mouse.x < cat.width/2 + cat.width/2
        && mouse.x - cat.x < mouse.width/2 + cat.width/2
        && cat.y - mouse.y < cat.height/2 + mouse.height/2
        && mouse.y - cat.y < mouse.width/2 + cat.width/2) {
            cat.addImage("catHappy", catImg2);
            mouse.addImage("mouseHappy", mouseImg2);
        }
        else{
            cat.addImage(catImg1);
            mouse.addImage(mouseImg1);
        }


    keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW) {
      mouse.addAnimation("mouseTeasing", mouseImg1)
      mouse.changeAnimation("mouseTeasing");

  }

  if (keyCode === LEFT_ARROW) {
      cat.addAnimation("catApproaching", catImg1);
      cat.changeAnimation("catApproaching");
      cat.velocityX = -2;
  }




}
