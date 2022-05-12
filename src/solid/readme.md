# SOLID

Los principios de SOLID nos indican cómo organizar nuestras funciones y estructuras de datos en componentes y cómo dichos componentes deben estar interconectados.

Los 5 principios S.O.L.I.D. de diseño de software son:

- S – Single Responsibility Principle (SRP)
- O – Open/Closed Principle (OCP)
- L – Liskov Substitution Principle (LSP)
- I – Interface Segregation Principle (ISP)
- D – Dependency Inversion Principle (DIP)

## Single Responsibility Principle.

Responsabilidad única.

"Tener una única responsabilidad" !== "hacer una única cosa"

Las clases y módulos se enfoquen en realizar una serie de procesos que estén estrechamente relacionados entre si.

Errores comunes que afectan al SRP:

- Nombres de clases y módulos demasiado genéricos.
- Cambios en el código suelen afectar la clase o módulo.
- La clase involucra múltiples capas.
- Número elevado de importaciones.
- Cantidad elevada de métodos públicos.
- Excesivo número de lineas de código.

## Open and Closed

Abierto y Cerrado.

Establece que las entidades de software (clases, módulos, métodos, etc.) deben estar abiertas para la extensión, pero cerradas para la modificación.

Se puede lograr de otras maneras, como el uso de la herencia o mediante patrones de diseño de composición como el patrón de estrategia.

## Liskov Substitution Principle

Sustitución de Liskov.

Si se tiene una clase padre que hereda a una clase hija, la clase hija no debe afectar el funcionamiento del padre.

Una forma de detectarlo es mediante las pruebas, si las pruebas de la clase padre no funcionan para la hija, esto afecta a este principio.

> "Si parece un pato, hace quack como un pato, pero necesita baterías, probablemente la abstracción sea la incorrecta"

## Interface Segregation Principle

Segregación de interfaz.

Este principio establece que los clientes no deberían verse forzados a depender de interfaces que no utilizan.

## Dependency Inversion Principle

Inversión de dependencias.
