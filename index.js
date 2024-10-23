const color = document.querySelector(".color")
const getBtn = document.querySelector(".get-btn")
const colorSchemeMode = document.querySelector("#c-scheme")

//color divs and hex values
const color1 = document.querySelector(".color-1")
const color2 = document.querySelector(".color-2")
const color3 = document.querySelector(".color-3")
const color4 = document.querySelector(".color-4")
const color5 = document.querySelector(".color-5")
const colorBtn1 = document.querySelector(".color-btn-1")
const colorBtn2 = document.querySelector(".color-btn-2")
const colorBtn3 = document.querySelector(".color-btn-3")
const colorBtn4 = document.querySelector(".color-btn-4")
const colorBtn5 = document.querySelector(".color-btn-5")

document.body.addEventListener('click', event => {
    if(event.target.className === 'get-btn'){
        fetch(`
            https://www.thecolorapi.com/scheme?hex=${(color.value).substring(1)}&mode=${colorSchemeMode.value}&count=5
        `)
            .then(res => res.json())
            .then(data => {
                renderColors(data)
            })
    }

    if(event.target.className === "color-btn color-btn-1"){
        navigator.clipboard.writeText(colorBtn1.textContent)
            .then(() => {
                console.log("copied to clipboard")
            })
        document.querySelector(".copied-1").style.display = "block"
        setTimeout(function(){
            document.querySelector(".copied-1").style.display = "none"
        }, 2500)
    }

    if(event.target.className === "color-btn color-btn-2"){
        navigator.clipboard.writeText(colorBtn2.textContent)
            .then(() => {
                console.log("copied to clipboard")
            })
        document.querySelector(".copied-2").style.display = "block"
        setTimeout(function(){
            document.querySelector(".copied-2").style.display = "none"
        }, 2500)
    }   

    if(event.target.className === "color-btn color-btn-3"){
        navigator.clipboard.writeText(colorBtn3.textContent)
            .then(() => {
                console.log("copied to clipboard")
            })
        document.querySelector(".copied-3").style.display = "block"
        setTimeout(function(){
            document.querySelector(".copied-3").style.display = "none"
        }, 2500)
    }

    if(event.target.className === "color-btn color-btn-4"){
        navigator.clipboard.writeText(colorBtn4.textContent)
            .then(() => {
                console.log("copied to clipboard")
            })
        document.querySelector(".copied-4").style.display = "block"
        setTimeout(function(){
            document.querySelector(".copied-4").style.display = "none"
        }, 2500)
    }

    if(event.target.className === "color-btn color-btn-5"){
        navigator.clipboard.writeText(colorBtn5.textContent)
            .then(() => {
                console.log("copied to clipboard")
            })
        document.querySelector(".copied-5").style.display = "block"
        setTimeout(function(){
            document.querySelector(".copied-5").style.display = "none"
        }, 2500)
    }
})



function renderColors(colorData){
    //changing the hex values of the divs to the color scheme collected from the API
    color1.style.backgroundColor = colorData.colors[0].hex.value
    color2.style.backgroundColor = colorData.colors[1].hex.value
    color3.style.backgroundColor = colorData.colors[2].hex.value
    color4.style.backgroundColor = colorData.colors[3].hex.value
    color5.style.backgroundColor = colorData.colors[4].hex.value
    //changing the hex values below the divs
    colorBtn1.textContent = `${colorData.colors[0].hex.value}`
    colorBtn2.textContent = `${colorData.colors[1].hex.value}`
    colorBtn3.textContent = `${colorData.colors[2].hex.value}`
    colorBtn4.textContent = `${colorData.colors[3].hex.value}`
    colorBtn5.textContent = `${colorData.colors[4].hex.value}`
}


function copyToClipboard(className) {
    const element = document.querySelector(`.${className}`).value
    
    console.log(element)
    // navigator.clipboard.writeText(color.value)
}

