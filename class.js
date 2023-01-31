class ProductManager {
    constructor (products){
        this.products = products
    }

    addProduct(newProd){

        const isEmpty = Object.values(newProd).some(x => x === null || x === '');
        const prodArray = this.products
        newProd.id = prodArray.length+1
        if(isEmpty){
            console.log("Invalid Product")
        } else{
        prodArray.push(newProd)
        }
    }


    getProducts(){
        return this.products        
    }
    

    getProductById(id){
        const allProductsArr = this.products;

        const prodById = allProductsArr.find((prod) => prod.id == id);
        if (prodById === undefined){
            return 'Product not found'
        } else {
        return prodById
    }
    }
}



const products = new ProductManager([])


products.addProduct(
    {title: "Title",
    description: "description",
    price: 123,
    thumbnail: "thumbnail route",
    code: "aaa",
    stock: 0
})

products.getProducts()
products.getProductById(1)

console.log(products.getProductById(1))


