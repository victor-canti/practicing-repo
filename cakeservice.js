let cakeInfo = {
    cake1: {
        name: 'Birthday Cake',
        description: "Celebrate joyously with our moist and flavorful birthday cake adorned with vibrant sprinkles. Topped with velvety frosting, this festive creation is a delightful blend of sweetness, perfect for any celebration. Enjoy the moment with our scrumptious birthday cake, designed to make your special day memorable.",
        price: '$22,90',
        imagePath: 'images/cake1.jpeg',
    },
    cake2: {
        name: 'Marriage Cake',
        description: "Celebrate love with our exquisite wedding cake, adorned with delicate frosting for a timeless masterpiece. This harmonious blend of flavors is a captivating centerpiece, crafted to make your celebration memorable. Indulge in the sweetness of the moment with our beautifully designed wedding cake, expressing love and commitment effortlessly.",
        price: '$39,20',
        imagePath: 'images/cake2.jpeg',
    },
    cake3: {
        name: 'Berries Cake',
        description: "Indulge in the freshness of our berry cake, a moist delight adorned with a medley of juicy berries. The soft sponge, complemented by a delicate berry-infused frosting, creates a perfect balance of tart and sweet. Perfect for any occasion, this berry-infused creation brings a vibrant touch to your festivities.",
        price: '$14,90',
        imagePath: 'images/cake3.jpeg',
    },
    cake4: {
        name: "M&M's Cake",
        description: "Indulge in the joy of our M&M's cake, a soft, moist delight adorned with the iconic candy-coated M&M's. Each layer promises a playful explosion of texture, while a velvety chocolate frosting envelops the creation. Perfect for any celebration, this whimsical treat combines nostalgia with irresistible indulgence, offering a delightful burst of color and flavor.",
        price: '$28,10',
        imagePath: 'images/cake4.jpeg',
    },
    cake5: {
        name: 'Chocolate Cake',
        description: "Immerse yourself in the indulgent pleasure of our sumptuous chocolate cake, where each velvety bite releases layers of decadence. The rich cocoa flavors are perfectly complemented by a luscious chocolate frosting, creating a harmonious balance of sweetness. This visual and culinary masterpiece is not just a dessert; it's an experience that captivates your senses and adds a touch of luxury to any celebration. Allow yourself to be transported into a world of pure delight with every exquisite mouthful",
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

document.getElementById('img-desc1').textContent = cake1[1];
document.getElementById('img-desc2').textContent = cake2[1];
document.getElementById('img-desc3').textContent = cake3[1];
document.getElementById('img-desc4').textContent = cake4[1];
document.getElementById('img-desc5').textContent = cake5[1];

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
