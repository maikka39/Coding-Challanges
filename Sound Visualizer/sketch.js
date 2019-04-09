let mic;
let fft;

let slider;

function setup() {
  // put setup code here
  createCanvas(600, 600);
  background(40);
  colorMode(HSB);
  // create an audio in
  mic = new p5.AudioIn();
  fft = new p5.FFT(0.8, 128);
  fft.setInput(mic);

  // prompts user to enable their browser mic
  mic.start();

  frameRate(60);

  slider = createSlider(.1, 20, 15, .1);
  slider.position(10, 10);
  slider.style('width', '575px');
}

function draw() {
  // put drawing code here
  background(40);

  mic.amp(slider.value())

  let spectrum = fft.analyze();
  noStroke();
  fill(255);
  for (let i = 0; i < spectrum.length; i++) {
    let x = map(i, 0, spectrum.length, 0, width);
    let h = -height + map(spectrum[i], 0, 255, height, 0);
    fill(i, 255, 255);
    rect(x, height, width / spectrum.length, h)
  }
}
