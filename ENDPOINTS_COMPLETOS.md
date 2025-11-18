# 🚗 UAGRM Rides - Backend API Endpoints

## 📋 Resumen Completo de Endpoints CRUD

---

## **AUTENTICACIÓN** 🔐

### POST /auth/register
```json
{
  "numeroRegistro": "12345678",
  "email": "usuario@uagrm.edu.bo",
  "nombreCompleto": "Juan Pérez",
  "password": "contraseña123",
  "telefono": "591-12345678",
  "telefonoEmergencia": "591-87654321",
  "tipoUsuarioId": "uuid"
}
```
**Respuesta:** Token JWT + datos usuario

### POST /auth/login
```json
{
  "numeroRegistro": "12345678",
  "password": "contraseña123"
}
```
**Respuesta:** Token JWT + datos usuario

---

## **ROLES** 🎯

### POST /rol
**Crear rol**
```json
{
  "nombre": "Admin"
}
```

### GET /rol
**Obtener todos los roles**

### GET /rol/:id
**Obtener rol por ID**

### PATCH /rol/:id
**Actualizar rol**
```json
{
  "nombre": "Nuevo Nombre"
}
```

### DELETE /rol/:id
**Eliminar rol**

---

## **ESTADOS** 📊

### POST /estado
**Crear estado**
```json
{
  "nombre": "Activo"
}
```

### GET /estado
**Obtener todos los estados**

### GET /estado/:id
**Obtener estado por ID**

### PATCH /estado/:id
**Actualizar estado**

### DELETE /estado/:id
**Eliminar estado**

---

## **TIPOS DE USUARIO** 👥

### POST /tipo-usuario
**Crear tipo de usuario**
```json
{
  "nombre": "Estudiante"
}
```

### GET /tipo-usuario
**Obtener todos los tipos**

### GET /tipo-usuario/:id
**Obtener tipo por ID**

### PATCH /tipo-usuario/:id
**Actualizar tipo**

### DELETE /tipo-usuario/:id
**Eliminar tipo**

---

## **USUARIOS** 👤

### POST /usuario
**Crear usuario (sin contraseña)**
```json
{
  "numeroRegistro": "12345678",
  "email": "usuario@uagrm.edu.bo",
  "nombreCompleto": "Juan Pérez",
  "telefono": "591-12345678",
  "telefonoEmergencia": "591-87654321",
  "documentoIdentidad": "1234567",
  "rolId": "uuid",
  "tipoUsuarioId": "uuid",
  "estadoId": "uuid"
}
```

### GET /usuario
**Obtener todos los usuarios** (sin password)

### GET /usuario/perfil ⚙️ JWT
**Obtener perfil del usuario autenticado**

### GET /usuario/:id
**Obtener usuario por ID**

### PATCH /usuario/:id ⚙️ JWT
**Actualizar usuario**
```json
{
  "nombreCompleto": "Nuevo Nombre",
  "telefono": "591-87654321",
  "fotoPerfil": "url",
  "estadoId": "uuid"
}
```

### DELETE /usuario/:id ⚙️ JWT
**Eliminar usuario**

---

## **VEHÍCULOS** 🚙

### POST /vehiculos ⚙️ JWT
**Crear vehículo**
```json
{
  "tipo": "Auto",
  "placa": "ABC-123",
  "marca": "Toyota",
  "modelo": "Corolla",
  "capacidadAsientos": 4
}
```

### GET /vehiculos
**Obtener todos los vehículos**

### GET /vehiculos/:id
**Obtener vehículo por ID**

### PATCH /vehiculos/:id ⚙️ JWT
**Actualizar disponibilidad**
```json
{
  "disponible": false
}
```

### DELETE /vehiculos/:id ⚙️ JWT
**Eliminar vehículo**

---

## **VIAJES** ✈️

### POST /viajes ⚙️ JWT
**Crear viaje**
```json
{
  "origen": "Campus UAGRM",
  "destino": "Centro Comercial",
  "horaSalida": "2025-11-15T14:30:00Z",
  "vehiculoId": "uuid",
  "asientosDisponibles": 3,
  "descripcion": "Viaje compartido"
}
```

### GET /viajes
**Obtener todos los viajes**
```
GET /viajes?estado=Pendiente
```

### GET /viajes/buscar/destino/:destino
**Buscar viajes por destino**

### GET /viajes/:id
**Obtener viaje por ID**

### PATCH /viajes/:id ⚙️ JWT
**Actualizar viaje**
```json
{
  "estado": "Completado",
  "horaLlegada": "2025-11-15T15:30:00Z"
}
```

### DELETE /viajes/:id ⚙️ JWT
**Eliminar viaje**

---

## **RESERVAS** 📅

### POST /reservas ⚙️ JWT
**Crear reserva**
```json
{
  "viajeId": "uuid",
  "asientosReservados": 2,
  "notas": "Voy con mi amigo"
}
```

### GET /reservas/mis-reservas ⚙️ JWT
**Obtener mis reservas**

### GET /reservas
**Obtener todas las reservas**

### GET /reservas/:id
**Obtener reserva por ID**

### PATCH /reservas/:id ⚙️ JWT
**Actualizar estado de reserva**
```json
{
  "estado": "Cancelada"
}
```

### DELETE /reservas/:id ⚙️ JWT
**Cancelar reserva (devuelve asientos)**

---

## 📌 Leyenda

- ⚙️ = Requiere autenticación JWT (header: `Authorization: Bearer {token}`)
- Todos los endpoints retornan respuestas JSON
- Los UUIDs se generan automáticamente
- Las contraseñas se hashean con bcrypt
- Los IDs de usuario se generan con UUID v4

## 🔑 Headers Requeridos (con JWT)

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Content-Type: application/json
```

---

**Total de Endpoints:** 50+
**Módulos Completados:** 8 (Auth, Usuario, Rol, Estado, TipoUsuario, Vehículo, Viaje, Reserva)
**Métodos por Módulo:** 5 (Create, Read All, Read One, Update, Delete)
