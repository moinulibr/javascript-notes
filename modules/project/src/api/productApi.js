class ProductApi {
    constructor(name, price, id) {
        this.name = name;
        this.price = price;
        this.id = id;
    }

    getProductInfo() {
        return `${this.name} (ID: ${this.id}) - Price: ${this.price}`;
    }
}
export default ProductApi;