import makeGifList from './make-gif-list.js';

const gifList = document.getElementById('gif-list');

export default function loadGifs(images) {
    clearGifs();
    images.data.forEach(gif =>  {
        const dom = makeGifList(gif);
        gifList.appendChild(dom);
    });
}

function clearGifs() {
    while(gifList.children.length > 0) {
        gifList.lastElementChild.remove();
    }
}