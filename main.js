const main = document.getElementById('main')
const circleBtn = document.querySelectorAll('.circle')

main.style.display = 'flex'
main.style.gap = "20px"

for (let i=0; i < circleBtn.length; i++) {
    circleBtn[i].style.border = "solid 1px black"
    circleBtn[i].style.borderRadius = "20px"
    circleBtn[i].style.width = "30px"
    circleBtn[i].style.height = "30px"
    circleBtn[i].style.display = "flex"
    circleBtn[i].style.justifyContent = "center"
    circleBtn[i].style.alignItems = "center"
    circleBtn[i].style.cursor = "pointer"
    
    circleBtn[i].innerText = i + 1

    circleBtn[i].addEventListener('click', () => {
        alert(i + 1)
    })
}