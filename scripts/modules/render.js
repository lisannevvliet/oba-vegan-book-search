import { $ } from "./$.js"

export function render(data, first) {
    // If results exist, render them in the HTML.
    if (data.results.length != 0) {
        data.results.forEach(result => {
            if (result.product_name != "") {
                // Empty string for the summary.
                let summary = ""

                // Add the summary if there is any and it is not empty.
                if (result.summaries && result.summaries[0] != "") {
                    summary = `<details><summary>Summary</summary>
                    <p>${result.summaries[0]}</p></details>`
                }
                
                // Add the result image (or placeholder), name, year and summary to the page.
                $("ul").insertAdjacentHTML("beforeend", `<li><div id="product"><div id="frame"><img src="${result.coverimages[1] ? result.coverimages[1] : 'images/placeholder.png'}" alt="${result.titles[0]}"></div>
                <span><p>${result.authors ? result.authors.join(", ") : ""}</p>
                <a href="${result.detailLink}" target="_blank"><span id="name">${result.titles[0]}&nbsp;&nbsp;<span id="year">${result.year}</span></span></a>
                <p>${summary}</p></span></div></li>`)
            }
        })

        // If there are more pages, show the "More" button.
        if (data["meta"]["current-page"] <= (data["meta"]["result-count"] / 20)) {
            $(".more").classList.add("block")
        }
    } else {
        // Show the instructions.
        $(".instructions").classList.remove("none")

        // Determine whether to show the search query in the instructions.
        let title = !window.location.hash.substring(1).startsWith("subject") ? ` with the title "${window.location.hash.substring(1).slice(0, window.location.hash.substring(1).indexOf("subject")-1)}"` : ""
        
        // If no results exist, tell that to the user.
        if (first) {
            $(".instructions").textContent = `No results were found${title}. Please try again.`
        // If all results are already loaded, tell that to the user.
        } else {
            $(".instructions").textContent = `All results${title} are already shown.`
        }
    }

    // Hide the loader once the data is fetched.
    $(".loader").classList.remove("block")
}