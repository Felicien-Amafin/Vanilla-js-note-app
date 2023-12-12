import { LocalStorage } from "./local-storage";
import { Note } from "./note";

export class WritingWindow {
    static displayWindow() {
        const rootElement = document.getElementById('page-container');
        rootElement.insertAdjacentHTML('beforeend', 
        `<div id="overlay" class="overlay flex-col">
            <div id="writing-window" class="window flex-col">
                <span id="close-window-cross" class="window__close-cross">x</span>
                <form id="writing-area" class="writing-area flex-col">
                    <input id="writing-area-title" class="writing-area_title" type="text" autocomplete="off" placeholder="Enter title ...">
                    <textarea id="writing-area-text" class="writing-area_text" name="writing-area_text" placeholder="Enter text..." ></textarea>
                    <button id="save-button" class="save-button" type="button">Save</button>
                </form>
            </div>
        </div>
        `);
        document.getElementById('save-button').addEventListener('click', (event)=> {
            event.preventDefault();
            const note = this.getWindowInput()
            LocalStorage.saveNote(note);
            /* new Note().create(); */
        });
    }

    getWindowInput (){
        const title = document.getElementById('writing-area-title').value;
        const text = document.getElementById('writing-area-text').value;
        const note = new Note(title, text);
        return note;
    }
}
