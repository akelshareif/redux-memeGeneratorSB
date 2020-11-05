const INITIAL_STATE = { memes: [] };

const handleImageClick = (image) => {
    image.addEventListener('click', function (e) {
        store.dispatch({ type: 'DELETE', payload: e.target.parentElement });
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

    return imgContainer;
};

const memeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GENERATE':
            const newMeme = createMeme(action.payload.imgURL, action.payload.textInputs);
            return { memes: [...state.memes, newMeme] };
        case 'DELETE':
            return {
                memes: state.memes.filter((i) => {
                    return i != action.payload;
                }),
            };

        default:
            return state;
    }
};

const store = Redux.createStore(memeReducer);
