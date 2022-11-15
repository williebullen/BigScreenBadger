
ready()

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('dvdBuy')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}



function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement
    var title = shopItem.getElementsByClassName('dvdListItemTitle')[0].innerText
    var price = shopItem.getElementsByClassName('dvdPrice')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('dvdListItemImg')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('Price:£', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '£' + total
}



// ROB's ADDITIONS FOR STOCK //




function reduceStockHarry() {
    let stockNumberHarry = document.querySelector('.stock-harry');
    if (stockNumberHarry.innerHTML > 0){
        stockNumberHarry.innerHTML--;
     } 
    }

function reduceStockInter() {
    let stockNumberInter = document.querySelector('.stock-inter');
    if (stockNumberInter.innerHTML > 0){
        stockNumberInter.innerHTML--;
     } 
    }
    
function reduceStockSkyfall() {
    let stockNumberSkyfall = document.querySelector('.stock-skyfall');
    if (stockNumberSkyfall.innerHTML > 0){
        stockNumberSkyfall.innerHTML--;
     } 
    }

function reduceStockHocus() {
    let stockNumberHocus = document.querySelector('.stock-hocus');
    if (stockNumberHocus.innerHTML > 0){
        stockNumberHocus.innerHTML--;
     } 
    }

function reduceStockGoon() {
    let stockNumberGoon = document.querySelector('.stock-goon');
    if (stockNumberGoon.innerHTML > 0){
        stockNumberGoon.innerHTML--;
        } 
    }

function reduceStockSupe() {
    let stockNumberSupe = document.querySelector('.stock-supe');
    if (stockNumberSupe.innerHTML > 0){
        stockNumberSupe.innerHTML--;
        } 
    }

function reduceStockBeaut() {
    let stockNumberBeaut = document.querySelector('.stock-beaut');
    if (stockNumberBeaut.innerHTML > 0){
        stockNumberBeaut.innerHTML--;
        } 
    }

function reduceStockBond() {
    let stockNumberBond = document.querySelector('.stock-bond');
    if (stockNumberBond.innerHTML > 0){
        stockNumberBond.innerHTML--;
        } 
    }

function reduceStockHero() {
    let stockNumberhero = document.querySelector('.stock-hero');
    if (stockNumberhero.innerHTML > 0){
        stockNumberhero.innerHTML--;
        } 
    }

function reduceStockBatman() {
    let stockNumberbatman = document.querySelector('.stock-batman');
    if (stockNumberbatman.innerHTML > 0){
        stockNumberbatman.innerHTML--;
        } 
    }

function reduceStockJoke() {
    let stockNumberjoke = document.querySelector('.stock-joke');
    if (stockNumberjoke.innerHTML > 0){
        stockNumberjoke.innerHTML--;
        } 
    }

function reduceStockOutback() {
    let stockNumberoutback = document.querySelector('.stock-outback');
    if (stockNumberoutback.innerHTML > 0){
        stockNumberoutback.innerHTML--;
        } 
    }


    