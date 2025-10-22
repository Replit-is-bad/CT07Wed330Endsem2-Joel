let bird;
let background, birdImg;

function preload(){
    bird = loadImage ('assets/bird.png');
    background = loadImage ('assets/background.png');
}

function setup(){
    new Canvas(400, 600);
    bird = new Sprite();
    bird.x = width/2;
    bird.y = 200;
    bird.width =30;
    bird.height =30;
    bird.img = birdImg;
}

function draw(){
    image(background, 0, 0, width, height);
}
