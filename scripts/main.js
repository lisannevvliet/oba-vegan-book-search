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
        window.location.hash = "subject:\"Veganisme\"" // +siso:\"628.72\" to add the SISO as an AND-statement.
    }

    // Empty the search query.
    $('form input').value = ""

    // Fill the search query with the previous input (found in the hash), if there is any.
    if (!window.location.hash.substring(1).startsWith("subject")) {
        // Get the input value from the hash.
        $('form input').value = window.location.hash.substring(1).slice(0, window.location.hash.substring(1).indexOf("subject")-1)
    }

    // Color the tabs according to the selected one (found in the hash).
    if (window.location.hash.substring(1).includes("subject:%22Veganisme%22")) {
        $(".all").classList.add("green")
        $(".cooking").classList.remove("green")
    } else {
        $(".cooking").classList.add("green")
    }
}

// If the title is clicked, show the homepage.
$("#title").addEventListener("click", function() {
    // Keep the selected tab.
    window.location.hash = window.location.hash.substring(1).slice(window.location.hash.substring(1).indexOf("subject"))

    // Empty the search query.
    $('form input').value = ""
})

$("form").addEventListener("submit", function(event) {
    if ($("input").value) {
        window.location.hash = `${$("input").value}+subject:\"Veganisme\"`

        $(".all").classList.add("green")
        $(".cooking").classList.remove("green")

        // Close the keyboard after submit.
        document.activeElement.blur()

        // Prevent the page from reloading.
        event.preventDefault()
    }
})

// EventListeners for tabs.
$(".all").addEventListener("click", function() {
    // Get all results and add the search query to the hash, if there is any.
    if (!window.location.hash.substring(1).startsWith("subject")) {
        window.location.hash = `${window.location.hash.substring(1).slice(0, window.location.hash.substring(1).indexOf("subject")-1)}+subject:"Veganisme"`
    } else {
        window.location.hash = "subject:\"Veganisme\""
    }

    $(".all").classList.add("green")
    $(".cooking").classList.remove("green")
})

$(".cooking").addEventListener("click", function() {
    // Get the cookbook results and add the search query to the hash, if there is any.
    if (!window.location.hash.substring(1).startsWith("subject")) {
        window.location.hash = `${window.location.hash.substring(1).slice(0, window.location.hash.substring(1).indexOf("subject")-1)}+subject:"Veganistische+kookboeken"`
    } else {
        window.location.hash = "subject:\"Veganistische+kookboeken\""
    }

    $(".all").classList.remove("green")
    $(".cooking").classList.add("green")
})

$(".more").addEventListener("click", function() {
    get(false, window.location.hash.substring(1))
})