# Mi Portafolio Full Stack
Este es un portafolio creado en base a mis proyectos, guiado durante la formación adquirida en Generation México.

## Tecnología
Este proyecto usa únicamente Vite, Bootstrap y SaSS.
- Para utilizarlo en local modo desarrollo se usa `pnpm dev`.
- Para generarlo se usa `pnpm build`.
- Para visualizar lo generado se usa `pnpm preview`.

## Organización
El proyecto se estructura de la siguiente manera:
````
/
├── public/           (recursos)
│   ├── files/        (archivos descargables)
│   ├── images/       (recursos visuales)
│   ├── proyects/     (recursos para los poryectos)
│   └── favicon.svg
├── scss/
│   └── main.scss     (scss para personalizar bootstrap)
├── src/              (fuente)
│   ├── css/          (estilos)
│   │   ├── main.css  (estilo generado por el scss)
│   │   └── ...
│   ├── data/         (datos para generar los htmls)
│   │   └── ...
│   ├── js/           (scripts de la página)
│   │   └── ...
│   └── index.html    (página principal)
└── ...Archivos de configuración...
````

## Inspiración
La paleta de colores y el estilo simple viene por la inspiración en el
videojuego Florence de Mountains (2018).


## Licencias
Este proyecto utiliza licencias diferentes
según el tipo de contenido:

- Código fuente: Apache License 2.0.
- Contenido original y documentación: CC BY-SA 4.0.
- Recursos de terceros: conservan sus respectivas licencias.

Consulta LICENSE y LICENSE-CONTENT
para conocer los términos correspondientes.
