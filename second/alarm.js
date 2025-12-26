const currentTime = document.getElementById('currentTime')
const calender = document.getElementById('calender')
const timing = document.getElementById('timing')
const submitbtn = document.getElementById('submitbtn')
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
	newDiv.style.display = "flex"
	newDiv.style.justifyContent = "end"
	newDiv.style.alignItems = "center"
	newDiv.style.padding = "5px"

	// set the max number of containers to 3
	if (appendContainer.querySelectorAll('div').length < 3) {
		appendContainer.appendChild(newDiv)
	}

	else {
		// create p element error
		const newP = document.createElement("p") // creating p tag
		
		newP.id = "errorText"
		newP.style.color = "red"
		newP.style.fontFamily = "'Saira', Arial, sans-serif"
		newP.textContent = "The maximum alarms you can set is 3"
	}

	// creating button element inside div container
	const newBtn = document.createElement("button")
	newBtn.id = ""
	newBtn.className = "deleteBtn"
	newBtn.style.marginLeft = "30px"
	newBtn.textContent = "Delete"
	newBtn.style.width = "20%"
	newBtn.style.height = "70%"
	newBtn.style.border = "solid 1px rgb(176, 176, 176)"
	newBtn.style.borderRadius = "5px"
	newBtn.style.cursor = "pointer"
	newBtn.style.backgroundColor = "background-color: rgb(236, 236, 236)"

	// hover effect fors buttons
	newBtn.addEventListener("mouseover", () => {
  		newBtn.style.backgroundColor = "rgb(222, 221, 221)" // When mouse hovers
	})

	newBtn.addEventListener("mouseout", () => {
  		newBtn.style.backgroundColor = "rgb(236, 236, 236)" // When mouse leaves
	})

	newBtn.addEventListener("click", () => {
		newDiv.remove()
		newBtn.remove()
	})

	// add button to div container with a max of 3
	if (newDiv.querySelectorAll("button").length < 3) {
		newDiv.appendChild(newBtn)
	}
}

// submit button function
submitbtn.addEventListener('click', (ev) => {
	ev.preventDefault()
	dateStorage()
	timeStorage()
	alarmContainerAppend()
})