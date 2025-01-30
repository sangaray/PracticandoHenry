# M3 - PROJECT 3

## Tecnologías Utilizadas

- TypeScript
- Express
- NodeJS
- PostgreSQL
- TypeORM

## User Stories

- Como usuario invitado quiero poder:
  1. Ingresar y ver de qué se trata la aplicación (Landing: bienvenida y Home: informcación)
  2. Registrarme y crear una nueva cuenta (Registro)
  - Extra Credit: Recibir email de confirmación (NodeMailer)
- Como usuario registrado quiero poder:
  1. Iniciar sesión con mis credenciales
  2. Modificar mis datos
  - Posibilidad de que le usuario "suba" una foto de perfil a su cuenta a través de un archvio de imagen (.jpg, .png, etc). cloudinary
  3. Cerrar sesión
  4. Reservar Turno
  - A partir del día siguiente y hasta 14 días después
  - No más de un turno el mismo día y hora (...?)
  - Días laborables: Lunes a Viernes de 9 a 18 hs. Turnos de 30 minutos
  - Extra Credit: Recibir un email de confirmación
  5. Ver mi historial de turnos
  6. Cancelar un turno
  - Pedir confirmación antes de cancelar
  - Hasta un día antes del mismo
- Consideraciones
  - Sin manejo de Stock

## UX / UI

- Landing de bienvenida
- Home con información
- Barra de navegacion
- Formularios amigables (login, creación de turnos)
- Que muestre errores en tiempo real
- Que no se reinicie
- Que habilite el botón una vez completado
- Que sea orientativo (placeholder)
- Que filtre fechas inválidas

## Diagrama Entidad / Relación

Usuarios

- PK id: number
- nace: string
- email: string
- birthdate: Date
- nDni: number
- FK credentialId: number

Credentials

- PK id: number
- username: string
- password: string

Appointments

- PK id: number
- date: Date
- time: string
- status: string
- description: string
- FK userId: number

1:1 Usuario - Credentials
1:N Usuario - Appointments

<img src="./Extras/Diagrama · E-R.jpg" width=600>
