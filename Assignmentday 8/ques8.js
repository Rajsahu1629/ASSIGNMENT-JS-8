
// fetched the data 
async function fetcheddata()
{
    try
    {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        return data;
    }
    catch(err)
    {
        console.log(err);
    }
}

// display 5 products 

async function display5produts() {
    const products = await fetcheddata();
    console.log("fist 5 products " , products.splice(0,5));

}

// filter data 


async function filterProductsByCategory(category) {
    const products = await fetcheddata();
    const filteredProducts = products.filter(product => product.category === category);
    console.log(`Products in ${category} category:`, filteredProducts);
    return filteredProducts;
}


// giivng highest price 


async function logHighestPricedProduct() {
    const products = await fetcheddata();
    const highestPricedProduct = products.reduce((max, product) => product.price > max.price ? product : max, products[0]);
    console.log('Highest Priced Product:', highestPricedProduct);
}

// average of all the price 

async function logAveragePrice() {
    const products = await fetchProductData();
    const total = products.reduce((sum, product) => sum + product.price, 0);
    const averagePrice = total / products.length;
    console.log('Average Price of All Products:', averagePrice);
}

// track user 

async function trackUserInteractions(category) {
    const filteredProducts = await filterProductsByCategory(category);
    const interactionLog = {
        timestamp: new Date().toISOString(),
        category: category,
        results: filteredProducts
    };
    console.log('User Interaction Log:', interactionLog);
    return interactionLog;
}

// all function execute 
async function analyzeProductData() {
    await display5produts();
    await filterProductsByCategory('electronics'); // Example category
    await logHighestPricedProduct();
    await logAveragePrice();
    await trackUserInteractions('electronics'); // Example category
}

analyzeProductData();
