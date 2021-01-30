// Button Increase And Decrease
function ticketCostHandle(ticket, isIncrease) {
    const ticketNumberInput = document.getElementById(ticket + "Input");
    const ticketCount = parseInt(ticketNumberInput.value);
    let ticketnewCount = ticketCount;
    if (isIncrease == true) {
        ticketnewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketnewCount = ticketCount - 1;
    }
    ticketNumberInput.value = ticketnewCount;
    let ticketTotal = 0;
    if (ticket == "firstClass") {
        ticketTotal = ticketnewCount * 150;
    }
    if (ticket == "economyClass") {
        ticketTotal = ticketnewCount * 100;
    }
    calculateTotal();
}


// Total Calculation
function calculateTotal() {
    const firstClassInput = document.getElementById("firstClassInput");
    const firstClassCount = parseInt(firstClassInput.value);

    const economyClassInput = document.getElementById("economyClassInput");
    const economyClasscount = parseInt(economyClassInput.value);

    const totalPrice = firstClassCount * 150 + economyClasscount * 100;
    document.getElementById("subtotal").innerText = totalPrice;

    const vat = Math.round(totalPrice * 0.1);
    document.getElementById("vatCharge").innerText = vat;

    const total = totalPrice + vat;
    document.getElementById("grandTotal").innerText = total;
}


// confirmation Section
const total = document.getElementById('grandTotal').innerHTML;
const bookingConfirmation = document.getElementById('bookNow');
bookingConfirmation.addEventListener('click', function() {
    let mainSection = document.getElementById('mainSection');
    mainSection.style.display = 'none';

    let confirmation = document.getElementById('confirmation');
    confirmation.style.display = 'block';

    const firstClassPassenger = document.getElementById('firstClassInput').value;
    document.getElementById('firstClassPassenger').innerHTML = firstClassPassenger;

    const economyClassPassenger = document.getElementById('economyClassInput').value;
    document.getElementById('economyClassPassenger').innerHTML = economyClassPassenger;

    const subCost = document.getElementById('subtotal').innerHTML;
    document.getElementById('subCost').innerHTML = subCost;

    const vatCost = document.getElementById('vatCharge').innerHTML;
    document.getElementById('vatCost').innerHTML = vatCost;

    const total = document.getElementById('grandTotal').innerHTML;
    document.getElementById('totalCost').innerHTML = total;
});