import {ProductCardComponent} from "../../components/product-card/index.js";
import {AddButtonComponent} from "../../components/add-button/index.js";
import {TopPanelComponent} from "../../components/top-panel/index.js";
import {DZButtonComponent} from "../../components/dz1-button/index.js";
import {SearchStringComponent} from "../../components/search-string/index.js";
import {ProductPage} from "../product/index.js";

// основная страница
export class MainPage {
    constructor(parent) {
        this.parent = parent;
        this.data = [
            {
                id: 1,
                src: "src/test.jpg",
                title: "Тест-драйв",
                text: "Безлимитный интернет 500 мбит/с. Попробуйте и пользуйтесь услугами в течении 30 дней бесплатно",
                specialText: "Тариф Тест-драйв позволяет использовать услуги провайдера бесплатно в течении 30 дней." +
                 "Стартовый платеж при подключении услуг на условиях акции не взимается."+
                 "Плата за предоставление доступа и инсталляционный платеж по услугам начисляются в полном объеме в третий месяц пользования услугами или с 31 дня по тарифам и на условиях, действующих в региональных филиалах по тарифам. Если абонент расторгает договор на оказание услуг во время действия промо-периода, то плата за предоставление доступа и инсталляционный платеж абоненту не начисляются.",
                price: 0
            },
            {
                id: 2,
                src: "src/game.jpg",
                title: "Игровой 2в1",
                text: "Безлимитный интернет 890 мбит/с. Интерактивное ТВ",
                specialText: "Помимо высокоскоростного интернета 890 мбит/с по технологии FTTb, тариф также содержит в себя ряд игровых опций для получения преимущества в играх. Интерактивное ТВ включает 224 канала с  возможностью ставить эфир на паузу или смотреть передачи из архива. Доступен онлайн-кинотеатр с доступом более чем к 27000 фильмов и сериалов.",
                price: 1190
            },
            {
                id: 3,
                src: "src/talk.jpg",
                title: "Технологии общения",
                text: "Безлимитный интернет 500 мбит/с. Мобильная связь",
                specialText: "Помимо высокоскоростного интернета 500 мбит/с по технологии FTTb, тариф также дает доступ к мобильной связи. Базовый пакет минут на звоник - 1000 минут. Безлимитные звонки на номера провайдера и звонки из пакета минут на остальные номера даже в поездках по России. 500 СМС на сотовые телефоны домашнего региона. 40 Гб мобильного интернета с максимальной скоростью трафика, а также безлимит для социальных сетей ВК, Telegram, Whatsapp, Одноклассники.",
                price: 890
            },
        ]
    }
    

    clickAdd() // обработчик нажатия на кнопку добавления карточки 
    {
        const addData = {
            id: 0,
            src: "src/test.jpg",
            title: "Тест-драйв",
            text: "Безлимитный интернет 500 мб/с. Попробуйте и пользуйтесь услугами в течении 30 дней бесплатно",
            specialText: "Тариф Тест-драйв позволяет использовать услуги провайдера бесплатно в течении 30 дней." +
                 "Стартовый платеж при подключении услуг на условиях акции не взимается."+
                 "Плата за предоставление доступа и инсталляционный платеж по услугам начисляются в полном объеме в третий месяц пользования услугами или с 31 дня по тарифам и на условиях, действующих в региональных филиалах по тарифам. Если абонент расторгает договор на оказание услуг во время действия промо-периода, то плата за предоставление доступа и инсталляционный платеж абоненту не начисляются.",
            price: 0
        }
        if (this.data.length > 0) // если длина больше 0, то берем последний id (он наибольший) увеличенный на 1
        {
            addData.id = this.data.slice(-1)[0].id + 1
        }
        else
        {
            addData.id = 1 // если длина 0, то id = 1
        }
        this.data.push(addData)
        this.render()
    }

    indexOfDataID(id) // вычисление индекса массива по его id
    {
        let index = -1
        for (let j = 0; j < this.data.length; j++)
        {
            if (this.data[j].id == id)
            {
                index = j
                break
            }
        }
        return index
    }

    clickCard(e) // обработчик нажатия на кнопку подробнее на карточке
    {
        const cardId = e.target.dataset.id
        const tempData = this.data[this.indexOfDataID(cardId)]
        const productPage = new ProductPage(this.parent, cardId, tempData)
        productPage.render()
    }

    clickHomePanel() // кнопка возвращения на главную страницу на шапке страницы
    {
        console.log("clickHomePanel")
        const mainPage = new MainPage(this.parent)
        mainPage.render()
    }

    filteringData(str) {
        const filteredData = this.data.filter(item => 
        item.title.toLowerCase().includes(str.toLowerCase()) // Приводим оба значения к нижнему регистру
        );
        console.log(this)
        console.log(filteredData);
        return filteredData;
    }

    searchInput()
    {
        console.log("Priv")
        const inputElement = document.getElementById('search-string')
        const inputValue = inputElement.value
        //console.log(inputValue)
        
        this.render(this.filteringData(inputValue))
                
    }

    delCard(e) // обрабтчик кнопки удаления карточки
    {
        const cardId = e.target.dataset.id
        const index = this.indexOfDataID(cardId)
        console.log(index)
        if (index !== -1)
        {
            this.data.splice(index, 1)
        }
        console.log(this.data)
        this.render()
    }

    getData() // получение данных
    {
        return this.data;
    }

    get pageRoot() // элемент главной страницы html
    {
        return document.getElementById('main-page')
    }
    
    showAlert(alertId, message) // отображение уведомления
    {
        const alert = document.getElementById(alertId);
        
        // очиcтка предыдущего уведомления
        alert.innerHTML = ''
        alert.style.display = 'block'
        
        // содержимое уведомления
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
            `<div class="alert alert-info myalert alert-dismissible" role="alert">`,
            `   <div>${message}</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('');
        
        alert.append(wrapper);
        
    }


    getHTML() 
    {
        return (
        `
            <div id="main-page" class="d-flex flex-column align-items-center gap-3"></div>
        `
        )
    }

    render(filterData = null/*, searchValue = null*/) {
        this.parent.innerHTML = ''

        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)

        // верхняя панель 
        const panel = new TopPanelComponent(this.pageRoot)
        panel.render(this.clickHomePanel.bind(this)) 
        
        let data = this.getData()
        if (filterData !== null/* && searchValue !== null*/)
        {
            data = filterData
        }
        
        let searchString = new SearchStringComponent(this.pageRoot)
        searchString.render(this.searchInput.bind(this))

        // кнопка добавления
        const addButton = new AddButtonComponent(this.pageRoot)
        addButton.render(this.clickAdd.bind(this))
        
        
        // отображение карточек
        data.forEach((item) => {
            const productCard = new ProductCardComponent(this.pageRoot)
            productCard.render(item, this.clickCard.bind(this), this.delCard.bind(this))
        })

        // кнопка задачи 1.4 ДЗ
        const dz11Button = new DZButtonComponent(this.pageRoot, 11, `Вычисление суммарной стоимости тарифов`)
        dz11Button.render((e) => {
            this.showAlert('live-alert-dz11', this.getSumAndMultOfArray())
        })

        // кнопка задачи 1.9 ДЗ
        const dz12Button = new DZButtonComponent(this.pageRoot, 12, "Повторяющиеся тарифы пользователей")
        dz12Button.render((e) => {
            this.showAlert('live-alert-dz12', this.fill(5, ' Тест-драйв'))
        })

        // кнопка задачи 2.6 ДЗ
        const dz2Button = new DZButtonComponent(this.pageRoot, 2, "Качественная разница между тарифами")
        dz2Button.render((e) => {
            this.showAlert('live-alert-dz2', this.grDiff())
        })

        const dz3Button = new DZButtonComponent(this.pageRoot, 3, "Проверка тарифа на палиндром")
        dz3Button.render((e) => {
            this.showAlert('live-alert-dz3', this.palindromcheck("Тест-драйв"))
        })

        console.log(this.isPalindrom1("А роза упала на лапу Азора"))
        console.log(this.isPalindrom2("А роза упала на лапу Азора")) 
    }

    getSumAndMultOfArray()
    {
        //Напишите функцию getSumAndMultOfArray(), который определяет сумму и произведение значений массива.
        const myArr2 = this.data
        let sumPrice = 0
        let multPrice = 1
        for (let i = 0; i < myArr2.length; i++)
        {
            sumPrice = sumPrice + myArr2[i].price
            multPrice = multPrice * myArr2[i].price
        }
        console.log(sumPrice, " ", multPrice)
        return("<p>Cуммарная стоимость:" + String(sumPrice) + "</p><p>Произведение стоимостей: " + String(multPrice) + "</p>")
    }

    // * @param {number} arraySize - размер массива
    // * @param {?} data - значение для массива
    // * @returns {Array}
    fill(arraySize, data) // ['a', 'a', 'a']
    {
        let tariphPacket = []
        let counter = 0
        while (counter < arraySize)
        {
            tariphPacket.push(data)
            counter++
        }
        console.log(tariphPacket)
        return("Тарифы " + String(tariphPacket)) 
    }

    //Качественная разница между двумя парами (a, b) и (c, d) определяется как (a * b) - (c * d).

    //Например, качественная разница между (5, 6) и (2, 7) - это (5 * 6) - (2 * 7) = 16. 
    //Дан массив целых чисел, необходимо найти 4 различных индекса w, x, y, и z, таких что, качественная разница между парами 
    //(nums[w], nums[x]) и (nums[y], nums[z]) была максимальной. Функция возвращает максимальную качественную разницу.
    //Входные данные: nums = [5,6,2,7,4] Результат: 34 Пояснение: Мы можем выбрать индексы 1 и 3 для первой пары (6, 7) 
    //и индексы 2 и 4 для второй пары (2, 4). Качественная разница тогда - (6 * 7) - (2 * 4) = 34.

    grDiff()
    {
        let prices = []
        this.data.forEach( (tar) => {
            prices.push(tar.price)
        })

        //let prices = [5,6,2,7,4]
        console.log(prices)

        let min1 = Infinity, min2 = Infinity;
        let max1 = -Infinity, max2 = -Infinity;
        if (prices.length < 4)
        {
            return("Слишком короткий список тарифов")
        }
        for (let j = 0; j < prices.length; j++)
        {
            if (prices[j] < min1) {
                min2 = min1;
                min1 = prices[j];
            } else if (prices[j] < min2) {
                min2 = prices[j];
            }
    
            
            if (prices[j] > max1) {
                max2 = max1;
                max1 = prices[j]
            } else if (prices[j] > max2) {
                max2 = prices[j];
            }
        }

        
        console.log(max1, max2, min2, min1)
        const diff = (max1 * max2) - (min1 * min2)
        return ("<p>Качественная разница: " + String(diff) + `</p>Для тарифов со стоимостью ${max1}, ${max2}, ${min2}, ${min1}`)

    }

    isPalindrom1(strParam)
    {
        const str = String(strParam).toLowerCase().replaceAll(' ', '')
        let isCheck = true
        for (let j = 0; j < Math.floor(str.length / 2); j++)
        {
            if (str[j] != str[str.length - 1 - j])
            {
                isCheck = false
                break
            }
        }

        return (isCheck)
    }

    isPalindrom2(strParam)
    {
        const str = String(strParam).toLowerCase().replaceAll(' ', '')
        const str1 = str.slice(0, Math.floor(str.length / 2))
        const str2 = str.slice(str.length - Math.floor(str.length / 2), str.length).split('').reverse().join('')
        
        return (str1 === str2)
    }

    palindromcheck(strParam)
    {
        let ch1, ch2
        if (this.isPalindrom1(strParam))
        {
            ch1 = " "
        }
        else 
        {
            ch1 = " не "
        }

        if (this.isPalindrom2(strParam))
        {
            ch2 = " "
        }
        else 
        {
            ch2 = " не "
        }

        return ("<p>Название " + strParam + ch1 + "является палиндромом (способ 1)</p>Название " + strParam + ch2 + "является палиндромом (способ 2)")

    }

}