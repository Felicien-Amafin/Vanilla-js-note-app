import { NoteViewingWindow } from "./note-viewing-window";
import { WritingWindow } from "./writing-window";
import { LocalStorage } from "./local-storage";
import { AlertBox } from "./alert-box";

export class NoteWidget {
    static addNoteWidgets(notes) {
        const NOTE_TITLE_MAX_LENGTH = 25;
        const NOTE_TEXT_MAX_LENGTH  = 30;
        notes.forEach((note) => {
            const widget = document.createElement('li');
            widget.id = "note-widget";
            widget.classList.add('note-widget', 'flex-col', 'flex-col__gap15');
            widget.innerHTML = `
                <span id="note-widget__close-cross" class="close-cross">x</span>
                <h2 id="note-widget-title" class="note-widget__title">
                    ${note.title.substring(0, NOTE_TITLE_MAX_LENGTH )}
                    ${note.title.length > NOTE_TITLE_MAX_LENGTH ? "..." : ""}
                </h2>
                <p id="note-widget-text" class="note-widget__text">
                    ${note.text.substring(0, NOTE_TEXT_MAX_LENGTH )}
                    ${note.text.length > NOTE_TEXT_MAX_LENGTH ? "..." : ""}
                </p>
                <p id="note-widget-date" class="note-widget__date">${note.date}</p>         
            `
            widget.addEventListener('click', ()=> {
                NoteViewingWindow.removeWindow();
                WritingWindow.displayWindow(note);
            })
            widget.querySelector('.close-cross').addEventListener('click', (event)=> {
                event.stopPropagation();
                AlertBox.showWidgetAlertBox(widget, note.id);
            })
            document.getElementById('widgets-list').insertAdjacentElement('beforeend', widget);
        });
    }

    static removeNoteWidgets(widget, noteId) {
        widget.remove();
        const notes = LocalStorage.deleteNote(noteId);
        if(notes.length === 0) {
            NoteViewingWindow.removeWindow();
        }
    }
}