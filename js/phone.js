document.getElementById('phone-btn-plus').addEventListener('click', function () {

    const number = updateProductNumber("phone-field", true)

    const newPrice = calculateProductPrice(number, 1219)

    setTextValueById("phone-price", newPrice);
    // setTextValueById("sub-total", newPrice)
    calculateSubTotal();

})


document.getElementById('phone-btn-minus').addEventListener('click', function () {

    const number = updateProductNumber("phone-field", false)

    const newPrice = calculateProductPrice(number, 1219);

    setTextValueById("phone-price", newPrice)
    calculateSubTotal();
})


