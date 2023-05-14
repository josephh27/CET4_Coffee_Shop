coffeeTypes = [
    {name: 'Black', price: 50},{name: 'Latte', price: 60},{name: 'Espresso', price: 60},{name: 'Cappucino', price: 60},
    {name: 'Americano', price: 65},{name: 'Doppio', price: 70},{name: 'Cortado', price: 70},{name: 'Red Eye', price: 50},
    {name: 'Galão', price: 65},{name: 'Lungo', price: 50},{name: 'Macchiato', price: 65},{name: 'Mocha', price: 65},
    {name: 'Ristretto', price: 70},{name: 'Iced Coffee', price: 50},{name: 'Iced Espresso', price: 65},{name: 'Cold Brew', price: 50},
    {name: 'Frappuccino', price: 50},{name: 'Nitro', price: 70},{name: 'Mazagran', price: 50}
]

const menu = document.querySelector(".menu");

coffeeTypes.forEach((type) => {
    const productDiv = document.createElement("div");
    //For the coffee name and picture display
    const subDivProduct = document.createElement("div");
    const span = document.createElement("span");
    const img = document.createElement("img");
    span.innerText = type['name'];
    img.src = `images/coffees/${type['name']}.png`;
    subDivProduct.append(span)
    subDivProduct.append(img)
    subDivProduct.classList.add('sub-div-product');
    productDiv.classList.add('product-container');
    productDiv.append(subDivProduct);
    menu.appendChild(productDiv);

    //For the add and remove button as well as the price display
    const priceDiv = document.createElement("div");
    const addBtn = document.createElement("button");
    const removeBtn = document.createElement("button");
    const addImg = document.createElement("img");
    const removeImg = document.createElement("img");
    priceDiv.classList.add('price-div');


})