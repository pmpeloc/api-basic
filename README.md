# Creación de una API básica en Express y Sequelize

- 1\_ Crear un package.json con:

```
npm init -y
```

- 2\_ Instalar los paquetes necesarios (si no tienen yarn usar npm):

```
yarn add express
yarn add sequelize
```

- 3\_ Crear el .gitignore para no subir la carpeta node_modules

- 4\_ Instalar nodemon y modificar el package.json

```
yarn add -D nodemon
```

```
"scripts": {
  "start:dev": "nodemon src/index"
}
```

```
yarn start:dev
npm run start:dev
```

- 5\_ Instalar CORS para poder habilitar el acceso externo

```
yarn add cors
```

```
app.use(cors())
```
