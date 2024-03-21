let imgs = [];
let astarion, gale, shadowheart, wyll, laezel, karlach;
let filters = ['THRESHOLD', 'GRAY', 'INVERT', 'POSTERIZE', 'BLUR', 'ERODE', 'DILATE'];

function preload() {
  astarion = loadImage('images/Astarion.png');
  gale = loadImage('images/gale.png');
  shadowheart = loadImage('images/shart.png');
  wyll = loadImage('images/wyll.png');
  laezel = loadImage('images/laezel.png');
  karlach = loadImage('images/karlach.png');
  
  imgs.push(astarion);
  imgs.push(gale);
  imgs.push(shadowheart);
  imgs.push(wyll);
  imgs.push(laezel);
  imgs.push(karlach);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(59, 25, 30);
  imageMode(CENTER);
}

function draw() {}

function mouseClicked() {
  let randomFilter = random(filters);
  let randomIndex = floor(random(imgs.length));
  
  applyFilter(randomFilter); // Apply the filter
  image(imgs[randomIndex], random(windowWidth), random(windowHeight));
}

function applyFilter(filterName) {
  switch(filterName) {
    case 'THRESHOLD':
      filter(THRESHOLD);
      break;
    case 'GRAY':
      filter(GRAY);
      break;
    case 'INVERT':
      filter(INVERT);
      break;
    case 'POSTERIZE':
      filter(POSTERIZE);
      break;
    case 'BLUR':
      filter(BLUR);
      break;
    case 'ERODE':
      filter(ERODE);
      break;
    case 'DILATE':
      filter(DILATE);
      break;
  }
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight)
}
