let dataValue = document.querySelectorAll(".count")
console.log(dataValue)
let speed = 200
dataValue.forEach((value) => {
    const Counter = () => {
        const target = +value.getAttribute('data-val')
        const count = +value.innerHTML
        console.log(target)
        // increament
        const increament = target / speed
        // display if count is less than target
        if (count < target) {
            // i dont want decimal so i use math.ceil to round up
            value.innerHTML = math.ceil(count + increament)
            setTimeout(Counter, 1)
        } else {
            count.innerHTML = target
        }
    }
    Counter()
})