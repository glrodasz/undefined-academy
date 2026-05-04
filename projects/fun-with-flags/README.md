# Descripción del proyecto

De acuerdo a la base de datos IANA, actualmente tenemos 200 zonas horarias en el mundo, por lo tanto, la conversión de fechas y horas pueden llegar a ser bastante complejas, ni que decir cuanto adicionalmente se debe tener en cuenta los cambios de horario de verano (DTS). 

![timezones](https://github.com/deinsoftware/fun-with-flags/assets/933393/fbe7fbaf-7ae7-4657-a401-10a98fe9a59f)
> Source: http://mapsof.net/

Cuando necesitas compartir un evento o una transmisión en vivo quieres que las personas de diferentes locaciones a la tuya puedan asistir sin la necesidad de que hagan la conversion manualmente y obtengan fácilmente información relativa a su zona horaria.

El proyecto **Fun with Flags** quiere ayudar a resolver esta problemática, creando una utilidad web que permita a los usuarios compartir fácilmente sus eventos en redes sociales. Escogiendo las diferentes zonas horarias o países, la aplicación automáticamente hara la conversión a las zonas horarias seleccionadas indicando las diferentes fechas y horas del evento. Al finalizar la configuración, podrá compartirlo fácilmente a redes sociales o copiar la información para compartirla en otros medios.

Todo ese proceso se puede realizar sin necesidad de registrarse como usuario, sin embargo, quienes deseen crear uno podrán acceder a funcionalidades adicionales como:

- Guardar el evento y obtener un enlace único (slug)

- Las personas que visiten el enlace, podrán ver la información de la fecha y hora convertido automáticamente a su locación, inclusive si no hace parte de las seleccionadas en la configuración inicial

- Editar y/o eliminar sus eventos

- Mostrarse en la lista de eventos del sitio

---
 
# El problema que se quiere solucionar con ejemplos

Con nuestra aplicación los usuarios pueden configurar un evento con los datos de su país de origen. Luego puede proceder a seleccionar una lista de países y/o zonas horarias que le gustaría incluir al compartir su mensaje en redes sociales. 

La aplicación le entregará como resultado un mensaje predefinido que puede usar como base para compartir su evento de forma rápida y amigable.

```
Lanzamiento de Fun with Flags

La forma más fácil y rápida para compartir tus eventos con el mundo.  

🔗 https://twitch.tv/evento

📅 2023-08-05
14:22 (GMT-10) 🇨🇰
15:22 (HADT) 🇺🇸
17:22 (PDT) 🇺🇸🇨🇦
19:22 (GMT-5) 🇨🇴🇪🇨
20:22 (GMT-4) 🇨🇱
📅 2023-08-06
02:22 (GMT+2) 🇪🇸
09:22 (GMT+9) 🇯🇵

#evento #paises #redes-sociales #banderas
```

---

# El alcance del proyecto (MVP)

Nuestro proyecto contará con varias etapas que se describen a profundidad en la lista de [Features](https://github.com/deinsoftware/fun-with-flags/wiki/3.-Features) que hemos establecido como ruta de trabajo. Sin embargo, el alcance como MVP debe incluir las siguientes características.

- Pagina web (responsive design)
- Opción para crear y configurar eventos
- Conversion del evento con fecha, hora, zona horaria y las banderas de dichos paises
- Opción para compartir el evento o copiar la información al portapapeles

Bajo esta premisa quien use nuestra aplicación podrá simplificar la divulgación de sus eventos sin importar la zona horaria.

---

# Integrantes del proyecto

| Estudiantes  | Discord          | Nivel      |
| ------------ | ---------------- |----------- |
| Eduardo      | @mrredu#7518     | Trainee    | 
| Maikcol      | @maikcol#2796    | Trainee    | 
| Camilo       | @equiman#0343    | Senior     | 

--- 

# Stack

- [Backlog/Kanban](https://github.com/orgs/deinsoftware/projects/10/views/1) (GitHub Projects)
- [Sequence Diagrams](https://github.com/deinsoftware/fun-with-flags/wiki/5.-Sequence-Diagrams) (Mermaid)
- [GitHub](https://github.com/deinsoftware/fun-with-flags) (Repository)
- [Figma](https://www.figma.com/file/LkViQRZ89WA1sRTMfnmnSb/fun-with-flags?type=design&node-id=0%3A1&t=sOWiwwe6A8PIi2fr-1) (Mockups/Diseño)
- Mongo (Base de Datos)
- Prisma (ORM)
- Next.js (Full Stack Framework)
- CSS Vanilla (con PostCSS)
- [CI/CD](https://github.com/deinsoftware/fun-with-flags/actions) (GitHub Actions / Vercel)
- [Sonar](https://sonarcloud.io/project/overview?id=dein%3Afwf) (Syntactic Analysis)
