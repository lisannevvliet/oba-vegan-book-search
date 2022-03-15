import { $ } from "./$.js"
import { url } from "./url.js"
import { render } from "./render.js"

// Counter for the page number.
let page = 1

export function get(first, sort_by, hash) {
    // Hide the text, "More" button and show the loader upon searching.
    $(".instructions").classList.add("none")
    $(".more").classList.remove("block")
    $(".loader").classList.add("block")

    // Trace whether the first page should be loaded.
    if (first) {
        // Clear the results.
        $("ul").innerHTML = ""
        page = 1
    } else {
        page++
    }

    // Send a search request to the API.
    fetch("https://cors-anywhere.herokuapp.com/https://zoeken.oba.nl/api/v1/search/?q=veganistisch&authorization=1e19898c87464e239192c8bfe422f280&detaillevel=Default&page=1&output=json", { Authorization: "Bearer d7519ea81ad4e06ab5e5dac46ddeb63a" })
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            render(data, first)
        })
}