import { $ } from "./modules/$.js"
import { get } from "./modules/get.js"
import "./modules/vendor/routie.min.js"

// Get the results from the API when the hash changes.
routie ({
    ":tab": tab => {
        get(true, tab)
    }
})

window.onload = function() {
    // If the hash is empty, add the default tab as the hash.
    if (!window.location.hash) {
        window.location.hash = "Veganistische+kookboeken"
    }

    // Color the tabs according to the selected one (found in the hash).
    if (window.location.hash.substring(1) == "Veganisme") {
        $(".cooking").classList.add("grey")
        $(".philosophical").classList.add("green")
    } else {
        $(".cooking").classList.add("green")
    }
}

// EventListeners for tabs.
$(".cooking").addEventListener("click", function() {
    window.location.hash = "Veganistische+kookboeken"

    $(".cooking").classList.remove("grey")
    $(".philosophical").classList.remove("green")
})

$(".philosophical").addEventListener("click", function() {
    window.location.hash = "Veganisme"

    $(".cooking").classList.add("grey")
    $(".philosophical").classList.add("green")
})

$(".more").addEventListener("click", function() {
    get(false, window.location.hash.substring(1))
})