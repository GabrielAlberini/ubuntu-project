
function traerDatos() {

    const xhttp = new XMLHttpRequest();
    
    xhttp.open('GET', 'imgList.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function () {
        
        if (this.readyState == 4 && this.status == 200) {
            const buttonGAme = document.querySelector(".buttonGame")

            /* Calcular un numero aleatorio del 1 al 10 
            para extraer una carta del archivo JSON */
            let numRandom = Math.round(Math.random()*10);
            let image1 = images[numRandom].url;
            $(".imgGame").attr('src', image1);
            
            /*Agregar clase a botón de tal manera que cuando el usuario elija una carta, éste desaparezca*/
            buttonGAme.classList.add("buttonHidden")
            
        }
    }
}