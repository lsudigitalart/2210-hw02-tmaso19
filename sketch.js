function setup() {
createCanvas(400, 269);


ellipse(10, 10, 10);
}

function draw() {
    background(250, 228, 189);
    noStroke();

    fill(212, 148, 132);
    for(var i = 1; i < 700; i+=10){
        for(var n = 5; n < 300; n+=10) {
            square(i, n, 3);
        }
    }
    fill(0);
    rect(0, 230, 180, 10);
   
    fill(255)
    rect(0, 185, 40, 5);

    fill(0);
    rect(0, 170, 80, 3);

    fill(0);
    rect(0, 162, 147, 3);

    fill(255)
    rect(0, 90, 80, 15);

    fill(0)
    rect(0, 13, 20, 5);

    fill(0);
    text(mouseX, 10, 10);
    text(mouseY, 100, 10);

    strokeWeight(10)
    stroke(0)
    noFill();
    curve(-6, -150, 375, 0, 375, 135, 818, 439);

    strokeWeight(10)
    stroke(0)
    noFill();
    curve(347, 116, 376, 138, 364, 159, 362, 136);

    strokeWeight(10)
    stroke(0)
    noFill();
    curve(117, 115, 364, 159, 378, 198, 362, 136);

    strokeWeight(10)
    stroke(0)
    noFill();
    curve(650,167, 378, 198, 378, 394, 50, 700);

    fill(200, 51, 68);
    stroke(0)
    strokeWeight(5)
    bezier(286, 181, 400, 56, 400, 184, 289, 181);
    bezier(286, 181, 392, 271, 441, 109, 289, 181);

    fill(0)
    stroke(0)
    strokeWeight(0)
    circle(287, 195, 8);

    strokeWeight(5)
    stroke(0)
    noFill()
    curve(300, 20, 294, 51, 337, 60, 350, 20);

    strokeWeight(5)
    stroke(0)
    noFill()
    curve(325, 61, 338, 32, 322, 62, 350, 30);
    line(339, 31, 351, 35);

    curve(147, 29, 146, 54, 117, 22, 157, 52);
    curve(147, 65, 155, 46, 117, 22, 157, 52);
    curve(147, 65, 162, 44, 129, 22, 157, 52);
    curve(213,61, 169, 38, 143, 19, 157, 52);
    curve(220, 121, 174, 32, 149, 14, 137, 11);
    curve(220, 121, 181, 30, 159, 11, 137, 11);

   
    


};
