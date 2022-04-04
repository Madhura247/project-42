// Declared iss, spacecraft and hasDocked variables.
var iss;
var spacecraft1;
var hasDocked = false;
// Assigned false to hasDocked variable.

function preload() {
  //Preloaded all the required images for the project in preload( ).
  iss_img = loadImage("Images/iss.png");
  back_img = loadImage("Images/spacebg.jpg");
  sc1 = loadImage("Images/spacecraft1.png");
  sc2 = loadImage("Images/spacecraft2.png");
  sc3 = loadImage("Images/spacecraft3.png");
  sc4 = loadImage("Images/spacecraft4.png");
}

function setup() {
  createCanvas(800,400);

  // Created iss sprite in setup( ):
  iss = createSprite(20, 20, 400, 200);
  iss.addImage(iss_img);
  iss.scale=0.5;

  // Created spacecraft sprite in setup( )
  spacecraft = createSprite(330,130);
  spacecraft.addImage(sc1);
  spacecraft.scale =0.5;
}

function draw() {
  // Added a background image to canvas.
  background(back_img);

  if (!hasDocked) {
    // Written code to set random x position for spacecraft)
    spacecraft.x=random(200, 600);

    if (keyDown("LEFT")) {
      spacecraft.changeImage(sc3);
      spacecraft.x-=10;
    }

    if (keyDown("RIGHT")) {
      spacecraft.changeImage(sc4);
      spacecraft.x+=10;
    }

    if (keyDown("DOWN")) {
      spacecraft.changeImage(sc2);
    }

    if (keyDown("UP_ARROW")) {
      spacecraft.y-=10;
    }

    if (spacecraft.x === iss.x && spacecraft.y === iss.y) {
        hasDocked = true;
        text("Docking Successful!", 400, 200);
    }
  }

  drawSprites();
}