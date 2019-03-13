import makeGifList from './make-gif-list.js';
import { favoritesByUserRef } from './firebase.js';

const gifList = document.getElementById('gif-list');

export default function loadGifs(images) {
    clearGifs();
    images.data.forEach(gif =>  {
        const dom = makeGifList(gif);
        const favoriteHeart = dom.querySelector('.favorite');
        favoriteHeart.addEventListener('click', () => {
            const userId = auth.currentUser.uid;
            const userFavoritesRef = favoritesByUserRef.child(userId);
            const userFavoriteGifRef = userFavoritesRef.child(gif.id);
            userFavoriteGifRef.set({
                title: gif.title,
                url: gif.url,
                img: gif.images.fixed_height.url,
                id: gif.id
            });
        })
        gifList.appendChild(dom);
    });
}

function clearGifs() {
    while(gifList.children.length > 0) {
        gifList.lastElementChild.remove();
    }
}