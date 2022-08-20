
function updateProductNumber(inputFieldId, isIncrease) {

    const inputField = document.getElementById(inputFieldId);
    const previousInputNumberString = inputField.value;
    const previousInputNumber = parseInt(previousInputNumberString);


    let newInputNumber;


    if (isIncrease === true) {
        newInputNumber = previousInputNumber + 1;



    }
    else {
        newInputNumber = previousInputNumber - 1;
        if (newInputNumber < 0)
            return 0;

    }
    inputField.value = newInputNumber;
    return newInputNumber;



}



function calculateProductPrice(productNumber, productPrice) {

    const newPrice = productPrice * productNumber;

    return newPrice;




}
function setTextValueById(id, value) {
    const productId = document.getElementById(id);
    productId.innerText = value;
}


function currentProductTotal(element) {

    const productElement = document.getElementById(element);
    const productElementString = productElement.innerText;
    const productElementNumber = parseInt(productElementString);
    return productElementNumber;
}


function calculateSubTotal() {
    const currentPhoneTotal = currentProductTotal("phone-price");
    // console.log(currentPhoneTotal);
    const currentCaseTotal = currentProductTotal("case-price");

    const subTotal = currentPhoneTotal + currentCaseTotal;
    console.log(subTotal);
    setTextValueById("sub-total", subTotal);

    const tax = (subTotal * 0.01);
    const taxTotal = parseFloat(tax).toFixed(2)
    const totaltax = parseFloat(taxTotal);
    setTextValueById("tax-total", taxTotal);

    const allTotal = subTotal + totaltax;
    setTextValueById("all-total", allTotal);
}

