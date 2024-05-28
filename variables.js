let btn = document.getElementById("#btn");
let list = document.querySelector("ul");

btn.addEventListener("click", function(){
    let name = document.createElement("li");
    name.innerText = `Rojo ${list.children.length + 1}`;
    alert(name.innerText);
    list.appendChild(name);   
});