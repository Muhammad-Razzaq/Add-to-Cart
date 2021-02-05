//Setting start main disabled hoga minus button
document.getElementById("fminus").setAttribute("disabled", "disabled");
document.getElementById("sminus").setAttribute("disabled", "disabled");

//Value increment of decrement krnay k liye
let fquantity;
let squantity;

//First price calcualtion function
let firstPrice = document.getElementById("firstPrice").innerText;
function priceTotal1() {
    let total = fquantity * firstPrice;
    document.getElementById("firstPrice").innerText = total;
}

//Second price calculation function
let secondPrice = document.getElementById("secondPrice").innerText;
function priceTotal2() {
    let total = squantity * secondPrice;
    document.getElementById("secondPrice").innerText = total;
}

//First + button
document.getElementById("fplus").addEventListener("click", function () {
    //User input
    fquantity = document.getElementById("fquantity").value;
    //Increment value
    fquantity++;
    //Setting increment user input value
    document.getElementById("fquantity").value = fquantity;

    if (fquantity > 1) {
        document.getElementById("fminus").removeAttribute("disabled");
        document.getElementById("fminus").classList.remove("disabled");
    }
    priceTotal1();
})

//First - button
document.getElementById("fminus").addEventListener("click", function() {
    //User input
    fquantity = document.getElementById("fquantity").value;
    //Decrement value
    fquantity--;
    //Setting increment user input value
    document.getElementById("fquantity").value = fquantity;

    if (fquantity === 1) {
        document.getElementById("fminus").setAttribute("disabled","disabled");
    }
    priceTotal1();
})

//Second + button
document.getElementById("splus").addEventListener("click", function () {
    //User input
    squantity = document.getElementById("squantity").value;
    //Increment value
    squantity++;
    //Setting increment user input value
    document.getElementById("squantity").value = squantity;

    if (squantity > 1) {
        document.getElementById("sminus").removeAttribute("disabled");
        document.getElementById("sminus").classList.remove("disabled");
    }
    priceTotal2();
})

//Second - button
document.getElementById("sminus").addEventListener("click", function() {
    //User input
    squantity = document.getElementById("squantity").value;
    //Decrement value
    squantity--;
    //Setting increment user input value
    document.getElementById("squantity").value = squantity;

    if (squantity === 1) {
        document.getElementById("sminus").setAttribute("disabled","disabled");
    }
    priceTotal2();
})

//Checkout Function
function checkout() {
    let firstPrice = parseInt(document.getElementById("firstPrice").innerHTML);
    let secondPrice = parseInt(document.getElementById("secondPrice").innerHTML);

    let sum = firstPrice + secondPrice;
    document.getElementById("totalPrice").innerHTML = sum;
}
