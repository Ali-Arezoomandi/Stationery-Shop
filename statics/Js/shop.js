import { api } from "./api.js";
////
import { togglePoint } from "./functions.js";
import { checkBox } from "./functions.js";

// for point on shop page
let liEl = document.querySelectorAll(".li-cat");
togglePoint(liEl);

// for checkbox
let labelEl = document.querySelectorAll("label");
checkBox(labelEl);


let productContainer = document.querySelector(".all-basket");
let btnContainer = document.querySelector(".pagination");

async function getAllProduct(api) {
    let res = await fetch(`${api}/Product.json`);
    let data = await res.json();

    return Object.values(data);
    
}

let currentPage = 1;
let productCount = 6;

async function displayProducts (container, currentPage, productCount) {

    container.innerHtml = "";

    let products = await getAllProduct(api);

    let endIndex = currentPage * productCount;
    let startIndex = endIndex - productCount;

    let selectedProducts = products.slice(startIndex, endIndex);

    let productFragment = document.createDocumentFragment();
    selectedProducts.forEach(p => {
        let product = document.createElement("main-product");
        product.setAttribute("name", p.name);
        product.setAttribute("image", p.imageUrl);
        product.setAttribute("price", p.price);
        product.setAttribute("discount", p.discount);
        product.setAttribute("score", p.score);

        productFragment.appendChild(product);
    })
    container.append(productFragment);
};

async function displayBtn (container) {

    container = "";

    let products = await getAllProduct(api);
}

let creatBtn = () => {

}


displayProducts(productContainer, currentPage, productCount);