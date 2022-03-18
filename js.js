const containerBtn = document.querySelector('.container')


for (let i = 0; i < 256; i++) {
    const createGrid = document.createElement('div')
    createGrid.classList.add('grid')
    containerBtn.appendChild(createGrid)

}

const hoverEffect = containerBtn.querySelectorAll('div.grid')
hoverEffect.addEventListener('click', () => {
    prompt('hi')

})
console.log(hoverEffect)



// const hoverEffect = document.querySelector('.grid')
// hoverEffect.addEventListener('onmouseover', () => {
//     const createHover = document.createElement('grid:hover')
//     createHover.setAttribute('style', 'background-color: black')
//     hoverEffect.appendChild(createHover)
//     console.log(hoverEffect)
// })
