const form = document.querySelector('form');
const memeSpace = document.querySelector('#memeSpace');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const imgURLInput = document.querySelector('input[type="url"]');
    const imgURL = imgURLInput.value;

    const textInputs = document.querySelectorAll('input[type="text"]');

    store.dispatch({ type: 'GENERATE', payload: { imgURL, textInputs } });
    const memes = store.getState().memes;

    memes.forEach((meme) => memeSpace.appendChild(meme));

    textInputs.forEach((input) => {
        input.value = '';
    });
});
