# OBA Vegan Book Search

## Table of contents
- [Live demo](#live-demo)
- [Description](#description)
- [Poster](#poster)
- [Installation](#installation)
- [User manual and features](#user-manual-and-features)
- [External data source](#external-data-source)
- [Checklist](#checklist)

## Live demo
[https://lisannevvliet.github.io/oba-vegan-book-search/](https://lisannevvliet.github.io/oba-vegan-book-search/)

## Description
The OBA Vegan Book Search was invented to provide an organized website where people can view and search vegan (cooking) books. The range of vegan books has only grown considerably in the past few years, as veganism was not a mainstream choice before that. The purpose of a specific page for this type of book is to ensure that the barrier to this type of diet and/or lifestyle is lowered.

## Poster
![](https://user-images.githubusercontent.com/90243819/158980062-d0c1c6c9-d8c0-4a77-89bc-cf570a34d9ad.png)


## Installation
To view, visit the [website](https://lisannevvliet.github.io/oba-vegan-book-search/). To make local modifications, clone the repository and edit the files in an IDE.

## User manual and features
On the front page all vegan (cooking) books can be viewed, sorted by relevance. It is possible to view only the cookbooks, by clicking on the tab "cooking". Within the range of vegan books can also be searched, using the search bar. In the results, again only the cookbooks can be viewed, if desired. Navigating back to all vegan books can be done by clicking on the logo. When reloading the website, the tab and any search query will be saved.

## External data source
The external data source that is featured in this project is the [OBA API](https://zoeken.oba.nl/api/v1/). From this API, the following properties are used:
- q (for searching titles and categories)
- page
- product_name
- summaries
- coverimages
- titles
- authors
- detailLink
- year

## Checklist
The completed tasks can be found in the [commit messages](https://github.com/lisannevvliet/oba-vegan-book-search/commits/main). The following tasks could not be completed in the set time frame, but would be nice to have.

- [ ] Tab for learning materials, fetched from the [OBA open leermaterialen API](http://obaliquid.staging.aquabrowser.nl/onderwijs/api/v1/search/?q=veganistisch&refine=true&authorization=d7519ea81ad4e06ab5e5dac46ddeb63a&output=json).
- [ ] Results which match the category "Veganisme" or the SISO 628.72.
- [ ] Tab for philisophical books.
