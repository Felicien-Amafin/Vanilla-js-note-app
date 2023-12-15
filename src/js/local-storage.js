import { NoteViewingWindow } from "./note-viewing-window";
import { AlertBox } from "./alert-box";

export class LocalStorage {
    static getNotes() {
        const notes = JSON.parse(localStorage.getItem('all-notes') || '[]') ;
       
        if(notes.length > 0) {
            NoteViewingWindow.displayWindow(notes);
        } else {
            const message = 'No note(s) in storage yet. Click "Create note" to start adding notes.'
            AlertBox.showAlertBox(message, 'alert-box__message--red', 'overlay-alert-box');
        }
    }

    static saveNote(note) {
        const notes = JSON.parse(localStorage.getItem('all-notes') || '[]') ;
        notes.push(note);
        localStorage.setItem('all-notes', JSON.stringify(notes));
    }
}