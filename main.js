const submitBtn = document.getElementById('submitBtn')
const resetBtn = document.getElementById('resetBtn')


const dates = document.getElementById('dates')
const times = document.getElementById('time')

// use current date to for min attribute
function minDate(){
	const today = new Date()
	const year = today.getFullYear()
	const month = String(today.getMonth() + 1).padStart(2, '0')
	const day = String(today.getDate()).padStart(2, '0')

	dates.min = `${year}-${month}-${day}` 
}

minDate()

// Storing date and time in local storage
function dateStorage(){
	dateNameAttr = dates.getAttribute('name')	
	localStorage.setItem(dateNameAttr, dates.min)
}

function timeStorage(){
	timeNameAttr = times.getAttribute('name')
	localStorage.setItem(timeNameAttr, times.value)
}


// adding interaction with buttons
submitBtn.addEventListener('click', (e) => {
	e.preventDefault()
	dateStorage()
	timeStorage()
})

resetBtn.addEventListener('click', () =>{
	localStorage.clear()
})
