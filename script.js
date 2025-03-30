document.addEventListener("DOMContentLoaded", () => {
    const castelLink = document.querySelector("a[href='https://www.ticketone.it']");
    const colosseumLink = document.querySelector("a[href='https://www.colosseo.it']");
    const campanileLink = document.querySelector("a[href='https://www.basilicasanmarco.it']");
    const dogeLink = document.querySelector("a[href='https://palazzoducale.visitmuve.it']");
    const uffiziLink = document.querySelector("a[href='https://www.uffizi.it/en/tickets']");
    const towerLink = document.querySelector("a[href='https://www.opapisa.it/en/tickets']");

    if (castelLink) castelLink.addEventListener("click", () => alert("Book Castel Sant’Angelo tickets soon (~€30 total)!"));
    if (colosseumLink) colosseumLink.addEventListener("click", () => alert("Book Colosseum tickets ASAP (~€44 total)!"));
    if (campanileLink) campanileLink.addEventListener("click", () => alert("Book Campanile tickets for St. Mark’s Square (~€10/adult)!"));
    if (dogeLink) dogeLink.addEventListener("click", () => alert("Book Doge’s Palace Secret Itineraries Tour (~€28/adult, €14/kids)!"));
    if (uffiziLink) uffiziLink.addEventListener("click", () => alert("Book Uffizi Family Tour (~€20/adult, kids free)!"));
    if (towerLink) towerLink.addEventListener("click", () => alert("Book Leaning Tower timed entry (~€20/adult, kids €10)!"));
});
