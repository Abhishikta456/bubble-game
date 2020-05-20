//bubble variables
var bb;
var bbVel;
var bbSize;

function updateBubbles() {
    touch = false;
    for (var i = 0; i < bb.length; i++) {
        push();

        //bubble collisions 
        if (dist(bb[i].x, bb[i].y, p.x, p.y) < bbSize / 40) {
            touch = true;
            console.log(touch);
        }
        //update bb locations
        bb[i].add(bbVel[i]);

        //contain bb
        //contain player
        if (bb[i].x > width + bbSize / 6) {
            bb[i].x = 60
        }
        if (bb[i].x < -bbSize / 6) {
            bb[i].x = 800
        }
        if (bb[i].y > height + bbSize / 6) {
            bb[i].y = 60
        }
        if (bb[i].y < -bbSize / 6) {
            bb[i].y = 400
        }

        fill(102, 25, 400, 85)
        stroke(255);
        ellipse(bb[i].x, bb[i].y, bbSize);
        pop();
    }
    if (touch == true) {
        playerColor = color(200, 20, 20);
        Health--;
    } else {
        playerColor = color(105);
    }

}