const submitBtn = document.getElementById('submitBtn')
const clearBtn = document.getElementById('clearBtn')
const dayData = document.querySelectorAll('tr[data-day]')

function DOWstorage(){
	for (let i=0; i < dayData.length; i++){
		const days = dayData[i].getAttribute('data-day') // key
		const timeInputs = document.querySelectorAll('input')
		
		for (let i=0; i < timeInputs.length; i++){
			if (!timeInputs[i].value){
				console.log('nothing')
			}
		
			else {
				console.log(timeInputs[i].value , days)
			}
		}

	}
}


submitBtn.addEventListener('click', (ev) => {
	ev.preventDefault()
	DOWstorage()
})

clearBtn.addEventListener('click', () => {
	console.clear()
})
