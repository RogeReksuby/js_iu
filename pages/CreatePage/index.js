import {ProductComponent} from "../../components/product/index.js";
import {BackButtonComponent} from "../../components/back-button/index.js";
import {TopPanelComponent} from "../../components/top-panel/index.js";
import {MainPage} from "../main/index.js";
import {ajax} from "../../modules/ajax.js";
import {stockUrls} from "../../modules/stockUrls.js";
import { DataStringsComponent } from "../../components/data-strings/index.js";

export class CreatePage {
    constructor(parent, id=null) {
        this.parent = parent
        this.id = id
        
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

    clickUpdateCard()
    {
        console.log("Clicked on Update card")
        let data = {
            src: "src/test.jpg",
            title: document.getElementById('title-string').value,
            text: document.getElementById('text-string').value,
            specialText: document.getElementById('special-text-string').value,
            price: Number(document.getElementById('price-string').value)
        }
        if (Number.isNaN(data.price))
        {
            alert('Цена должна быть числом')
        }
        else
        {
            
            ajax.patch(stockUrls.updateTariffById(this.id), data, (data, status) => {
                if (status === 200) {
                    console.log(status, ' Тариф обновлен!');
                }
                else
                {
                    console.log(status, ' Ошибка ', data);
                }
            })
        }
    }

    clickAddCard()
    {
        console.log("Clicked on add card")
        let data = {
            src: "src/test.jpg",
            title: document.getElementById('title-string').value,
            text: document.getElementById('text-string').value,
            specialText: document.getElementById('special-text-string').value,
            price: Number(document.getElementById('price-string').value)
        }
        if (Number.isNaN(data.price))
        {
            alert('Цена должна быть числом')
        }
        else
        {
            
            ajax.post(stockUrls.createTariff(), data, (data, status) => {
                if (status === 201) {
                    console.log(status, ' Тариф создан!');
                }
                else
                {
                    console.log(status, ' Ошибка ', data);
                }
            })
        }
        

        //ajax.get(stockUrls.getTariffs(searchString), handleResponse)
    }

    getDataOld() {
        return this.data
    }

    getData() {
    ajax.get(stockUrls.getTariffById(this.id), (data) => {
        this.renderData(data);
    })
    }

    renderData(item) {
    const product = new ProductComponent(this.pageRoot)
    product.render(item)
    }

    render() {
    this.parent.innerHTML = ''
    const html = this.getHTML()
    this.parent.insertAdjacentHTML('beforeend', html)

    const panel = new TopPanelComponent(this.pageRoot)
    panel.render(this.clickHomePanel.bind(this)) 

    const backButton = new BackButtonComponent(this.pageRoot)
    backButton.render(this.clickBack.bind(this))

    //this.getData()
    if (this.id == null)
    {
        const dataStrings = new DataStringsComponent(this.pageRoot)
        dataStrings.render(this.clickAddCard.bind(this))
    }
    else
    {
        console.log(this.id)
        const dataStrings = new DataStringsComponent(this.pageRoot, this.id)
        dataStrings.render(this.clickUpdateCard.bind(this))
    }
    
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

    renderOld() {
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