# 🏛️ AMJUB - Generación y Edición de Credenciales  

📜 **AMJUB** es una aplicación web diseñada para la **Asociación de Jubilados AMJUB**, permitiendo la generación y edición de credenciales de manera rápida y eficiente.  

🚀 **Deploy:** [AMJUB en Firebase](https://crendenciales-amjub.web.app/)  

---

## ✨ **Características Principales**  

✅ **Generación de credenciales en PDF** con diseño personalizado.  
✅ **Carga de foto de perfil** para personalizar la credencial.  
✅ **Selección de roles** dentro de la asociación.  
✅ **Formato de fechas en DD/MM/AAAA** para estandarización.  
✅ **Edición de la vigencia de credenciales** sin alterar otros datos.  
✅ **Carga y modificación de PDFs existentes** con actualización de la vigencia.  
✅ **Deploy en Firebase Hosting** para acceso rápido y seguro.  

---

## ⚙️ **Tecnologías Usadas**  

| 🔧 Tecnología  | 📌 Uso en el Proyecto |
|---------------|----------------------|
| **React + Vite** | Creación del frontend moderno y optimizado |
| **pdf-lib** | Manipulación de PDFs para edición de vigencia |
| **jsPDF** | Generación de PDFs personalizados con imágenes y texto |
| **Firebase Hosting** | Deploy seguro y escalable |

---

## 🚀 **Instalación y Configuración**  

### 1️⃣ **Clonar el repositorio**  
```sh
git clone https://github.com/tuusuario/amjub-credenciales.git
cd amjub-credenciales
```

### 2️⃣ **Instalar dependencias**  
```sh
npm install
```

### 3️⃣ **Ejecutar en modo desarrollo**  
```sh
npm run dev
```
La aplicación estará disponible en **`http://localhost:5173/`**.

### 4️⃣ **Compilar para producción**  
```sh
npm run build
```

---

## 📜 **Uso de la Aplicación**  

### 📌 **Generar una nueva credencial**
1️⃣ Llenar los datos personales en el formulario.  
2️⃣ Seleccionar el rol dentro de la asociación.  
3️⃣ Subir una foto de perfil (opcional).  
4️⃣ Generar el PDF con el botón **"Generar Credencial"**.  

### 📌 **Editar la vigencia de una credencial existente**
1️⃣ Seleccionar un **archivo PDF** con la credencial.  
2️⃣ Elegir la **nueva fecha de vigencia**.  
3️⃣ Descargar la versión actualizada con el botón **"Actualizar PDF"**.  

---

## 🎨 **Diseño del PDF**  

El PDF generado tiene un **diseño profesional** con:  
✅ **Fondo personalizado** con los logotipos de la asociación.  
✅ **Fotografía del jubilado** en alta calidad.  
✅ **Información clara y bien estructurada**.  
✅ **Rol dentro de la asociación** resaltado en el diseño.  
✅ **Vigencia destacada** y editable en futuros cambios.  

---

## 🛠️ **Estructura del Proyecto**  

📂 `src/` → Código fuente de la aplicación  
- 📄 `components/PDFGenerator.jsx` → Componente que genera credenciales en PDF  
- 📄 `components/UpdateVigencyPDF.jsx` → Componente que edita la vigencia de credenciales  
- 📄 `assets/` → Imágenes de fondo y logos  
- 📄 `main.jsx` → Punto de entrada de React  

---

## 🚀 **Deploy en Firebase**  

Para desplegar esta aplicación en **Firebase Hosting**, sigue estos pasos:  

### 1️⃣ **Instalar Firebase CLI (si no lo tienes)**
```sh
npm install -g firebase-tools
```

### 2️⃣ **Autenticarse en Firebase**
```sh
firebase login
```

### 3️⃣ **Inicializar Firebase**
```sh
firebase init
```
Selecciona **"Hosting"** y configura el proyecto con las opciones recomendadas.

### 4️⃣ **Hacer deploy**
```sh
npm run build
firebase deploy
```
Tu aplicación estará disponible en: **`https://crendenciales-amjub.web.app`** 🎉

---

## 📌 **Contribuciones**
Si deseas mejorar esta aplicación, puedes:  
1️⃣ **Hacer un fork** del repositorio.  
2️⃣ **Crear una rama** para tu mejora.  
3️⃣ **Hacer un pull request** con la nueva funcionalidad.  

---

## 📄 **Licencia**
Este proyecto está bajo la **Licencia MIT**, por lo que puedes usarlo y modificarlo libremente.  

---

🚀 **Desarrollado con ❤️ y código limpio para la comunidad de jubilados AMJUB.** 🏛️