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
