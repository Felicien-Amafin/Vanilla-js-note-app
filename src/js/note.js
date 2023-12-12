export class Note {
    constructor(title, text) {
        this.title = title;
        this.text = text;
        this.id = Math.floor(Math.random() * 10000)
        this.date = new Date();
    }
}