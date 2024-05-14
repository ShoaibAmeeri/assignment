// document.body.style.backgroundColor="red"
// let a = document.getElementById("div1").style.border="2px solid black"
// a.padding="20px"
// a.backgroundColor="green"

// let b = document.getElementsByTagName("div")[2].style.backgroundColor = "yellow"
// console.log(b)
// let c = document.getElementsByClassName("container").ch
// console.log(c)

// let a = document.body.childNodes[1].children[0].nextElementSibling
// let a = document.body.childNodes[1].children[3].previousElementSibling.parentElement
// console.log(a)
/*
    


*/
// let cont = document.getElementsByClassName('div')

// cont.forEach(a=>{
//     a.style.backgroundColor="red" 
// })

// console.log(cont)
setInterval(()=>{
    let a = Math.floor( Math.random()*16777215)
    const code = "#"+a 
    setTimeout(()=>{
    },)
    console.log(typeof(code),code)
    document.body.style.backgroundColor=code
},3000)
setTimeout