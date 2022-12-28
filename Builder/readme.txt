Builder es un patron de diseño creacional.

Que permite crear objetos complejos de un a manera mas simple y escalable.

Se utiliza para separar la construcción de un objeto complejo de su representación, de modo que el mismo proceso de construcción pueda crear diferentes representaciones.

Esto para cerar un conjunto de metodos encadenados, esots metodos tu puedes o no involarlos.

Producto es el objeto final que se va a crear.

Director es el objeto que se encarga de crear el producto es decir, esto nos da practicamente una herramienta extra, la cual va a tener un conjunto de preparaciones para crearlo
dependiendo de ciertos pasos.


====== Caso de uso ======
Dede de aplicar este patron cuando se tenga un objeto complejo en su construcción y se quiera separar la construcción de su representación.

ConcreteBuilder es el objeto que se encarga de crear las partes del producto.