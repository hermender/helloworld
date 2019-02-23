



class Robot {
    fly(distance) {
        if (distance && distance > 0) {
            console.log("飞行", distance, '米');
        }
        else if (distance && distance <= 0){
            console.log("坠机");
        }
        else {
            console.log("垂直飞");
        }

    }
}

const robot = new Robot();
;

robot.fly(-1);
robot.fly();
robot.fly(23542342);




