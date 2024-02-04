const mainContainer = document.getElementById('container');


function createImgs(totalImgs) {
    const imgsContainer = document.createElement('div')
    imgsContainer.setAttribute('id', 'imgs-container');

    for (let i = 1; i <= totalImgs; i++) {
        const imgWrapper = document.createElement('div');
        imgWrapper.classList.add('img-wrapper');

        const img = document.createElement('img');
        img.setAttribute('id', `img${i}`);
        img.classList.add('img');

        const imgDesc = document.createElement('div')
        imgDesc.setAttribute('id', `img-desc${i}`);
        imgDesc.classList.add('img-desc');

        imgWrapper.appendChild(img);
        imgWrapper.appendChild(imgDesc);
        imgsContainer.appendChild(imgWrapper);
    }

    mainContainer.appendChild(imgsContainer);
}
createImgs(5);


document.getElementById('img1').src = 'images/cake1.jpeg'
document.getElementById('img2').src = 'images/cake2.jpeg'
document.getElementById('img3').src = 'images/cake3.jpeg'
document.getElementById('img4').src = 'images/cake4.jpeg'
document.getElementById('img5').src = 'images/cake5.jpeg'

document.getElementById('img-desc1').textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit labore enim quibusdam, voluptates amet dicta blanditiis asperiores neque non sit qui veniam facilis aliquid alias magni excepturi odio hic iste.';
document.getElementById('img-desc2').textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, rem. Aspernatur at illo est magnam mollitia id aliquid vero. Ea voluptatem incidunt eaque quos labore laborum, nulla repellendus hic suscipit.';
document.getElementById('img-desc3').textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse ratione provident numquam unde atque dolores aliquam. Architecto minus natus expedita reiciendis consequuntur iste harum velit, deleniti sequi eos, maxime tempore.';
document.getElementById('img-desc4').textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident dignissimos aut blanditiis molestias totam saepe nihil est non possimus. Nesciunt modi fugiat est aspernatur. Qui, ullam? Vel eaque cupiditate suscipit?';
document.getElementById('img-desc5').textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aperiam minus repellat aspernatur distinctio aut? Illum velit consequatur dolore molestiae impedit voluptas, laborum voluptatem dolorum totam doloribus fugit officiis odit!';


const eachImg = document.querySelectorAll('.img-wrapper');
const eachImgDesc = document.querySelectorAll('.img-desc');

for (let i = 0; i < 5; i++) {
const imgText = eachImgDesc[i].textContent;
eachImgDesc[i].textContent = '';

eachImg[i].addEventListener('mouseover', () => {
    eachImgDesc[i].textContent = imgText;
})
eachImg[i].addEventListener('mouseout', () => {
    eachImgDesc[i].textContent = '';
})
}

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
        Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit labore enim quibusdam, voluptates amet dicta blanditiis asperiores neque non sit qui veniam facilis aliquid alias magni excepturi odio hic iste.',
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