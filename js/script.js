const containerElement = document.querySelector("#container");

for (let i = 1; i <= 100; i++ ) {

    const newElement = document.createElement("div");

    newElement.className = "square";
    newElement.innerHTML = i;
    

    if (i % 3 == 0) {
        newElement.className += " green";
    } else if (i % 5 == 0) {
        newElement.className += " yellow";
    } else if (i % 3 == 0 && i % 5 == 0) {
        newElement.className += " red"; 
    } else {
        containerElement.append(newElement);
        newElement.className += " blue";
        

    }

}