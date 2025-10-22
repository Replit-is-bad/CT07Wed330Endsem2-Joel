let box;


function setup() {
  // Set up the canvas
  new Canvas(800, 400);
  background(220);
  world.gravity.y = 10;

  // box sprite
  box = new Sprite();
  box.x = 100;
  box.y = 100;
  box.w = 100;
  box.h = 50;
  box.color = 'blue';
  box.collider = "dynamic";
  box.vel.y =3;

}

function draw(  ) {
    background(220);

    if(kb.presses('space') || mouse.presses()) {
        box.vel.y = -5;
        box.sleeping = false;
    }
}