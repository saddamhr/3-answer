fetch('https://test-schema.herokuapp.com/vegetables')
    .then(response => response.json())
    .then(json => displayTotalPrice(json))

function displayTotalPrice(vegetables) {
    // console.log('Vegetables', vegetables['data'])
    const vegetablesPrice = vegetables['data'].map(vegetablePrice => vegetablePrice.price)
    const totalPrice = vegetablesPrice.reduce((acc, item) => acc += item, 0)
    const ulTotalPrice = document.getElementById('total-price')
    const liPrice = document.createElement("li")
    liPrice.innerText = totalPrice
    ulTotalPrice.appendChild(liPrice)
    console.log('Total price', totalPrice)


    const productPriceWithVat = vegetablesPrice.map(vat => vat + (vat * (15 / 100)))
    const ulWithFifty = document.getElementById('with-fifty-vat')
    const liFifty = document.createElement("li")
    liFifty.innerText = productPriceWithVat
    ulWithFifty.appendChild(liFifty)
    console.log('With 15% VAT on each item’s price', productPriceWithVat)

    const aboveFifty = productPriceWithVat.filter(fifty => fifty > 50)
    console.log(aboveFifty)
    const ulAboveFifty = document.getElementById('above-50')
    const liAboveFifty = document.createElement("li")
    liAboveFifty.innerText = aboveFifty
    ulAboveFifty.appendChild(liAboveFifty)

}

