import './sass/main.scss'
import { WritingWindow } from './js/writing-window'
import { NoteViewingWindow } from './js/note-viewing-window'
import { LocalStorage } from './js/local-storage'
import { SearchForm } from './js/search-form'

class App {
    init() {
        //Add event listener on interactive elements
        document.getElementById('search').addEventListener('submit',(event)=> {
            event.preventDefault();
            SearchForm.searchHandler()
        });
        document.getElementById('create-note-icon').addEventListener('click', ()=>{
            WritingWindow.displayWindow();
        })
        document.getElementById('view-note-btn').addEventListener('click', ()=> {
            document.getElementById('view-note-btn').disabled = true;
            NoteViewingWindow.displayWindow(LocalStorage.getNotes());
            document.getElementById('view-note-btn').disabled = false;
        })
    }
}
const app = new App();
app.init();


