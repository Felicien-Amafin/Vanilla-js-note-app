import './sass/main.scss'
import { WritingWindow } from './js/writing-window'
import { NoteViewingWindow } from './js/note-viewing-window'
import { LocalStorage } from './js/local-storage'
import { SearchForm } from './js/search-form'

class App {
    init() {
        document.getElementById('create-note-icon').addEventListener('click', ()=>{
            WritingWindow.displayWindow();
        }
       )
        document.getElementById('view-note-btn').addEventListener('click', ()=> {
            NoteViewingWindow.displayWindow(LocalStorage.getNotes());
        })
        document.getElementById('search-btn').addEventListener('click', SearchForm.searchHandler.bind(SearchForm))
    }
}
const app = new App();
app.init();


