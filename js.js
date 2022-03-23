// Create the grid

const containerBtn = document.querySelector('.container')

function createGrid(num1, num2) {

for (let i = 0; i < num1; i++) {
    for (let j = 0; j < num2; j++) {
        const createSquare = document.createElement('div')
        // containerBtn.setAttribute('style', `${'grid-template-columns'}: ${'repeat(16, 20px)'}`)
        // createSquare.setAttribute('style', `${'background-color'}: pink`)
        // containerBtn.style.gridTemplateColumns = 'repeat(16, 20px)'
        // createSquare.style.backgroundColor = 'green'
        // createSquare.style.width = '500px'
        createSquare.classList.add('grid')
        containerBtn.appendChild(createSquare)

    }

}

// Create the Hover trailing effect
// hoverEffect can = document or containerBtn, doesn't matter.
// querySelectorAll can = .grid or .container > grid, doesn't matter.

const hoverEffect = document.querySelectorAll('.grid')
// console.log(hoverEffect)

for (let i = 0; i < hoverEffect.length; i++) {
    hoverEffect[i].addEventListener('mouseover', () => {
        hoverEffect[i].setAttribute('style', 'background-color: orange')

    })
}

// Clear the grid

const clearBtn = document.querySelector('#clearbtn')

clearBtn.addEventListener('click', () => {
    for (let i = 0; i < hoverEffect.length; i++) {
        hoverEffect[i].removeAttribute('style')
        }
    })
    
}

createGrid(16, 16)

//Destroy the grid

const destroyBtn = document.querySelector('#destroybtn')

destroyBtn.addEventListener('click', () => {
    const targetSquares = document.querySelectorAll('.grid')
    for (let i = 0; i < targetSquares.length; i++) {
        containerBtn.removeChild(targetSquares[i])    
    }
    userCreatedGrid()
})

// Create a new grid of any size

function userCreatedGrid() {
    let userInput = prompt('enter grid size')
    if (userInput <= 100) {
    // if (userInput === '64' || userInput === '32' || userInput === '16' || userInput === '2') {
        containerBtn.style.gridTemplateColumns = `repeat(${userInput}, 20px`
        createGrid(userInput, userInput)
    }

}





// Unused code for reference & comparison

// Button to create a 16x16 grid

// const createBtn = document.querySelector('#createbtn')

// createBtn.addEventListener('click', () => {
//     createGrid(16,16)
// })

// Separate button to create grid on user input

// const createNew = document.querySelector('#createnew')
// createNew.addEventListener('click', userCreatedGrid)

// function userCreatedGrid() {
//     let userInput = prompt('enter grid size')
//     if (userInput <= 100) {
//     // if (userInput === '64' || userInput === '32' || userInput === '16' || userInput === '2') {
//         containerBtn.style.gridTemplateColumns = `repeat(${userInput}, 20px`
//         createGrid(userInput, userInput)

//     }

// }






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