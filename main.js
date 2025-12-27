const circleBtn = document.getElementById('circleBtn')
let isActive = false; // tracks toggle state

function setDate() {
    const currDay = new Date()

    const listMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]

    const month = currDay.getMonth()

    const iterateList = listMonths[month]

    const date = currDay.getDate()

    const dayOnlyFormat = `${String(date).padStart(2, "0")}`
    circleBtn.innerText = dayOnlyFormat

    const dateFormat = `${String(iterateList).padStart(2, "0")}, ${String(date).padStart(2, "0")}`

    if (localStorage.getItem("Date Pick")) {
        isActive = true
        circleBtn.style.backgroundColor = "#00bfffff"
        circleBtn.style.color = "#FFF"
    }

    else {
        circleBtn.style.backgroundColor = '#FFF'
        circleBtn.style.color = "#000"
    }

    circleBtn.addEventListener('click', () => {
        circleBtn.style.userSelect = "none"

        if (!isActive){
            circleBtn.style.backgroundColor = "#00bfffff"
            circleBtn.style.color = "#FFF"
            localStorage.setItem("Date Pick", dateFormat)
        }

        else {
            circleBtn.style.backgroundColor = '#FFF'
            circleBtn.style.color = "#000"
            localStorage.removeItem("Date Pick")
        }

        isActive = !isActive
    })
}

setDate()