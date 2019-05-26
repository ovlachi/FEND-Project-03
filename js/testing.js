//handleInput method starts

//////////////////With "If else"//////////
function handleInput(input) {
    if (input === "left") {
            this.x -= 25
        } else if (input === "right") {
            this.x += 25
        } else if (input === "up") {
            this.y -= 25
        } else if (input === "down") {
            this.y += 25
        }
}
/////////////////With SWITCH//////////////
        //     handleInput(input) {
        //         switch(input) {
        //             case "left":
        //                 this.x -= 25
        //                 break
        //             case "right":
        //                 this.x += 25
        //                 break
        //             case "up": 
        //                 this.y -= 25
        //                 break
        //             case "down":
        //                 this.y += 25
        //                 break
        //         }
        //     }
        // }
        
//handleInput method ends