# ZurichTest

Aplicación web desarrollada como prueba técnica, orientada a la gestión de clientes y pólizas de seguros, con control de acceso basado en roles.

## Funcionalidades principales

### Gestión de usuarios y roles

Autenticación de usuarios
Autorización basada en roles
Control de acceso a funcionalidades

### Gestión de clientes

Crear, editar y eliminar clientes
Consulta de información detallada

### Gestión de pólizas

Registro de pólizas asociadas a clientes
Consulta y administración de pólizas
Relación cliente–póliza

El acceso a endpoints del backend está protegido mediante roles definidos en Spring Security.

## Tecnologías utilizadas
### Frontend
Angular 21
TypeScript
RxJS
### Backend
Java 17+
Spring Boot
Spring Security
Spring Data JPA
Base de datos
Relacional PostgreSQL

## Instalación

Clonar repositorio
git clone https://github.com/marcelopaal/ZurichTest.git
cd ZurichTest

### Para Windows con Docker Desktop se puede ejecutar los scripts en PowerShell

.\deploy.ps1  -- Para generar el entorno local
                . Creará imagen de la base de datos, deploy y servicio 

.\destroy.ps1 -- Para borrar tanto la bases de datos como las imagenes, pods

### O si se desea ejecutar manualmente

Backend (Spring Boot)
cd backend
mvn spring-boot:run
Frontend (Angular)
cd frontend
npm install
ng serve

Configurar endpoint en environment:

apiUrl: 'http://localhost:8080/api'

Endpoints principales

Ejemplo de endpoints:

POST   /api/auth/login
GET    /api/clientes
POST   /api/clientes
GET    /api/polizas
POST   /api/polizas

## Notas finales

Este proyecto fue desarrollado como parte de un proceso de evaluación técnica, enfocado en demostrar:

Capacidad de estructurar un sistema real
Implementación de seguridad por roles
Integración entre frontend y backend
Buenas prácticas en desarrollo full stack
