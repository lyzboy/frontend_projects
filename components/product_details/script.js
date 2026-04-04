const frontShirt_btn = document.getElementById("front-shirt");
const topShirt_btn = document.getElementById("top-shirt");
document.addEventListener("DOMContentLoaded", () => {
    const sizeElements = document.querySelectorAll(".product__size");
    sizeElements.forEach((sizeElement) => {
        sizeElement.addEventListener("click", () => {
            // Remove .active class from all elements
            sizeElements.forEach((el) => el.classList.remove("active"));
            // Add .active class to the clicked element
            sizeElement.classList.add("active");
        });
    });
});

function switchShirt(targetName) {
    const productImage = document.getElementById("product-image");
    if (targetName === "front") {
        productImage.src = "./img/tshirt_front.webp";
    } else {
        productImage.src = "./img/tshirt_top.webp";
    }
}

frontShirt_btn.addEventListener("click", () => switchShirt("front"));
topShirt_btn.addEventListener("click", () => switchShirt("top"));
