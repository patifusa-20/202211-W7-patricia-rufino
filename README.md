<img align="right" width="179" height="118" alt="ISDI CODER LOGO" src="/assets/isdi_logo_hq.jpg">

# :zap: Challenge Week 7

## GoT DOM

Tendrás que programar un interfaz de usuario para que refleje el siguiente modelo de datos:

En **_"Juego de Tronos"_** existen personajes. Todos esos personajes tienen la siguiente información:
· Nombre
· Familia a la que pertenece
· Edad
· Estado (vivo o muerto, aunque inicialmente todos están vivos)

Todos los personajes pueden realizar la acción de comunicar, pero cada tipo de personaje (no cada personaje) se comunica de un modo distinto. **_Nota:_** este método devuelve el string con la frase, no imprime por consola.

Todos los personajes pueden realizar la acción de morir, cambiándose su estado a muerto.

Todos los personajes pertenecen a la misma serie, **_"Juego de Tronos"_**.

Cada uno de esos personajes puede ser un rey, un luchador, un asesor, o un escudero.

-   Un rey, además de la información que tiene por ser personaje, tiene la siguiente información:

    -   Años de reinado
    -   Cuando se comunica dice: _"Vais a morir todos"_

-   Un luchador, además de la información que tiene por ser personaje, tiene la siguiente información:

    -   Arma que usa
    -   Destreza (un valor entre 0 y 10)
    -   Cuando se comunica dice: _"Primero pego y luego pregunto"_

-   Un asesor, además de la información que tiene por ser personaje, tiene la siguiente información:

    -   Personaje al que asesora (que puede ser rey, luchador, asesor o escudero)
    -   Cuando se comunica dice: _"No sé por qué, pero creo que voy a morir pronto"_

-   Un escudero, además de la información que tiene por ser personaje, tiene la siguiente información:
    -   Personaje al que sirve (que sólo puede ser luchador)
    -   Grado de pelotismo (un valor entre 0 y 10)
    -   Cuando se comunica dice: _"Soy un loser"_

## Reglas

Crea los siguientes archivos JS y haz que funcionen como módulos mediante import y export:

-   [x] `personaje.js`, Rey.js, Luchador.js, Asesor.js, Escudero.js (mete dentro cada clase)
-   [x] `personajes.js` (crea dentro un array con los personajes.

|  NOMBRE  | APELLIDO  |        ROL         |
| :------: | :-------: | :----------------: |
| Joffrey  | Baratheon |        Rey         |
|  Jaime   | Lannister |      Luchador      |
| Daenerys | Targaryen |     Luchadora      |
|  Tyrion  | Lannister | Asesor de Daenerys |
|  Bronn   |     -     | Escudero de Jaime  |

-   [x] `index.js` (aquí va todo el resto del enunciado, y éste será el punto de entrada)

## Requisitos

-   [x] Haz que por cada personaje del array se muestre la ficha correspondiente en el navegador:
    -   En el elemento con clase `emoji` tiene que aparecer uno de estos emojis dependiendo del tipo de personaje: 👑 🗡 🎓 🛡
    -   Si el personaje está muerto, su foto debe aparecer cabeza abajo (haz el CSS necesario);
    -   En la lista con clase `metadata`, haz que sólo aparezcan los `li` correspondientes al personaje.
-   [x] Cuando el usuario haga clic en el botón _"muere"_, tiene que cambiar el estado del personaje, y la interfaz debe reflejar el cambio.
-   [x] Cuando el usuario haga clic en el botón _"habla"_, el elemento con clase `comunicaciones` debe aparecer con el texto y la imagen correspondientes. Haz que este elemento `comunicaciones` tenga la clase `on` durante 2 segundos y luego se le quite.

## Resultado

https://sonarcloud.io/summary/overall?id=patifusa-20_202211-W7-patricia-rufino

## Tecnologías usadas

![Logos of used technologies](/assets/tech_logos_v2.jpg)
