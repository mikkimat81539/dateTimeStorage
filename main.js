const dateCont = document.getElementById('dateCont')
const timeCont = document.getElementById('timeCont')
const setDate = document.getElementById('setDate')
const setTime = document.getElementById('setTime')

const prevMonth = document.getElementById('prevMonth')
const afterMonth = document.getElementById('afterMonth')

const dateArrows = document.getElementById('dateArrows')

const resetBtn = document.getElementById('resetBtn')

function setPresentTime() {
    const currDay = new Date()

    const listMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]

    const year = currDay.getFullYear()
    const month = currDay.getMonth()
    const getListMonths = listMonths[month]
    const day = currDay.getDate()
    
    const hours = currDay.getHours()
    const mins = currDay.getMinutes()

    const dateFormat = `${String(getListMonths)} ${String(day).padStart(2, "0")}, ${String(year)}`
    const timeFormat = `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`
    
    setDate.innerText = dateFormat
    setDate.style.userSelect = 'none'

    setTime.innerText = timeFormat
    setTime.style.userSelect = "none"
}

function toggleTime() {
    const today = new Date()

    const ListofMonths = ["January", "February", "March", "April", 
        "May", "June", "July", "August", 
        "September", "October", "November", "December"]

    let month = today.getMonth()
    let setListMonths = ListofMonths[month]
    let year = today.getFullYear()

    dateArrows.innerText = `${setListMonths} ${(year)}`

    prevMonth.addEventListener('click', () => {
        month-- // go to previous month
        if (month < 0) {
            
            month = 11; // if at december than go back tp january
            year = year - 1
        }

        setListMonths = ListofMonths[month];
        dateArrows.innerText = `${setListMonths} ${(year)}`
    });

    afterMonth.addEventListener('click', () => {
        month++
        if (month > 11) { // if past December
            month = 0
            year = year + 1
        }

        setListMonths = ListofMonths[month];
        dateArrows.innerText = `${setListMonths} ${(year)}`
    })
}

resetBtn.addEventListener('click', () => {
    toggleTime()
})

setInterval(setPresentTime)
toggleTime()
