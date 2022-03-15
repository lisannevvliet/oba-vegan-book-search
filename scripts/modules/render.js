import { $ } from "./$.js"
// import { barcode } from "./barcode.js"

export function render(data, first) {
    // If results exist, render them in the HTML.
    if (data.results.length != 0) {
        data.results.forEach(result => {
            if (result.product_name != "") {
                // Empty string for the summary.
                let summary = ""

                // Add the summary if there is any.
                if (result.summaries) {
                    summary = `<details><summary>Summary</summary>
                    <p>${result.summaries[0]}</p></details>`
                }
                
                // Add the result image (or placeholder), name and summary to the page.
                $("ul").insertAdjacentHTML("beforeend", `<li><div id="product"><div id="frame"><img src="${result.coverimages[1] ? result.coverimages[1] : 'images/placeholder.png'}" alt="${result.titles[0]}"></div>
                <span><span id="name">${result.titles[0]}</span>
                <p>${summary}</p></span></div></li>`)
            }
        })

        // Show the sort options.
        $(".sort").classList.add("flex")

        // If there are more pages, show the "More" button.
        if (data.page <= (data.count / data.page_size)) {
            $(".more").classList.add("block")
        }
    } else {
        // Show the instructions.
        $(".instructions").classList.remove("none")
        // Hide the sort options.
        $(".sort").classList.remove("flex")

        // Assign a name to the search query type.
        let type = barcode() ? "barcode" : "name"

        // If no products exist, tell that to the user.
        if (first) {
            $(".instructions").textContent = `No products were found with the ${type} "${$("input").value}". Please try again.`
        // If all products are already loaded, tell that to the user.
        } else {
            $(".instructions").textContent = `All products with the ${type} "${$("input").value}" are already shown.`
        }
    }

    // Hide the loader once the data is fetched.
    $(".loader").classList.remove("block")
}