// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x
    this.y = y + 63
    this.speed = speed
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
  
    this.sprite = 'images/enemy-bug.png';
    this.horizontal = 101
    this.offscreenX = 505
    this.negativeX = -101
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

        //If Enemy is not passed boundary (MY TASK)
        // Move forward
        if (this.x < this.offscreenX) {
        // Increment x by speed multiplied by (*) dt (delta time)
        this.x += this.speed * dt
        } else {
        // Reset Enemy position to start
        this.x = this.negativeX
        }
            
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

        // Player class (MY TASK)
            // Constructor function
                    // Properties
                        // x coordinate position
                        // y coordinate position
                        // Sprite image
        class Player {
            constructor() {
                this.horizontal = 101
                this.vertical = 83
                this.startX = 202
                this.startY = 395
                this.x = this.startX
                this.y = this.startY
                this.sprite = "images/char-boy.png"
                this.win = false
            }
        

        // Render Player position
                // Draw Player image sprite on the current x and y coordinates. 
            render() {
                ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
            }
       

         // Handle keyboard input (MY TASK)
                // Update Player's x and y position according to keyboard input.
                    //@param {string} keyPress - Moving direction

            handleInput(keyPress) {
                if (keyPress === "left" && this.x > 0) {
                        this.x -= this.horizontal
                    } 
                if (keyPress === "right" && this.x < 404) {
                        this.x += this.horizontal
                    } 
                if (keyPress === "up" && this.y > 0) {
                        this.y -= this.vertical
                    } 
                if (keyPress === "down" && this.y < 395) {
                        this.y += this.vertical
                }
        }
  
            // Update Player position (MY TASK)
            update () {
                // Check for collision
                for(let enemy of allEnemies) {
                    // Did Player x and y collide with Enemy?
                    if (this.y === enemy.y && (enemy.x + 80 > this.x && enemy.x < this.x + 80)) {
                        this.resetToStart()
                    }
                    //console.log(this.y, enemy.y)
                }
                // Check for win
                    //  Did Player x and y reached the water 
                    if (this.y === -20) {
                        this.win = true
                    }
            } 

        //Reset Player (MY TASK)
        resetToStart() {
            // Set x and y coordinates back to the starting point x and y.
            this.x = this.startX
            this.y = this.startY
        }
    }

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

        // New Player object (MY TASK)
        const player = new Player()
        const enemy01 = new Enemy(this.negativeX, 0, 200 )
        const enemy02 = new Enemy(this.negativeX, 83, 300)
        const enemy03 = new Enemy((-101*2.5), 83, 300)
        const enemy04 = new Enemy((-101*2.5), 166, 400)

        const allEnemies = []
        allEnemies.push(enemy01, enemy02, enemy03, enemy04)


            // Initialise allEnemies array (MY TASK)
            // For each enemy create and push new enemy object into the above array. (MY TASK)


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
