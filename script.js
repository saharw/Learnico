// форма рег\логина
const body = document.querySelector('body');
const signUpWrapper = document.querySelector('.signUp-wrapper');
const cross = document.querySelector('.cross');
const signUpButton = document.querySelector('.signUpButton');
const logInToggle = document.querySelector('.login-button');
const signUpToggle = document.querySelector('.signUp-button');
const pMenu = document.querySelector('.p-menu');
const nameInput = document.querySelector('.name-input');


signUpButton.addEventListener('click',function(){
    signUpWrapper.style.display = 'block';
    body.style['overflow'] = 'hidden';
})

cross.addEventListener('click',function(){
    signUpWrapper.style.display = 'none';
    body.style['overflow'] = 'visible'
})


logInToggle.addEventListener('click',function(){
    logInToggle.classList.add('enabled')
    signUpToggle.classList.remove('enabled')
    pMenu.innerText = 'Log in';
    nameInput.style.display = 'none';

})

signUpToggle.addEventListener('click',function(){
    logInToggle.classList.remove('enabled')
    signUpToggle.classList.add('enabled')
    pMenu.innerText = 'Sign up for free';
    nameInput.style.display = 'inline-block';
})

// блок карточек-карусели

var reviewCard = document.getElementsByClassName('stars-block')

for(let i = 0; i < reviewCard.length; i++){
    let item = reviewCard[i]
    for(let j = 0; j < 5; j ++){
        item.innerHTML += '<img src="imgs/black-star.png" alt="" class = "black-star">'
    }
}

const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const reviewBlock = document.querySelector('.reviews');
const cardHolder = document.querySelectorAll('.review-card');
const card1 = document.querySelector('.card1');

let currentPosition = 0;
let currentCard = 0;



arrowRight.addEventListener('click',function(){
    cardHolder[currentCard].remove()
    reviewBlock.insertAdjacentElement('beforeend', cardHolder[currentCard])
    currentCard = (currentCard + 1) % 4
})

arrowLeft.addEventListener('click',function(){
    cardHolder[(3 + currentCard) % 4].remove()
    reviewBlock.insertAdjacentElement('afterbegin', cardHolder[(3 + currentCard) % 4])
    currentCard = (3 + currentCard) % 4
})

// burger - menu

const burgerMenu = document.querySelector('.burger-menu');
const burgerBtn = document.querySelector('.burger-menu-icon');
const slides = document.querySelectorAll('.slide')
let buttonState = 0;

function rotate(){
    
    slides[0].style.translate  = '0 9px'
    slides[0].style.transform = 'rotate(45deg)'
    slides[1].style.transform = 'rotate(45deg)'
    slides[2].style.transform = 'rotate(-45deg)'
    slides[2].style.translate  = '0 -9px'
}
function unrotate(){
    
    slides[0].style.translate  = '0 0px'
    slides[0].style.transform = 'rotate(0deg)'
    slides[1].style.transform = 'rotate(0deg)'
    slides[2].style.transform = 'rotate(0deg)'
    slides[2].style.translate  = '0 0px'

}

burgerBtn.addEventListener('click',function(){
    
    if(buttonState == 0){
        slides.forEach(function(item){
            item.classList.add('background-color-grey')
        })
        burgerMenu.style['right'] = '0';
        body.style['overflow'] = 'hidden';
        rotate()
        buttonState = 1;
       
    }else{
        slides.forEach(function(item){
            item.classList.remove('background-color-grey')
        })
        burgerMenu.style['right'] = '-100%';
        body.style['overflow'] = 'visible';
        unrotate()
        buttonState = 0;
        
    }
    
})

// hover svg

const searchIcon = document.querySelector('.search-svg-path');
const searchLink = document.querySelector('.search');
const cartIcon = document.querySelector('.cart-svg-path');
const cartLink = document.querySelector('.cart');


cartLink.addEventListener('mouseover', () => greenColoring(cartIcon))
cartLink.addEventListener('mouseout',() => whiteColoring(cartIcon))
searchLink.addEventListener('mouseover', () => greenColoring(searchIcon))
searchLink.addEventListener('mouseout',() => whiteColoring(searchIcon))


function greenColoring(svg){
    svg.style.fill = '#22A45A';
}
function whiteColoring(svg){
    svg.style.fill = '#FFF';
}


