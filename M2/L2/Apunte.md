# Resume de la clase

## Frontend

El la rama del desarrollo que se dedica a todo aquello con lo que interactúa el usuario. Que un sitio tenga la funcionalidad que necesita. Vela también por la interfaz de usuario y por la experiencia de usuario.

## Backend

Es el detrás de escena de lo que hace o necesita el usuario, es el que brinda al frontend todo lo que necesita para presentar la interfaz de usuario. La lógica de la aplicación, interacción con la base de datos. De la seguridad y gestionar permisos.

## API

Application Programing Interface, nos va a dar protocolos, reglas, recurso, herramientas, para la comunicación entre dos aplicaciones diferentes, sin que se conozcan entre sí, pero que necesitan interactuar entre sí. El backend va a poner a disposición del frontend un api para que obtenga los recursos que necesita.

## API Rest

Está diseñada de manera tal que tiene recursos que son información, y tiene comp protocolo de funcionamiento el HTTP, que es un tipo de protocolo de comunicación que no es exclusivo de la API Rest, que permitir la comunicación entre backend y frontend

## HTTP

Es un conjunto de reglas que permite la comunicación entre dos actores, un cliente y un servidor.
Dos sistemas cualesquiera que se comuniquen entre sí a través de este protocolo van a tomar estos roles de cliente y servidor, los cuales no siempre van a ser necesariamente una aplicación de backend y una de frontend. En nuestro caso lo más común es sea así, pero no es siempre necesario
El cliente es el que le hace una petición al servidor de un recurso
El servidor es el encargado de responder a esa petición
Siempre que una un request va a haber un response, el response no puede faltar, no puede haber varias peticiones para la misma respuesta ni varias respuestas para una petición, siempre va a haber una de cada una, y si hubo una petición siempre va a haber una respuesta obligatoriamente, aunque solo sea no lo pude hacer

## METODOS HTTP

Indican qué se está pidiendo al servidor
GET: pide información
POST: envía información
PUT: modifica información
DELETE: elimina información
