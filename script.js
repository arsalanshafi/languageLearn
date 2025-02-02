
const databaseNames = {
    "javascript": ["freecodecamp","Developer roadmap","the odin project","javascript simplified","joshwcomeau","the modern javascript tutorial","javascript tutorial","eloquent javascript","mdn"],
    "java"      : ["java","dev.java","W3 schools","microsoft","programiz","geeksforgeeks"],
    "python"    : ["python.org","W3 schools","programiz","codeacademy"],
    "cpp"       : [],
    "c"         : [],
    "html"      : [],
    "css"       : [],
}


const databaseLinks = {
    "javascript": ["https://www.freecodecamp.org/learn","https://roadmap.sh/","https://www.theodinproject.com/","https://javascriptsimplified.com/beginner-table-of-contents/","https://www.joshwcomeau.com/","https://javascript.info/","https://www.javascripttutorial.net/#","https://eloquentjavascript.net/","https://developer.mozilla.org/en-US/"],
    "java"      : ["https://www.java.com/en/","https://dev.java/","https://www.w3schools.com/JAVA/","https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-java-programming-la","https://www.programiz.com/java-programming","https://www.geeksforgeeks.org/java/"],
    "python"    : ["https://www.python.org/","https://www.w3schools.com/python/","https://www.programiz.com/python-programming","https://www.codecademy.com/catalog/language/python"],
    "cpp"       : [],
    "c"         : [],
    "html"      : [],
    "css"       : [],
}

const content = document.querySelector(".content");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

const addCard = (arg) => {
    content.innerHTML = "";
    let j = 0;

    for (i of databaseNames[arg]) {

        const newEle = document.createElement("a");
        newEle.setAttribute("href", `${databaseLinks[arg][j]}`);
        newEle.innerHTML = `<div class='card'>${i}</div>`

        content.appendChild(newEle);
        j++;
    }
}


const check = (arg) => {
    for(i in databaseNames){
        console.log(i,arg)
        if(i === arg) addCard(arg);
    }
}

btn.addEventListener("click",()=>{
    check(input.value);
    // console.log(input.value);
})




