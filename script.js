
const database = {
    "javascript": ["library","jsdoc","mdn"],
    "java"      : ["java","docs"]
}

const content = document.querySelector(".content");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

const addCard = (arg) => {
    content.innerHTML = "";

    for (i of database[arg]) {

        const newEle = document.createElement("a");
        newEle.setAttribute("href", "www.google.com");
        newEle.innerHTML = `<div class='card'>${i}</div>`

        content.appendChild(newEle);
    }
}


const check = (arg) => {
    for(i in database){
        console.log(i,arg)
        if(i === arg) addCard(arg);
    }
}

btn.addEventListener("click",()=>{
    check(input.value);
    // console.log(input.value);
})




