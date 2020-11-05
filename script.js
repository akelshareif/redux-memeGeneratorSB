const form = document.querySelector('form');
const memeSpace = document.querySelector('#memeSpace');
let clickCount = 0;

const handleImageClick = (image) => {
    image.addEventListener('touchend', function (e) {
        e.target.parentElement.remove();
    });
    image.addEventListener('click', function (e) {
        e.target.parentElement.remove();
    });
};

const createMeme = (imgURL, textInputs) => {
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const topText = document.createElement('div');
    const bottomText = document.createElement('div');
    const overlay = document.createElement('div');
    topText.innerText = textInputs[0].value;
    bottomText.innerText = textInputs[1].value;

    imgContainer.setAttribute('class', 'imgContainer');

    img.setAttribute('src', imgURL);
    img.setAttribute('class', 'imgSize');

    topText.setAttribute('class', 'topTextStyles');
    bottomText.setAttribute('class', 'bottomTextStyles');

    overlay.setAttribute('class', 'overlay');

    imgContainer.appendChild(topText);
    imgContainer.appendChild(img);
    imgContainer.appendChild(bottomText);
    imgContainer.appendChild(overlay);

    handleImageClick(imgContainer);
    memeSpace.appendChild(imgContainer);
};

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const imgURL = document.querySelector('input[type="url"]');
    const textInputs = document.querySelectorAll('input[type="text"]');

    createMeme(imgURL.value, textInputs);

    textInputs.forEach((input) => {
        input.value = '';
    });
});
