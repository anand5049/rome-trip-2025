document.addEventListener("DOMContentLoaded", () => {
    const castelLink = document.querySelector("a[href='https://www.ticketone.it']");
    const colosseumLink = document.querySelector("a[href='https://www.colosseo.it']");
    castelLink.addEventListener("click", () => alert("Book Castel Sant’Angelo tickets soon (~€30 total)!"));
    colosseumLink.addEventListener("click", () => alert("Book Colosseum tickets ASAP (~€44 total)!"));
});
