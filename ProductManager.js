class ProductManager {
    constructor () {
        this.products = [];
        this.lastId = -1;
    }
    isCodeRepeated(code){
        let isRepeated = false
        this.products.forEach(product => {
            if(product.code == code) isRepeated = true
        });
        return isRepeated;
    }
    insertId() {
        this.lastId++;
        return this.lastId;
    }
    addProduct(product) {
        if (!!product){
            const isRepeated = this.isCodeRepeated(product.code);
            if (!isRepeated) {
                product.id = this.insertId();
                this.products.push(product);
            } else throw new Error(`Product with code ${product.code} already in array`);
        } else throw new Error(`Product can't be null or undefined`);
    }
    getProducts() {
        return this.products;
    }
    getProductById(id) {
        let foundProduct;
        for (let i = 0; i<this.products.length; i++) {
            if (this.products[i].id == id){
                foundProduct = this.products[i];
                i = this.products.length;
            }
        }
        if(!!foundProduct) return foundProduct;
        else throw new Error(`Product with id: ${id} not found.`);
    }
}

export default ProductManager;