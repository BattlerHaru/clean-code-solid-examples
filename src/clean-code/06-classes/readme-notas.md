## Estructura para las classes.

El estándar recomendado, es el siguiente:

### Orden de las Propiedades:

- Propiedades estáticas.
- Propiedades publicas.
- Propiedades privadas.

### Orden de los Métodos;

- Constructores estáticos.
- Constructor.
- Métodos estáticos.
- Métodos privados.
- Métodos de instancia ordenados de mayor a menor importancia.
- Getters y Setters al final.

### Comentarios.

Los comentarios deben mostrar la explicación sobre lo que queremos hacer, debemos evitar comentar el código.

### Uniformidad.

Debemos tener uniformidad al escribir el código, utilizar las mismas palabras para acciones similares.

Ejemplo sobre CRUD de "Product":

```
const createProduct= ()=>{}
const updateProduct= ()=>{}
const deleteProduct= ()=>{}
```

Suponiendo que ahora necesitamos un CRUD sobre "User", deberíamos seguir el ejemplo anterior para dar uniformidad:

```
const createUser= ()=>{}
const updateUser= ()=>{}
const deleteUser= ()=>{}
```

Otra consideración, es la estructura de los archivos del proyecto.

Es necesario utilizar nombres similares para archivos similares.

Ejemplo de carpetas y archivos:

- 📂components/
  - 📂 product-list
    - 📃product-list.html
    - 📃product-list.ts
  - 📂 product-item
    - 📃product-item.ts

### Indentation.

La indentation se debe declarar para todo el proyecto, esto con el fin de poder leer el código a futuro de una manera uniforme.
