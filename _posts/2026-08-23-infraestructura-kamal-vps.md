---
layout: post
title: Infraestructura con Kamal en un VPS
excerpt: Migrando proyectos personales de Heroku y Vercel a un VPS propio en Europa, con Docker, Kamal y un pipeline de despliegue automatizado.
image: /img/posts/2026/08/kamal_vps.png
---

En el pasado cuando he estado trabajando en proyectos personales siempre me resultó muy cómodo usar algún PaaS, permitiendo centrarme en lo que quiero construir y pudiendo olvidarme en gran medida de cómo está desplegado. Actualmente tengo un par a los que les voy dedicando ratos, una aplicación que está corriendo en Heroku y otra en Vercel. En el proyecto que corre sobre Heroku ya llevo unos años pagando y la de Vercel de momento se podría mantener en la capa gratuita.

Ambas son plataformas que facilitan mucho la vida, con muchas decisiones ya tomadas y en las que prácticamente sólo tengo que preocuparme de ver cómo montar el pipeline de despliegue.

Pero por distintas razones llevaba un tiempo que me estaba rondando por la cabeza migrarlos a un servidor gestionado por mi: más libertad para cacharrear y poder desplegar sin estar tan encorsetado por lo que soportan esos PaaS, una vez teniendo que pagar se reduce mucho el coste de un VPS frente a un PaaS, etc. y principalmente tenerlo en un proveedor europeo.

## Eligiendo proveedor

Tanto a nivel personal como profesional, además de los típicos proveedores cloud con docenas de servicios como AWS y Google Cloud, también había desplegado con proveedores más *tradicionales* como Digital Ocean y OVH. Siendo este último el único europeo, y el mismo que, trabajando como freelance para una incipiente startup, nos dio el susto del [famoso incendio de uno de sus datacenters](https://corporate.ovhcloud.com/en/newsroom/news/informations-site-strasbourg/).

Estuve evaluando si volver a tirar de OVH, darle una oportunidad a Hetzner, compañía de la que muchas veces me han hablado muy positivamente y con precios muy competitivos, o Netcup y Contabo de los que no he hablado con nadie con experiencias de primera mano pero alguna vez las había visto en listas como otras alternativas en Europa y también tienen buenos precios. 

Mi intención era dejarme llevar por el boca-oreja y optar por Hetzner. Pero para mi sorpresa las gamas más económicas [no están disponibles desde junio para nuevos clientes](https://status.hetzner.com/incident/0a75c7ae-3377-41dc-aabe-601063724d24).

Después de ver algunas comparativas y benchmarks finalmente opté por Contabo, para el uso que le quería dar puede ser un buen punto de partida y si me da algún problema tocará migrar a alguno de estos otros proveedores.

## Contenerización

Lo único que tenía claro es que para poder migrar fácil de proveedor debía mantener todo contenerizado con Docker. Ninguna de las aplicaciones estaba desplegada con Docker hasta la migración, pero ambas estaban listas para hacerlo.

Las dependencias de infraestructura también las quería correr en el mismo host, de momento sólo PostgreSQL, reduciendo latencia pero teniendo que encargarme yo de su mantenimiento y de montar el sistema de backups.

## Coordinación de contenedores

Lo siguiente era elegir cómo gestionar en la instancia del VPS los distintos contenedores. Quería una solución que consumiera pocos recursos, configuración como código, resolviera el enrutamiento de tráfico, manejase la actualización de certificados SSL y pudiera integrar fácilmente en un pipeline de despliegue.

Lo que a priori me encajaba mejor era [Kamal](https://kamal-deploy.org/), que me da bastante hecho en comparación con tener que montarlo y mantenerlo todo sobre Docker Compose. Y frente a otras herramientas como Coolify, Dokploy o Dokku no requiere instalar nada en el host más allá de Docker, ni base de datos, ni demonio, ni aplicación web.

Además tiene algunos nice-to-have: sin downtime entre despliegues, sistema de rollback, posibilidad de correr en varios hosts si requiriese escalar o funcionar con cualquier registry.

## Base de datos

Estos proyectos ahora mismo sólo requieren persistencia a nivel base de datos en un PostgreSQL. Con Kamal podemos definir [accesorios](https://kamal-deploy.org/docs/commands/accessory/) para las dependencias de nuestras aplicaciones que se desplegarán también como contenedores Docker. Para la persistencia Kamal no tiene nada que lo resuelva por nosotros, así que tenemos que mapear volúmenes del host al contenedor para no perder los datos en cada reinicio.

En cuanto a la política de backups, misma situación, tienes que establecer tú cómo lo quieres resolver. En mi caso, al ser pet projects me servía con hacer copias diarias y llevarlas fuera de la instancia del host, y ya puestos en un proveedor diferente. 

El proveedor elegido fue [Cloudflare R2](https://www.cloudflare.com/products/r2/), con una capa gratuita bastante holgada que de momento es suficiente para el volumen de datos que manejan mis proyectos.

La solución actual sí requiere que el host tenga software específico y configuraciones que están fuera de Kamal. Este es un script que ejecuta `pg_dump` con `docker exec` una vez al día, el backup se encripta con [age](https://github.com/FiloSottile/age) (manteniendo una copia de la clave de encriptación en mi vault de contraseñas y claves) y el fichero se sube vía [rclone](https://rclone.org/) a R2. Y una vez a la semana se hace un test de recovery a través de otro script que levanta otro contenedor de postgres. 

En caso de fallo en cualquiera de ambos cron jobs se me notificará del error a través de no haber recibido un ping en [healthchecks.io](https://healthchecks.io).

## Pipeline

De momento los repositorios de ambos proyectos están hospedados en GitHub y uso GitHub Actions para automatizar el build y despliegue.

Hasta el momento dejé preparada la aplicación que venía de Heroku una vez migrada. Esta es una aplicación Spring Boot de la que se construye una imagen con cada push a la rama main una vez que se pasan los tests, posteriormente esta imagen se pushea al registry y una vez terminado llama al workflow del repositorio de infraestructura que es el que usa Kamal para desplegar la imagen del registry.

Para la aplicación Next que aún está en Vercel la intención es configurarlo del mismo modo.

![En el diagrama se representa que GitHub Actions es quien hace build y lanza despliegues hay una caja que representa el VPS y dentro subcajas por contenedor, a su vez una flecha sale del contenedor de PostgreSQL hacia R2 ](/img/posts/2026/08/kamal_vps.png "Diagrama resumen del artículo")

## Conclusión

Ahora todo corre sobre Docker y me permite cambiar rápidamente de proveedor, el único punto de fricción sería el downtime al migrar la base de datos. 

Y aunque tenga que hacer de vez en cuando algo de trabajo extra, desplegar estos proyectos queda bastante simple gracias a la automatización y abstracción que da el pipeline de despliegue. Lo tengo en un proveedor europeo y además con un coste bastante menor.