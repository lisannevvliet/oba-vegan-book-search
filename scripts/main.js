import { $ } from "./modules/$.js"
import { get } from "./modules/get.js"
import "./modules/vendor/routie.min.js"

// Get the results from the API when the hash changes.
routie ({
    ":query": query => {
        get(true, query)
    }
})

window.onload = function() {
    // If the hash is empty, add the default tab as the hash.
    if (!window.location.hash) {
        window.location.hash = "subject:\"Veganistische+kookboeken\""
    }

    // Color the tabs according to the selected one (found in the hash).
    if (window.location.hash.substring(1) == "subject:%22Veganisme%22") {
        $(".cooking").classList.remove("green")
        $(".philosophical").classList.add("green")
    } else {
        $(".cooking").classList.add("green")
    }
}

// EventListeners for tabs.
$(".cooking").addEventListener("click", function() {
    window.location.hash = "subject:\"Veganistische+kookboeken\""

    $(".cooking").classList.add("green")
    $(".philosophical").classList.remove("green")
})

$(".philosophical").addEventListener("click", function() {
    window.location.hash = "subject:\"Veganisme\""

    $(".cooking").classList.remove("green")
    $(".philosophical").classList.add("green")
})

$(".more").addEventListener("click", function() {
    get(false, window.location.hash.substring(1))
})