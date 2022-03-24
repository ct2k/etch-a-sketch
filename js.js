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

// for (let i = 0; i < hoverEffect.length; i++) {
//     hoverEffect[i].addEventListener('mouseover', () => {
//         hoverEffect[i].setAttribute('style', 'background-color: orange')

//     })
// }

// RGB hover effect

for (let i = 0; i < hoverEffect.length; i++) {
    hoverEffect[i].addEventListener('mouseover', () => {
        const colourStyle = [
            `${hoverEffect[i].style.backgroundColor = 'red'}`,
            `${hoverEffect[i].style.backgroundColor = 'green'}`,
            `${hoverEffect[i].style.backgroundColor = 'blue'}`,
            `${hoverEffect[i].style.backgroundColor = 'pink'}`,
            ]
        
    // hoverEffect[i].setAttribute('style', 'background-color: red')
    // hoverEffect[i].setAttribute('style', 'background-color: green')
    // hoverEffect[i].setAttribute('style', 'background-color: blue')
    // hoverEffect[i].setAttribute('style', 'background-color: pink')
    // hoverEffect[i][Math.floor(Math.random()* hoverEffect.length)]
    hoverEffect[i].style.backgroundColor = colourStyle[Math.floor(Math.random()* colourStyle.length)]

    // console.log(hoverEffect[i])
    // hoverEffect[i][Math.floor(Math.random()* `${hoverEffect[i].style.backgroundColor = '#000001'}`)]

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

const colours = document.querySelector('#createcolours')

colours.addEventListener('click', myFunc)

function myFunc() {
    const randomColours = [`${colours.style.backgroundColor = 'red'}`, `${colours.style.backgroundColor = 'green'}`]
    // for (let i = 0; i < randomColours.length; i++) {
        colours.style.backgroundColor = randomColours[Math.floor(Math.random() * randomColours.length)]
        // console.log(randomColours[i])

    
}


//  math random practice

const create = document.querySelector('#createbtn')
const myArray = ['bob', 'jim', 'sam']
// const myObject = [{name: 'ali, sam, joe, franklin', food: 'bacon', hungry: 'yes'}]
// console.log(myArray)
// console.log(Object.keys(myObject).length)


create.addEventListener('click', () => {
    console.log(create.textContent = myArray[Math.floor(Math.random() * myArray.length)])
    // console.log(create.textContent = myObject[(Math.floor(Math.random() * Object.keys(myObject).length))])

})

// const myStuff = ['Rock', 'Paper', 'Scissors'];

// function computerPlay() {
//     console.log(myStuff[Math.floor(Math.random() * myStuff.length)]);

// }

// computerPlay()

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