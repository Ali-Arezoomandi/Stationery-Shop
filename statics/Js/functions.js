// for home

import { api } from "./api.js";

// for add 4 carts at header's buttom
async function add4Carts(el, allData) {
    let cartContainer = el;

    const catrsFragment = document.createDocumentFragment();

    await allData.forEach((svg) => {
        let cartStite = document.createElement("cart-site");
        cartStite.setAttribute("title", svg.title);
        cartStite.setAttribute("text", svg.text);
        cartStite.shadowRoot.querySelector("span").innerHTML = svg.code;
        cartStite.shadowRoot.querySelector("span").style.color = svg.color;
        cartStite.shadowRoot.querySelector(".circle-cart").style.backgroundColor = svg.color;

        catrsFragment.append(cartStite);
    });

    cartContainer.append(catrsFragment);
}

// for add 4 carts randomly from main product's array
async function add4RandomProduct(el) {
    const allProduct = await getRequets("Product");

    let mainProductFragmet = document.createDocumentFragment();

    for (let i = 0; i < 4; i++) {
        let randomNumber = Math.floor(Math.random() * 17);

        let productCart = document.createElement("main-product");
        productCart.setAttribute("name", allProduct[randomNumber].name);
        productCart.setAttribute("image", allProduct[randomNumber].imageUrl);
        productCart.setAttribute("price", allProduct[randomNumber].price);
        productCart.setAttribute("discount", allProduct[randomNumber].discount);
        productCart.setAttribute("score", allProduct[randomNumber].score);

        mainProductFragmet.append(productCart);
    }
    el.append(mainProductFragmet);
}

// for 3 comments
async function add3Comments(el) {
    let allComments = await getRequets("Comment");

    let commentFragment = document.createDocumentFragment();

    allComments.forEach((comm) => {
        let commnetCart = document.createElement("comment-site");
        commnetCart.setAttribute("score", comm.scroe);
        commnetCart.setAttribute("text", comm.text);
        commnetCart.setAttribute("imgurl", comm.img);
        commnetCart.setAttribute("name", comm.name);
        commnetCart.setAttribute("job", comm.job);

        commentFragment.append(commnetCart);
    });

    el.append(commentFragment);
}

// request to get all product from data base
async function getRequets(table) {
    let res = await fetch(`${api}/${table}.json`);
    let data = await res.json();

    return Object.values(data);
}

// for back to up btn
function backToTopBtn(el) {
    el.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // این باعث میشه نرم اسکرول بشه
        });
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY < 200) {
            el.style.display = "none";
        } else {
            el.style.display = "block";
        }
    });
}

// for clock in header
function setClock() {
    let date = new Date();

    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    let time = date.toLocaleTimeString();

    document.querySelector(".date").textContent = `${year}-${month}-${day} `;
    document.querySelector(".timer").textContent = `${time}`;
}

export { add4Carts, add4RandomProduct, add3Comments, backToTopBtn, setClock };

/////////////////////////////////////////////////////////////

// for shop

// for point on shop page
function togglePoint(el) {
    el.forEach((l) => {
        l.addEventListener("click", () => {
            
            el.forEach(x => x.classList.remove("active"));

            l.classList.add("active");
        });
    });
}


// for checkbox
function checkBox(el) {
    el.forEach((label) => {
        label.addEventListener("click", () => {

            el.forEach((l) => l.querySelector(".square").classList.remove("active"));

            label.querySelector(".square").classList.add("active");
        });
    });
}

export { togglePoint, checkBox };
