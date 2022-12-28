Este es un patron de diseño de tipo estructura.

Practicamente nos soluciona en como estan estructuradas las clases, y como se conforman una con otras.
Este patron viene a  solucionar cuando tenemos que agregar muchas funcionaliaddes jerarquecas a una clase, y no queremos que se vuelva un caos.

El decorador hace envoltorios de funcionalid.
- Un envoltorio de funcionalidad es una clase que tiene una referencia a un objeto de la clase que se esta decorando, y que agrega funcionalidad extra a este objeto.
  En lugar de heredarla.

- El decorador agrega funcionalidad a un objeto, sin modificarlo.

- Eejcutando la funcionalidad del objeto decorado, y luego la funcionalidad del decorador.

- El decorador puede ser una clase o una funcion.

- El decorador puede decorar a otros decoradores. (Decorar a decoradores)


VENTAHJA

Tenemos el comportamiento de varias clases sin tener herencia multiple.

