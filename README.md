# Simple API Microservices

![Node.js](https://img.shields.io/badge/Node.js-v18.x-green)
![TypeScript](https://img.shields.io/badge/TypeScript-v5.x-blue)
![AWS SAM](https://img.shields.io/badge/AWS%20SAM-Lambda-orange)
![License](https://img.shields.io/badge/License-MIT-brightgreen)

Simple API Microservices es un proyecto básico de API REST construido con Node.js y TypeScript. Este proyecto incluye múltiples microservicios que puedes desplegar y probar en AWS utilizando AWS SAM. Perfecto para probar conceptos de microservicios y APIs en la nube.

## 🚀 Características

- API REST construida con **Express.js** y **TypeScript**.
- Múltiples microservicios:
  - **Hello Service**: Devuelve un mensaje de prueba.
  - **User Service**: Operaciones relacionadas con usuarios.
  - **Product Service**: Operaciones relacionadas con productos.
- Desplegable en AWS Lambda usando **AWS SAM**.
- Código modular y fácil de extender.

---

## 📂 Estructura del Proyecto

```
simple-api/
├── src/
│   ├── app.ts              # Archivo principal de configuración
│   ├── routes/
│   │   ├── index.ts         # Rutas principales
│   │   ├── userRoutes.ts    # Rutas para usuarios
│   │   └── productRoutes.ts # Rutas para productos
│   └── controllers/
│       ├── helloController.ts  # Controlador para Hello Service
│       ├── userController.ts   # Controlador para User Service
│       └── productController.ts # Controlador para Product Service
├── .env                    # Variables de entorno
├── package.json            # Configuración del proyecto
├── tsconfig.json           # Configuración de TypeScript
├── template.yaml           # Configuración de AWS SAM
```

---

## 📦 Instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/holasoymalva/simple-api-micro-services.git
   cd simple-api-micro-services
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Configura las variables de entorno:**
   Crea un archivo `.env` en la raíz del proyecto:
   ```
   PORT=3000
   ```

---

## 🛠️ Uso

### Ejecución Local

Para ejecutar la API localmente en modo desarrollo:
```bash
npm run dev
```

Accede a los endpoints disponibles en: `http://localhost:3000/api`

### Endpoints Disponibles

1. **Hello Service**
   - `GET /api/hello`: Devuelve un mensaje de prueba.

2. **User Service**
   - `GET /api/users`: Devuelve un usuario de ejemplo.
   - `POST /api/users`: Crea un nuevo usuario. Requiere datos en formato JSON:
     ```json
     { "name": "John Doe", "email": "john.doe@example.com" }
     ```

3. **Product Service**
   - `GET /api/products`: Devuelve un producto de ejemplo.
   - `POST /api/products`: Crea un nuevo producto. Requiere datos en formato JSON:
     ```json
     { "name": "Laptop", "price": 1500 }
     ```

---

## 🌩️ Despliegue en AWS

### Prerrequisitos
- **AWS CLI** instalado y configurado.
- **AWS SAM CLI** instalado.

### Comandos de despliegue

1. **Construir el paquete:**
   ```bash
   sam build
   ```

2. **Desplegar el stack:**
   ```bash
   sam deploy --guided
   ```

   Sigue las instrucciones para configurar el despliegue (stack name, región, etc.).

### Endpoint público
Después del despliegue, AWS SAM generará un endpoint público para acceder a los microservicios.

---

## 🧪 Pruebas

Usa herramientas como **Postman**, **cURL**, o cualquier cliente HTTP para probar los endpoints.

Ejemplo con `cURL`:
```bash
curl -X GET http://localhost:3000/api/hello
```

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras un error o tienes sugerencias, abre un [issue](https://github.com/holasoymalva/simple-api-micro-services/issues) o envía un pull request.

---

## 📜 Licencia

Este proyecto está licenciado bajo la licencia [MIT](LICENSE).

---

## 🛠️ Tecnologías Utilizadas

- **Node.js**: Backend.
- **TypeScript**: Tipado estático.
- **Express.js**: Framework para la API REST.
- **AWS SAM**: Despliegue en AWS Lambda.
