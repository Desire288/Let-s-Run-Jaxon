
function preload(){
  //pre-load images
  load.image(path.png)
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImg(pathImg);
  path.velocityY=4;
  path.scale=1.2;
}

function draw() {
  background(0);

}
