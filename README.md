# 22_Ejercicio


Ejercicio - Templates con Node.js + Express:


En este ejercicio aplicaremos todo lo que hemos visto anteriormente:

    Las vistas serán renderizadas como templates PUG
    Usaremos módulos separados como lo que hemos visto en clase
    Crearemos rutas básicas con express para servir una página web clásica (Home| ¿Quiénes somos? | ¿Dónde Estamos? | ¿Qué hacemos? | Contacto... etc...)
    ¿Llegaste aquí? Sirve en respuesta a la petición de cada ruta(endpoint) la vista correspondiente según lo que hemos visto con el uso de Templates con PUG
    Probar el uso de la carpeta public para servir tus ficheros estáticos de las carpetas css img y js en la vista correspodiente para que pueda navegar el cliente, dar estilos y efectos
    Prueba a pasar variables al template de pug para conseguir renderizar distintas vistas con una misma plantilla
    La app se debe iniciar con el comando npm start

Endpoints de ejemplo:

GET http://localhost:3000/
GET http://localhost:3000/about
GET http://localhost:3000/location
GET http://localhost:3000/mission
GET http://localhost:3000/contact
