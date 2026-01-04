/*Add style to container
Have section month, date, year */

const dateContainer = document.getElementById('dateContainer')
const dateInput = document.getElementById('dateInput')
const dates = document.getElementById('dates')
const monthInput = document.getElementById('monthInput')
const months = document.getElementById('months')
const yearInput = document.getElementById('yearInput')
const years = document.getElementById('years')


function containerSetup() {
    dateInput.style.margin = "5px"
    dates.style.marginRight = "5px"
    dates.style.userSelect = "none"
    monthInput.style.margin = "5px"
    months.style.marginRight = "5px"
    months.style.userSelect = "none"
    yearInput.style.margin = "5px"
}

function setupTime() {
    dateContainer.style.width = "160px"
    dateContainer.style.height = "30px"
    dateContainer.style.borderRadius = "10px"
    dateContainer.style.border = "solid 2px black"
    dateContainer.style.display = "flex"
    containerSetup()
}

setupTime()