const submitBtn = document.getElementById('submitBtn')
const clearBtn = document.getElementById('clearBtn')
const myItems = document.querySelectorAll("tbody > tr")
// let div = document.createElement('div')
// let p = document.createElement('p')

document.addEventListener("DOMContentLoaded", DOWstorage)

function errorContainer(i){
	div = document.createElement('div')
	p = document.createElement('p')

	// styling div
	div.style.width = "250px"
	div.style.height = "30px"
	div.style.display = "flex"
	div.style.justifyContent = "center"
	div.style.alignItems = "center"
	div.style.userSelect = "none"

	// styling p 
	p.style.color = "red"
	p.style.margin = "0px"
	p.style.fontFamily = "Arial, sans-serif"
	p.style.fontSize = "15px"

	myItems[i].append(div)
	p.innerHTML = "Input both Start Time and End Time"
	div.append(p)
}

function removeError(i){
	div.remove()
	p.remove()
}

function DOWstorage(){
	for (let i=0; i < myItems.length; i++){
		const myRows = myItems[i]
		const rowAttr = myRows.getAttribute('data-day')
		
		//console.log(myRows)	
		
		const myInputs = myRows.querySelectorAll("td > input")

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
			localStorage.removeItem(rowAttr)
			// throw "ERROR"
						
			if (myList.length === myInputs.length){
				removeError(i)
			}
			
			else {
				errorContainer(i)
			}
		}
		
		else {
			localStorage.setItem(rowAttr, myList)
			console.clear()
		}	
	}
}


submitBtn.addEventListener('click', (ev) => {
	ev.preventDefault()
	DOWstorage()
})

clearBtn.addEventListener('click', (i) => {
	console.clear()
	localStorage.clear()
	removeError(i)
})
