const submitBtn = document.getElementById('submitBtn')
const clearBtn = document.getElementById('clearBtn')
const myItems = document.querySelectorAll("tbody > tr")

function DOWstorage(){
	for (let i=0; i < myItems.length; i++){
		const myRows = myItems[i]
		const rowAttr = myRows.getAttribute('data-day')
		
		//console.log(myRows)	
		
		const myInputs = myRows.querySelectorAll("td > input")

		let myList = []		

		for (let j=0; j < myInputs.length; j++){
			const myCols = myInputs[j].value
			myList.push(myCols)
			//debugger
		}		
		console.log(rowAttr, myList)
		localStorage.setItem(rowAttr, myList)
		//debugger
	}
}


submitBtn.addEventListener('click', (ev) => {
	ev.preventDefault()
	DOWstorage()
})

clearBtn.addEventListener('click', () => {
	console.clear()
	localStorage.clear()
})
