# BASES DE DATOS

Almacena la información de forma organizada y relacionada

## Dato = Celda

Unidad mínima de información
Ejemplo: 29/09/1941

Información, datos puestos en un contexto
Ejemplo:
Nombre, Fecha Nacimiento
Nélida, 29/09/1941
Ernesto, 02/06/1934

## Entidades = Tablas

Un concepto de la vida real que intentamos abstraer en nuestro trabajo
Personas
Nombre, Fecha Nacimiento
Nélida, 29/09/1941
Ernesto, 02/06/1934

## Atributos = Campos = Columnas

Propiedades que describen a la entidad
Ejemplo:
Nombre, Fecha Nacimiento

## Identificador Unico (ID) = Primary Key (PK)

Es un valor único que identifica a cada registro
Ejemplo:
ID, Nombre, Fecha Nacimiento
1, Nélida, 29/09/1941
2, Ernesto, 02/06/1934

## Clave Foránea (FK)

Es la Primary Key de otra tabla que se relaciona con la tabla actual
Ejemplo:
Nombre, Fecha Nacimiento idPais
Nélida, 29/09/1941, 1
Ernesto, 02/06/1934 1

Paises
id, Nombre
1, Argentina

## Relaciones

Relación entre entidades, permite unir información de distintas tablas
Ejemplo:
Relación entre Personas y Paises
