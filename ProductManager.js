class ProductManager {
    constructor () {
        this.products = [];
    }
    isCodeRepeated(code){
        let isRepeated = false
        this.products.forEach(product => {
            if(product.code == code) isRepeated = true
        });
        return isRepeated;
    }
    getLastId() {
        if(this.products.length!=0) return this.products[this.products.length-1].id;
        else return -1;
    }
    addProduct(product) {
        const isRepeated = this.isCodeRepeated(product.code);
        if (!isRepeated) {
            const id = this.getLastId() + 1;
            product.id = id;
            this.products.push(product);
        }
        else console.log(`Product with code ${product.code} already in array`);
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
        else console.log(`Product with id: ${id} not found.`);
    }
}

export default ProductManager;