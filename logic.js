let body=document.querySelector("body")
let container=document.querySelector("div")
//for creation of initial grid
for(let i=0;i<256;i++){
    let div=document.createElement("div")
    container.appendChild(div)
}
//hover functionality for initial grid
let divs=document.querySelectorAll("div div")
divs.forEach(div => {
    div.addEventListener("mouseenter",()=>{
        div.style.backgroundColor=getRandomColor()
        //code to vary the opacity
        let className=div.className
        if(!className){
        div.classList.add("1")
        div.style.opacity=0.09}
        else if(Number(className)<10){
            div.classList.remove(`${className}`)
            className=Number(className)+1
            div.classList.add(`${className}`)
            div.style.opacity=(className/10)
        }
        else{
            div.style.opacity=1
        }

    })
    
});
let input
//function for creating the new grid with hover functionality
function getInput(){
    input=prompt("Enter")
    if(input<100 &&input>0){
        container.innerHTML=""
        creategrid(input)
        let divs=document.querySelectorAll("div div")
        divs.forEach(div => {
            div.addEventListener("mouseenter",()=>{
                div.style.backgroundColor=getRandomColor()
                let className=div.className
                if(!className){
                        div.classList.add("1")
                        div.style.opacity=0.09}
                else if(Number(className)<10){
                        div.classList.remove(`${className}`)
                        className=Number(className)+1
                        div.classList.add(`${className}`)
                        div.style.opacity=(className/10)
        }
                else{
                     div.style.opacity=1
                     }
    })
    
})
}
    else if(input>=100){
        alert("Out of bounds")
    }
    else{
        alert("Invalid choice")
    }
}
btn=document.querySelector(".input")
btn.addEventListener("click",getInput)
function creategrid(input){
        let min_measure=parseFloat(480/input)+"px"
    for(let i=0;i<(input*input);i++){
        let div=document.createElement("div")
        div.style.minWidth=min_measure
        div.style.maxHeight=min_measure
        div.style.minHeight=min_measure
        div.style.display="flex"
        div.style.flexWrap="wrap"
        div.style.flexGrow="auto"
        container.appendChild(div)

    }
}
btn2=document.querySelector(".clear")
//function to clear the divs from hover function
btn2.addEventListener("click",()=>{
    let divs=document.querySelectorAll("div div")
    divs.forEach(div => {
        div.style.backgroundColor="black"
})})
function getRandomColor(){
   let r=Math.floor(Math.random()*256)
   let g=Math.floor(Math.random()*256)
   let b=Math.floor(Math.random()*256)
   return `rgb(${r} ${g} ${b})`
}