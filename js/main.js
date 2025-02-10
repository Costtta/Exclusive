import { salesData, bestSellingData, productsData } from "./data.js";
import store, { addToCartF, calculateTotalPrice, deleteF } from "./store.js";

const salesRow = document.getElementById('salesRow');
const bestSellingRow = document.getElementById('bestSellingRow')
const productsRow = document.getElementById('productsRow');
const tBody = document.getElementById('tBody')
const total = document.getElementById('total');
// loop sales array


salesData.forEach((index) => {
    const createCol = document.createElement('div');
    createCol.classList.add('col-lg-3')
    createCol.classList.add('col-md-6')
    createCol.classList.add('col-12')
    createCol.classList.add('d-flex')
    createCol.classList.add('flex-column')
    createCol.classList.add('justify-content-center')
    createCol.classList.add('align-items-center')
    createCol.classList.add('text-center')
    salesRow.appendChild(createCol)
    const createImg = document.createElement('img')
    createImg.setAttribute('alt', 'products')
    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')
    imgContainer.appendChild(createImg)
    const createTitle = document.createElement('h3');
    const createPrice = document.createElement('p');
    createPrice.classList.add('price')
    const createDescreption = document.createElement('p')
    createDescreption.textContent = index.description;
    // add to cart
    const addToCart = document.createElement('i');
    addToCart.classList.add('fa-regular');
    addToCart.classList.add('fa-heart');
    addToCart.setAttribute('data-bs-toggle', 'tooltip');
    addToCart.setAttribute('title', 'Add To Cart')
    imgContainer.appendChild(addToCart)

    createImg.setAttribute('src', index.img)
    createTitle.textContent = index.name
    createPrice.textContent = `$${index.price}`
    createCol.appendChild(imgContainer)
    createCol.appendChild(createTitle)
    createCol.appendChild(createPrice)
    createCol.appendChild(createDescreption)
    
    addToCart.addEventListener('click', (e) => {
        const product = e.target.parentElement.parentElement ;
        const productData = {
            name: product.children[1].textContent,
            price: product.children[2].textContent,
            img: product.children[0].children[0].src,
            description: product.children[3].textContent,
            btn: '<button class="btn">Delete</button>'
        }
        store.dispatch(addToCartF(productData))
        total.textContent = `Total Price : $${calculateTotalPrice(store.getState().cart)}`;
    })
})


// loop bestSelling array

bestSellingData.forEach((index) => {
    const createCol = document.createElement('div');
    createCol.classList.add('col-lg-3')
    createCol.classList.add('col-md-6')
    createCol.classList.add('col-12')
    createCol.classList.add('d-flex')
    createCol.classList.add('flex-column')
    createCol.classList.add('justify-content-center')
    createCol.classList.add('align-items-center')
    createCol.classList.add('text-center')
    bestSellingRow.appendChild(createCol)
    const createImg = document.createElement('img')
    createImg.setAttribute('alt', 'products')
    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')
    imgContainer.appendChild(createImg)
    const createTitle = document.createElement('h3');
    const createPrice = document.createElement('p');
    createPrice.classList.add('price')
    const createDescreption = document.createElement('p')
    createDescreption.textContent = index.description;

    // add to cart
    const addToCart = document.createElement('i');
    addToCart.classList.add('fa-regular');
    addToCart.classList.add('fa-heart');
    addToCart.setAttribute('data-bs-toggle', 'tooltip');
    addToCart.setAttribute('title', 'Add To Cart')
    imgContainer.appendChild(addToCart)

    createImg.setAttribute('src', index.img)
    createTitle.textContent = index.name
    createPrice.textContent = `$${index.price}`
    createCol.appendChild(imgContainer)
    createCol.appendChild(createTitle)
    createCol.appendChild(createPrice)


    createImg.setAttribute('src', index.img)
    createTitle.textContent = index.name
    createPrice.textContent = `$${index.price}`
    createCol.appendChild(imgContainer)
    createCol.appendChild(createTitle)
    createCol.appendChild(createPrice)
    createCol.appendChild(createDescreption)

    addToCart.addEventListener('click', (e) => {
        const product = e.target.parentElement.parentElement ;
        const productData = {
            name: product.children[1].textContent,
            price: product.children[2].textContent,
            img: product.children[0].children[0].src,
            description: product.children[3].textContent,
            btn: '<button class="btn">Delete</button>'
        }
        store.dispatch(addToCartF(productData))
        total.textContent = `Total Price : $${calculateTotalPrice(store.getState().cart)}`;
    })
})

// loop products array

productsData.forEach((index) => {
    const createCol = document.createElement('div');
    createCol.classList.add('col-lg-3')
    createCol.classList.add('col-md-6')
    createCol.classList.add('col-12')
    createCol.classList.add('py-5')
    createCol.classList.add('d-flex')
    createCol.classList.add('flex-column')
    createCol.classList.add('justify-content-center')
    createCol.classList.add('align-items-center')
    createCol.classList.add('text-center')
    productsRow.appendChild(createCol)
    const createImg = document.createElement('img')
    createImg.setAttribute('alt', 'products')
    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')
    imgContainer.appendChild(createImg)
    const createTitle = document.createElement('h3');
    const createPrice = document.createElement('p');
    createPrice.classList.add('price')
    const createDescreption = document.createElement('p')
    createDescreption.textContent = index.description;
    // add to cart
    const addToCart = document.createElement('i');
    addToCart.classList.add('fa-regular');
    addToCart.classList.add('fa-heart');
    addToCart.setAttribute('data-bs-toggle', 'tooltip');
    addToCart.setAttribute('title', 'Add To Cart')
    imgContainer.appendChild(addToCart)

    createImg.setAttribute('src', index.img)
    createTitle.textContent = index.name
    createPrice.textContent = `$${index.price}`
    createCol.appendChild(imgContainer)
    createCol.appendChild(createTitle)
    createCol.appendChild(createPrice)
    createCol.appendChild(createDescreption)

    addToCart.addEventListener('click', (e) => {
        const product = e.target.parentElement.parentElement ;
        const productData = {
            name: product.children[1].textContent,
            price: product.children[2].textContent,
            img: product.children[0].children[0].src,
            description: product.children[3].textContent,
            btn: '<button class="btn">Delete</button>'
        }
        store.dispatch(addToCartF(productData))
        total.textContent = `Total Price : $${calculateTotalPrice(store.getState().cart)}`;
    })
})

// cart


console.log(store.getState().cart);


const showNewState = () => {
    const data = store.getState().cart;
    console.log(data);

    tBody.innerHTML = ''; // Clear existing items

    data.forEach(product => {
        const row = tBody.insertRow();
        const nameCell = row.insertCell();
        const priceCell = row.insertCell();
        const imgCell = row.insertCell();
        const descriptionCell = row.insertCell();
        const deleteCell = row.insertCell()

        nameCell.textContent = product.name;
        priceCell.textContent = product.price;

        const imgElement = document.createElement('img');
        imgElement.src = product.img;
        imgElement.alt = product.name;
        imgElement.style.maxWidth = '50px'; // Adjust as needed
        imgCell.appendChild(imgElement);
        descriptionCell.textContent = product.description;
        
        // Create the delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('btn')
        deleteButton.addEventListener('click', () => {
            store.dispatch(deleteF(product)); // Dispatch delete action with the product
        });
        deleteCell.appendChild(deleteButton);
    });
    total.textContent = `Total Price : $${calculateTotalPrice(data)}`
};

// Subscribe to the store changes (THIS IS THE KEY!)
store.subscribe(showNewState);

// Initial render (in case the store is already populated)
showNewState();


