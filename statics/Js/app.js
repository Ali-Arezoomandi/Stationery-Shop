// import custom element
import { Header } from "../Component/Header/header.js";
import { HeaderInfo } from "../Component/Header-Info/header-info.js";
import { Carts } from "../Component/Carts/carts.js";
import { Product } from "../Component/Product/product.js";
import { Comment } from "../Component/Comment/comment.js";
import { Footer } from "../Component/Footer/footer.js";

// import functions
import { add3Comments, add4Carts } from "./functions.js";
import { add4RandomProduct } from "./functions.js";
import { backToTopBtn } from "./functions.js";
import { setClock } from "./functions.js";

///////////////////////////////////////////////////

// add custom elements
if (!window.customElements.get("header-site")) {
    window.customElements.define("header-site", Header);
}

if (!window.customElements.get("header-info-site")) {
    window.customElements.define("header-info-site", HeaderInfo);
}

if (!window.customElements.get("cart-site")) {
    window.customElements.define("cart-site", Carts);
}

if (!window.customElements.get("main-product")) {
    window.customElements.define("main-product", Product);
}

if (!window.customElements.get("comment-site")) {
    window.customElements.define("comment-site", Comment);
}

if (!window.customElements.get("footer-site")) {
    window.customElements.define("footer-site", Footer);
}

///////////////////////////////////////////////////////

// array that has all svg elemet of carts
let allSVGs = [
    {
        title: "Writing Instruments",
        text: "Pens, pencils & fountain pens",
        color: " #3a5a8c",
        code: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" d="M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h1.5"></path><path d="m16.652 3.455l.649-.649A2.753 2.753 0 0 1 21.194 6.7l-.65.649m-3.892-3.893s.081 1.379 1.298 2.595c1.216 1.217 2.595 1.298 2.595 1.298m-3.893-3.893L10.687 9.42c-.404.404-.606.606-.78.829q-.308.395-.524.848c-.121.255-.211.526-.392 1.068L8.412 13.9m12.133-6.552l-5.965 5.965c-.404.404-.606.606-.829.78a4.6 4.6 0 0 1-.848.524c-.255.121-.526.211-1.068.392l-1.735.579m0 0l-1.123.374a.742.742 0 0 1-.939-.94l.374-1.122m1.688 1.688L8.412 13.9"></path></g></svg>`,
    },
    {
        title: "Notebooks",
        text: "Journals, planners & pads",
        color: " #ff7f6e",
        code: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 8c0-2.828 0-4.243.879-5.121C4.757 2 6.172 2 9 2h6c2.828 0 4.243 0 5.121.879C21 3.757 21 5.172 21 8v8c0 2.828 0 4.243-.879 5.121C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.879C3 20.243 3 18.828 3 16z"></path><path stroke-linecap="round" d="M8 2.5V22M2 12h2m-2 4h2M2 8h2m7.5-1.5h5m-5 3.5h5"></path></g></svg>`,
    },
    {
        title: "Art Supplies",
        text: "Paints, brushes & canvas",
        color: " #8cc9a8",
        code: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 6c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C3.9 2 4.6 2 6 2s2.1 0 2.635.272a2.5 2.5 0 0 1 1.093 1.093C10 3.9 10 4.6 10 6v12c0 1.4 0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.092C8.1 22 7.4 22 6 22s-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C2 20.1 2 19.4 2 18z"></path><path stroke-linecap="round" d="M7 19H5"></path><path d="m13.314 4.929l-2.142 2.142c-.578.578-.867.867-1.02 1.235C10 8.673 10 9.082 10 9.9v9.656l8.97-8.97c.99-.99 1.486-1.485 1.671-2.056a2.5 2.5 0 0 0 0-1.545c-.185-.57-.68-1.066-1.67-2.056s-1.486-1.485-2.056-1.67a2.5 2.5 0 0 0-1.545 0c-.571.185-1.066.68-2.056 1.67Z"></path><path d="M6 22h12c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092C22 20.1 22 19.4 22 18s0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.092C20.1 14 19.4 14 18 14h-2.5"></path></g></svg>`,
    },
    {
        title: "Desk Essentials",
        text: "Organizers, staplers & clips",
        color: " #8cc9a8",
        code: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 6c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C3.9 2 4.6 2 6 2s2.1 0 2.635.272a2.5 2.5 0 0 1 1.093 1.093C10 3.9 10 4.6 10 6v12c0 1.4 0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.092C8.1 22 7.4 22 6 22s-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C2 20.1 2 19.4 2 18z"></path><path stroke-linecap="round" d="M7 19H5"></path><path d="m13.314 4.929l-2.142 2.142c-.578.578-.867.867-1.02 1.235C10 8.673 10 9.082 10 9.9v9.656l8.97-8.97c.99-.99 1.486-1.485 1.671-2.056a2.5 2.5 0 0 0 0-1.545c-.185-.57-.68-1.066-1.67-2.056s-1.486-1.485-2.056-1.67a2.5 2.5 0 0 0-1.545 0c-.571.185-1.066.68-2.056 1.67Z"></path><path d="M6 22h12c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092C22 20.1 22 19.4 22 18s0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.092C20.1 14 19.4 14 18 14h-2.5"></path></g></svg>`,
    },
];

/////////////////////////////////////////////////


// // Color Paper
// let allProduct = [
//     {
//         name: "Color-Paper-1",
//         imageUrl: "../Image/Color-Paper-1.webp",
//         category: "paper",
//         price: 24.53,
//         discount: 0,
//         score: 3,
//         count: 20,
//     },
//     {
//         name: "Color-Paper-2",
//         imageUrl: "../Image/Color-Paper-2.webp",
//         category: "paper",
//         price: 28.31,
//         discount: 20.97,
//         score: 5,
//         count: 10,
//     },
//     {
//         name: "Color-Paper-3",
//         imageUrl: "../Image/Color-Paper-3.webp",
//         category: "paper",
//         price: 24.53,
//         discount: 20.32,
//         score: 4,
//         count: 30,
//     },

//     // Highlighter
//     {
//         name: "Highlighter-1",
//         imageUrl: "../Image/Highlighter-1.webp",
//         category: "highlighter",
//         price: 19.23,
//         discount: 16,
//         score: 4,
//         count: 22,
//     },
//     {
//         name: "Highlighter-2",
//         imageUrl: "../Image/Highlighter-2.webp",
//         category: "highlighter",
//         price: 24.36,
//         discount: 0,
//         score: 3,
//         count: 26,
//     },
//     {
//         name: "Highlighter-3",
//         imageUrl: "../Image/Highlighter-3.webp",
//         category: "highlighter",
//         price: 20.5,
//         discount: 13.87,
//         score: 5,
//         count: 22,
//     },
//     {
//         name: "Highlighter-4",
//         imageUrl: "../Image/Highlighter-4.webp",
//         category: "highlighter",
//         price: 12.64,
//         discount: 0,
//         score: 4,
//         count: 87,
//     },

//     // Notebook
//     {
//         name: "Notebook-1",
//         imageUrl: "../Image/Notebook-1.webp",
//         category: "notebook",
//         price: 5,
//         discount: 0,
//         score: 4,
//         count: 12,
//     },
//     {
//         name: "Notebook-2",
//         imageUrl: "../Image/Notebook-2.webp",
//         category: "notebook",
//         price: 8,
//         discount: 6,
//         score: 5,
//         count: 98,
//     },
//     {
//         name: "Notebook-3",
//         imageUrl: "../Image/Notebook-3.webp",
//         category: "notebook",
//         price: 10,
//         discount: 8.4,
//         score: 4,
//         count: 6,
//     },
//     {
//         name: "Notebook-4",
//         imageUrl: "../Image/Notebook-4.webp",
//         category: "notebook",
//         price: 14,
//         discount: 0,
//         score: 3,
//         count: 5,
//     },

//     // Pencil Case
//     {
//         name: "Pencil-Case-1",
//         imageUrl: "../Image/Pencil-Case-1.webp",
//         category: "pencilcase",
//         price: 39,
//         discount: 29,
//         score: 3,
//         count: 3,
//     },
//     {
//         name: "Pencil-Case-2",
//         imageUrl: "../Image/Pencil-Case-2.webp",
//         category: "pencilcase",
//         price: 34,
//         discount: 30,
//         score: 5,
//         count: 3,
//     },
//     {
//         name: "Pencil-Case-3",
//         imageUrl: "../Image/Pencil-Case-3.webp",
//         category: "pencilcase",
//         price: 24,
//         discount: 0,
//         score: 4,
//         count: 7,
//     },

//     // Set
//     {
//         name: "Pack-1",
//         imageUrl: "../Image/Pack-1.webp",
//         category: "pack",
//         price: 50,
//         discount: 0,
//         score: 3,
//         count: 1,
//     },
//     {
//         name: "Pack-2",
//         imageUrl: "../Image/Pack-2.webp",
//         category: "pack",
//         price: 68,
//         discount: 55,
//         score: 5,
//         count: 2,
//     },
//     {
//         name: "Pack-3",
//         imageUrl: "../Image/Pack-3.webp",
//         category: "pack",
//         price: 49,
//         discount: 0,
//         score: 4,
//         count: 1,
//     },
// ];

///////////////////////////////////////////////////////////

// // all comments details
// let allComment = [
//     {
//         scroe: 3,
//         text: "The quality of the paper is unmatched. My fountain pens glide perfectly without any bleeding. Highly recommended!",
//         img: "./Image/People-pic-1.jpg",
//         name: "Sarah Jenkins",
//         job: "Illustrator",
//     },
//     {
//         scroe: 4,
//         text: "Packaging was eco-friendly and beautiful. It felt like receiving a gift from a friend. The pens are fantastic.",
//         img: "./Image/People-pic-2.jpg",
//         name: "Michael Chen",
//         job: "Student",
//     },
//     {
//         scroe: 5,
//         text: "Finally found a store that curates the best Japanese stationery. The delivery was super fast too!",
//         img: "./Image/People-pic-3.jpg",
//         name: "Emma Wilson",
//         job: "Journaler",
//     },
// ];

/////////////////////////////////////////////////////

// for add 4 carts at header's buttom

let cartContainer = document.querySelector(".carts-container");
add4Carts(cartContainer, allSVGs);

// for add 4 product randomly
let productContainer = document.querySelector(".best-sellers");
add4RandomProduct(productContainer);

// for add 3 comment
let commentContainer = document.querySelector(".comm-container");
add3Comments(commentContainer);

// for back to top btn 
let backToTopButton = document.querySelector(".back-top");
backToTopBtn(backToTopButton);

// for clock in header
setInterval(setClock, 1000);
setClock();


