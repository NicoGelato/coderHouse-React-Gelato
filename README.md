# E-commerce - React -  CoderHouse - Comisión 19730

### Librerías CSS: 
-Bootstrap 
-Bootstrap-icons (sin usar, pendiente desinstalacion)
-React-bootstrap
-React-icons

## Últimas modicicaciones : 
Nota: No están presentes TODAS las modificaciones realizadas, ya que serían demasiadas y harían engorrosa la lectura de este Readme. Están incluidas las modificaciones que me parecieron más pertinentes para documentar

Nota 2: A lo largo del Readme, se utilizará la palabra "componente" para hacer referencia a un archivo .jsx

### Miércoles 08/09/2021

Agregué el Navbar con Bootstrap 

### Domingo 12/09/2021 

Realicé varios cambios: 
Creé los archivos (componentes) "CartWidget.jsx" y "ItemListContainer.jsx" para el desafío de CoderHouse de la Clase 4.

Descargué e importé las librerías CSS "React-bootstrap", "React-icons" y Bootstrap-icons (sin usar, pendiente desinstalacion)

Utilicé "React-icons" para crear el ícono de carrito en el componente "CartWidget.jsx" 

Creé, además, los archivos (componentes) "TituloEcommerce.jsx", "BurgerButton.jsx" y "LinksDelNavbar.jsx" para fragmentar en componentes más pequeños el NavBar. Vea el archivo "NavBar.jsx" del commit anterior ( cb106ed ) cuyo mensaje es "Quise ver si me salia 'mapear' los links del navBar"

Utilicé la función "links.map()" en el componente "LinksDelNavbar.jsx" para que los links que aparecen al lado del nombre del Ecommerce (Leeds) vengan desde un array. 

## Domingo 19/09/2021 

Creé el archivo "ItemCount.jsx" y le agregue funcionalidades para el desafio de la clase 5: Componentes II.

Realice modificaciones, usando "useState", en "App.jsx" que repercuten en "Navbar.jsx" y en "ItemListContainer". 

Modifique la organizacion de la carpeta "components": borre el archico "Header" y cree carpetas que contienen los componentes del archivo con el mismo nombre. Ej: "Navbar_files" contiene los componentes hijos de "NavBar.jsx".

Cambie el icono que viene por default en React.

## Lunes 20/09/2021

Creé los archivos "ItemList.jsx" y "Item.jsx", y les agregué funcionalidades para el desafío de la clase 6: Promises, asincronía y MAP. Además, tambien para completar el desafío, en el archivo "ItemListContainer.jsx" utilicé "useState" y "useEffect" para simular una petición a una base de datos con la promesa "monk_async".

Agregué un condicional de tipo if/else en "ItemListContainer" para que se muestre un spinner hasta que lleguen los datos. 

En el archivo "ItemName.jsx" se utiliza la funcion .map()

## Miercoles 22/09/2021

Bueno, en el desafio anterior me falto usar el map para mostar varios componentes. Pero no logro que las funciones de cada Item sea independiente. Por, onRestar y onSumar "se ejecutan al mismo tiempo o de igual forma" en todos los Item's creados. Esto se vé en los branch's llamados "MapeoSinFuncionalidad" y "OtroMapeoSinFuncionalidad"(en su primer commit). 

Pero bueno, este ultimo commit de la rama "OtroMapeoSinFuncionalidad" será una """solucion preventiva""" entre muchas comillas. Tengo que revisar mi codigo y mejorarlo, ademas de revisar los estilos. Pero bueno, de a poco 

### Mapa/Estructura del proyecto:

###   
    app
    |__public
    |   |
    |   |__iconos
    |   |    |__android-icon-36x36.png
    |   |    |__android-icon-48x48.png
    |   |    |__android-icon-72x72.png
    |   |    |__android-icon-96x96.png
    |   |    |__android-icon-144x144.png
    |   |    |__android-icon-192x192.png
    |   |    |__favicon.ico
    |   |    |__manifest.json 
    |   |__index.html
    |   |__robots.txt
    |
    |__src
        |__components
        |    |__ItemLisContainer_files
        |    |     |__ItemList_files
        |    |     |     |__Item_files
        |    |     |     |     |__ItemCount.jsx
        |    |     |     |     |__ItemImagen.jsx
        |    |     |     |     |__ItemName.jsx
        |    |     |     |__Item.jsx
        |    |     |__ItemList.jsx
        |    |__Navbar_files
        |    |     |__LinskDelNavBar_files
        |    |     |     |__CartWidget.jsx
        |    |     |__BurgerButtom.jsx
        |    |     |__LinskDelNavBar.jsx
        |    |     |__TituloEcommerce.jsx
        |    |__ItemLisContainer.jsx
        |    |__NavBar.jsx
        |__App.jsx
        |__index.jsx
