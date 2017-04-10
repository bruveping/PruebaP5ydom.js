var ball =  {
  x: 0,
  y: 0,
  speedX : 4,
  speedY : -3
}
var valorSlider = 0;
var valorSlider02 = 0;
var valorSlider03 = 0;
var elSlider02;
var elSlider03;
var elSlider;
var elBoton;
var laVerdad;
function setup() {
  createCanvas (400,400);
  createP('Incrementa el tamaño');
  elSlider = createSlider(0,100,0);
    createP('Incrementa X');
  elSlider02 = createSlider(0,100,50);
    createP('Incrementa Y');
  elSlider03 = createSlider(0,100,50);
    createP('Oprime el boton');
  elBoton = createButton('click');
  elBoton.mousePressed(cambiaVerdad);
  laVerdad = false;

}

function draw() {
background (0);
valorSlider = map(elSlider.value(),0,100,2,100);
valorSlider02 = map(elSlider02.value(),0,100,-20,20);
valorSlider03 = map(elSlider03.value(),0,100,-20,20);
display (valorSlider);
move (/*valorSlider02,valorSlider03*/);
bounce();
if(laVerdad == true){
ball.speedX = valorSlider02;
ball.speedY = valorSlider03;}
print(laVerdad);
}
function move (/*valorSlider02,valorSlider03*/) {
//ball.speedX = valorSlider02;
//ball.speedY = valorSlider03;
ball.x = constrain(ball.x,0,width);
ball.y = constrain(ball.y,0,height);
ball.x+=ball.speedX;
ball.y+=ball.speedY;
}
function bounce () {
  if (ball.x>width||ball.x<0)
  ball.speedX=-ball.speedX;
  if (ball.y>width||ball.y<0)
  ball.speedY=-ball.speedY;
}
function display (valorSlider) {
ellipse(ball.x,ball.y,valorSlider,valorSlider);
}

function cambiaVerdad(){
laVerdad = !laVerdad;
  }
