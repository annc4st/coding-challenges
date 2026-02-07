function determinePosition(commands) {
    let x = 0;
    let y = 0;
    let direction = 0; // 0: North, 1: East, 2: South, 3: West

    for (let i = 0; i < commands.length; i++) {
        switch (commands[i].toUpperCase()) {
            case 'L':
                direction = (direction + 3) % 4; // Turn left 90 degrees
                break;
            case 'R':
                direction = (direction + 1) % 4; // Turn right 90 degrees
                break;
            case 'F':
                // Move one step in the current direction
                if (direction === 0) {
                    y++;
                } else if (direction === 1) {
                    x++;
                } else if (direction === 2) {
                    y--;
                } else if (direction === 3) {
                    x--;
                }
                break;
            default:
                // Ignore other characters
                break;
        }
    }

    let coords_curr = { x, y };
    let deltaX = coords_curr.x - 0;
    let deltaY = coords_curr.y - 0;
    console.log(deltaX, deltaY)

    let command_counter = 0;

    let commandsBack = '';

    if (deltaX !== 0 && deltaY === 0) {
        commandsBack += 'R'.repeat(2)
        commandsBack += 'F'.repeat(Math.abs(deltaX));
    } else if (deltaY !== 0 && deltaX === 0){
        commandsBack += 'R'.repeat(2)
        commandsBack += 'F'.repeat(Math.abs(deltaY));

    } else if (deltaX !== 0 && deltaY !== 0){
        commandsBack += 'R'
        commandsBack+= 'F'.repeat(Math.abs(deltaY))
        commandsBack += 'R'
        commandsBack+= 'F'.repeat(Math.abs(deltaX))
    }
    console.log(commandsBack)

    return commandsBack.length
}

console.log(determinePosition("FLLF"))
