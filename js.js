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

}

createGrid(16, 16)


// Create the Hover trailing effect
// hoverEffect can = document or containerBtn, doesn't matter.
// querySelectorAll can = .grid or .container > grid, doesn't matter.

const hoverEffect = document.querySelectorAll('.grid')
// console.log(hoverEffect)

// garbage code trying to add classlist with opacity effect

// for (let i = 0; i < hoverEffect.length; i++) {
//     hoverEffect[i].classList.add('first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eigth', 'nineth', 'tenth')
// }

// console.log(hoverEffect)

// const increaseOpacity = parseFloat(hoverEffect.setAttribute('style', 'opacity: 0.1'))
// const increaseOpacity = parseInt(hoverEffect.style.opacity, 10)

// Opacity hover trail
// Doesn't work as intended

// let upOpactiy = 0.1

// for (let i = 0; i < hoverEffect.length; i++) {
//     // start += 0.1;
//     hoverEffect[i].addEventListener('mouseover', () => {
//     hoverEffect[i].setAttribute('style', 'background-color: orange')
//     hoverEffect[i].style.opacity = upOpactiy
//     upOpactiy += 0.1
//     if (hoverEffect[i].style.opacity >= 1) {
//         upOpactiy = 0.1
//     }

// })

// }

let upOpactiy = 0.1

// for (let i = 0; i < hoverEffect.length; i++) {
//     // start += 0.1;
//     hoverEffect[i].addEventListener('mouseenter', () => {
//     // hoverEffect[i].setAttribute('style', 'background-color: orange')
//     // hoverEffect[i].classList.add('first')



// })

// }



    // const createOpacity = document.createElement('div')
    // createOpacity.classList.add('first')
    // hoverEffect[i].appendChild(createOpacity)
    // hoverEffect[i].classList.add('first')

    // if (hoverEffect[i].style.opacity != 0.1) {
    //     upOpactiy += 0.1

    //     // createOpacity.classList.add('second')
    //     // createOpacity.classList.remove('first')
    // }
    // else if (hoverEffect[i].style.opacity === 0.2) {
    //     upOpactiy += 0.1
    //     // upOpactiy +=0.1
    // }
    // else if (hoverEffect[i].style.opacity === 0.3) {
    //     upOpactiy +=0.1
    // }


const targetGrid = [...hoverEffect]

targetGrid.forEach(grid => {
    grid.classList.add('emptyclass')
    grid.addEventListener('mouseover', () => {
        if (grid.classList.contains('emptyclass')) {
            grid.classList.replace('emptyclass', 'first')
        }
        else if (grid.classList.contains('first')) {
            grid.classList.replace('first', 'second')
        }
        else if (grid.classList.contains('second')) {
            grid.classList.replace('second', 'third')
        }
        else if (grid.classList.contains('third')) {
            grid.classList.replace('third', 'fourth')
        }
        else if (grid.classList.contains('fourth')) {
            grid.classList.replace('fourth', 'fifth')
        }
        else if (grid.classList.contains('fifth')) {
            grid.classList.replace('fifth', 'sixth')
        }
        else if (grid.classList.contains('sixth')) {
            grid.classList.replace('sixth', 'seventh')
        }
        else if (grid.classList.contains('seventh')) {
            grid.classList.replace('seventh', 'eighth')
        }
        else if (grid.classList.contains('eighth')) {
            grid.classList.replace('eighth', 'nineth')
        }
        else if (grid.classList.contains('nineth')) {
            grid.classList.replace('nineth', 'tenth')
        }
    })

})



// for (let j = 0; j < hoverEffect.length; j++) {
//     hoverEffect[j].addEventListener('mouseenter', () => {
//         hoverEffect[j].setAttribute('style', 'background-color: orange')
//         hoverEffect[j].classList.replace('first', 'second')
//     })
// }

// Unknown code - Last Fridays attempt started

// const targetSquare = document.querySelectorAll('.square')

// const targetArray = [...targetSquare]

// targetArray.forEach(square => {
//     square.style.opacity = 

// })


// Garbage code. Doesn't go above 0.1 on click

// const increaseBtn = document.querySelector('#increase')

// increaseBtn.addEventListener('click', () => {
//     for (let i = 0.1; i < 1; i++) {
//         if (i === 0.1) {
//         increaseBtn.style.opacity = i
//     } else if (i === 0.2) {
//         increaseBtn.style.opacity = i
//     }
//     }

// })




// Crap code that doesn't work
// hoverEffect[i].style.opacity = (increaseOpacity + 10) + '%'
// hoverEffect[i].setAttribute('style', `${increaseOpacity}: 0.5'`)

// Code below does the same thing as hoverEffect above, just written differently
// This one decrements from 1 opacity down.
// Still doesn't work as intended.

// let hoverArray = [...hoverEffect]
// let main = 1 ;

// hoverArray.forEach(grid  => {
//     grid.addEventListener('mouseover', () => {
//         main -= 0.1
//         grid.style.opacity = main
//         if (grid.style.opacity < 0.1) {
//             main = 1
//         }
//     })
// })


// hoverEffect.addEventListener('mouseover' () => {
//     start += 0.1;
//     hoverEffect.style.opacity = start 
// })

// Button that decreases opacity with each click
// Conditional statement not needed. I just wanted to make it work.

const decreaseBtn = document.querySelector('#decrease')
let initial = 1
decreaseBtn.addEventListener('click', () => {
initial -= 0.1
decreaseBtn.style.opacity = initial
    if (decreaseBtn.style.opacity < 0.1) {
        initial = 1
    }

})

// const decrease = document.querySelector('#decrease').style
// let decrement = 1
// let subtract = 0.1
// decrease.addEventListener('click', () => {

// switch (decrease) {

// case 'test': document.querySelector('#decrease').style.opacity = decrement - subtract
// break;
// }

// })

// const decrease = document.querySelector('#decrease')
// console.log(decrease)
// const sub = 0.1;
// let starter = 1;
// decrease.addEventListener('click', () => {
//     if (starter > 0) {
//         document.querySelector('#decrease').style.opacity = starter - sub;
//     } else {
//         starter = 1;
//     }
// })



// for (let j = 0; j < hoverEffect.length; j++) {
//     hoverEffect[j].addEventListener('mouseleave', () => {
//     hoverEffect[j].setAttribute('style', 'opacity: 0.2')
//         // hoverEffect[j].classList.toggle('first')
//         // hoverEffect[j].classList.toggle('second')

//     })

// }




    // hoverEffect[i].style.transition = 'opacity 0.5s linear 0s'
    // hoverEffect[i].style.opacity = '0.5'


// RGB hover effect

// for (let i = 0; i < hoverEffect.length; i++) {
//     hoverEffect[i].addEventListener('mouseover', () => {
//         const colourStyle = [
//             `${hoverEffect[i].style.backgroundColor = 'red'}`,
//             `${hoverEffect[i].style.backgroundColor = 'green'}`,
//             `${hoverEffect[i].style.backgroundColor = 'blue'}`,
//             `${hoverEffect[i].style.backgroundColor = 'pink'}`,
//             `${hoverEffect[i].style.backgroundColor = 'orange'}`,
//             `${hoverEffect[i].style.backgroundColor = 'aqua'}`,
//             `${hoverEffect[i].style.backgroundColor = 'fuchsia'}`,
//             `${hoverEffect[i].style.backgroundColor = 'lightskyblue'}`,
//             ]
//         hoverEffect[i].style.backgroundColor = colourStyle[Math.floor(Math.random()* colourStyle.length)]

//     })

// } 

// Another way to set the RGB hover trail. DOESN'T WORK!!!

// for (let i = 0; i < hoverEffect.length; i++) {
//     hoverEffect[i].addEventListener('mouseover', () => {
//         const colourStyle = [
//             `${hoverEffect[i].setAttribute('style', 'background-color: red')}`,
//             `${hoverEffect[i].setAttribute('style', 'background-color: green')}`,
//             // `${hoverEffect[i].setAttribute('style', 'background-color: blue')}`,
//             // `${hoverEffect[i].setAttribute('style', 'background-color: pink')}`,
//             // `${hoverEffect[i].style.backgroundColor = 'orange'}`,
//             // `${hoverEffect[i].style.backgroundColor = 'aqua'}`,
//             // `${hoverEffect[i].style.backgroundColor = 'fuchsia'}`,
//             // `${hoverEffect[i].style.backgroundColor = 'lightskyblue'}`,
//             ]
//         hoverEffect[i].setAttribute('style', `${'background-color'}: ${colourStyle[Math.floor(Math.random()* colourStyle.length)]}`)

//     })

// } 
        

// Darken the hover trail


// let hoverArray = [...hoverEffect]
// const list = ['first', 'second']

// hoverArray.forEach(grid => {
//     grid.addEventListener('mouseover', () => {
//         grid.classList.add(...list)
//     grid.addEventListener('mouseleave', () => {
//         grid.classList.remove(...'second')
//     })

//     })

// })




        // grid.classList.toggle('second')
        // grid.classList.toggle('third')
        // grid.classList.toggle('third')
        // grid.classList.toggle('fourth')
        // grid.classList.toggle('fifth')
        // grid.classList.toggle('sixth')
        // grid.classList.toggle('seventh')
        // grid.classList.toggle('eigth')
        // grid.classList.toggle('nineth')
        // grid.classList.toggle('tenth')


// Hover effect opacity is 10%, one click goes to 20%.
// Going back over a square sets it back to 10%.
// Can't get it to go any higher

    // for (let i = 0; i < hoverArray.length; i++) {
    //     hoverArray[i].onmouseover = () => {
    //         hoverArray[i].style.backgroundColor = 'rgba(0, 0, 0, 0.1)'
    //     }
    //     hoverArray[i].onclick = () => {
    //         hoverArray[i].style.backgroundColor = 'rgba(0, 0, 0, 0.2)'
    //     }
    //     // hoverArray[i].onmouseenter = () => {
    //     //     hoverArray[i].style.backgroundColor = 'rgba(0, 0, 0, 0.3)'
    //     // }
    //     // hoverArray[i].ondblclick = () => {
    //     //     hoverArray[i].style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
    //     // }
    //     // hoverArray[i].onclick = () => {
    //     //     hoverArray[i].style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
    //     }
        
    




        // if (grid.style.opacity === document.querySelector('first')) {
        //     grid.style.opacity === true
        // }

    // grid.style.backgroundColor = 'black'
    // grid.style.transition = 'opacity 0.5s linear 0s'
    // if (grid.classList.add('first'))
    //     grid.unshift && grid.classList.toggle('second')
    // if (grid.classList.add('second'))
    //     grid.classList.remove('second') && grid.classList.add('third')


    // grid.classList.add('first')
    // grid.classList.add('second')
    // grid.classList.add('third')
    // grid.classList.add('fourth')
    // grid.classList.add('fifth')
    // grid.classList.add('sixth')
    // grid.classList.add('seventh')
    // grid.classList.add('eighth')
    // grid.classList.add('ninth')
    // grid.classList.add('tenth')

    // grid.style.opacity = '20%'
    // grid.style.opacity = '30%'
    // grid.style.opacity = '40%'
    // grid.style.opacity = '50%'
    // grid.style.opacity = '60%'
    // grid.style.opacity = '70%'
    // grid.style.opacity = '80%'
    // grid.style.opacity = '90%'
    // grid.style.opacity = '100%'

    // if (grid.style.backgroundColor) {
    //     grid.removeAttribute('style')
    //     grid.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
    // }


// for (let i = 0; i < hoverEffect.length; i++) {
//     hoverEffect[i].addEventListener('mouseover', () => {
//     hoverEffect[i].style.backgroundColor = 'black'
    

//         hoverEffect.forEach(hoverEffect[i],styleMe => {
        

// })
// })

// }


// const changeOpactiy = document.querySelectorAll('.grid')

// for (let i = 0; i < changeOpactiy.length; i++) {
//     changeOpactiy[i].addEventListener('mouseover', () => {
//     // changeOpactiy[i].style.opacity = '10%'
//     switch(changeOpactiy[i].style.opacity = '10%') {
//     case '10%': changeOpactiy[i].style.opacity = '20%';
//     case '20%': changeOpactiy[i].style.opacity = '30%';
    
//     }

// })







// function toggleOpacity() {



// for (let i = 0; i < changeOpactiy.length; i++) {
//     changeOpactiy[i].addEventListener('mouseover', () => {
//     changeOpactiy[i].style.opacity = '10%'
//     if (changeOpactiy[i] === '10%') {
//         changeOpactiy[i] = '20%'
//     }
// })





// let styleOpactiy = 

//     for (let i = 0; i < 10; i++) {
//         changeOpactiy[i].addEventListener('mouseover', () => {
//         changeOpactiy[i].style.opacity = '10%'
//         })
//     }








// Randomizes opacity between 10-30% on hover. NOT WHAT I WANT.

// const opacityEffect = document.querySelectorAll('.grid')

// for (let i = 0; i < opacityEffect.length; i++) {
// opacityEffect[i].addEventListener('mouseover', () => {
// const changeOpactiy = [
        
//     `${opacityEffect[i].style.opacity = '10%'}`,
//     `${opacityEffect[i].style.opacity = '20%'}`,
//     `${opacityEffect[i].style.opacity = '30%'}`,
//     // `${hoverEffect[i].style.opacity = '40%'}`,
//     // `${hoverEffect[i].style.opacity = '50%'}`,
//     // `${hoverEffect[i].style.opacity = '60%'}`,
//     // `${hoverEffect[i].style.opacity = '70%'}`,
//     // `${hoverEffect[i].style.opacity = '80%'}`,
//     // `${hoverEffect[i].style.opacity = '90%'}`,
//     // `${hoverEffect[i].style.opacity = '100%'}`,
// ]

// opacityEffect[i].style.opacity = changeOpactiy[(Math.floor(Math.random() * changeOpactiy.length))]

// })

// }





 
//     })
//     if (hoverEffect[i] === '10%') {
//         return changeOpactiy++
//     } else if (hoverEffect[i] === '20%') {
//         return changeOpactiy++
//     }
// }


// if (hoverEffect[i].style.opacity === '10%') {
//     return hoverEffect[i] = '20%'

// } else if (hoverEffect[i].style.opacity === '20%') {
//     return hoverEffect[i].style.opacity = '80%'
//     }

        // hoverEffect[i].style.opacity === '50%'
        // hoverEffect[i].style.opacity === '60%'
        // hoverEffect[i].style.opacity === '70%'
        // hoverEffect[i].style.opacity === '80%'
        // hoverEffect[i].style.opacity === '90%'
        // hoverEffect[i].style.opacity = '100%'
   
    
        // hoverEffect[i].style.opacity = '10%'
        // hoverEffect[i].style.opacity = '20%'
        // hoverEffect[i].style.opacity = '30%'
        // hoverEffect[i].style.opacity = '40%'
        // hoverEffect[i].style.opacity = '50%'
        // hoverEffect[i].style.opacity = '60%'
        // hoverEffect[i].style.opacity = '70%'
        // hoverEffect[i].style.opacity = '80%'
        // hoverEffect[i].style.opacity = '90%'
        // hoverEffect[i].style.opacity = '100%'
   
    



// for (let j = 0; j < hoverEffect.length; j++) {
//     hoverEffect[j].style.opacity = '10%'
//     hoverEffect[j].style.opacity = '20%'
//     hoverEffect[j].style.opacity = '30%'
//     hoverEffect[j].style.opacity = '40%'
//     hoverEffect[j].style.opacity = '50%'
//     hoverEffect[j].style.opacity = '60%'
//     hoverEffect[j].style.opacity = '70%'
//     hoverEffect[j].style.opacity = '80%'
//     hoverEffect[j].style.opacity = '90%'
//     hoverEffect[j].style.opacity = '100%'
// }


// for (let i = 0; i < changeOpactiy.length; i++) {
    // const changeOpactiy = [
        
    //         `${hoverEffect[i].style.opacity = '10%'}`,
    //         `${hoverEffect[i].style.opacity = '20%'}`,
    //         `${hoverEffect[i].style.opacity = '30%'}`,
    //         `${hoverEffect[i].style.opacity = '40%'}`,
    //         `${hoverEffect[i].style.opacity = '50%'}`,
    //         `${hoverEffect[i].style.opacity = '60%'}`,
    //         `${hoverEffect[i].style.opacity = '70%'}`,
    //         `${hoverEffect[i].style.opacity = '80%'}`,
    //         `${hoverEffect[i].style.opacity = '90%'}`,
    //         `${hoverEffect[i].style.opacity = '100%'}`,
    //     ]
    //     }




// Clear the grid

const clearBtn = document.querySelector('#clearbtn')

clearBtn.addEventListener('click', () => {
    for (let i = 0; i < hoverEffect.length; i++) {
        hoverEffect[i].removeAttribute('style')
        }
    })
    



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