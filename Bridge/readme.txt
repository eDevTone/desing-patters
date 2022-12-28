Practicamnete este patron de diseño es un puente.
Este es un patron de diseño Estructural.

Separando una implementancion de una clase que va a hacer uso de esta implementacion.

En este caso la clase que va a hacer uso de esta implementacion es la clase de la que hereda, la clase que implementa la interfaz.

Puede ser una clase abstracta o una interfaz.

 Un Ejemplo:
 Un control remoto para la televicion, en este caso los botones la interfaz del control de cierto modo esto vendria a ser la ABSTRACCION.

 El funcionamiento de los botones es la implementacion de la interfaz.
 La implementacion va a cambiar dependiendo del televisor, pero el control va a tener los mismos botones

 CONCLUSION:

  La abstraccion es la capacidad de separar la implementacion de una clase de la clase que va a hacer uso de esta implementacion.
  La implementacion a fin de cuentas es quien va a hacer el trabajo, pero la abstraccion es quien va a hacer uso de esta implementacion.

  La implementacion puede cambiar sin que la abstraccion se vea afectada.
  Puedo añadir n implementaciones a la abstraccion sin que esta se vea afectada.
  A diferencia de la herencia, en la que si se ve afectada la clase que hereda.
  Y a diferencia del patron de diseño Strategy, en el que si se ve afectada la clase que hace uso de la implementacion. y esta cambia constantemente, incluso en tiempo de ejecucion. 


  Puede verse la abstraccion como la clase mas cercana al modelo de negocio donde se puede tener un monton de funcionalidad, 
  agregando varios comportamientos sin afectarla por medio de la implementacion. ESTO ES BRIDGE.