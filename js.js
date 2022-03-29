// Create the grid

const containerBtn = document.querySelector('.container')

function createGrid(num1, num2) {

for (let i = 0; i < num1; i++) {
    for (let j = 0; j < num2; j++) {
        const createSquare = document.createElement('div')
        // createSquare.style.width = '500px' // Leftover code that unintentionally creates a cool effect
        createSquare.classList.add('grid')
        containerBtn.appendChild(createSquare)

    }

}

}

createGrid(16, 16)
rgb()

// Create the Hover trailing effect
// hoverEffect can = document or containerBtn, doesn't matter.
// querySelectorAll can = .grid or .container > .grid, doesn't matter.

// const hoverEffect = document.querySelectorAll('.grid')

// for (let i = 0; i < hoverEffect.length; i++) {
//     hoverEffect[i].addEventListener('mouseenter', () => {
//         hoverEffect[i].setAttribute('style', 'background-color: orange')
//     })
// }

// Bonus Task 1: RGB hover effect

function rgb() {

const hoverEffect = document.querySelectorAll('.grid')

for (let i = 0; i < hoverEffect.length; i++) {
    hoverEffect[i].addEventListener('mouseover', () => {
        hoverEffect[i].setAttribute('style', 'transition: opacity, 0.1s, linear, 0.5s')
        const colourStyle = [
            `${hoverEffect[i].style.backgroundColor = 'red'}`,
            `${hoverEffect[i].style.backgroundColor = 'green'}`,
            `${hoverEffect[i].style.backgroundColor = 'blue'}`,
            `${hoverEffect[i].style.backgroundColor = 'pink'}`,
            `${hoverEffect[i].style.backgroundColor = 'orange'}`,
            `${hoverEffect[i].style.backgroundColor = 'aqua'}`,
            `${hoverEffect[i].style.backgroundColor = 'fuchsia'}`,
            `${hoverEffect[i].style.backgroundColor = 'lightskyblue'}`,
            ]
        hoverEffect[i].style.backgroundColor = colourStyle[Math.floor(Math.random()* colourStyle.length)]

    })

} 

}

// Bonus Task 2: Create the 10% darken effect

// const targetGrid = [...hoverEffect]

// targetGrid.forEach(grid => {
//     grid.classList.add('emptyclass')
//     grid.addEventListener('mouseover', () => {
//         if (grid.classList.contains('emptyclass')) {
//             grid.classList.replace('emptyclass', 'first')
//         }
//         else if (grid.classList.contains('first')) {
//             grid.classList.replace('first', 'second')
//         }
//         else if (grid.classList.contains('second')) {
//             grid.classList.replace('second', 'third')
//         }
//         else if (grid.classList.contains('third')) {
//             grid.classList.replace('third', 'fourth')
//         }
//         else if (grid.classList.contains('fourth')) {
//             grid.classList.replace('fourth', 'fifth')
//         }
//         else if (grid.classList.contains('fifth')) {
//             grid.classList.replace('fifth', 'sixth')
//         }
//         else if (grid.classList.contains('sixth')) {
//             grid.classList.replace('sixth', 'seventh')
//         }
//         else if (grid.classList.contains('seventh')) {
//             grid.classList.replace('seventh', 'eighth')
//         }
//         else if (grid.classList.contains('eighth')) {
//             grid.classList.replace('eighth', 'nineth')
//         }
//         else if (grid.classList.contains('nineth')) {
//             grid.classList.replace('nineth', 'tenth')
//         }
//     })

// })

// Clear the grid

const clearBtn = document.querySelector('#clearbtn')

clearBtn.addEventListener('click', () => {
    const hoverEffect = document.querySelectorAll('.grid')
    for (let i = 0; i < hoverEffect.length; i++) {
        hoverEffect[i].removeAttribute('style')
    }
})

// Destroy the grid

const destroyBtn = document.querySelector('#destroybtn')

destroyBtn.addEventListener('click', () => {
    const hoverEffect = document.querySelectorAll('.grid')
    for (let i = 0; i < hoverEffect.length; i++) {
        containerBtn.removeChild(hoverEffect[i])
    }
    userCreatedGrid()
    rgb()
})

// Create a new grid of any size

function userCreatedGrid() {
    let userInput = prompt('Enter new grid size (up to 100)')
    if (userInput <= 100) {
        // if (userInput === '64' || userInput === '32' || userInput === '16' || userInput === '2') {
        containerBtn.style.gridTemplateColumns = `repeat(${userInput}, 20px`
        createGrid(userInput, userInput)
    }

}





// Unused code for reference & comparison

// Attempts to create a grid with Flexbox

// function createGrid(num1, num2) {

// for (let i = 0; i < num1; i++) {
//     const createSquare = document.createElement('div')
//     // createSquare.classList.add('grid')
//     containerBtn.appendChild(createSquare)
//     for (let j = 0; j < num2; j++) {
//         const createBox = document.createElement('div')
//         // createBox.classList.add('grid')
//         containerBtn.appendChild(createBox)
            
//         }

// }

// }

// createGrid(16, 16)