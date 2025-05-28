import {ProductComponent} from "../../components/product/index.js";
import {BackButtonComponent} from "../../components/back-button/index.js";
import {TopPanelComponent} from "../../components/top-panel/index.js";
import {MainPage} from "../main/index.js";

export class ProductPage {
    constructor(parent, id, data) {
        this.parent = parent
        this.id = id
        this.data = data
        
    }

    clickBack() {
        const mainPage = new MainPage(this.parent)
        mainPage.render()
    }

    clickHomePanel()
    {
        console.log("clickHomePanel")
        const mainPage = new MainPage(this.parent)
        mainPage.render()
    }

    getData() {
        return this.data
    }

    get pageRoot() {
        return document.getElementById('product-page')
    }

    getHTML() {
        return (
            `
                <div id="product-page" class="d-flex flex-column align-items-center gap-3"></div>
            `
        )
    }

    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        
        const panel = new TopPanelComponent(this.pageRoot)
        panel.render(this.clickHomePanel.bind(this)) 



        const backButton = new BackButtonComponent(this.pageRoot)
        backButton.render(this.clickBack.bind(this))
        
        const data = this.getData()
        const stock = new ProductComponent(this.pageRoot)
        stock.render(data)
    }
}