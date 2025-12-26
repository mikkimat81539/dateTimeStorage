const setCurrDate = document.getElementById('setCurrDate')
const setCurrTime = document.getElementById('setCurrTime')

function setTodayTime() {
    const currDay = new Date()

    const listMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]

    const date = currDay.getDate()
    const month = currDay.getMonth()
    const monthName = listMonths[month]
    const year = currDay.getFullYear()

    const hours = currDay.getHours()
    const mins = currDay.getMinutes()

    const dateFormat = `${String(monthName)} ${String(date).padStart(2, "0")}, ${String(year)}`
    const timeFormat = `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`
    
    setCurrDate.innerText = dateFormat
    setCurrTime.innerText = timeFormat

}

setInterval(setTodayTime)
