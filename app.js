///////// PLAYERS CAROUSEL ////////
const backButton    = document.getElementById('backButton')
const curPage       = document.getElementById('curPage')
const nextButton    = document.getElementById('nextButton')
const carousel      = document.getElementById('carousel')
const positions = [
    45,
    -365,
    -775,
    -1185,
]
let currentPosition = 0
let forward = 1
const backPage = () => {
    currentPosition--
    let number = Number(curPage.innerHTML)
    number--
    curPage.innerHTML = `${number}`
    if (currentPosition === 0){
        backButton.classList.add('disabled')
    } else if (currentPosition !== 0){
        backButton.classList.remove('disabled')
    }
    if (currentPosition === 3){
        nextButton.classList.add('disabled')
    } else if (currentPosition !== 3){
        nextButton.classList.remove('disabled')
    }
    carousel.style.marginLeft = `${positions[currentPosition]}px`
}
const nextPage = () => {
    currentPosition++
    let number = Number(curPage.innerHTML)
    number++
    curPage.innerHTML = `${number}`
    if (currentPosition === 0){
        backButton.classList.add('disabled')
    } else if (currentPosition !== 0){
        backButton.classList.remove('disabled')
    }
    if (currentPosition === 3){
        nextButton.classList.add('disabled')
    } else if (currentPosition !== 3){
        nextButton.classList.remove('disabled')
    }
    carousel.style.marginLeft = `${positions[currentPosition]}px`
}
backButton.addEventListener('click', () => {
    if(currentPosition > 0){
        backPage()
    }
})
nextButton.addEventListener('click', () => {
    if(currentPosition < 3){
        nextPage()
    }
})
setInterval(() => {
    if(forward === 1 && currentPosition < 3){
        nextPage()
    } else if(forward === 0 && currentPosition > 0){
        backPage()
    } else if(currentPosition === 0){
        forward = 1
        nextPage()
    } else if(currentPosition === 3){
        forward = 0
        backPage()
    }
}, 4000)
//////////////////////////////////////////////////////////