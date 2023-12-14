export class AlertBox {
    static showAlertBox(message, messageColor, idElementToRemove) {
        const writingWindow = document.getElementById('writing-window');
        const alertTemplate = document.getElementById('alert-template');
        const alertBox = alertTemplate.content.cloneNode(true);
        writingWindow.appendChild(alertBox);
        const messagEl = writingWindow.querySelector('.alert-box__message');
        messagEl.textContent = `${message}`;
        messagEl.classList.add(`${messageColor}`);
        writingWindow.querySelector('.alert-box__button').addEventListener('click', ()=> {
            document.getElementById(`${idElementToRemove}`).remove();
        } )
    }
}