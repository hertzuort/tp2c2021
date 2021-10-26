TP Mongo, Express, React, Node (MERN)

## Levantar localmente

Pararse en la carpeta donde esta este archivo README y luego ejecutar:

- Para instalar las dependencias en el directorio `node_modules` local (solo es necesario la primera vez o si agregamos nuevas dependencias): `npm install`
- Para levantar el servidor de Express: `npm start`
- Para levantar la aplicacion de React:

```
cd client
npm start client
```

### Extra

Para levantar el servidor de Express y que se reinicie solo ante cambios: `npm run-script start-dev`. Requiere tener `nodemon` instalado, que se puede instalar globalmente en la computadora ejecutando `npm install -g nodemon`.

## Estructura

- En la carpeta `server` esta la app de Node (API backend).
- En la carpeta `client` esta la app de React.

## Pasos ejecutados para crear el esqueleto

- Crear `package.json` para backend con `npm init -y`
- Modificar el archivo anterior para agregar los scripts de `start` y `start-dev`
- Crear app react con `npx create-react-app client`
- Modificar el `package.json` del directorio client para agregar el proxy al backend
