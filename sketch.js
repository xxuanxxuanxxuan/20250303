let input, slider, button, dropdown, iframe;
let bouncing = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  input = createInput();
  input.position(10, 10);
  input.size(200, 50);
  input.style('font-size', '24px');
  
  slider = createSlider(10, 100, 48);
  slider.position(input.x + input.width + 10, 10);
  
  button = createButton('跳動');
  button.position(slider.x + slider.width + 10, 10);
  button.mousePressed(toggleBouncing);
  
  dropdown = createSelect();
  dropdown.position(button.x + button.width + 10, 10);
  dropdown.option('淡江大學網頁');
  dropdown.option('淡江大學教育科技學系網頁');
  dropdown.changed(goToWebsite);
  
  iframe = createElement('iframe');
  iframe.position(10, 70);
  iframe.size(windowWidth - 20, windowHeight - 80);
}

function draw() {
  background('lightpink');
  let txtSize = slider.value();
  textSize(txtSize);
  textAlign(CENTER, CENTER);
  let txt = input.value();
  let x = 0;
  let y = 0;
  while (y < height) {
    if (bouncing) {
      x += random(-2, 2);
      y += random(-2, 2);
    }
    text(txt, x, y);
    x += textWidth(txt) + 20;
    if (x > width) {
      x = 0;
      y += txtSize + 12;
    }
  }
}

function toggleBouncing() {
  bouncing = !bouncing;
}

function goToWebsite() {
  let selected = dropdown.value();
  if (selected === '淡江大學網頁') {
    iframe.attribute('src', 'https://www.tku.edu.tw');
  } else if (selected === '淡江大學教育科技學系網頁') {
    iframe.attribute('src', 'https://www.et.tku.edu.tw');
  }
}
