var database, position;
var balloon;
var bgImg, balloonImg1, balloonImg2, balloonImg3;

function preload() {
  bgImg = loadImage('pro-C35 images/Hot Air Ballon-01.png');

  balloonImg1 = loadImage('pro-C35 images/Hot Air Ballon-02.png');
  ballooonImg2 = loadImage('pro-C35 images/Hot Air Ballon-03.png');
  balloonImg3 = loadImage('pro-C35 images/Hot Air Ballon-04.png');

  balloonAnimation = loadAnimation(
    'pro-C35 images/Hot Air Ballon-02.png',
    'pro-C35 images/Hot Air Ballon-02.png',
    'pro-C35 images/Hot Air Ballon-02.png',
    'pro-C35 images/Hot Air Ballon-03.png',
    'pro-C35 images/Hot Air Ballon-03.png',
    'pro-C35 images/Hot Air Ballon-03.png',
    'pro-C35 images/Hot Air Ballon-04.png',
    'pro-C35 images/Hot Air Ballon-04.png',
    'pro-C35 images/Hot Air Ballon-04.png'
  );
}


function setup() {
  database = firebase.database();
  createCanvas(800, 400);
  balloon = createSprite(400, 200);
  balloon.addAnimation("HotAirBalloon", balloonImg1);
  // balloon.addAnimation("HotAirBalloon", balloonAnimation);
  balloon.scale = 0.5;

  var balloonPosition = database.ref('balloon/height');
  balloonPosition.on("value", readHeight, showError);

}

function draw() {
  background(bgImg);
  if (height !== undefined) {
    if (keyDown(UP_ARROW)) {
      updateHeight(0, -10);
      balloon.addAnimation("HotAirBalloon", balloonAnimation);
      balloon.scale -= 0.005;
    }
    if (keyDown(DOWN_ARROW)) {
      updateHeight(0, 10);
      balloon.addAnimation("HotAirBalloon", balloonAnimation);
      balloon.scale += 0.005;
    }
    if (keyDown(LEFT_ARROW)) {
      updateHeight(-10, 0);
      balloon.addAnimation("HotAirBalloon", balloonAnimation);
      
    }
    if (keyDown(RIGHT_ARROW)) {
      updateHeight(10, 0);
      balloon.addAnimation("HotAirBalloon", balloonAnimation);
      
    }
  }
  drawSprites();
}