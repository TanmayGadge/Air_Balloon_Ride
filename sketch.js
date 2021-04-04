var database, position;
var balloon;
var bgImg, balloonImg1 ,balloonImg2, balloonImg3;

function preload(){
  bgImg = loadImage('pro-C35 images/Hot Air Ballon-01.png');

  balloonImg1 = loadImage('pro-C35 images/Hot Air Ballon-02.png');
  ballooonImg2 = loadImage('pro-C35 images/Hot Air Ballon-03.png');
  balloonImg3 = loadImage('pro-C35 images/Hot Air Ballon-04.png');
  
  balloonAnimation = loadAnimation('pro-C35 images/Hot Air Ballon-02.png',
  'pro-C35 images/Hot Air Ballon-03.png',
  'pro-C35 images/Hot Air Ballon-04.png');
}


function setup() {
  createCanvas(800,400);

  var balloonPosition = database.ref('balloon/height');
  balloonPosition.on("value", readPosition, showError);

  balloon = createSprite();

}

function draw() {
  background(bgImg);

  if(keyDown(UP_ARROW)){
    updateHeight(0, -10);
    balloon.addAnimation("HotAirBalloon",balloonAnimation);
    balloon.scale -= 0.01;
  }

}