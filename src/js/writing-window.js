import { LocalStorage } from "./local-storage";
import { Note } from "./note";
import { AlertBox } from "./alert-box";

export class WritingWindow {
    static noteToUpdate;

    static displayWindow(noteToUpdate) {
        const rootElement = document.getElementById('page-container');
        rootElement.insertAdjacentHTML('beforeend', 
        `<div id="window-overlay" class="overlay overlay--window">
            <div id="writing-window" class="window window__writing">
                <span id="close-windw-cross" class="closing-cross closing-cross--dark-grey">x</span>
                <form id="writing-area" class="writing-area">
                    <input id="writing-area-title" class="writing-area__title" type="text" autocomplete="off" maxlength="40" placeholder="Enter title ...">
                    <textarea id="writing-area-text" class="writing-area__text" name="writing-area-text" placeholder="Enter text..." ></textarea>
                    <button id="writing-area-btn" class="writing-area__btn" type="button">Save</button>
                </form>
            </div>
        </div>
        `);
        if(noteToUpdate) {
            this.noteToUpdate = noteToUpdate;
            document.getElementById('writing-area-title').value = this.noteToUpdate.title;
            document.getElementById('writing-area-text').value = this.noteToUpdate.text;
        }
        document.getElementById('close-windw-cross').addEventListener('click', ()=> {
            this.removeWindow();
            if(WritingWindow.noteToUpdate){ WritingWindow.noteToUpdate = null; };
        });
        document.getElementById('writing-area').addEventListener('submit', (event)=> {
            event.preventDefault();
        });
        document.getElementById('writing-area-btn').addEventListener('click', (event)=> {
            event.preventDefault();
            document.getElementById('writing-area-btn').disabled = true;
            this.checkUserInput();
            document.getElementById('writing-area-btn').disabled = false;
        });
    }

    static storeUserInput(titleValue, textValue){
        if(this.noteToUpdate) {
            this.noteToUpdate.title = titleValue;
            this.noteToUpdate.text = textValue; 
            AlertBox.showGenericAlertBox('Your note has been updated and saved.', 'alert-box__message--green-mess', 'window-overlay');
            return this.noteToUpdate;
        } else {
            const title = titleValue;
            const text = textValue;
            const newNote = new Note(title, text);
            AlertBox.showGenericAlertBox('Note has been saved.', 'alert-box__message--green-mess', 'window-overlay');
            return newNote;
        }
    }

    static checkUserInput() {
        const titleValue = document.getElementById('writing-area-title').value.trim();
        const textValue = document.getElementById('writing-area-text').value.trim();
        if(titleValue && textValue) {
            if(this.noteToUpdate) {
                if(this.noteToUpdate.title === titleValue && this.noteToUpdate.text === textValue) {
                    AlertBox.showGenericAlertBox('Note must be edited to be saved.', 'alert-box__message--blue', 'alert-box-overlay');
                    return;
                }
            }
            const note = this.storeUserInput(titleValue, textValue);
            LocalStorage.saveNote(note);
        } else {
            AlertBox.showGenericAlertBox('Fill empty field(s) before saving.',  'alert-box__message--blue', 'alert-box-overlay');
            return;
        }
    }

    static removeWindow() {
        document.getElementById('window-overlay').remove();
    }
}
