import { LocalStorage } from "./local-storage";
import { Note } from "./note";

export class WritingWindow {
    static data;
    static displayWindow(data) {
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
        if(data) {
            this.data = data;
            document.getElementById('writing-area-title').value = this.data.title;
            document.getElementById('writing-area-text').value = this.data.text;
        }
        document.getElementById('save-button').addEventListener('click', (event)=> {
            event.preventDefault();
            this.checkUserInput();
        });
    }

    static storeUserInput(titleValue, textValue){
        document.getElementById('save-button').disabled = true;
        if(this.data) {
            this.data.title = titleValue;
            this.data.text = textValue; 
            alert('Note has been updated');
            return this.data;
        } else {
            const title = titleValue;
            const text = textValue;
            const newNote = new Note(title, text);
            alert('New note has been saved');
            return newNote;
        }
    }

    static checkUserInput() {
        const titleValue = document.getElementById('writing-area-title').value.trim();
        const textValue = document.getElementById('writing-area-text').value.trim();
        if(titleValue && textValue) {
            if(this.data) {
                if(this.data.title === titleValue && this.data.text === textValue) {
                    alert('Not saving because file still unchanged!');
                    return;
                }
            }
            const note = this.storeUserInput(titleValue, textValue);
            LocalStorage.saveNote(note);
        } else {
            alert('Fill empty field(s) before saving!');
            return;
        }
    }
}
