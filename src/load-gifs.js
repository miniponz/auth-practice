import makeGifList from './make-gif-list.js';
import { favoritesByUserRef, auth } from './firebase.js';

const gifList = document.getElementById('gif-list');

export default function loadGifs(images, makeTemplate) {
    clearGifs();
    images.data.forEach(image =>  {
        console.log(image);
        const dom = makeTemplate(image);
        const favoriteHeart = dom.querySelector('.favorite-heart');
        const userId = auth.currentUser.uid;
        const userFavoritesRef = favoritesByUserRef.child(userId);
        const userFavoriteGifRef = userFavoritesRef.child(image.id);

        userFavoriteGifRef.once('value')
            .then(snapshot => {
                const value = snapshot.val();
                let isFavorite = false;
                if(value) {
                    addFavorite();
                }
                else {
                    removeFavorite();
                }
                function addFavorite() {
                    isFavorite = true;
                    favoriteHeart.textContent = '♥';
                    favoriteHeart.classList.add('favorite)');
                }
                function removeFavorite(){
                    isFavorite = false;
                    favoriteHeart.textContent = '‎♡';
                    favoriteHeart.classList.remove('favorite');
                }

                favoriteHeart.addEventListener('click', () => {
                    if(isFavorite) {
                        userFavoriteGifRef.remove();
                        removeFavorite();
                    }
                    else {
                        userFavoriteGifRef.set({
                            id: image.id,
                            url: image.url,
                            image: image.images.fixed_height.url,
                            title: image.title
                        });
                        
                        addFavorite();
                    }
                })
            })
        gifList.appendChild(dom);
    });
}

function clearGifs() {
    while(gifList.children.length > 0) {
        gifList.lastElementChild.remove();
    }
}