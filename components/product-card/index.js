import {DelButtonComponent} from "../../components/del-button/index.js";

export class ProductCardComponent {
    constructor(parent) {
        this.parent = parent;
    }

    
    getHTML(data) {
        return(
            `
                <div class="row g-0 bg-light position-relative w-50 mx-auto">
                    <div class="col-md-6 mb-md-0 p-md-4">
                        <img src="${data.src}" class="w-100" alt="картинка">
                    </div>
                    <div class="col-md-6 p-4 ps-md-0 d-flex flex-column">
                        <div class="flex-grow-1">
                            <h5 class="mt-0">${data.title}</h5>
                            <h3 class="mt-0">От ${data.price} руб/мес</h3>
                            <p>${data.text}</p>
                        </div>
                        <div class="mt-auto">
                            <button class="btn mycard-button" id="click-card-${data.id}" data-id="${data.id}">Подробнее</button>
                            <button class="btn mycard-button" id="del-card-${data.id}" data-id="${data.id}">Удалить запись</button>
                        </div>
                    </div>
                </div>
            `
        )
    }


    addListeners(data, detailsListener, delListener) {
        const detailsButton = document.getElementById(`click-card-${data.id}`)
        detailsButton.addEventListener("click", detailsListener)
        
        const delButton = document.getElementById(`del-card-${data.id}`)
        delButton.addEventListener("click", delListener)
    }
    


    render(data, detailsListener, delListener) {
        const html = this.getHTML(data)

        
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(data, detailsListener, delListener)
    }

}