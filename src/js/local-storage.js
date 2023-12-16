export class LocalStorage {
    static getNotes() {
        const notes = JSON.parse(localStorage.getItem('all-notes') || '[]') ;
        return notes;
    }

    static saveNote(note) {
        const notes = JSON.parse(localStorage.getItem('all-notes') || '[]') ;
        notes.push(note);
        localStorage.setItem('all-notes', JSON.stringify(notes));
    }

    static deleteNote(noteId) {
        let notes = this.getNotes();
        console.log(notes)
        notes = notes.filter((note)=> {return note.id !== noteId});
        
        localStorage.setItem('all-notes', JSON.stringify(notes));
        return notes;
    }
}