# American-British English Translator (FCC Quality Assurance Project)

API que traduce inglés americano y británico en ambas direcciones (vocabulario, ortografía, títulos y formato de hora) y resalta los cambios con `<span class="highlight">`. Corresponde al proyecto "American-British English Translator" del certificado Quality Assurance de freeCodeCamp.

API that translates between American and British English in both directions (vocabulary, spelling, titles and time format) and highlights changes with `<span class="highlight">`. It implements the "American-British English Translator" project of the freeCodeCamp Quality Assurance certificate.

## Características / Features

- Traducción bidireccional: `american-to-british` y `british-to-american`.
- Cubre vocabulario (diccionarios dedicados), ortografía (`color`→`colour`), títulos (`Dr.`→`Dr`) y hora (`12:15`→`12.15`).
- Los cambios se envuelven en `<span class="highlight">` para mostrarlos en el frontend.
- Gestión de mayúsculas en la primera letra del reemplazo y coincidencias por límite de palabra.

- Bidirectional translation: `american-to-british` and `british-to-american`.
- Covers vocabulary (dedicated dictionaries), spelling (`color`→`colour`), titles (`Dr.`→`Dr`) and time (`12:15`→`12.15`).
- Changes are wrapped in `<span class="highlight">` for the frontend to render.
- Handles first-letter capitalization on replacement and word-boundary matches.

## Inicio rápido / Quick Start

```bash
npm install
cp sample.env .env
npm start
```

Luego abre `http://localhost:3000`.

Then open `http://localhost:3000`.

> El `sample.env` ya incluye `PORT=3000`. Para correr los tests, activa `NODE_ENV=test` en `.env`.
>
> `sample.env` already includes `PORT=3000`. To run the tests, enable `NODE_ENV=test` in `.env`.

## Configuración / Configuration

| Variable | Uso / Usage |
|----------|-------------|
| `PORT` | Puerto del servidor (por defecto `3000`) / Server port (default `3000`). |
| `NODE_ENV=test` | Activa el runner de tests y el endpoint `/_api/get-tests`, que freeCodeCamp usa para leer los resultados / Enables the test runner and the `/_api/get-tests` endpoint used by freeCodeCamp to read results. |

## API

### `POST /api/translate`

Traduce un texto en la dirección indicada. / Translates a text in the given direction.

| Campo / Field | Descripción |
|---------------|-------------|
| `text` | Texto a traducir / Text to translate |
| `locale` | `american-to-british` o `british-to-american` |

Request body / Request body:

```json
{"text":"Mangoes are my favorite fruit.","locale":"american-to-british"}
```

Response / Respuesta:

```json
{"text":"Mangoes are my favorite fruit.","translation":"Mangoes are my <span class=\"highlight\">favourite</span> fruit."}
```

Comportamiento adicional / Additional behavior:

- Hora: `12:15` → `12.15` en a→b, y `12.15` → `12:15` en b→a (el tramo completo queda resaltado / the full span is highlighted).
- Títulos: `Dr.` → `Dr`, `Mrs` → `Mrs.` (con/sin punto según la dirección / with/without period depending on the direction).
- Si no hay cambios, `translation` es exactamente / If there are no changes, `translation` is exactly: `Everything looks good to me!`

### Errores / Errors

| Caso / Case | Respuesta / Response |
|-------------|----------------------|
| Falta `text` o `locale` / Missing `text` or `locale` | `{"error":"Required field(s) missing"}` |
| `text` vacío o no es string / Empty or non-string `text` | `{"error":"No text to translate"}` |
| `locale` inválido / Invalid locale | `{"error":"Invalid value for locale field"}` |

## Tests / Pruebas

```bash
npm test
```

Necesita `NODE_ENV=test` en `.env`. / Requires `NODE_ENV=test` in `.env`.

Resultado: **24 unit tests + 6 functional tests = 30 passing**.

Result: **24 unit tests + 6 functional tests = 30 passing**.

> freeCodeCamp lee los resultados vía `/_api/get-tests` cuando el servidor corre con `NODE_ENV=test`.
>
> freeCodeCamp reads the results via `/_api/get-tests` when the server runs with `NODE_ENV=test`.

## Estructura de archivos / File structure

| Archivo / File | Descripción |
|----------------|-------------|
| `components/translator.js` | Lógica de traducción y resaltado / Translation and highlight logic. |
| `components/american-only.js` | Términos usados solo en EE. UU. / Terms used only in the US. |
| `components/american-to-british-spelling.js` | Diferencias de ortografía a→b / a→b spelling differences. |
| `components/american-to-british-titles.js` | Títulos a→b / a→b titles. |
| `components/british-only.js` | Términos usados solo en Reino Unido / Terms used only in the UK. |
| `routes/api.js` | Endpoint `POST /api/translate` / `POST /api/translate` endpoint. |
| `tests/1_unit-tests.js` | Unit tests del traductor / Translator unit tests. |
| `tests/2_functional-tests.js` | Functional tests del endpoint / Endpoint functional tests. |

## Notas técnicas / Technical notes

**ES:** Los diccionarios viven en `components/` y la dirección b→a se obtiene invirtiendo los mapeos de spelling y titles en el constructor (`britishToAmericanSpelling`, `britishToAmericanTitles`). Los términos se ordenan de mayor a menor longitud (longest-first) para que "favorite" no colisione con subcadenas, y el reemplazo usa boundaries de palabra (`(?<![A-Za-z0-9])word(?![A-Za-z0-9])`) con preservación de la mayúscula del primer carácter. La API distingue entre `text` ausente (`Required field(s) missing`) y `text` vacío (`No text to translate`).

**EN:** The dictionaries live in `components/` and the b→a direction is derived by inverting the spelling and titles maps in the constructor (`britishToAmericanSpelling`, `britishToAmericanTitles`). Terms are sorted longest-first so "favorite" never collides with substrings, and replacement uses word boundaries (`(?<![A-Za-z0-9])word(?![A-Za-z0-9])`) while preserving the first character's case. The API distinguishes between a missing `text` (`Required field(s) missing`) and an empty `text` (`No text to translate`).

## Enlaces / Links

- Challenge en freeCodeCamp: https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/american-british-translator
- Repositorio GitHub: https://github.com/AMluisXVI/fcc-project-american-british-translator