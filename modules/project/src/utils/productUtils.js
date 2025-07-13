export const TAX_RATE = 0.15;

export const calculationTotalPrice = (price, qty) => {
    return (price * quantity) * (1 + TAX_RATE);
}

export function checkStock(productId) {
    // এখানে সার্ভার থেকে স্টক চেক করার লজিক থাকবে
    console.log(`Checking stock for product ID: ${productId}`);
    return Math.random() > 0.5; // ডেমো হিসেবে র্যান্ডম স্টক রিটার্ন করছি
}

// অন্য কোনো ফাংশন যা এক্সপোর্ট করা হচ্ছে না
function getProductDetails(productId) {
    // ...
}