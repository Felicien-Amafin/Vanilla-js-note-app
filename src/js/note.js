import { LocalStorage } from "./local-storage";

export class Note {
    constructor(title, text) {
        this.title = title;
        this.text = text;
        /* this.id = */ 
        this.date = new Date();
    }

    create() {
        const title = document.getElementById('writing-area-title').value;
        const text = document.getElementById('writing-area-text').value;
        const note = new Note(title, text);
        LocalStorage.saveNote(note)
    }
}