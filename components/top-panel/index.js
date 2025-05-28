export class TopPanelComponent {
    constructor(parent) {
        this.parent = parent;
        this.isMenuOpen = false;
    }

    getHTML() {
        return (
            `
                <header id="panel" style="
                    height: 100px;
                    width: 100%;
                    margin-bottom: 100px;
                    background: #7700ff;
                    display: flex;          
                    align-items: center;    
                    justify-content: space-between; 
                    padding: 0 20px;
                ">
                    <div class="logo" style="font-size: 24px; color: white;"><h1>Интернет-провайдер</h1></div>
                    <div>
                        <button id="panel-menu-button" class="btn panel-button">Меню</button>
                        <button id="panel-button" class="btn panel-button">Главная страница</button>
                    </div>
                </header>
            `
        )
    }

    addListeners(listener) {
        const homeButton = document.getElementById(`panel-button`)
        homeButton.addEventListener("click", listener)
    }

    render(listener) {
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('afterbegin', html)
        this.addListeners(listener)
    }

}
