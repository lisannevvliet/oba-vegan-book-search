import { $ } from "./$.js"
import { render } from "./render.js"

// Counter for the page number.
let page = 1

export function get(first, query) {
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
    fetch(`https://cors-anywhere.herokuapp.com/https://zoeken.oba.nl/api/v1/search/?q=${query}&authorization=d7519ea81ad4e06ab5e5dac46ddeb63a&detaillevel=Default&page=${page}&output=json`)
    // fetch(`http://obaliquid.staging.aquabrowser.nl/onderwijs/api/v1/search/?q=veganistisch+NOT+lom.lifecycle.contribute.publisher%3Dwikipedia&authorization=d7519ea81ad4e06ab5e5dac46ddeb63a`)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            render(data, first)
        })
}