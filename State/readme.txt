Patron de diseño State o Estado

Este es un patron de diseño del tipo comportamiento 
Vamos a tener un objeto(Context) que va a tener un estado y va a tener un comportamiento que va a depender de ese estado.

Es algo parecido al patron Strategy, pero en este caso el comportamiento va a depender del estado del objeto.
Donde tambien se puede compartir informacion entre las clases que implementan el patron State.


Ejemplo
Un reproductor de música, que puede estar en pausa, reproduciendo o detenido. 
El comportamiento de los botones de play, pause y stop va a depender del estado del reproductor.


Maquina de estados o maquina de turing, es justamente eso un patron de diseño State donde se pasa de un estado a otro y se ejecuta un comportamiento dependiendo del estado.