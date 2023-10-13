function setup() {
    createCanvas(600, 600);
    background(0);

    // YOUR CODE HERE

    //image 1
    let angle = 0;
    for (let i = 0; i < 100; i++) {
        push();
        angleMode(DEGREES);
        translate(100, 100);
        angle += (30 + 0.1) * i;
        rotate(angle);
        noFill();
        stroke(0, 190, 255, 100);
        rect(0, 0, 40, 60);
        pop();
    }

    //image 2
    push();
    translate(300, 100);
    for (let d = 0; d < 40; d += 3) {
        noStroke();
        fill(222, 100, 100, 100);
        for (let i = 0; i <= 8; i++) {
            rotate(i * 45);
            triangle(d, d, d - 20, d + 30, d + 20, d + 20);
        }
    }
    for (let d = 0; d < 35; d += 3) {
        stroke(0, 0, 0, 100);
        fill(255);
        for (let i = 0; i <= 8; i++) {
            rotate(i * 45);
            triangle(d, d, d - 10, d + 15, d + 10, d + 10);
        }
    }
    pop();

    //image 3
    push();
    translate(500, 100);
    for (let d = 0; d < 40; d += 3) {
        for (let i = 0; i < 7; i++) {
            let a = i * 5;
            let dia = 10;
            rotate(i * 45);
            fill(200, 100, 15);
            noStroke();
            circle(a, 2 * a, dia);
        }
    }
    pop();

    //image 4
    push();
    noStroke();
    translate(100, 300);
    for (let d = 0; d < 30; d++) {
        fill(10, 200, 100, 10);
        for (let i = 0; i < 8; i++) {
            rotate(i * 45.05);
            ellipse(0, 0, 10, 150);
        }
    }
    pop();

    //image 5
    push();
    translate(300, 300);
    textSize(20);
    for (let d = 0; d < 10; d++) {
        let a = random(-d, d) * 10;
        let b = random(-d, d) * 10;
        text("⭐", a, b);
    }
    pop();

    //image 6
    push();
    translate(500, 300);
    for (let i = 0; i < 9; i++) {
        rotate(i * 45);
        fill(200, 10 * i, 100);
        square(10, 10, 40);
    }
    for (let i = 0; i < 9; i++) {
        rotate(i * 45);
        fill(20 * i, 100, 100, 100);
        square(20, 20, 20);
    }
    pop();

    //image 7
    push();
    translate(100, 500);
    let xoff = 0;
    for (let angle = 0; angle <= 360; angle += 1) {
        let r = map(angle, 0, 360, 20, 255);
        let g = map(angle, 0, 360, 15, 50);
        let b = map(angle, 0, 360, 15, 20);
        stroke(r, g, b, 100);
        xoff += 0.01;
        x = sin(angle) * noise(xoff) * 120;
        y = cos(angle) * noise(xoff) * 120;
        line(0, 0, x, y);
    }

    pop();

    // image 8
    push();
    translate(300, 500);
    for (let angle = 0; angle < 360; angle += 30) {
        rotate(angle);
        for (let x = 0; x < 80; x += 5) {
            let r = abs(sin(x)) * 20;
            fill(r, x * 5, 255 - r, 150);
            let y = map(sin(x), -1, 1, 0, 10) * 3;
            rotate(x * 0.5);
            noStroke();
            circle(x, y, 10);
        }
    }
    pop();

    //image 9
    push();
    translate(500, 500);
    for (let i = 0; i < 14; i++) {
        translate(0, i);
        let r = map(i * 4, 0, 14, 150, 255);
        let g = map(i, 0, 14, 100, 200);
        let b = map(i * 4, 0, 14, 50, 150);
        for (let i = 0; i < 3; i++) {
            noStroke();
            fill(r, g, b, 100);
            circle(-50 + i * 50, -50, 50);
        }
    }
    pop();


    // AFTER YOUR CODE HAS RUN:
    //saveCanvas('Scarlett', 'png');
    // saves the canvas as a png image
}
