import {ajax} from "../../modules/ajax.js";
import {stockUrls} from "../../modules/stockUrls.js";

export class DataStringsComponent {
    constructor(parent, id=null) {
        this.parent = parent;
        this.id = id

    }

    searchStringListener(e)
    {
        this.searchValue = e.target.value
        console.log(this.searchValue)
    }

    addListeners(searchListener) 
    {
        const buttonElement = document.getElementById("filter-button")
        buttonElement.addEventListener("click", searchListener)
    }

    getHTML() {
        return (
            `
            
            <input type="text" id="title-string" class="rt-input__input" placeholder="Введите название" />
            <input type="text" id="price-string" class="rt-input__input" placeholder="Введите цену" />
            <input type="text" id="text-string" class="rt-input__input" placeholder="Введите краткое описание" />
            <textarea id="special-text-string" rows="5" cols="50" class="rt-input__textar" placeholder="Введите полное описание"></textarea>
            <button id="add-card-button" class="btn mycard-button" type="button">Отправка карточки</button>
            
            `
        )
    }

    getValue()
    {
        return (this.searchValue)
    }

    render(onclick) {
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        
        const buttonElement = document.getElementById("add-card-button")
        buttonElement.addEventListener("click", onclick)

        if (this.id !== null)
        {
            ajax.get(stockUrls.getTariffById(this.id), (data) => {
                console.log(data)
                document.getElementById('title-string').value = data.title;
                document.getElementById('price-string').value = data.price;
                document.getElementById('text-string').value = data.text;
                document.getElementById('special-text-string').value = data.specialText;
            })
        }

        //this.addListeners(onInput)
        //const inputElement = document.getElementById("search-string");
        //if (inputElement && onInput) {
            //inputElement.addEventListener("input", onInput);
        //}
    
    }
}