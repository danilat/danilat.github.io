---
layout: post
title: Píldora. Desplegar un monorepo en Heroku
excerpt: Por defecto cuando queremos desplegar en Heroku, nos encontramos una relación 1:1 entre repositorio de git:aplicación. Este comportamiento podemos cambiarlo.
---

Por defecto cuando queremos desplegar en Heroku, nos encontramos una relación 1:1 entre repositorio de git y aplicación, ya que se espera tener un [Procfile](https://devcenter.heroku.com/articles/procfile) en el directorio raíz de tu proyecto con el tipo de procesos y comandos que arrancan la aplicación. 

Pero con [Heroku Multi Procfile buildpack](https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-multi-procfile) tenemos la posibilidad de cambiar ese comportamiento, y poder tener varias aplicaciones en un sólo repositorio. Las instrucciones para ello: 

Antes asumiremos que tenemos ya una aplicación en heroku en un git remote con nombre `heroku`, que hemos movido la primera aplicación del directorio raíz a `my-application` y la nueva la hemos creado en `my-new-application`.

Instalamos el buildpack en local

`$ heroku create --buildpack https://github.com/heroku/heroku-buildpack-multi-procfile.git`

En la aplicación de heroku existente añadimos el buildpack

`$ heroku buildpacks:add -a my-application heroku-community/multi-procfile`

Le asignamos el path del fichero Procfile que queramos asignar a la variable de entorno PROCFILE

`$ heroku config:set -a my-application PROCFILE=my-application/Procfile`

Lo pusheamos a heroku

`$ git push heroku`

Para la otra aplicación, la creamos en heroku

`$ heroku create -a my-new-application`

Añadimos el buildpack en la aplicación de heroku recién creada

`$ heroku buildpacks:add -a my-new-application heroku-community/multi-procfile`

Le asignamos el path del fichero Procfile que queramos asignar a la variable de entorno PROCFILE

`$ heroku config:set -a my-new-application PROCFILE=my-new-application/Procfile`

Añadimos el repositorio git remoto `heroku-new`

`$ git remote add heroku-new https://git.heroku.com/my-new-application.git`

Y lo pusheamos a heroku

`$ git push heroku-new`
