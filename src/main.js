import './sass/main.scss'
import { WritingWindow } from './js/writing-window'
import { NoteViewingWindow } from './js/note-viewing-window'
import { LocalStorage } from './js/local-storage'

class App {
    init() {
        document.getElementById('create-icon').addEventListener('click', ()=> {
            WritingWindow.displayWindow();
        })
        document.getElementById('view-button').addEventListener('click', ()=> {
            NoteViewingWindow.displayWindow(LocalStorage.getNotes());
        })
    }
}
const app = new App();
app.init();


