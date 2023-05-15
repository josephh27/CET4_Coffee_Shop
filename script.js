const pleaseBtn = document.querySelector(".please-btn");
const homeBtn = document.querySelector(".home-nav");
const menuBtn = document.querySelector(".menu-nav");
const musicBtn = document.querySelector(".music-nav");
const jobsBtn = document.querySelector(".jobs-nav");
const frame1 = document.querySelector(".frame1");
const frame2 = document.querySelector(".frame2");
const frame3 = document.querySelector(".frame3");
const frame4 = document.querySelector(".frame4");
const frameWrapper = document.querySelector(".frames-wrapper");
const navLabel = document.querySelector('#check');
const navButton = document.querySelector('label #btn');
const sideBar = document.querySelector('.sidebar');

const menuRedirect = [pleaseBtn, menuBtn]

document.addEventListener('click', (event) => {
    const compStyles = window.getComputedStyle(navButton);
    const isClickInside = sideBar.contains(event.target)
    console.log(compStyles.getPropertyValue('opacity'));
    if(!isClickInside && parseInt(compStyles.getPropertyValue('opacity')) === 0) {
        navLabel.classList.remove('active');
    }
})

navButton.addEventListener('click', () => {
    navLabel.classList.add('active');
})

homeBtn.addEventListener('click', (e) => {
    revertFrames();
    removeTabLight();
    e.currentTarget.classList.add('active');
    frameWrapper.scrollTo(0, frame1.offsetTop);
})

menuRedirect.forEach((Btn) => {
    Btn.addEventListener('click', () => {
        frame1.style.display = `none`;
        frame3.style.display = `none`;
        frame4.style.display = `none`;
        frameWrapper.scrollTo(0, frame2.offsetTop);
        removeTabLight();
        menuBtn.classList.add('active')
        frameWrapper.style.overflowY = `scroll`;
        })
    }
)

musicBtn.addEventListener('click', (e) => {
    removeTabLight();
    e.currentTarget.classList.add('active');
    revertFrames();
    frameWrapper.scrollTo(0, frame3.offsetTop);
})

jobsBtn.addEventListener('click', (e) => {
    removeTabLight();
    e.currentTarget.classList.add('active');
    revertFrames();
    frameWrapper.scrollTo(0, frame4.offsetTop);
})

const removeTabLight = () => {
    homeBtn.classList.remove('active');
    menuBtn.classList.remove('active')
    musicBtn.classList.remove('active')
    jobsBtn.classList.remove('active')
}

const revertFrames = () => {
    frameWrapper.style.overflowY = `hidden`;
    frame1.style.display = `flex`;
    frame3.style.display = `flex`;
    frame4.style.display = `flex`;
}

const menuTypes = [
    {name: 'Black', price: 50, filter: 1},{name: 'Latte', price: 60, filter: 1},{name: 'Espresso', price: 60, filter: 1},
    {name: 'Cappucino', price: 60, filter: 1},{name: 'Americano', price: 65, filter: 1},{name: 'Doppio', price: 70, filter: 1},
    {name: 'Cortado', price: 70, filter: 1},{name: 'Red Eye', price: 50, filter: 1},{name: 'Galão', price: 65, filter: 1},
    {name: 'Lungo', price: 50, filter: 1},{name: 'Macchiato', price: 65, filter: 1},{name: 'Mocha', price: 65, filter: 1},
    {name: 'Ristretto', price: 70, filter: 1},{name: 'Iced Coffee', price: 50, filter: 2},{name: 'Iced Espresso', price: 65, filter: 2},
    {name: 'Cold Brew', price: 50, filter: 2},{name: 'Frappuccino', price: 50, filter: 2},{name: 'Nitro', price: 70, filter: 2},
    {name: 'Mazagran', price: 50, filter: 2}, {name: 'Babka', price: 70, filter: 3},{name: 'Korintje', price: 65, filter: 3}, 
    {name: 'Pecan', price: 80, filter: 3},{name: 'Royal', price: 90, filter: 3},{name: 'Black Jack', price: 75, filter: 4},
    {name: 'Glazed', price: 65, filter: 4},{name: 'Sprinkled', price: 70, filter: 4},{name: 'Sugar Ice', price: 80, filter: 4}
]

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const menu = document.querySelector(".menu");
const menuButtons = document.querySelectorAll(".menu-buttons button");

const removeMenuLight = () => {
    menuButtons.forEach((elem) => {
        elem.classList.remove('active');
    })
    
}

menuButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        removeMenuLight();
        e.currentTarget.classList.add('active')
    })
})

for (let i = 0; i < menuButtons.length; i++) {
    menuButtons[i].addEventListener('click', () => {
        removeAllChildNodes(menu);
        for (let x = 0; x < menuTypes.length; x++) {
            if (parseInt(menuButtons[i].getAttribute('filter')) !== 0 && menuTypes[x]['filter'] !== parseInt(menuButtons[i].getAttribute('filter'))){
                continue;
            }
            const productDiv = document.createElement("div");
            //For the coffee name and picture display
            const subDivProduct = document.createElement("div");
            const span = document.createElement("span");
            const img = document.createElement("img");
            span.innerText = menuTypes[x]['name'];
            img.src = `images/menu/${menuTypes[x]['name']}.png`;
            subDivProduct.append(span)
            subDivProduct.append(img)
            subDivProduct.classList.add('sub-div-product');
            productDiv.classList.add('product-container');
            productDiv.append(subDivProduct);
            
            //For the add and remove button as well as the price display
            const priceDiv = document.createElement("div");
            const addBtn = document.createElement("button");
            const removeBtn = document.createElement("button");
            const addImg = document.createElement("img");
            const removeImg = document.createElement("img");
        
            //For the add and remove product display
            addImg.src = `images/add.png`
            removeImg.src = `images/minus.png`
            addBtn.appendChild(addImg);
            removeBtn.appendChild(removeImg);
            addBtn.classList.add('product-btn')
            addBtn.classList.add('add-btn')
            addBtn.setAttribute('price', menuTypes[x]['price'])
            addBtn.setAttribute('product', menuTypes[x]['name'])
            removeBtn.classList.add('product-btn')
            removeBtn.classList.add('remove-btn')
            removeBtn.setAttribute('price', menuTypes[x]['price'])
            removeBtn.setAttribute('prodct', menuTypes[x]['name'])
            priceDiv.classList.add('price-div');
            priceDiv.appendChild(addBtn);
            priceDiv.appendChild(removeBtn);
        
            //For the price display
            const price = menuTypes[x]['price'];
            const priceSpan = document.createElement('span');
            priceSpan.style.marginLeft = `10px`;
            priceSpan.innerText = price + ' php';
            priceDiv.appendChild(priceSpan);
            productDiv.appendChild(priceDiv);
            menu.appendChild(productDiv);
        }
    })
}

menuButtons[0].click();

//Calculating the total grocery bought
const buyButtons = document.querySelectorAll('.add-btn');
const removeButtons = document.querySelectorAll('.remove-btn');
const costDisplay = document.querySelector('.total-cost');
const itemsBought = document.querySelector('.bought-wrapper');
let totalCost = 0;

buyButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const product = e.currentTarget.getAttribute('product');
        const para = document.createElement('p')
        para.textContent = `${product} x 1`
        totalCost += parseInt(e.currentTarget.getAttribute('price'));
        console.log(e.currentTarget.getAttribute('price'));
        costDisplay.textContent = `Total cost: ₱${totalCost}`;
        itemsBought.appendChild(para)
    })
})
