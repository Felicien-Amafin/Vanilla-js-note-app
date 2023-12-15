export class NoteViewingWindow {
    static displayWindow(notes) {
        const rootElement = document.getElementById('page-container');
        rootElement.insertAdjacentHTML('beforeend', 
        `<div id="overlay-home-page" class="overlay-home-page flex-col">
            <div id="note-viewing-window" class="window window--note-viewing flex-col">
                <span id="close-window-cross" class="close-cross">x</span>
                <ul id="widgets-list" class="widgets-list">
                </div>
            </div>
        </div>
        `);
        document.getElementById('close-window-cross').addEventListener('click', ()=> {
            document.getElementById('overlay-home-page').remove();//Remove home page overlay and NoteViewingWindow inside
        });
        this.addNoteWidgets(notes);
    }

    static addNoteWidgets(notes) {
        notes.forEach(note => {
            document.getElementById('widgets-list').insertAdjacentHTML('beforeend', `
            <li id="note-widget" class="note-widget flex-col flex-col__gap15">
                <span id="note-widget__close-cross" class="close-cross">x</span>
                <h2 id="note-widget-title" class="note-widget__title">${note.title}</h2>
                <p id="note-widget-text" class="note-widget__text">${note.text}</p>
                <p id="note-widget-date" class="note-widget__date">${note.date}</p>         
            </li>
        `)
        });
    }
}