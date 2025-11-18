# API Backend - UAGRM Rides

## Base URL
http://localhost:3000

---

# AUTH - Autenticación

## POST /auth/register - Registrar Usuario

**Body:**
```json
{
  "numeroRegistro": "12345678",
  "emailInstitucional": "juan@uagrm.edu.bo",
  "nombreCompleto": "Juan Pérez",
  "password": "contraseña123",
  "telefono": "591-12345678",
  "telefonoEmergencia": "591-87654321",
  "tipoUsuarioId": "uuid-tipo-usuario"
}
```

**Response (201):**
```json
{
  "message": "Usuario registrado exitosamente",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "usuario": {
    "id": "uuid-usuario",
    "numeroRegistro": "12345678",
    "emailInstitucional": "juan@uagrm.edu.bo",
    "nombreCompleto": "Juan Pérez"
  }
}
```

---

## POST /auth/login - Iniciar Sesión

**Body:**
```json
{
  "emailInstitucional": "juan@uagrm.edu.bo",
  "password": "contraseña123"
}
```

**Response (200):**
```json
{
  "message": "Login exitoso",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "usuario": {
    "id": "uuid-usuario",
    "numeroRegistro": "12345678",
    "emailInstitucional": "juan@uagrm.edu.bo",
    "nombreCompleto": "Juan Pérez",
    "rol": "Estudiante",
    "tipoUsuario": "Pasajero"
  }
}
```

---

# USUARIOS

## GET /usuario - Obtener Todos los Usuarios

**Response (200):**
```json
[
  {
    "id": "uuid-usuario",
    "numeroRegistro": "12345678",
    "emailInstitucional": "juan@uagrm.edu.bo",
    "nombreCompleto": "Juan Pérez",
    "telefono": "591-12345678",
    "calificacionPromedio": 5.0,
    "rol": { "id": "uuid", "nombre": "Estudiante" },
    "tipoUsuario": { "id": "uuid", "nombre": "Pasajero" },
    "estado": { "id": "uuid", "nombre": "Activo" }
  }
]
```

---

## GET /usuario/perfil - Obtener Perfil del Usuario Autenticado

**Headers:**
```
Authorization: Bearer <token_jwt>
```

**Response (200):**
```json
{
  "id": "uuid-usuario",
  "numeroRegistro": "12345678",
  "emailInstitucional": "juan@uagrm.edu.bo",
  "nombreCompleto": "Juan Pérez",
  "telefono": "591-12345678",
  "telefonoEmergencia": "591-87654321",
  "fotoPerfil": "url-foto",
  "documentoIdentidad": "numero-documento",
  "calificacionPromedio": 5.0,
  "ultimaConexion": "2025-11-15T10:30:00.000Z",
  "rol": { "nombre": "Estudiante" },
  "tipoUsuario": { "nombre": "Pasajero" },
  "estado": { "nombre": "Activo" }
}
```

---

## GET /usuario/:id - Obtener Usuario por ID

**Response (200):**
```json
{
  "id": "uuid-usuario",
  "numeroRegistro": "12345678",
  "emailInstitucional": "juan@uagrm.edu.bo",
  "nombreCompleto": "Juan Pérez",
  "telefono": "591-12345678",
  "rol": { "nombre": "Estudiante" },
  "tipoUsuario": { "nombre": "Pasajero" },
  "estado": { "nombre": "Activo" }
}
```

---

## PATCH /usuario/:id - Actualizar Usuario

**Headers:**
```
Authorization: Bearer <token_jwt>
```

**Body:**
```json
{
  "nombreCompleto": "Juan Pérez Updated",
  "telefono": "591-99999999",
  "telefonoEmergencia": "591-88888888",
  "fotoPerfil": "url-nueva-foto",
  "documentoIdentidad": "nuevo-documento"
}
```

**Response (200):**
```json
{
  "id": "uuid-usuario",
  "numeroRegistro": "12345678",
  "emailInstitucional": "juan@uagrm.edu.bo",
  "nombreCompleto": "Juan Pérez Updated",
  "telefono": "591-99999999",
  "telefonoEmergencia": "591-88888888"
}
```

---

## DELETE /usuario/:id - Eliminar Usuario

**Headers:**
```
Authorization: Bearer <token_jwt>
```

**Response (200):**
```json
{
  "message": "Usuario eliminado correctamente"
}
```

---

# ROL - Gestión de Roles

## POST /rol - Crear Rol

**Body:**
```json
{
  "nombre": "Estudiante"
}
```

**Response (201):**
```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "nombre": "Estudiante",
  "usuarios": []
}
```

---

## GET /rol - Obtener Todos los Roles

**Response (200):**
```json
[
  {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "nombre": "Estudiante",
    "usuarios": []
  },
  {
    "id": "223e4567-e89b-12d3-a456-426614174001",
    "nombre": "Conductor",
    "usuarios": []
  }
]
```

---

## GET /rol/:id - Obtener Rol por ID

**Response (200):**
```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "nombre": "Estudiante",
  "usuarios": []
}
```

---

## PATCH /rol/:id - Actualizar Rol

**Body:**
```json
{
  "nombre": "Estudiante Premium"
}
```

**Response (200):**
```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "nombre": "Estudiante Premium",
  "usuarios": []
}
```

---

## DELETE /rol/:id - Eliminar Rol

**Response (200):**
```json
{
  "message": "Rol eliminado correctamente"
}
```