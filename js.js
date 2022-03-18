const containerBtn = document.querySelector('.container')


for (let i = 0; i < 256; i++) {
    const createGrid = document.createElement('div')
    createGrid.classList.add('grid')
    containerBtn.appendChild(createGrid)

}

// Hover trailing effect
// hoverEffect can = document or containerBtn, doesn't matter.
// querySelectorAll can = .grid or .container > grid, doesn't matter.

const hoverEffect = document.querySelectorAll('.grid')
console.log(hoverEffect)

for (let i = 0; i < hoverEffect.length; i++) {
    hoverEffect[i].addEventListener('mouseover', () => {
        hoverEffect[i].style.backgroundColor = 'black'
    })
}

// const mouse = document.querySelector(hoverEffect)

// mouse.addEventListener('click', () => {
//     mouse.setAttribute('style', 'background-color: black')
// })

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






// const hoverEffect = document.querySelector('.grid')
// hoverEffect.addEventListener('onmouseover', () => {
//     const createHover = document.createElement('grid:hover')
//     createHover.setAttribute('style', 'background-color: black')
//     hoverEffect.appendChild(createHover)
//     console.log(hoverEffect)
// })
