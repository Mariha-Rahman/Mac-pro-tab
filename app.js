function setPrice(amount) {
    const memory = document.getElementById('memory-extra');
    if (amount == 8) {
        memory.innerText = 0
    }
    else if (amount == 16) {
        memory.innerText = 180
    }
    const storage = document.getElementById('storage-extra')
    if (amount == 256) {
        storage.innerText = 0;
    }
    else if (amount == 512) {
        storage.innerText = 100
    }
    else if (amount == 1) {
        storage.innerText = 180
    }
    const delivery = document.getElementById('charge-extra')
    if (amount == 0) {
        delivery.innerText = 0
    }
    else if (amount == 20) {
        delivery.innerText = 20
    }
    const totalPrice = document.getElementById('total');
    totalPrice.innerText = parseInt(memory.innerText) + parseInt(storage.innerText) + parseInt(delivery.innerText) + 1299
    const finalPrice = document.getElementById('final-price')
    finalPrice.innerText = totalPrice.innerText

}
//function for bonus
function getDiscount() {
    const inputField = document.getElementById('input-field')

    if (inputField.value == 'stevekaku') {
        inputField.value = ''

        const total = document.getElementById('final-price')
        const totalText = total.innerText
        const discount = (totalText * 20) / 100
        total.innerText = totalText - discount
    }
    else {
        inputField.value = ''
        const notifyFail = document.getElementById('notify-fail');
        notifyFail.style.display = 'block'

    }

}

//for discount
document.getElementById('apply-btn').addEventListener('click', function () {
    getDiscount()
})

//for 8g
document.getElementById('8gb').addEventListener('click', function () {
    setPrice(8)

})
// //for 16gb memory
document.getElementById('16gb-memory').addEventListener('click', function () {
    setPrice(16)
})
// //for 512gb-ssd
document.getElementById('512gb-ssd').addEventListener('click', function () {
    setPrice(512)
});
// //for 1tb ssd
document.getElementById('1tb-ssd').addEventListener('click', function () {

    setPrice(1)
})

// //for 256gb storage
document.getElementById('256gb').addEventListener('click', function () {
    setPrice(256)

})


// //for delivery
document.getElementById('0-crg').addEventListener('click', function () {
    setPrice(0)

})
document.getElementById('20-crg').addEventListener('click', function () {
    setPrice(20)
})