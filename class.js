class ProductManager {
    constructor (products){
        this.products = products
    }

    addProduct(newProd){
        const prodArray = this.products
        newProd.id = prodArray.length+1
        prodArray.push(newProd)
    }


    getProducts(){
            console.log(this.products)
        }
    

    getProductById(id){
        const allProductsArr = this.products;
        const newProductsArr = allProductsArr.filter((prod) => prod.id == id);
        console.log(newProductsArr)
    }

}

const products = new ProductManager([])


products.addProduct(
    {title: "Title",
    description: "Description",
    price: 123,
    thumbnail: "thumbnail route",
    code: "aaa",
    stock: 0
}
)
products.addProduct(
    {title: "Title2",
    description: "Description2",
    price: 456,
    thumbnail: "thumbnail route",
    code: "aab",
    stock: 1
}
)

products.getProducts()
products.getProductById(1)


