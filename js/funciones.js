/* Menu Toggle */
const buttonExpand = document.querySelector("button.expand.open");
const buttonClose = document.querySelector("button.expand.close");
const buttonsExpand = document.querySelectorAll("button.expand");
const menu = document.querySelector("header");

buttonsExpand.forEach(buttonExpand => {
    buttonExpand.addEventListener("click", e => {
        e.preventDefault();
        if (buttonExpand.classList.contains("open")) {
            menu.classList.add("open");
        }
        else {
            menu.classList.remove("open");
        }
    });
});
/* === */

/* Booking system */
const roomButtons = document.querySelectorAll(".quantitySelector .btn");
const bookingForm = document.querySelector("#bookingForm");

if (bookingForm != null) {
    bookingForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("La reserva se ha enviado para su gestión");
    })
}

roomButtons.forEach(roomButton => {
    roomButton.addEventListener("click", () => {
        const roomType = roomButton.getAttribute("data-room");
        const btnIncrease = roomButton.classList.contains("add");

        if (btnIncrease) {
            modify(roomType, +1);
        }
        else {
            modify(roomType, -1);
        }
    })
});

function modify(roomType, inc) {
    console.log("Modifying roomType:" + roomType + " with: " + inc);
    const counterObj = document.querySelector("#number-" + roomType);
    const actualValue = parseInt(counterObj.innerHTML);

    const nextValue = actualValue + inc;

    if (nextValue < 0) {
        // Si el valor va a ser menor de cero no permitir.
    }
    else if (nextValue > 10) {
        alert("Para reservas superiores contacta con el departamento de ventas para grupos");
    }
    else {
        counterObj.innerHTML = nextValue;
    }
}
/* === */

/* Gallery */
const galleryImages = document.querySelectorAll(".galleryImage a");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal img");
const galleryNavigation = document.querySelectorAll (".modal button");
let actualImg = 0;

galleryImages.forEach((galleryImage, i) => {
    galleryImage.addEventListener("click", e => {
        e.preventDefault();
        actualImg = i;
        modalImg.setAttribute("src", galleryImage.getAttribute("href"));
        modal.classList.add("visible");
    })
})

if (modal != null) {
    modal.addEventListener("click", () => {
        modal.classList.remove("visible");
    });
}

galleryNavigation.forEach((flecha, i) => {
    flecha.addEventListener("click", evento => {
        evento.stopPropagation();

        if(1 == 0){
            actualImg = actualImg > 0 ? actualImg - 1 : galleryImages.length - 1;
        }else{
            actualImg = actualImg < galleryImages.length - 1 ? actualImg + 1 : 0;
        }
        modalImg.setAttribute("src", galleryImages[actualImg].getAttribute("href"));
    });
});
/* === */