# runtimetest

Hey you, how you doing ? ;)

This project is an example of a vuejs web application that uses runtime variables!

I was very inspired by the following article on React and runtime variable so I made a VueJS version of it.
Have a look : [Here](https://www.freecodecamp.org/news/how-to-implement-runtime-environment-variables-with-create-react-app-docker-and-nginx-7f9d42a91d70/)

## What we want to do : 
* One build for all environment
* Configure on API path on runtime and via docker-compose
* Build Docker compose once and for all

## The challenge :
* Webpack replaces all process.env with a string value given in env.... so configuration only possible in build time

## A solution :
* Write env variable in a static file served by NGINX
* Import the file into our application via ```<script>``` in ```index.html```

## How to :
* Run a bash script when we start the container via run or compose up
* Give it the BASE_PATH
* It create a js file with variables assigned to window so they will be available globally

## Gotchas:
Add env-config to gitignore and docker ignore

## Project setup
```
npm install
```

### run dev environment
```
npm run super
```

### Build docker image
```
docker build . -t test/runtime
```

### Run docker container
```
docker run -d -p 80:80 -e API_URL=http://wawa.me -t test/runtime
```

### Run docker-compose
```
docker-compose up
```

## How the magic works

### DEV
Add your environment to .env

Then run: ```npm run super```

Explanation :
```npm run super``` -> run script shell ```env.sh``` -> generate ```env-config.js``` to variables attached to ```window``` -> copy it in public -> ```env-config.js``` is called in ```index.html``` -> ```_env_``` is added to vue in ```main.ts``` -> so it can be used in the application like in ```App.vue```

### Prod
Configure variables with docker run via the flag ```-e```

or

Inside ```docker-compse.yml```

-> docker container run ```env.sh``` -> generate a new ```env-config.js``` with the environment variable passed overiding the existing one -> run web app 


