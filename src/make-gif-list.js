export default function makeGifList(data) {
    const html = /*html*/ `
        <li>
        <a href="${data.url}"><img src="${data.images.fixed_height.url}" alt="${data.images.title}"></a>
        <p>${data.images.title}</p>
        </li>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}