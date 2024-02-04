let cakeInfo = {
    cake1: {
        name: 'Birthday Cake',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit labore enim quibusdam, voluptates amet dicta blanditiis asperiores neque non sit qui veniam facilis aliquid alias magni excepturi odio hic iste.',
        price: '$22,90',
        imagePath: 'images/cake1.jpeg',
    },
    cake2: {
        name: 'Marriage Cake',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit labore enim quibusdam, voluptates amet dicta blanditiis asperiores neque non sit qui veniam facilis aliquid alias magni excepturi odio hic iste.',
        price: '$39,20',
        imagePath: 'images/cake2.jpeg',
    },
    cake3: {
        name: 'Berrys Cake',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit labore enim quibusdam, voluptates amet dicta blanditiis asperiores neque non sit qui veniam facilis aliquid alias magni excepturi odio hic iste.',
        price: '$14,90',
        imagePath: 'images/cake3.jpeg',
    },
    cake4: {
        name: "M&M's Cake",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit labore enim quibusdam, voluptates amet dicta blanditiis asperiores neque non sit qui veniam facilis aliquid alias magni excepturi odio hic iste.',
        price: '$28,10',
        imagePath: 'images/cake4.jpeg',
    },
    cake5: {
        name: 'Chocolate Cake',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit labore enim quibusdam, voluptates amet dicta blanditiis asperiores neque non sit qui veniam facilis aliquid alias magni excepturi odio hic iste.',
        price: '$12,00',
        imagePath: 'images/cake1.jpeg',
    },
}

let cake1 = [cakeInfo.cake1.name, cakeInfo.cake1.description, cakeInfo.cake1.price, cakeInfo.cake1.imagePath]
let cake2 = [cakeInfo.cake2.name, cakeInfo.cake2.description, cakeInfo.cake2.price, cakeInfo.cake2.imagePath]
let cake3 = [cakeInfo.cake3.name, cakeInfo.cake3.description, cakeInfo.cake3.price, cakeInfo.cake3.imagePath]
let cake4 = [cakeInfo.cake4.name, cakeInfo.cake4.description, cakeInfo.cake4.price, cakeInfo.cake4.imagePath]
let cake5 = [cakeInfo.cake5.name, cakeInfo.cake5.description, cakeInfo.cake5.price, cakeInfo.cake5.imagePath]

document.getElementById('img1').src = cake1[3];
document.getElementById('img2').src = cake2[3];
document.getElementById('img3').src = cake3[3];
document.getElementById('img4').src = cake4[3];
document.getElementById('img5').src = cake5[3];

document.getElementById('img-desc1').textContent = cake1[2];
document.getElementById('img-desc2').textContent = cake2[2];
document.getElementById('img-desc3').textContent = cake3[2];
document.getElementById('img-desc4').textContent = cake4[2];
document.getElementById('img-desc5').textContent = cake5[2];

const eachImg = document.querySelectorAll('.img-wrapper');
const eachImgDesc = document.querySelectorAll('.img-desc');

for (let i = 0; i < cake1.length; i++) {
const imgText = eachImgDesc[i].textContent;
eachImgDesc[i].textContent = '';

eachImg[i].addEventListener('mouseover', () => {
    eachImgDesc[i].textContent = imgText;
})
eachImg[i].addEventListener('mouseout', () => {
    eachImgDesc[i].textContent = '';
})
}
