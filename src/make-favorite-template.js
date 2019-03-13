export default function makeFavoriteTemplate(image) {
    const html = /*html*/ `
        <li>
        <p>${image.title}</p>
        <a href="${image.url}"><img src="${image.image}" alt="${image.title}"></a>
        <span class="favorite-heart">&#9829;</span>
        </li>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}