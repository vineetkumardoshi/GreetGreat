var myURL = window.location.href.match(/(?:#)[^#]+/g);
console.log(window.location.href);
var startingMessage = "Scratch Everywhere!";
var letsGo = false;

try{
 
  var topic = "Happy New Year"; 
  var thanksto = myURL.toString().split(',')[0].substring(1).split('_').join(' ');
  
} catch(err) {
  
  topic = "Happy New Year";
  thanksto = "Dear";
}

function preload(){
  TopicFont = loadFont('libraries/Amadeus.ttf');
  ForFont = loadFont('libraries/!PaulMaul.ttf');
}


function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(255);
}

function draw() {
  if ( letsGo === false ) {
    fill(0).strokeWeight(0).textSize(width/15);
    textFont(TopicFont);
    textAlign(CENTER, CENTER);
    text(startingMessage, width/2, height/2);
  } else {
    fill(255).strokeWeight(0).textSize(map(topic.length, 50, 1, width/100, width/6));
    textFont(TopicFont);
    textAlign(CENTER, CENTER);
    text(topic, width/2, height/4.2);
    
    fill(255).strokeWeight(0).textSize(map(thanksto.length, 50, 1, width/100, width/6));
    textFont(ForFont);
    textAlign(CENTER, CENTER);
    text(thanksto, width/2, height/1.5);
  }
}

function mouseDragged(){
  if (letsGo === false){
    background(255);
    letsGo = true;
  }
  
  noStroke();
  fill(map(mouseX, 0, width, 150, 240), 0, map((mouseX+mouseY), 0, width, 150, 240));
  ellipse(mouseX, mouseY, width/10, width/10);

}

