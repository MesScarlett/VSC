var song;
var amp;
var spectrum;
var button;
let volHistory = [];

function preload() {
  song = loadSound("song.mp3");
}

function setup() {
  angleMode(DEGREES);
  createCanvas(windowWidth, windowHeight);
  song.play();
  amplitude = new p5.Amplitude();
  fft = new p5.FFT(0.8, 64);
}

function draw() {
  background(220);
  FFT_visualize();
}

function amplitude_visualize() {
  amp = amplitude.getLevel();
  volHistory.push(amp);

  if (volHistory.length == 360) {
    volHistory.splice(0, 1);
  }

  /*amplitude -> lines */
  noFill();
  beginShape();
  for (let i = 0; i < volHistory.length; i++) {
    let y = map(volHistory[i], 0, 1, height, 0);
    vertex(i, y);
  }
  endShape();

  /*amplitude -> a circle */
  translate(width / 2, height / 2);
  noFill();
  beginShape();
  for (let i = 0; i < volHistory.length; i++) {
    let dis = map(volHistory[i], 0, 1, 50, 200);
    vertex(
      sin(i) * dis,
      cos(i) * dis
    );
  }
  endShape();
}

function FFT_visualize() {
  spectrum = fft.analyze();
  for (let i = 0; i < spectrum.length; i++) {
    let w = width / spectrum.length;
    let h = map(spectrum[i], 0, 255, 0, height);
    circle(w * i, height - h, w);
  }
}