import { LocalStorage } from "./local-storage";
import { Note } from "./note";
import { AlertBox } from "./alert-box";

export class WritingWindow {
    static noteToUpdate;
    static displayWindow(noteToUpdate) {
        const rootElement = document.getElementById('page-container');
        rootElement.insertAdjacentHTML('beforeend', 
        `<div id="overlay-home-page" class="overlay-home-page flex-col">
            <div id="writing-window" class="window window--writing flex-col">
                <span id="close-window-cross" class="close-cross">x</span>
                <form id="writing-area" class="writing-area flex-col">
                    <input id="writing-area-title" class="writing-area__title" type="text" autocomplete="off" placeholder="Enter title ...">
                    <textarea id="writing-area-text" class="writing-area__text" name="writing-area-text" placeholder="Enter text..." ></textarea>
                    <button id="save-button" class="save-button" type="button">Save</button>
                </form>
            </div>
        </div>
        `);
        if(noteToUpdate) {
            this.noteToUpdate = noteToUpdate;
            document.getElementById('writing-area-title').value = this.noteToUpdate.title;
            document.getElementById('writing-area-text').value = this.noteToUpdate.text;
        }
        document.getElementById('close-window-cross').addEventListener('click', ()=> {
            this.removeWindow();
        });
        document.getElementById('save-button').addEventListener('click', (event)=> {
            event.preventDefault();
            this.checkUserInput();
        });
    }

    static storeUserInput(titleValue, textValue){
        if(this.noteToUpdate) {
            this.noteToUpdate.title = titleValue;
            this.noteToUpdate.text = textValue; 
            AlertBox.showAlertBox('Your note has been updated and saved.', 'alert-box__message--green', 'overlay-home-page');
            return this.noteToUpdate;
        } else {
            const title = titleValue;
            const text = textValue;
            const newNote = new Note(title, text);
            AlertBox.showAlertBox('Note has been saved.', 'alert-box__message--green', 'overlay-home-page');
            return newNote;
        }
    }

    static checkUserInput() {
        const titleValue = document.getElementById('writing-area-title').value.trim();
        const textValue = document.getElementById('writing-area-text').value.trim();
        if(titleValue && textValue) {
            if(this.noteToUpdate) {
                if(this.noteToUpdate.title === titleValue && this.noteToUpdate.text === textValue) {
                    AlertBox.showAlertBox('Note must be updated before saving!', 'alert-box__message--red', 'overlay-alert-box');
                    return;
                }
            }
            const note = this.storeUserInput(titleValue, textValue);
            LocalStorage.saveNote(note);
        } else {
            AlertBox.showAlertBox('Fill empty field(s) before saving!',  'alert-box__message--red', 'overlay-alert-box');
            return;
        }
    }
    static removeWindow() {
        document.getElementById('overlay-home-page').remove();
    }
}
