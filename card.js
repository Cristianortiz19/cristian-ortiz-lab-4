import "./card.js"
async function getProducts() {
    const products = {
        method: "GET",
        headers: {
            "content-type": "application/json"
        },
    }
    const APIproducts = await fetch("https://demo8088700.mockable.io/d1-products", products);
    const data = await APIproducts.json();
    console.log(data)
    return data;
}
const itemList = await getProducts();
const productList = document.getElementById("product-cards")

function showCard() {
    itemList.forEach(element => {
        const component = document.createElement('d1-card');
        component.setAttribute("name", element.name);
        component.setAttribute("url", element.url);
        component.setAttribute("description", element.description);
        component.setAttribute("price", element.price);
        component.setAttribute("category", element.category);
        component.setAttribute("brand", element.brand);
        component.setAttribute("size", element.size);
        productList.append(component);
    });
}

showCard();