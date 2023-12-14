import './sass/main.scss'
import { WritingWindow } from './js/writing-window.js'


class App {
    init() {
        document.getElementById('create-icon').addEventListener('click', ()=> {
            WritingWindow.displayWindow();
        })
    }
}
const app = new App();
app.init();


