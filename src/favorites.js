import loadHeader from './header-component.js';
import { auth, favoritesByUserRef } from './firebase.js';
import loadGifs from './load-gifs.js';
import convertObjectToArray from './convert-object-to-array.js';
import makeFavoriteTemplate from './make-favorite-template.js';

loadHeader();

auth.onAuthStateChanged(user => {
    const userId = user.uid
    const userFavoritesRef = favoritesByUserRef.child(userId);
    userFavoritesRef.on('value', snapshot => {
        const value = snapshot.val();
        const images = {
            data: convertObjectToArray(value),
        }
        loadGifs(images, makeFavoriteTemplate);

    });
});

