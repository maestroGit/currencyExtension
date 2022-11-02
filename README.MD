### Build a Chrome ExtensionBuild

[font](https://www.youtube.com/watch?v=B8Ihv3xsWYs)


Crear rama
Para crear una rama, utilizaremos el comando git branch. Vamos a crear una rama que llamaremos test

git branch test

Cambiar de rama
Ahora tenemos una nueva rama, la rama test. Para acceder a ella, utilizaremos el comando git checkout

git checkout test

Si hemos introducido este comando, ya no estaremos en la rama master , sino que en la rama test, de manera que podremos hacer todos los cambios que deseemos sin miedo a romper nada.

Antes de volver nuevamente a la rama master, tenemos que hacer un git push y poner al día la rama test.

Para volver a la rama master:

git checkout master

Ya estamos de nuevo en la rama master

Borrar una rama
Si ya hemos acabado con la rama test y queremos eliminarla en el repositorio local, utilizaremos el comando git branch -d

git branch -d test

Para forzar el borrado en caso de algún error:

git branch -D test

Para eliminar el repositorio remosto git push origin :

git push origin :test