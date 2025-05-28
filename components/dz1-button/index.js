export class DZButtonComponent {
    constructor(parent, id, text) {
        this.parent = parent
        this.id = id
        this.text = text
    }

    addListeners(listener) {
        document
            .getElementById(`dz${this.id}-button`)
            .addEventListener("click", listener)
    }

    getHTML() {
        return (
            `
                <div id="live-alert-dz${this.id}"></div>
                <button type="button" class="btn mycard-button alert" id="dz${this.id}-button">${this.text}</button>
            `
        )
    }

    render(listener) {
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(listener)
    }
}