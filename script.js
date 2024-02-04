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