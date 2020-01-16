const changePaymentImage = (source) => {
    let img = document.getElementById('payments__img-img')
    img.src = source
}

const Openbox = id => {
    let div = document.getElementById(id)
    if (div.style.display == 'block') {
        div.style.display = 'none'
        document.getElementById('ecommerce').style.filter = "none"
        document.getElementById('howwework').style.filter = "none"
        document.getElementById('header').style.filter = "none"
        document.getElementById('payments').style.filter = "none"
        document.getElementById('cases').style.filter = "none"
        document.getElementById('clients').style.filter = "none"
        document.getElementById('request').style.filter = "none"
        document.getElementById('footer').style.filter = "none"
    }
    else {
        div.style.display = 'block'
        document.getElementById('ecommerce').style.filter = "blur(3px)"
        document.getElementById('howwework').style.filter = "blur(3px)"
        document.getElementById('header').style.filter = "blur(3px)"
        document.getElementById('payments').style.filter = "blur(3px)"
        document.getElementById('cases').style.filter = "blur(3px)"
        document.getElementById('clients').style.filter = "blur(3px)"
        document.getElementById('request').style.filter = "blur(3px)"
        document.getElementById('footer').style.filter = "blur(3px)"
    }
}



document.addEventListener("DOMContentLoaded", () => {
    (window.matchMedia("screen and (max-width: 768px)").matches)
        ? document.getElementById('cases__text__title').innerHTML = 'НАШИ КЕЙСЫ'
        : null
})

// document.addEventListener('click', function (e) {
//     if (e.target.classList.contains('number')) {
//        document.getElementById('number').style.color = '#EF8B54'
//     }
// });

const clients = [
    './src/img/clients__item__img1.png',
    './src/img/clients__item__img2.png',
    './src/img/clients__item__img3.png',
    './src/img/clients__item__img4.png',
]
var counter = 0
var bcounter = clients.length - 1
const NextClientItem = () => {
    if (counter < clients.length - 1) {
        counter++
        document.getElementById('clients__item__img').src = clients[counter]
    } else {
        counter = 0
        document.getElementById('clients__item__img').src = clients[counter]
    }
}
const PrevClientItem = () => {
    console.log(bcounter);

    if (bcounter < clients.length && bcounter > 0) {
        bcounter--
        document.getElementById('clients__item__img').src = clients[bcounter]
    } else {
        bcounter = clients.length - 1
        document.getElementById('clients__item__img').src = clients[bcounter]
    }
}