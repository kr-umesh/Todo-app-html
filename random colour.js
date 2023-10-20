

const btn = document.querySelector("#change")


console.log(btn.style)

const body = document.querySelector(".random")
console.log(body)

const currentculor= document.querySelector(".box")


function randomColorGenerator(){
    const red= Math.floor(Math.random()*256)
    const green= Math.floor(Math.random()*256)
    const blue= Math.floor(Math.random()*256)
    const randomColour=`rgb(${red}, ${green} ,${blue})`
    return randomColour
}

function onColorChange(){
        console.log("click called")
        btn.style.color= "blue"
    btn.style.background="yellow"
        const randomColour  = randomColorGenerator();
        body.style.background =randomColour;
        currentculor.textContent=randomColour
    
}

btn.addEventListener("click",onColorChange)


const uls= document.querySelectorAll("ul")
console.log(uls)



