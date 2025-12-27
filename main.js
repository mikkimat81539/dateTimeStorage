const dateCont = document.getElementById('dateCont')
const timeCont = document.getElementById('timeCont')
const setDate = document.getElementById('setDate')
const setTime = document.getElementById('setTime')

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
    const timeFormat = `${String(hours)}:${String(mins)}`
    
    setDate.innerText = dateFormat
    setDate.style.userSelect = 'none'

    setTime.innerText = timeFormat
    setTime.style.userSelect = "none"
}

function toggleTime() {
    
}

setInterval(setPresentTime)