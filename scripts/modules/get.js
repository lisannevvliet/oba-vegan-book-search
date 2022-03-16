import { $ } from "./$.js"
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
    fetch(`https://cors-anywhere.herokuapp.com/https://zoeken.oba.nl/api/v1/search/?q=veganistisch&authorization=1e19898c87464e239192c8bfe422f280&detaillevel=Default&page=${page}&output=json`, { Authorization: "Bearer d7519ea81ad4e06ab5e5dac46ddeb63a" })
    // fetch(`http://obaliquid.staging.aquabrowser.nl/onderwijs/api/v1/search/?q=veganistisch+NOT+lom.lifecycle.contribute.publisher%3Dwikipedia&authorization=d7519ea81ad4e06ab5e5dac46ddeb63a`, { mode: 'no-cors' })
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            render(data, first)
        })
}