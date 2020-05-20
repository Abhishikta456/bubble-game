var p;
var size;
var heading;
var pVel;
var force;
var boostColor;
var touch;
var playerColor;
var Score;
var Health;

function updatePlayer() {
    boostColor = color(0)
        //move and rotate player 

    if (keyIsDown(LEFT_ARROW)) {
        heading -= 10;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        heading += 10;
    }
    if (keyIsDown(UP_ARROW)) {
        force = p5.Vector.fromAngle(radians(heading));
        pVel.add(force.mult(0.2));
        boostColor = color(50, 280,50);
    }

    //contain player
    if (p.x > 400) {
        p.x = 0
    }
    if (p.x < 0) {
        p.x = 800
    }
    if (p.y > 800) {
        p.y = 0
    }
    if (p.y < 0) {
        p.y = 800
    }



    //update player location
    pVel.mult(0.978);
    p.add(pVel);
    //draw the player
    push();
    translate(p.x, p.y);
    rotate(radians(heading));
    //flame stuff

    fill(boostColor)
    triangle(-size + 6, size * .9, -size * 6.5, size / 8, size * -.8, -size * .8);
    //health


    fill(playerColor);
    triangle(-size + 1, -size + 1, size + 1, 0, -size + 1, size + 1);
    pop();
    fill(255);
    text(Health, p.x - 10, p.y + 25)

    fill(255);
    text(Score, 15, 15);

}