
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

// for back to top btn 
let backToTopButton = document.querySelector(".back-top");
backToTopBtn(backToTopButton);

// for clock in header
setInterval(setClock, 1000);
setClock();


export { togglePoint, checkBox };


