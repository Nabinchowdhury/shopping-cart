document.getElementById('case-btn-plus').addEventListener('click', function () {



    const number = updateProductNumber("case-field", true);

    const newPrice = calculateProductPrice(number, 59);;

    setTextValueById("case-price", newPrice);

    calculateSubTotal();
})


document.getElementById('case-btn-minus').addEventListener('click', function () {


    const number = updateProductNumber("case-field", false);
    const newPrice = calculateProductPrice(number, 59);;

    setTextValueById("case-price", newPrice);

    calculateSubTotal();
})