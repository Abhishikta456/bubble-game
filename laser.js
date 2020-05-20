lasers = [];
laserVel = [];


function updateLasers() {
    for (var i = 0; i < lasers.length; i++) {

        //check bubble collisions
        for (var z = 0; z < bb.length; z++) {
            if (dist(lasers[i].x, lasers[i].y, bb[z].x, bb[z].y) < bbSize / 6) {
                bb[z] = createVector(random(0, width), random(0, height));
                bbVel[z] = p5.Vector.random2D().mult(random(0.50, 4.25));
                Score++;
            }
        }
        lasers[i].add(laserVel[i]);

        push();
        stroke(162, 142, 295);
        //point(lasers[i].x,lasers[i].y);

        line(lasers[i].x, lasers[i].y, lasers[i].x + laserVel[i].x * 6, lasers[i].y + laserVel[i].y * 6)

        pop();
    }
}

function keyPressed() {
    //console.log (keyCode); 
    if (keyCode == 32) {
        laserSound.play();
        lasers.push(createVector(p.x, p.y));
        laserVel.push(p5.Vector.fromAngle(radians(heading)).mult(7));


    }
}