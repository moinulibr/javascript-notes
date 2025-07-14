import ProductService from '../api/productApi.js';

//const addNnewProduct = "Dell XPS 15", 1500, "LPTOP001";
const productModel = new ProductService("Dell XPS 15", 1500, "LPTOP001");

const ProductManager = () => {
    console.log(productModel.getProductInfo());
    // আউটপুট: Dell XPS 15 (ID: LPTOP001) - Price: $1,500.00

    /* const discountedPrice = calculateDiscount(100, 10); // 100 ডলারের উপর 10% ছাড়
    console.log("Discounted Price:", formatCurrency(discountedPrice));
    // আউটপুট: Discounted Price: $90.00
    productModel.getProductInfo(); */
}
export { ProductManager };