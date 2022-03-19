// Create the grid

const containerBtn = document.querySelector('.container')

// function createAGrid(num1, num2) {

// for (let i = 0; i < num1; i++) {
//     const createGrid = document.createElement('div')
//     // createGrid.classList.add('grid')
//     containerBtn.appendChild(createGrid)
//     for (let j = 0; j < num2; j++) {
//         const createBox = document.createElement('div')
//         // createBox.classList.add('grid')
//         containerBtn.appendChild(createBox)
            
//         }

// }

// }

function createAGrid(num1, num2) {

for (let i = 0; i < num1; i++) {
    for (let j = 0; j < num2; j++) {

    const createGrid = document.createElement('div')
    // createGrid.classList.add('grid')
    containerBtn.appendChild(createGrid)
   
            
        }

}

}


createAGrid(16, 16)


// Create the Hover trailing effect
// hoverEffect can = document or containerBtn, doesn't matter.
// querySelectorAll can = .grid or .container > grid, doesn't matter.

const hoverEffect = document.querySelectorAll('div')

console.log(hoverEffect)

for (let i = 0; i < hoverEffect.length; i++) {
    hoverEffect[i].addEventListener('mouseover', () => {
        // hoverEffect[i].classList.add('grid')
        hoverEffect[i].setAttribute('style', 'background-color: orange')

    })
}

// Clear the grid

const clearBtn = document.querySelector('#clearbtn')

clearBtn.addEventListener('click', () => {
    // let userInput = prompt('enter new grid value');
    // if (userInput === '100') {
    //     for (let i = 0; i < userInput; i++) {
    //         const createGrid = document.createElement('div')
    //         createGrid.classList.add('grid')
    //         containerBtn.appendChild(createGrid)

    
    //     }
    // }
    for (let i = 0; i < hoverEffect.length; i++) {
        hoverEffect[i].removeAttribute('style')
        
    }
   

})



// Unused code for reference

// Works only for the first '.grid' element or 'block'
// Selecting '.grid' or '.container > .grid' makes no difference
// Using just '.container' will make all the child element black
// Tried multiple eventListeners. They only select the first block.

// const mouseOver = document.querySelector('.grid')

// mouseOver.addEventListener('mouseenter', () => {
//     mouseOver.setAttribute('style', 'background-color: black')
// })

// mouseOver.addEventListener('mouseleave', () => {
//     mouseOver.removeAttribute('style')
// })