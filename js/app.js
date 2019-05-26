// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = 0
    this.y = 0
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
  
    this.sprite = 'images/enemy-bug.png';
    this.horizontal = 101
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

        //If Enemy is not passed boundary (MY TASK)
        if (this.x < 404) {
        // Move forward
        // Increment x by speed multiplied by (*) dt (delta time)
        this.x += 200 * dt
        }
            // else
            // Reset Enemy position to start
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
                this.startY = 405
                this.x = this.startX
                this.y = this.startY
                this.sprite = "images/char-boy.png"
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
                if (keyPress === "down" && this.y < 405) {
                        this.y += this.vertical
                }
        }
    }



                    //Methods(MY TASK)
                        // Update Player position (MY TASK)
                            // Check for collision
                                // Did Player x and y collide with Enemy?
                            // Check for win
                                //  Did Player x and y reached the water tiles?

                        // Render Player position (DONE)
                            // Draw Player image sprite on the current x and y coordinates.
                            
                        // Handle keyboard input (DONE)
                            // Update Player's x and y position according to keyboard input.
                                //@param {string} input - Moving direction
                        // Reset Player (MY TASK)
                            // Set x and y coordinates back to the starting point x and y.




// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

        // New Player object (MY TASK)
        const player = new Player()
        const bug01 = new Enemy()
        const allEnemies = []
        allEnemies.push(bug01)


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
