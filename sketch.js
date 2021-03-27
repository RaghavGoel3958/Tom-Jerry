var cat,catimage,catimage1,catimage2,catimage3,catimage4;
var mouse,mouseimage,mouseimage1,mouseimage2,mouseimage3,mouseimage4;
var garden,gardenimage;

function preload() {
    gardenimage=loadImage("images/garden.png");

    catimage1=loadImage("images/cat1.png");
    catimage2=loadAnimation("images/cat2.png","images/cat3.png");
    catimage4=loadAnimation("images/cat4.png");

    mouseimage1=loadImage("images/mouse1.png");
    mouseimage2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseimage4=loadAnimation("images/mouse4.png")

}

function setup(){
    createCanvas(1000,800);

    mouse=createSprite(200,650);
    mouse.addImage(mouseimage1);
    mouse.scale=0.14;

    cat=createSprite(800,650);
    cat.addImage(catimage1);
    cat.scale=0.2;
    //create tom and jerry sprites here

}

function draw() {

    background(gardenimage);
  
if(cat.x-mouse.x<(cat.width-mouse.width)/1){

cat.velocityX=0;
cat.addAnimation("cat_running",catimage4);
cat.changeAnimation("cat_running");

mouse.addAnimation("mouse_standing",mouseimage4);
mouse.changeAnimation("mouse_standing");

}

    drawSprites();
}


function keyPressed(){

if(keyCode === LEFT_ARROW){
mouse.addAnimation("mouse_teasing",mouseimage2)
mouse.frameDelay=30;
mouse.changeAnimation("mouse_teasing");

cat.velocityX=-5;
cat.addAnimation("cat_running",catimage2)
cat.changeAnimation("cat_running")

}

  //For moving and changing animation write code here


}
