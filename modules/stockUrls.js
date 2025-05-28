class StockUrls {
    constructor() {
        this.baseUrl = 'http://localhost:3000';
    }

    getTariffs(searchString=null, ID=null) {
        if (searchString !== null)
        {
            return `${this.baseUrl}/tariffs?title=${searchString}`;
        }
        if (ID !== null)
        {
            return `${this.baseUrl}/tariffs/${ID}`;
        }
        return `${this.baseUrl}/tariffs`;
    }

    getTariffById(id) {
        return `${this.baseUrl}/tariffs/${id}`;
    }

    createTariff() {
        return `${this.baseUrl}/tariffs`;
    }

    removeTariffById(id) {
        return `${this.baseUrl}/tariffs/${id}`;
    }

    updateTariffById(id) {
        return `${this.baseUrl}/tariffs/${id}`;
    }
}

export const stockUrls = new StockUrls();