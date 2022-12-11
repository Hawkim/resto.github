let menuToggler = document.querySelector(".nav__button");
let navLinks = document.querySelectorAll(".nav-link");
let body = document.querySelector("body");

menuToggler.addEventListener("click", () => {
    body.classList.toggle("open");

});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        body.classList.toggle("open");
    });
});


function required(inputtx) {
    if (inputtx.value.length == 0) {
        alert("message");
        return false;
    }
    return true;
}




function message() {
    if (in1.length != 0 && in2.length != 0 && in3.length != 0 && in4.length != 0)
        alert("You need to fill all the main categories");
    else

        alert("Thank you! We will call you to confirm your reservation!");


}