# Acrónimo S.T.U.P.I.D.

Son una serie de Code Smells que debemos evitar.

- Singleton: Patrón singleton.
- Tight Coupling: Alto acoplamiento.
- Untestability: Código no probable (unit test).
- Premature optimization: Optimizaciones prematuras.
- Indescriptive Naming: Nombres poco descriptivos.
- Duplication: Duplicidad de código, no aplicar principio DRY.

## Problemáticas de algunos code smells.

## Singleton

Pros: Garantiza una única instancia de la clase.

Desventajas:

- Vive en el contexto global.
- Puede ser modificado por cualquiera y en cualquier momento.
- No es rastreable.
- Difícil de testear debido a su ubicación.

## Tight Coupling (Acoplamiento)

Se refiere a cuán relacionadas o dependientes son dos clases o módulos entre si.

**Lo ideal es tener bajo acoplamiento y buena cohesión.**

- Los cambios en un módulo suelen generar un efecto domino en otros módulos.
- Requiere un mayor esfuerzo / tiempo al añadir nuevos módulos debido a una mayor dependencia.
- Algunos módulos pueden ser difíciles de reutilizar / probar porque se deben incluir otros módulos dependientes.

En bajo acoplamiento, **cambiar algo importante en una clase no debería afectar a la otra**.

## Untestability.

- Código con alto acoplamiento.
- Código con muchas dependencias no inyectadas.
- Dependencias en el contexto global (tipo singleton)

## Premature optimization.

Mantener abiertas las opciones retrasando la toma de decisiones nos permite darle mayor relevancia a lo que es mas importante en una aplicación.

Complejidad esencial: La complejidad es inherente al problema.
Complejidad accidenta. Provoca una solución compleja a la minima indispensable.

## Indescriptive Naming.

- Nombres de variables mal nombradas.
- Nombres de clases genéricas.
- Nombres de funciones mal nombradas.
- Ser muy especifico o demasiado genérico.

## Duplication.

Duplicidad real:

- No aplicar principio DRY.
- Código idéntico y con la misma función genera problemas a la hora de actualizar código.
- Incrementa posibles errores humanos al olvidar actualizar ciertas partes del código.
- Mayor cantidad de pruebas innecesarias.

Duplicidad Accidental.

- Código luce similar pero cumple funciones distintas.
- Cuando hay un cambio solo hay que modificar un solo lugar.
- Se puede trabajar con parámetros u optimizaciones.

## Inflación.

Cuando un método o clase contiene demasiadas lineas de código.

Se sugiere que cuando un método o clase contenga mas de 10 lineas de código, pensar en optimizarlo.

Obsesión primitiva: el uso de constantes campos primitivos.

Lista larga de parámetros, más de 3 o 4 argumentos en un método, se recomienda si todos esos parámetros son absolutamente necesarios o son opcionales.

## Acopladores.

Feature Envy: un método accede a los datos de otro objeto / módulo / clase, mas que a sus propios datos.

Intimidad inapropiada: Cuando una clase usa campos o métodos internos de otra clase.

Cadena de mensajes: Cuando una función o modulo llama a muchas otras funciones en cadena.

The middle man: Si una clase solo realiza una acción y esa acción delega esa acción a otra clase.
