import './sass/main.scss'
import { WritingWindow } from './js/writing-window'
import { NoteViewingWindow } from './js/note-viewing-window'
import { LocalStorage } from './js/local-storage'
import { SearchForm } from './js/search-form'

class App {
    init() {
        document.getElementById('search').addEventListener('submit', SearchForm.searchHandler.bind(SearchForm));
        document.getElementById('create-note-icon').addEventListener('click', ()=>{
            WritingWindow.displayWindow();
        })
        document.getElementById('view-note-btn').addEventListener('click', ()=> {
            NoteViewingWindow.displayWindow(LocalStorage.getNotes());
        })
    }
}
const app = new App();
app.init();


