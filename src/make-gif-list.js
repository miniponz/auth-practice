export default function makeGifList(image) {
    const html = /*html*/ `
        <li>
        <p>${image.title}</p>
        <a href="${image.url}"><img src="${image.images.fixed_height.url}" alt="${image.title}"></a>
        <span class="favorite">&#9829;</span>
        </li>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

