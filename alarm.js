const currentTime = document.getElementById('currentTime')
const calender = document.getElementById('calender')
const timing = document.getElementById('timing')
const submitbtn = document.getElementById('submitbtn')
const deleteBtn = document.getElementById('deleteBtn')
const alarmContainer = document.getElementById('alarmContainer')
const timeContainer = document.getElementById('timeContainer') 

// Display Current Time
function formatTime(time) {
	let hours = time.getHours()
	let mins = time.getMinutes()
	let secs = time.getSeconds()

	hours = String(hours).padStart(2, '0')
	mins = String(mins).padStart(2, '0')
	secs = String(secs).padStart(2, '0')

	return `${hours}:${mins}:${secs}` 
}

// Live Count in seconds
setInterval(() => {
	let nowTime = new Date()
	currentTime.innerText = formatTime(nowTime)
} , 1000)

// set min attribute to current date
function setMinDate() {
	const currDate = new Date()
	const year = currDate.getFullYear()
	const month = currDate.getMonth()
	const day = currDate.getDate()

	const dateFormat = `${String(year)}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
	return dateFormat
}

const calenderMinAttr = calender.setAttribute('min', setMinDate())

// set min attribute to current time
function setMinTime() {
	const currTime = new Date()

	const hours = currTime.getHours()
	const minutes = currTime.getMinutes()

	const timeFormat = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`
	return timeFormat
}

const timeMinAttr = timing.setAttribute('min', setMinTime())

// date local storage
function dateStorage() {
	calenderNameAttr = calender.getAttribute('name')
	localStorage.setItem(calenderNameAttr, calender.value)

	if (calender.value == '') {
		localStorage.removeItem(calenderNameAttr)
	}
}

// time local storage
function timeStorage() {
	timeNameAttr = timing.getAttribute('name')
	localStorage.setItem(timeNameAttr, timing.value)

	if (timing.value == '') {
		localStorage.removeItem(timeNameAttr)
	}
}

function alarmContainerAppend() {
	if (alarmContainer.style.visibility === '') {
		alarmContainer.style.visibility = 'visible'
	}

	// else {
	// 	alarmContainer.style.visibility = ''
	// }
}

// submit button function
submitbtn.addEventListener('click', (ev) => {
	ev.preventDefault()
	dateStorage()
	timeStorage()
	alarmContainerAppend()
})

// delete button function
deleteBtn.addEventListener('click', () => {
	alarmContainer.remove()
})

// when I click button it needs to unhide the alarm container
// when I click submit gray container needs to append
// grab value of data in local storage and display in container