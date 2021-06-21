/* THE NAME OF THIS FILE USES MD5 HASH */

//                      pages
var home_page = document.getElementById("custom-page-1")
var earn_page = document.getElementById("custom-page-2")
var withdraw_page = document.getElementById("custom-page-3")
var share_page = document.getElementById("custom-page-4")

//                      vars
var current_page = home_page
var previous_page

//                    functions
function GoToPage(page) {
    if (page !== current_page.id) {
        current_page.classList.remove("custom-page-disabled")
        document.getElementById(page).classList.add("custom-page-enabled")
        previous_page = current_page
        current_page = document.getElementById(page)
        previous_page.classList.remove("custom-page-enabled")
        previous_page.classList.add("custom-page-disabled")
    } else {
        return
    }
}