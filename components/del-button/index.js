export class DelButtonComponent {
    constructor(parent) {
        this.parent = parent;
    }

    addListeners(listener) {
        document
            .getElementById("del-button")
            .addEventListener("click", listener)
    }

    getHTML() {
        return (
            `
                <button id="del-button" class="btn mycard-button" type="button">Удалить запись</button>
            `
        )
    }

    render(listener) {
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(listener)
    }
}