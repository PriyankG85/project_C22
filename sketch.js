var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
var player;
function preload()
{
 
}

function setup() {
  createCanvas(1366,700);
  carGroup1 = new Group();
  logGroup1 = new Group();
}

function draw() {
  background("skyblue");
  // Grasses
  for(var i=0; i<6; i++)
  {
    var bttomGrass1 = createSprite(683, height-50-(i*400), width, grassHeight);
    if (i%2===0)
    {
      var road = createSprite(683, height-150-(i*400), width, 300,)
      road.shapeColor = "black";
    }
    bttomGrass1.shapeColor = "grey";
  }
  for(var i=0; i<40; i++)
  {
    cars = new Car(2);
    carGroup1.add(cars.spt);
    logs = new Log(-2);
    logGroup1.add(logs.spt);
  }
  //Making logs reappear
  for(i=1;i<logGroup1.length;i++)
  {
    if (logGroup1[i].x<0)
    {
      logGroup1[i].x = width;
    }
  }
  // Making cars reappear
  for(i=1;i<carGroup1.length;i++)
  {
    if (carGroup1[i].x<0)
    {
      carGroup1[i].x = width;
      carGroup1[i].x = -(width);
    }
  }

  // Creating Player
  player = new Player(width/2, height-25);
  
  // Function to move the player with the help of arrow keys
  keyPressed();

  translate(0, -player.spt.y+height-150);

  drawSprites();
}
function keyPressed()
{
  if (keyCode == UP_ARROW)
  {
    player.move(0, -2);
  }
  else if (keyCode == DOWN_ARROW)
  {
    player.move(0, 2);
  }
  else if (keyCode == LEFT_ARROW)
  {
    player.move(-2, 0);
  }
  else if (keyCode == RIGHT_ARROW)
  {
    player.move(2, 0);
  }
}

