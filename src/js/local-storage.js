export class LocalStorage {
    static getNotes() {
        
    }

    static saveNote(note) {
        const notes = JSON.parse(localStorage.getItem('all-notes') || '[]') ;
        if(note.id) {

        } else {
            
        }
        notes.push(note);
        localStorage.setItem('all-notes', JSON.stringify(notes));
    }
}