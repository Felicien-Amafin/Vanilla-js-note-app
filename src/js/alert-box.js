import { WritingWindow } from "./writing-window";

export class AlertBox {
    static showAlertBox(message, messageColor, elementToRemove) {
        const rootElement = document.getElementById('page-container');
        const alertTemplate = document.getElementById('alert-template');
        const alertBox = alertTemplate.content.cloneNode(true);
        rootElement.appendChild(alertBox);
        const messagEl = rootElement.querySelector('.alert-box__message');
        messagEl.textContent = `${message}`;
        messagEl.classList.add(`${messageColor}`);
        rootElement.querySelector('.alert-box__button').addEventListener('click', ()=> {
            if(elementToRemove === 'overlay-home-page') {
                WritingWindow.removeWindow();
            }
            document.getElementById('overlay-alert-box').remove();
        } )
    }
}