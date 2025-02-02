
const database = {
    "javascript": ["library","jsdoc"]
}

const content = document.querySelector(".content");


const addCard = () => {
    for (i of database.javascript) {

        const newEle = document.createElement("a");
        newEle.setAttribute("href", "www.google.com");
        newEle.innerHTML = "<div class='card'>The modern javascript tutorial</div>"

        content.appendChild(newEle);
        console.log(i);
    }
}


addCard();