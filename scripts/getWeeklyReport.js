function getWeeklyReport() {
    contador = 0;
    boxContent = "";
    document.querySelector(".active").classList.remove("active");
    document.getElementById("weekly").classList.add("active");
            
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
                <p class="hours">${data.timeframes.weekly.current}hrs</p>
                <p class="last">Last Week - ${data.timeframes.weekly.previous}hrs</p>
            </div>
        </div>
        `;
        contador++;
    });
    content.innerHTML = boxContent; 
}