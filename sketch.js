let snake;
let rez = 20;
let food;
let w;
let h;
var s=5;

let ellipseObjects = [];
let numEllipses = 10;

function setup() {
  createCanvas(windowWidth, windoHeight);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(s);
  snake = new Snake();
  foodLocation();

  // ellipses
  for (let i = 0; i < numEllipses; i++){
   ellipseObjects[i] = new Ellipse(i*20);
}
}
function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (key == ' ') {
    print("here");
    snake.grow();
  }

}

function draw() {

   for (let i = 0; i < numEllipses; i++){
    // store each ellipse in the ellipseObjects array
   ellipseObjects[i].display();
   ellipseObjects[i].grow();
  }

  scale(rez);
 background(140, 140, 20, 50);
  if (snake.eat(food)) {
    foodLocation();
    s=s+.5;
    print(s);
    frameRate(s);
  }
  snake.update();
  snake.show();


  if (snake.endGame()) {

    print("GAME OVER");
    background(255, 0, 0);
    textAlign(CENTER, CENTER);

    textStyle(BOLD);
    textSize(2);
    text('GAME OVER', windowWidth/2, windoHeight/2);

    noLoop();
  }

  noStroke();
  fill(255, 0, 0);
  //rect(food.x, food.y, 1, 1);
  ellipse(food.x, food.y, 1, 1);


}
