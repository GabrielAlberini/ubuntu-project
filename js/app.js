/*Call to the controllers */
const buttonGAme = document.querySelector(".app-buttonGame")
const contTxt = document.querySelector("#app-txt")
const appContTxt = document.querySelector(".app__cont-txt")


function contApp() {

    /*Array with all the texts*/
    const messages = [
        "Agradecer el encuentro. Soltar el resultado. Aceptar el ritmo. Soltar el control. Calmar el ego. Aceptar lo que fue. Perfecto en su tiempo y forma. Perdonar y perdonarme desde la raíz. Volver a buscar adentro lo que deposito afuera, volver al centro. Desde ahí seguir descubriéndonos.",
        "Libera la mente y vuelve al presente. A paso lento vas andando, a paso lento vas caminando. Disfruta del paisaje de cada instante. Detente en el detalle del recorrido. Apurate por llegar desordena el andar. Vuelve a confiar que no hay meta que alcanzar.",
        "Querer resolver también es una forma de resistir. Hoy toca sentir. Sentir cada parte de tu ser. Habita tu cuerpo, habita tu merecer. Habita cada parte de tu parecer y así podrás dejarte caer. Así podrás rendirte y cambiar de piel. No temas a tu intensidad, es tu llave de poder.",
        "Que la fe sea tu motor para estar en presencia hoy. Comprender que no tienes más que cada instante hoy. Revisa tu mente, a donde te lleva en cada momento. Alinear tu hacer, pensar y sentir es la clave hoy. Para ello siente tus manos, júntalas, ponelas sobre tu corazón y ahí veras que estas aquí, hoy, respondiendo a tu máximo magnetizador. Tu corazón.",
        "Mira Hacia lo alto. Mira desde lo alto. Observa el cielo las estrellas y la inmensidad que te rodea. Siéntete protegidx por esta tierra. Tienes un origen. Un andar. Y un horizonte. No temas de tus estados de confusión. No quieras controlar desde tu estrecha visión. No hay árbol que no de su fruto en determinada estación. Confía en tus pasos hoy. Mira hacia lo alto y entrégate al orden natural superior.",
        "Constantemente nos estamos transformando. Contantemente vamos transmutando. Habita cada frase de tu renacer. Nada permanece estático en este espiral. Cada paso que das, todo lo que creas, todo lo que te encuentra es perfecto para el próximo salto que la conciencia te pide dar. No temas dejarte caer, debajo hay una nueva piel.",
        "Ser verdad, es tu poder. Habitar en él. La certeza del corazón. Sabes ahí que no hay razón. Solo en este presente te guía el amor. Y ahí no hay equivocación. Busca nutrir tu motor con todo lo que te rodea. Mira el mundo con ojos de compasión. Abraza tus miedos y cámbiales el color.",
        "Libera la mente. Vuelve al presente. A paso lento vas andando. A paso lento vas caminando. Disfruta el paisaje de cada instante. Detente en n el detalle del recorrido. Apurarte por llegar desordena el andar. Vuelve a confiar que no hay meta que alcanzar.",
        "A través del juego podemos alinear la mente y el cuerpo en un mismo lugar. A través del juego algo toma cierta liviandad. Que relaja y te invita a confiar. A través de la risa el alma empieza a bailar. Si hay algo que alinea tu energía es jugar. Anímate a explorar, es tan simple y tan real.",
        "Comprender que somos en vínculo aquello que me traes vive dentro de mí. Por eso no puedo culparte por ser. Nada me lo haces. Toca verme en tu reflejo y ver que me venias a traer. La alquimia sucede dentro cuanto el afuera incomoda. Algo me pide atención para su integración. Y dejando atrás las expectativas hacia vos, me abro a compartir sin depender. Amar sin exigir."
    ]

    /*Calcutate a random number from 0 to 9*/
    let numRandom = Math.round(Math.random()*9)
    /*Print it in the container tag*/
    contTxt.innerHTML = `${messages[numRandom]}`
    /*Hide the "background-img" once the function is called*/
    appContTxt.classList.add("app__cont-show")
    /*Hide the button once the function is called*/
    buttonGAme.classList.add("buttonHidden")
}

