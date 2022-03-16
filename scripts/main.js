import { $ } from "./modules/$.js"
import { get } from "./modules/get.js"
import "./modules/vendor/routie.min.js"

// Get the products from the API when the hash changes.
routie ({
    ":hash": hash => {
    }
})

// Variable which keeps track of the current tab.
let tab = "Veganistische+kookboeken"

window.onload = function() {
    get(true, tab)

    $(".cooking").classList.add("green")
}

// EventListeners for tabs.
$(".cooking").addEventListener("click", function() {
    tab = "Veganistische+kookboeken"
    get(true, tab)

    $(".cooking").classList.remove("grey")
    $(".philosophical").classList.remove("green")
})

$(".philosophical").addEventListener("click", function() {
    tab = "Veganisme"
    get(true, tab)

    $(".cooking").classList.add("grey")
    $(".philosophical").classList.add("green")
})

$(".more").addEventListener("click", function() {
    get(false, tab)
})