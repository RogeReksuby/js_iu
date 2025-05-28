export class ProductComponent {
    constructor(parent) {
        this.parent = parent
    }

    getHTML(data) {
        return (
            `
            <div class="card mb-3 w-75">
                <div class="card mb-3 w-100 gap-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${data.src}" class="img-fluid" alt="картинка">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h3 class="card-title">${data.title}</h3>
                                <h2 class="card-title">От ${data.price} руб/мес</h2>
                                <h5><p class="card-text">${data.text}</p></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gap-3 w-75" style="padding-left: 5%;">
                    <p class="card-text">${data.specialText}</p>
                <div>
            </div>
            `
        )
    }

    render(data) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
    }
}