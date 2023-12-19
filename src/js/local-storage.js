import { WritingWindow } from "./writing-window";

export class LocalStorage {
    static getNotes() {
        const notes = JSON.parse(localStorage.getItem('all-notes') || '[]') ;
        return notes;
    }

    static saveNote(noteToSave) {
        const notes = JSON.parse(localStorage.getItem('all-notes') || '[]') ;
        if(WritingWindow.noteToUpdate) {
            notes.find((noteObj)=> {
                if(noteToSave.id === noteObj.id) {
                    noteObj.title = noteToSave.title;
                    noteObj.text = noteToSave.text;
                    WritingWindow.noteToUpdate = null;
                }
            }) 
        } else {
            notes.push(noteToSave);
           
        }
        notes.reverse();
        localStorage.setItem('all-notes', JSON.stringify(notes));
    }

    static deleteNote(noteId) {
        let notes = this.getNotes();
        notes = notes.filter((note)=> {return note.id !== noteId});
        localStorage.setItem('all-notes', JSON.stringify(notes));
        return notes;
    }
}