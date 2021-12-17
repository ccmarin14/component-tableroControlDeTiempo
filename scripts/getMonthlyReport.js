function getMonthlyReport() {
    contador = 0;
    boxContent = "";
    document.querySelector(".active").classList.remove("active");
    document.getElementById("monthly").classList.add("active");
            
    DATA.map((data) => {
        boxContent += `
        <div class="sub__container ${IMAGES[contador].class}">
            <div class="sub__header">
                <img src="images/${IMAGES[contador].name}">
            </div>
            <div class="sub__data">
                <div class="tittle">
                    <p>${data.title}</p>
                    <img src="images/icon-ellipsis.svg">
                </div>
                <p class="hours">${data.timeframes.monthly.current}hrs</p>
                <p class="last">Last Week - ${data.timeframes.monthly.previous}hrs</p>
            </div>
        </div>
        `;
        contador++;
    });
    content.innerHTML = boxContent; 
}