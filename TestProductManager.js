import ProductManager from './ProductManager.js';
import Product from './Product.js';

//Creacion de instancia de la clase ProductManager
const productManager = new ProductManager();

//Creacion del producto de prueba, de la clase Product
const miProducto1 = new Product('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25);

//Imprimimos el resultado de getProducts con la instancia recien creada.
console.log(`Instancia de productManager recien creada, con lista de productos = ${JSON.stringify(productManager.getProducts())}`);

// Agregamos el producto con los campos a testear, e imprimimos nuevamente la lista de productos para comprobar que se haya generado correctamente el id
productManager.addProduct(miProducto1);
console.log(`Agregamos el producto a nuestra lista de productos = ${JSON.stringify(productManager.getProducts())}`);

//Agregamos el mismo producto, y se espera un error por consola
productManager.addProduct(miProducto1);

//Buscamos el producto por id
const productFound = productManager.getProductById(0);
console.log(`El producto encontrado con id = 0 es: ${JSON.stringify(productFound)}`)
//Buscamos un producto con id inexistente
productManager.getProductById(123);