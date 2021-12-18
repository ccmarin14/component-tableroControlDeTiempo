function getTimeReport(time) {
    let timeframes;
    contador = 0;
    boxContent = "";
    document.querySelector(".active").classList.remove("active");
    document.getElementById("daily").classList.add("active");

    DATA.map((data) => {
        switch (time) {
            case "daily":
                timeframes = `<p class="hours">${data.timeframes.daily.current}hrs</p>
                              <p class="last">Last Day - ${data.timeframes.daily.previous}hrs</p>`
                break;
            case "weekly":
                timeframes = `<p class="hours">${data.timeframes.weekly.current}hrs</p>
                              <p class="last">Last Day - ${data.timeframes.weekly.previous}hrs</p>`
                break;
            case "monthly":
                timeframes = `<p class="hours">${data.timeframes.monthly.current}hrs</p>
                              <p class="last">Last Day - ${data.timeframes.monthly.previous}hrs</p>`
                break;
        }
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
                    ${timeframes}
            </div>
        </div>
        `;
        contador++;
    });
    content.innerHTML = boxContent; 
}