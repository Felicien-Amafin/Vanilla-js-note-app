import './sass/main.scss'
import {Note } from './js/note.js'


class App {
    constructor(rootElement) {
        this.rootElement = rootElement
        this.renderHomePage(this.rootElement);
    }
    renderHomePage(rootElementId) {
        const rootElement = document.getElementById(`${rootElementId}`)
        rootElement.innerHTML = `
        <h1 id='app-title'>My Note Handler</h1>
        <div id='white-patch'class='white-patch flex-col flex-col__gap70'>
            <div id='create-icon-group' class='create-icon-group flex-col flex-col__gap20'>
                <p id='create-icon-label' class='create-icon-label'>Create</p>
                <div id='create-icon' class='create-icon flex-col'>
                    <div class='create-icon__cross'>+</div>
                </div>
            </div>
            <button id='search-button' class='search-button' type='button'>Search</button>
        </div>
        `
    }
}

new App('page-container')


