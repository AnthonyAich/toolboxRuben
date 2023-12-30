// create a popup window with an image in it
{/*

<div class="popup" id="popup">
<span class="close" id="close">&times;</span>
<div class="popup-content">
    <img src="./assets/Dilemma.png" alt="dilemma">
</div>
</div>

*/}



const images = document.querySelectorAll('img');

images.forEach(image => {
    image.addEventListener('click', () => {
        const popup = createPopup(image);
        document.querySelector('body').appendChild(popup);

        const close = document.querySelector('#close');
        close.addEventListener('click', () => {
            popup.remove();
        });
    });
});

const createPopup = (image) => {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.id = 'popup';

    const close = document.createElement('span');
    close.classList.add('close');
    close.id = 'close';
    close.innerHTML = '&times;';

    const popupContent = document.createElement('div');
    popupContent.classList.add('popup-content');

    const popupImage = document.createElement('img');
    popupImage.src = image.src;
    popupImage.alt = image.alt;

    popupContent.appendChild(popupImage);
    popup.appendChild(close);
    popup.appendChild(popupContent);

    return popup;
}

