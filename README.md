# sidehustle-ejs-demo

> Simple express app using EJS as a template engine

### Folder structure
```sh
sidehustle-ejs-demo
.
├── README.md
├── package-lock.json
├── package.json
├── server.js
└── src
    └── views
        ├── pages
        │   ├── about.ejs
        │   └── index.ejs
        └── partials
            ├── footer.ejs
            ├── head.ejs
            └── header.ejs
```
> `package.json` and `package-lock.json` contain metadata about our project.<br>
> `server.js` is the entry point and contains the logic our server to initialize and start it.<br>
> `src` is our main source folder which contains our views.<br>
> `src/views` contains views.<br>
> `src/views/pages` contains our pages.<br>
> `src/views/partials` contains our partials.<br>

### Getting started
Clone the repository & change to the cloned folder

Using HTTPS
```sh
git clone https://github.com/desirekaleba/sidehustle-ejs-demo.git && cd sidehustle-ejs-demo
```
Using SSH
```sh
git clone git@github.com:desirekaleba/sidehustle-ejs-demo.git && cd sidehustle-ejs-demo
```
Install dependencies
```sh
npm i
```
Start the server

In watch mode
```sh
npm run start:dev
```
Production
```sh
npm start
```

