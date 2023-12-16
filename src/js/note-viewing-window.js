import { NoteWidget } from "./note-widget";
import { AlertBox } from "./alert-box";

export class NoteViewingWindow {
    static displayWindow(notes) {
        if(notes.length === 0) {
            const message = 'No note(s) in storage yet. Click "Create note" to start adding notes.'
            AlertBox.showAlertBox(message, 'alert-box__message--red', 'overlay-alert-box');
            return;
        } 
        const rootElement = document.getElementById('page-container');
        rootElement.insertAdjacentHTML('beforeend', 
        `<div id="overlay-home-page" class="overlay-home-page flex-col">
            <div id="note-viewing-window" class="window window--note-viewing flex-col">
                <span id="close-window-cross" class="close-cross">x</span>
                <ul id="widgets-list" class="widgets-list"></ul>
            </div>
        </div>
        `);
        document.getElementById('close-window-cross').addEventListener('click', this.removeWindow.bind(this));
        NoteWidget.addNoteWidgets(notes);
    }

    static removeWindow() {
        document.getElementById('overlay-home-page').remove();
    }
}