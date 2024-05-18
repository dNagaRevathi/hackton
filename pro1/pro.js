const canvas1=document.getElementById("canvas1")
const random1=document.getElementById("random1")
const random_number=parseInt((Math.random()*6))+1
console.log(random_number)

random1.innerText=random_number
canvas1.innerText=random_number
const ctx=canvas1.getContext("2d")
ctx.fillColor("green")
ctx.rect(10,10,100,20)