//Define variables

let passengers = 0
let display = document.getElementById("display-count")
let log = document.getElementById("history")
let clickSound = document.getElementById("click-sound")

// Function to increment the number

function increase() {
    passengers += 1
    display.textContent = passengers
    clickSound.play()
}

// Function to save the number
function save() {
    let entry = passengers + " - "
    log.textContent += entry
    reset()
    clickSound.play()
}

// Function to reset
function reset() {
    passengers = 0
    display.textContent = passengers
    clickSound.play()
}
