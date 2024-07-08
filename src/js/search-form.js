import { LocalStorage } from "./local-storage";
import { NoteViewingWindow } from "./note-viewing-window";

export class SearchForm {
    static searchHandler() {
        const inputVal = document.getElementById('search-field').value.trim();
        if(inputVal) {
            const allNotes = LocalStorage.getNotes();
            NoteViewingWindow.displayWindow(this.loadSearch(allNotes));
        }
    }

    static loadSearch(allNotes) {
        const searchField = document.getElementById('search-field');
        const searchTerm = searchField.value.trim();
        searchField.value = '';
        const searchResult = allNotes.filter((note)=> {
            let noteTitle = note.title.toLowerCase();
            return noteTitle.includes(searchTerm.toLowerCase());
        })
        return searchResult.length === 0 ? false : searchResult;
    }
}