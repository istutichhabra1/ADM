
const addButton = document.getElementById("addParagraph");
const removeButton = document.getElementById("removeParagraph");
const container = document.getElementById("paragraphContainer");
addButton.addEventListener("click", () => {
    const newPara = document.createElement("p"); 
    newPara.textContent = "This is a new paragraph."; 
    container.appendChild(newPara);
});


removeButton.addEventListener("click", () => {
    if (container.lastChild) {
        container.removeChild(container.lastChild); 
    }
});
