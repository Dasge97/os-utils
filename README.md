# os-utils

Pequeña colección de funciones de utilidad en JavaScript, sin dependencias.

## Uso

```js
const { slugify, clamp, unique, capitalize } = require('./src');

slugify('Hola Mundo!');     // 'hola-mundo'
clamp(15, 0, 10);           // 10
unique([1, 1, 2, 3, 3]);    // [1, 2, 3]
capitalize('git');          // 'Git'
```

## Funciones

| Función | Descripción |
|---|---|
| `slugify(str)` | Convierte un texto en un slug apto para URLs |
| `clamp(n, min, max)` | Acota un número a un rango |
| `unique(arr)` | Elimina duplicados de un array |
| `capitalize(str)` | Pone la primera letra en mayúscula |

## Licencia

MIT
