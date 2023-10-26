/* 

Explanatory Comment
At the top of main.js, please include a comment with the following information:

Ariel Arriaga
Rocket Patrol: Spaghetti Code Version
Approximate time: 48 hours of banging my head against the wall

Implement mouse control for player movement and mouse click to fire (5)
Use Phaser's particle emitter to create a particle explosion when the rocket hits the spaceship (5)
Create a new enemy Spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (5)
Create a new title screen (e.g., new artwork, typography, layout) (3)
Display the time remaining (in seconds) on the screen (3)
Track a high score that persists across scenes and display it in the UI (1)

*/

let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard variables
let keyF, keyR, keyLEFT, keyRIGHT;

// mouseinput
let mouse;

// highscore storage
let highScore = 0;