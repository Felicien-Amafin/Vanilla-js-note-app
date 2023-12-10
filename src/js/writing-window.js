export class WritingWindow {
    constructor(title, text) {
        this.title = title;
        this.text = text;
    }
    static displayWritingWindow() {
        const rootElement = document.getElementById('page-container');
        rootElement.innerHTML = `
        <div id="writing-window" class="window flex-col">
            <span id="close-window-cross" class="window__close-cross">x</span>
            <form id="writing-area" class="writing-area flex-col">
                <input id="writing-area_title" class="writing-area_title" type="text" autocomplete="off" placeholder="Enter title ...">
                <textarea id="writing-area_text" class="writing-area_text" name="writing-area_text" placeholder="Enter text..." ></textarea>
            </form>
        </div>
        `
    }
}
