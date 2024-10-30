# Parcial 1

## Consignas de entrega

- Para la entrega de este parcial, se debe forkear este repositorio en GitHub. Pueden ver informacion sobre como forkear en [esta](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) documentacion.

- Una vez forkeado, puede trabajarse en el entorno que se desee, ya sea localmente en Visual Studio Code, en la propia version web de VS Code en GitHub o en Replit.

- La fecha de entrega será la que se indique en la actividad del campus, normalmente durante la semana 10.

- Se deben subir los cambios realizados en el repositorio personal de GitHub.

- Una vez finalizado el parcial, debe hostearse en GitHub pages habilitando la opcion en el repositorio. Ver info [aqui](https://pages.github.com/?(null)&utm_term=&utm_campaign=&utm_source=adwords&utm_medium=ppc&hsa_acc=7856301356&hsa_cam=20148126406&hsa_grp=&hsa_ad=&hsa_src=x&hsa_tgt=&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQjw_-GxBhC1ARIsADGgDjur6Hd6-PqkqbkymCURxu2ytEboIumdQUzAss0WHkzGmjFVhQJTPT4aAu5hEALw_wcB).

- En la entrega del campus, debe entregarse unicamente el link a la pagina hosteada en GitHub pages. **No se aceptan archivos sueltos ni comprimidos como entrega**.

## Consigna del trabajo

- Se le pide crear un programa usando código **JavaScript** que permita cargar los datos de discos de una colección e ir mostrando un listado de estos.

- Este parcial es **DOMICILIARIO**, **INDIVIDUAL** o **GRUPAL DE A 2 (DOS) PERSONAS**.

- De no aprobarse/presentarse la entrega, se pasará a un recuperatorio al final del cuatrimestre.

- Cada alumno debe comenzar con el contenido de este repositorio:

    - [index.html](index.html): contiene la estructura básica del parcial, incluidos los botones que ya están llamando a las funciones necesarias para la acción del código. Tiene un _div_ para volcar los discos que se quieran mostrar. Se puede modificar libremente.
    - [styles.css](styles/styles.css): contiene los estilos para darle un mínimo de diseño al parcial. Se **debe** modificar para dar un estilo propio.
    - [index.js](scripts/index.js): contiene las funciones `cargar` y `mostrar`, que serán explicadas en una sección posterior. Aquí debe desarrollarse la parte principal del parcial.
    - [favicon.ico](favicon.ico): un favicon para mostrar en el navegador. Se puede cambiar libremente.
    - [discos.json](discos.json): un JSON con dos discos cargados para testear rapido el parcial levantando los datos con `fetch`.

## Desarrollo mínimo y obligatorio (nota 4)

Cualquier faltante de los requisitos que se presentan a continuación, hará que la entrega se considere desaprobada, aunque haya hecho cosas no solicitadas o del punto siguiente. Esta condición es mínima e innegociable.

- Al hacer clic en el botón "Cargar nuevo disco" se debe disparar la función `cargar` que solicita al usuario la siguiente información de un disco:
    - Nombre del disco.
    - Autor o banda del disco.
    - Portada (link a una imagen).
    - Código numérico único del disco:
        - Si el usuario ingresa un código numérico que ya fue cargado, se deberá pedir otro código (hasta ingresar uno que no haya sido utilizado anteriormente).
    - Todas las pistas del disco, donde cada pista tiene un nombre y una duración:
        - La cantidad de pistas a ingresar **NO** debe ser fija.
        - No se debe preguntar cuántas pistas hay que cargar, el dato se desconoce.
        - Al finalizar la carga de una pista, se debe confirmar si se desea ingresar otra más.
        - Cuando el usuario decide dejar de cargar pistas, finaliza la acción de la función.
    - En todo caso debe validarse que los datos ingresados sean válidos:
        - El nombre del disco, autor/banda y nombre de la pista no pueden quedar vacíos.
        - El código numérico único del disco no puede ser menor a 1, ni mayor a 999.
        - La duración de cada pista debe estar entre 0 y 7200 (segundos) inclusive.

- Al hacer clic en el botón "Mostrar discos", la función `mostrar` debe mostrar cada disco con: nombre, autor o banda, código único y todas las pistas con su nombre y duración.

- Las duraciones de las pistas deben mostrarse en minutos y segundos en el formato `MM:SS`.

- Hay que destacar visualmente (otro color de fuente, fondo o cualquier recurso que sea conveniente) las duraciones mayores a tres minutos.

## Agregados para llegar a 10

Entre las entregas que cumplan el punto anterior, incrementarán su nota los desarrollos que:

- Muestren un mensaje (con el método alert) ante cada error distinto cometido en el mismo dato ingresado (haciendo referencia a las validaciones).

- Informen en alguna parte de la página, cada vez que se muestran los discos, cuántos se llevan cargados.

- Informen por cada disco:
    - La cantidad de pistas que tiene cada disco.
    - La duración total del disco en horas, minutos y segundos en el formato `HH:MM:SS`.
    - El promedio de duración de cada disco en el formato `HH:MM:SS`.
    - La pista con mayor duración de cada disco.

- Que destaquen la duración total más alta entre todos los discos.

- Que se pueda mostrar la información de un disco específico buscándolo por su código numérico y que salga un mensaje de error si no se encuentra cargado.

- Usar estilos propios.

- Mostrar un buen uso de clases implementando por lo menos una clase para las pistas y otra para los discos. Estas deben tener metodos apropiadas que faciliten la resolucion del parcial. Se sugiere un archivo separado para cada clase.

## Consideraciones finales

- Se descontarán puntos por errores semánticos en el uso de los elementos HTML.
- Se descontarán puntos por el uso incorrecto de las estructuras de programación.
- Se descontarán puntos por no mostrar 
- La lógica del programa también será evaluada.
