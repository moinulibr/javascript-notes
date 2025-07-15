import { calculationTotalPrice, checkStock, TAX_RATE } from "../../utils/productUtils.js";

const itemPrice = 100;
const itemQuantity = 2;

const totalPayable = calculationTotalPrice(itemPrice, itemQuantity);
console.log(`Total payable amount (including tax ${TAX_RATE * 100}%): $${totalPayable.toFixed(2)}`);
// আউটপুট: Total payable amount (including tax 15%): $230.00 (উদাহরণস্বরূপ)

const productIdToCheck = 'P12345';
if (checkStock(productIdToCheck)) {
    console.log(`Product ${productIdToCheck} is in stock!`);
} else {
    console.log(`Sorry, product ${productIdToCheck} is out of stock.`);
}