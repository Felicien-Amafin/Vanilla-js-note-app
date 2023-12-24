import { NoteWidget } from "./note-widget";
import { AlertBox } from "./alert-box";

export class NoteViewingWindow {
    static displayWindow(notes) {
        if(notes.length === 0) {
            const message = 'No note(s) in storage yet. Click on "Create a note" to start adding notes.';
            AlertBox.showGenericAlertBox(message, 'alert-box__message--blue-grey', 'overlay-alert-box');
            return;
        } else if(!notes) {
            const message = 'No corresponding note(s) to your search';
            AlertBox.showGenericAlertBox(message, 'alert-box__message--blue-grey', 'overlay-alert-box');
            return;
        }
        const rootElement = document.getElementById('page-container');
        rootElement.insertAdjacentHTML('beforeend', 
        `<div id="window-overlay" class="window-overlay flex-col">
            <div id="note-viewing-window" class="window window--note-viewing flex-col">
                <span id="close-windw-cross" class="closing-cross closing-cross--dark-grey">x</span>
                <ul id="widgets-list" class="widgets-list"></ul>
            </div>
        </div>
        `);
        document.getElementById('close-windw-cross').addEventListener('click', this.removeWindow.bind(this));
        NoteWidget.addNoteWidgets(notes.reverse()); // Reverse notes to get the more recent added notes
    }

    static removeWindow() {
        document.getElementById('window-overlay').remove();
    }
}