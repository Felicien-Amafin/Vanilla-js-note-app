import { NoteWidget } from "./note-widget";
import { WritingWindow } from "./writing-window";

export class AlertBox {
    static showGenericAlertBox(message, messageColor, elementToRemove) {
        const rootElement = document.getElementById('page-container');
        const alertTemplate = document.getElementById('g-alert-template');
        const alertBox = alertTemplate.content.cloneNode(true);
        rootElement.appendChild(alertBox);
        const messagEl = rootElement.querySelector('.alert-box__message');
        messagEl.textContent = `${message}`;
        messagEl.classList.add(`${messageColor}`);
        rootElement.querySelector('.alert-box__button').addEventListener('click', ()=> {
            if(elementToRemove === 'window-overlay') {
                WritingWindow.removeWindow();
            }
            document.getElementById('alert-box-overlay').remove();
        })
    }

    static async showWidgetAlertBox(widget, noteId) {
        const rootElement = document.getElementById('page-container');
        const alertTemplate = document.getElementById('w-alert-template');
        const alertBox = alertTemplate.content.cloneNode(true);
        rootElement.appendChild(alertBox);
        
        rootElement.querySelector('#alert-box-button-yes').addEventListener('click', ()=> {
           NoteWidget.removeNoteWidgets(widget, noteId);
           document.getElementById('alert-box-overlay').remove();
        } )
        rootElement.querySelector('#alert-box-button-no').addEventListener('click', ()=> {
            document.getElementById('alert-box-overlay').remove();
        } )
    }
}