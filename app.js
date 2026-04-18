const mainImg =document.getElementById("main");
const smallImg =document.querySelectorAll(".varity");

// loop
smallImg .forEach(i => {
    i .addEventListener("click",function() {
         smallImg.forEach(img =>img);
        this.style.borderColor = 'black';
         mainImg.src = this.src;
    })
});

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