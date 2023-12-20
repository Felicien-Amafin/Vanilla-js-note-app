import './sass/main.scss'
import { WritingWindow } from './js/writing-window'
import { NoteViewingWindow } from './js/note-viewing-window'
import { LocalStorage } from './js/local-storage'
import { SearchForm } from './js/search-form'

class App {
    init() {
        document.getElementById('create-icon').addEventListener('click', ()=>{
            WritingWindow.displayWindow();
        }
       )
        document.getElementById('view-button').addEventListener('click', ()=> {
            NoteViewingWindow.displayWindow(LocalStorage.getNotes());
        })
        document.getElementById('arrow-button').addEventListener('click', SearchForm.searchHandler.bind(SearchForm))
    }
}
const app = new App();
app.init();


