const currentTime = document.getElementById('currentTime')
const calender = document.getElementById('calender')
const timing = document.getElementById('timing')
const submitbtn = document.getElementById('submitbtn')
const deleteBtn = document.getElementById('deleteBtn')
const appendContainer = document.getElementById('appendContainer')
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
	// creating div container for alarm container
	const newDiv = document.createElement("div");

	newDiv.id = ""
	newDiv.className = "alarmContainer"
	newDiv.style.width = "90%"
	newDiv.style.height = "45px"
	newDiv.style.border = "solid 1px rgb(223, 204, 172)"
	newDiv.style.borderRadius = "10px"
	newDiv.style.backgroundColor = "rgb(224, 211, 192)"
	newDiv.style.margin = "10px 0px"


	if (appendContainer.querySelectorAll('div').length < 3) {
		appendContainer.appendChild(newDiv)
	}

	// creating p tag
	else {
		const newP = document.createElement("p")
		newP.style.color = "red"
		newP.style.fontFamily = "'Saira', Arial, sans-serif"
		newP.textContent = 'The maximum alarms you can set is 3'

		if (appendContainer.querySelectorAll('p').length < 1) {
			appendContainer.appendChild(newP)
		}
	}
}

// submit button function
submitbtn.addEventListener('click', (ev) => {
	ev.preventDefault()
	dateStorage()
	timeStorage()
	alarmContainerAppend()
})

// delete button function
// deleteBtn.addEventListener('click', () => {
// 	alarmContainer.remove()
// })
