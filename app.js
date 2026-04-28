



const sliderImg = document.getElementById("slider-img");
const images = ["./pent1.webp", "./pent2.webp", "./pent3.webp", "./pent4.webp"];
let currentIndex = 0;

// Thumbnail click handler
const smallImg = document.querySelectorAll(".varity");
smallImg.forEach((img, index) => {
    img.addEventListener("click", function() {
        // Purani borders khatam karein
        smallImg.forEach(i => i.style.borderColor = "black");
        // Is waqt click kiye gaye image ko highlight karein
        this.style.borderColor = 'red'; 
        currentIndex = index;
        sliderImg.src = this.src;
    });
});

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    sliderImg.src = images[currentIndex];
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    sliderImg.src = images[currentIndex];
}

function setSlide(index) {
    currentIndex = index;
    sliderImg.src = images[currentIndex];
}



// quantity

let currentQty =1;
const qtyDisplay = document.getElementById("qty-val");
 
function changeQty(amount){
currentQty += amount;
if(currentQty < 1){
    currentQty=1;
}
qtyDisplay.innerText = currentQty;
};

function colourChange(element){
    element.style.backgroundColor="green";
    element.innerText = 'ORDER DONE';
}