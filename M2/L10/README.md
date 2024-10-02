# MONGODB

Sistema no SQL, que permite persistir información para que quede guardada.

## CONCEPTOS CLAVE

- **Base de datos**: Es un conjunto de datos que se almacenan de manera organizada y que se pueden consultar, actualizar o eliminar.
- **Colección (Tablas)**: Es un conjunto de documentos que tienen la misma estructura y se relacionan entre sí. Por ejemplo, una colección de usuarios.
- **Documento (Registros)**: Es una unidad de información que se guarda en una colección. Por ejemplo, un documento de usuario.
- **Campo**: Es una propiedad de un documento que guarda un valor. Por ejemplo, el campo "nombre" de un documento de usuario.
- **Referencias (Relaciones)**: Es una relación entre dos colecciones. Por ejemplo, una relación entre una colección de usuarios y una colección de pedidos.
- **\_id(objectId)**: es un campo que se agrega automáticamente a cada documento, y que es único para cada documento. Se puede generar de manera automática. Esta es la Primary Key de la colección.

Para trabajar con MongoDB todo debe estar muy bien organizado, ya que es muy flexible, lo que hace que permita tener en una misma colección información de distinto tipo. O puede haber inconsistencia de campos, pueden sobrar o faltar.

## MONGODB ATLAS

Es la plataforma online de MongoDB que guarda las bases de datos.

1. Crear un proyecto
2. Se crea un cluster (cuenta gratuita sólo 1)
3. Crear una base de datos (Plan M0 - Plan gratuito)
4. Guardar la contraseña del cluster, por que una vez creada la base de datos ya no la vamos a poder ver nuevamente
5. Indicar el IP de nuestra computadora
6. Crear o ver las colecciones
7. Agregar los documentos

## MONGODB COMPASS

Es una aplicación de escritorio para visualizar y administrar bases de datos de MongoDB.
Puede exigirle mucho a la computadora, requiriendo muchos recursos.
Nos pide una URI de conexión que se encuentra en Atlas, a esta dirección debemos agregarla nosostros a ella.
