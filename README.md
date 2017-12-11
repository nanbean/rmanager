R Manager
=========

How to install
-------
```bash
yarn install

npm install phantom -g
npm install phantomjs -g
npm install casperjs -g
npm install spooky
cd node_modules/spooky
npm install

yarn build
```

How to develop
-------
run server
```bash
PORT=3005 node server
```
run app in different terminal
```bash
yarn start
```

modify .env.development to use proxy

Before commit
-------
You have to check eslint
```bash
eslint src
```
After fixing all warning, you can commit
