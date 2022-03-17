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
                
                // Add the result image (or placeholder), name and summary to the page.
                function add() {
                    $("ul").insertAdjacentHTML("beforeend", `<li><div id="product"><div id="frame"><img src="${result.coverimages[1] ? result.coverimages[1] : 'images/placeholder.png'}" alt="${result.titles[0]}"></div>
                    <span><p>${result.authors ? result.authors.join(", ") : ""}</p>
                    <span id="name">${result.titles[0]}</span>
                    <p>${summary}</p></span></div></li>`)
                }
                
                if (window.location.hash.substring(1) == "subject:\"Veganisme\"" || window.location.hash.substring(1) == "subject:%22Veganisme%22") {
                    // Only add the result if the subject actually contains "Veganisme".
                    if (result["subject-topical"].includes("Veganisme")) {
                        add()
                    }
                } else {
                    add()
                }
            }
        })

        // If there are more pages, show the "More" button.
        if (data["meta"]["current-page"] <= (data["meta"]["result-count"] / data["meta"]["page-count"])) {
            $(".more").classList.add("block")
        }
    } else {
        // Show the instructions.
        $(".instructions").classList.remove("none")

        // If no results exist, tell that to the user.
        if (first) {
            $(".instructions").textContent = `No results were found with the query "${window.location.hash.substring(1)}". Please try again.`
        // If all results are already loaded, tell that to the user.
        } else {
            $(".instructions").textContent = `All results with the query "${window.location.hash.substring(1)}" are already shown.`
        }
    }

    // Hide the loader once the data is fetched.
    $(".loader").classList.remove("block")
}