# Build a Chrome ExtensionBuild
[font](https://www.youtube.com/watch?v=B8Ihv3xsWYs)

[Chrome Extension](https://developer.chrome.com/docs/extensions/)
Extensions are software programs, built on web technologies (such as HTML, CSS, and JavaScript) that enable users to customize the Chrome browsing experience.

El único archivo obligatorio de una extensión de Chrome es el manifiesto. Debe estar colocado en el directorio raíz, y comunica los metadatos de la extensión, los permisos y otros archivos involucrados. 
"name", "version" and "description" keys on the Manifest. These keys contain basic metadata for the extension. They control how the extension appears on the Extensions page and, when published, on the Chrome Web Store.

El formato del manifiesto tiene un montón de opciones, que se pueden ver en esta página (https://developer.chrome.com/extensions/manifest), pero nos centraremos en los más importantes. Presentemos el manifiesto de la extensión "Cat detector":

# The Frankfurter API
*tracks foreign exchange references rates published by the European Central Bank. The data refreshes around 16:00 CET every working day.*
[API](https://www.frankfurter.app/docs/)

### git
*Crear rama*
git branch test

*Cambiar de rama**
git checkout test

*Ya no estaremos en la rama master , sino que en la rama test, podremos hacer todos los cambios que deseemos sin miedo a romper nada.*
*Antes de volver nuevamente a la rama master, tenemos que hacer un git push y poner al día la rama test.*

*Para volver a la rama master:*
git checkout master

*Borrar una rama*
git branch -d test

*Para forzar el borrado en caso de algún error:*
git branch -D test

*Para eliminar el repositorio remosto git push origin :*
git push origin :test

```
curl "https://api.frankfurter.app/latest?amount=1000000&from=GBP&to=USD"

StatusCode        : 200
StatusDescription : OK
Content           : {"amount":1000000.0,"base":"GBP","date":"2022-11-04","rates":{"USD":1128512}}    
RawContent        : HTTP/1.1 200 OK
                    Connection: keep-alive
                    Vary: Origin
                    Strict-Transport-Security: max-age=31536000
                    Content-Length: 77
                    Content-Type: application/json; charset=utf-8
                    Date: Sat, 05 Nov 2022 07:29:13 G...
Forms             : {}
Headers           : {[Connection, keep-alive], [Vary, Origin], [Strict-Transport-Security, 
                    max-age=31536000], [Content-Length, 77]...}
Images            : {}
InputFields       : {}
Links             : {}
ParsedHtml        : mshtml.HTMLDocumentClass
RawContentLength  : 77
```