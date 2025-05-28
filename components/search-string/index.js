export class SearchStringComponent {
    constructor(parent, value) {
        this.parent = parent;
        this.searchValue = ""
        if (value !== null)
        {
            this.searchValue = value
        }

    }

    searchStringListener(e)
    {
        this.searchValue = e.target.value
        console.log(this.searchValue)
    }

    addListeners(searchListener) 
    {
        const inputElement = document.getElementById("search-string")
        inputElement.addEventListener("input", (e) => {this.searchStringListener(e);})

        const buttonElement = document.getElementById("filter-button")
        buttonElement.addEventListener("click", searchListener)
    }

    getHTML() {
        return (
            `
            <div>
                <input type="text" id="search-string" class="rt-input__input search" placeholder="Введите название" />
                <button id="filter-button" class="btn mycard-button" type="button">Поиск</button>
            </div>
            `
        )
    }

    getValue()
    {
        return (this.searchValue)
    }

    render(onInput) {
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)

        const buttonElement = document.getElementById("filter-button")
        buttonElement.addEventListener("click", onInput)

        //this.addListeners(onInput)
        //const inputElement = document.getElementById("search-string");
        //if (inputElement && onInput) {
            //inputElement.addEventListener("input", onInput);
        //}
    
    }
}