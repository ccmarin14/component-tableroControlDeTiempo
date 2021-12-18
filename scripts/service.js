const content = document.querySelector(".data__user");
let DATA = [];

function getTimeTracking() {
    let contador = 0;
    fetch('./data.json')
        .then((res) => res.json())
        .then((data) => {
            DATA = data;
            boxContent = "";
            
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
                        <p class="hours">${data.timeframes.daily.current}hrs</p>
                        <p class="last">Last Day - ${data.timeframes.daily.previous}hrs</p>
                    </div>
                </div>
                `;
                contador++;
            });
            content.innerHTML = boxContent; 
        }
    );
}

getTimeTracking();