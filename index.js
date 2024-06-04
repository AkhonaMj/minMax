let input = document.querySelector("input")
let span1 = document.querySelector(".min")
let span2 = document.querySelector(".max")
let button = document.querySelector("button")

button.addEventListener("click", minMax)

function minMax() {
    
    let arrayNums = input.value.split(',').map(Number);
    let min = Math.min(...arrayNums)
    let max = Math.max(...arrayNums)
    
    span1.innerHTML += min; 
    span2.innerHTML += max; 
}
