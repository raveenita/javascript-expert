const Product = require("../../entities/product");

class ProductDataBuilder {
    constructor() {
        // the default will be the success case

        this.productData = {
            id: '00001',
            name: 'valid name',
            price: 1000,
            category: 'electronics'
        }

    }

    static aProduct() {
        return new ProductDataBuilder();
    }

    withInvalidId() {
        this.productData.id = '1';

        return this;
    }

    withInvalidName() {
        this.productData.name = 'abc123';

        return this;
    }

    withInvalidPrice() {
        this.productData.price = 2000;

        return this;
    }

    withInvalidCategory() {
        this.productData.category = 'shopping';

        return this;
    }

    build() {
        const product = new Product(this.productData);
        
        return product
    }
}

module.exports = ProductDataBuilder;