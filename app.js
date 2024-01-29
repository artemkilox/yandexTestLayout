///////// PLAYERS CAROUSEL ////////
const backButton    = document.getElementById('backButton')
const curPage       = document.getElementById('curPage')
const nextButton    = document.getElementById('nextButton')
const carousel      = document.getElementById('carousel')
////////////////////////////////////////////////
const backButtonMobile  = document.getElementById('backButtonMobile')
const curPageMobile     = document.getElementById('curPageMobile')
const nextButtonMobile  = document.getElementById('nextButtonMobile')
/////////////////////////////////////////////////
const positions = [
    45,
    -365,
    -775,
    -1185,
]
const mobilePositions = [
    0,
    -355,
    -710,
    -1065,
    -1420,
    -1775
]
let currentPosition = 0
let mobilePosition = 0
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
const mobileBack = () => {
    mobilePosition--
    let number = Number(curPageMobile.innerHTML)
    number--
    curPageMobile.innerHTML = `${number}`
    if (mobilePosition === 0){
        backButtonMobile.classList.add('disabled')
    } else if (mobilePosition !== 0){
        backButtonMobile.classList.remove('disabled')
    }
    if (mobilePosition === 5){
        nextButtonMobile.classList.add('disabled')
    } else if (mobilePosition !== 5){
        nextButtonMobile.classList.remove('disabled')
    }
    carousel.style.marginLeft = `${mobilePositions[mobilePosition]}px`
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
const mobileNext = () => {
    mobilePosition++
    let number = Number(curPageMobile.innerHTML)
    number++
    curPageMobile.innerHTML = `${number}`
    if (mobilePosition === 0){
        backButtonMobile.classList.add('disabled')
    } else if (mobilePosition !== 0){
        backButtonMobile.classList.remove('disabled')
    }
    if (mobilePosition === 5){
        nextButtonMobile.classList.add('disabled')
    } else if (mobilePosition !== 5){
        nextButtonMobile.classList.remove('disabled')
    }
    carousel.style.marginLeft = `${mobilePositions[mobilePosition]}px`
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
backButtonMobile.addEventListener('click', () => {
    if(mobilePosition > 0){
        mobileBack()
    }
})
nextButtonMobile.addEventListener('click', () => {
    if(mobilePosition < 5){
        mobileNext()
    }
})
setInterval(() => {
    if(window.screen.width > 375){
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
    } else if (window.screen.width <= 375){
        if(forward === 1 && mobilePosition < 5){
            mobileNext()
        } else if(forward === 0 && mobilePosition > 0){
            mobileBack()
        } else if(mobilePosition === 0){
            forward = 1
            mobileNext()
        } else if(mobilePosition === 5){
            forward = 0
            mobileBack()
        }
    }
}, 4000)

//////////////////////////////////////////////////////////
const stagesCarousel    = document.getElementById('stagesCarousel')
const stagePrev         = document.getElementById('stagePrev')
const stageNext         = document.getElementById('stageNext')
const stagesPositions = [
    0,
    -335,
    -670,
    -1005,
    -1340
]
let currentStage = 0
const prevStage = () => {
    document.getElementById('dot' + (currentStage+1).toString()).classList.remove('current')
    currentStage--
    document.getElementById('dot' + (currentStage+1).toString()).classList.add('current')
    if (currentStage === 0){
        stagePrev.classList.add('disabled')
    } else if (currentStage !== 0){
        stagePrev.classList.remove('disabled')
    }
    if (currentStage === 4){
        stageNext.classList.add('disabled')
    } else if (currentStage !== 4){
        stageNext.classList.remove('disabled')
    }
    stagesCarousel.style.marginLeft = `${stagesPositions[currentStage]}px`
}
const nextStage = () => {
    document.getElementById('dot' + (currentStage+1).toString()).classList.remove('current')
    currentStage++
    document.getElementById('dot' + (currentStage+1).toString()).classList.add('current')
    if (currentStage === 0){
        stagePrev.classList.add('disabled')
    } else if (currentStage !== 0){
        stagePrev.classList.remove('disabled')
    }
    if (currentStage === 4){
        stageNext.classList.add('disabled')
    } else if (currentStage !== 4){
        stageNext.classList.remove('disabled')
    }
    stagesCarousel.style.marginLeft = `${stagesPositions[currentStage]}px`
}
stagePrev.addEventListener('click', () => {
    if(currentStage > 0){
        prevStage()
    }
})
stageNext.addEventListener('click', () => {
    if(currentStage < 4){
        nextStage()
    }
})
