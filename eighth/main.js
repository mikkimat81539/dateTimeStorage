const submitBtn = document.getElementById('submitBtn')
const clearBtn = document.getElementById('clearBtn')
const myItems = document.querySelectorAll("tbody > tr")
// const startTime = document.querySelectorAll('.startTime')
// const endTime = document.querySelectorAll('.endTime')

document.addEventListener("DOMContentLoaded", DOWstorage)

function DOWstorage(){
	for (let i=0; i < myItems.length; i++){
		const myRows = myItems[i]
		const rowAttr = myRows.getAttribute('data-day')
		
		//console.log(myRows)	
		
		const myInputs = myRows.querySelectorAll("td > input")

		// const startTime = myRows.querySelectorAll('.startTime')
		// const endTime = myRows.querySelectorAll('.endTime')		

		let myList = []		

		for (let j=0; j < myInputs.length; j++){
			const myCols = myInputs[j].value
			
			if(!myCols){
				// pass
			}			
						

			else {
				myList.push(myCols)
			}
		}		
		
		if (myList.length === 0){
			localStorage.removeItem(rowAttr)
		}

		else if (0 < myList.length && myList.length < myInputs.length){
			//console.log(rowAttr, "ERROR")
			localStorage.removeItem(rowAttr)
			throw "ERROR"
		}
		
		else {
			localStorage.setItem(rowAttr, myList)
			console.clear()
		}	
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
