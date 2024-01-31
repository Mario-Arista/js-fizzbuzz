const containerElement = document.querySelector("#container");

for (let i = 1; i <= 100; i++ ) {
    
    if (i % 5 == 0 && i % 3 == 0) {
        containerElement.innerHTML += `<div class="square red">fizzbuzz</div>`;

    } else if (i % 5 == 0) {
        containerElement.innerHTML += `<div class="square yellow">buzz</div>`;
    } else     if (i % 3 == 0) {
        containerElement.innerHTML += `<div class="square green" >fizz</div>`;
    } else {
        containerElement.innerHTML += ` <div class="square blue" >${i}</div>`;
        

    }

}