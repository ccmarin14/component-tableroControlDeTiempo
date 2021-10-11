const $listItem = document.querySelectorAll(".item__click");


//Escuchar click por cada item
$listItem.forEach(item => {
    item.addEventListener("click", function(){ajustar(item)})
})

//Ajustar el boton seleccionado
const ajustar = (item) => {
    if(item.classList.contains("active")){
        item.classList.remove("active")
    } else {
        remover();
        item.classList.add("active")
    }
}

//Remueve la clase active de todos los botones
const remover = () => {
    $listItem.forEach(item => {
        item.classList.remove("active")
    })
}

/*
$listItem.forEach(item => {
    item.addEventListener("click",() => {
        if(item.classList.contains("active")){
            item.classList.remove("active")
        } else {
            $listItem.forEach(item => {
                item.classList.remove("active")
            })
            item.classList.add("active")
        }
    })
})
*/
