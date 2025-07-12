# 📦 JavaScript ES Modules Complete Guide

## ✅ What are ES Modules?

JavaScript ES Modules allow us to split code into reusable files using `import` and `export`. Like a restaurant kitchen with separate chefs for rice, meat, and salad – each module handles a specific task.

---

## 🔹 Named Export & Import

### Export (math.js)

```js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

### Import (app.js)

```js
import { add, subtract } from './math.js';
```

✅ Named exports allow multiple exports per file.
✅ Must match exact names during import.

---

## 🔹 Default Export & Import

### Export (greet.js)

```js
export default function greet(name) {
  return `Hello, ${name}!`;
}
```

### Import

```js
import greet from './greet.js';
```

✅ Only one default export per file.
✅ Import name can be anything.

---

## 🧠 Analogy Table

| Concept        | Real Life Example               | Keyword          |
| -------------- | ------------------------------- | ---------------- |
| Named Export   | Multiple products in a shipment | `export {}`      |
| Named Import   | Receiving by specific names     | `import {}`      |
| Default Export | One main item sent              | `export default` |
| Default Import | Receiving main item (any name)  | `import x from`  |

---

## 📦 Module Scope

* Module-level variables (not exported) are private.
* Only exported members are accessible outside.

```js
let count = 0;
export function increment() {
  return ++count;
}
```

---

## 🔁 Circular Import (Avoid if possible)

```js
// a.js
import { funcB } from './b.js';
export function funcA() {
  funcB();
}

// b.js
import { funcA } from './a.js';
export function funcB() {
  funcA();
}
```

⚠️ May lead to undefined behavior or infinite loops.

---

## ⏬ Dynamic Import

```js
if (user.isAdmin) {
  const { showAdminPanel } = await import('./admin.js');
  showAdminPanel();
}
```

✅ Useful for lazy loading

---

## 📁 File Structure & Folder-based Import

```
project/
├── utils/
│   ├── math.js
│   ├── string.js
│   └── index.js
└── app.js
```

### index.js

```js
export * from './math.js';
export * from './string.js';
```

### app.js

```js
import { add, capitalize } from './utils';
```

---

## 🧭 Import Aliases (with jsconfig/tsconfig)

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@utils/*": ["src/utils/*"]
    }
  }
}
```

```js
import { add } from '@utils/math.js';
```

---

## ⚔️ ESModules vs CommonJS

| Feature         | ESModules           | CommonJS               |
| --------------- | ------------------- | ---------------------- |
| Syntax          | import/export       | require/module.exports |
| Usage           | Modern JS, Browsers | Mostly Node.js         |
| Dynamic Import  | ✅ Yes               | ❌ Not native           |
| Top-level await | ✅ Yes               | ❌ No                   |

---

## ✅ Practice Project Idea: Utility Toolkit

### Structure:

```
toolkit/
├── math.js
├── string.js
├── date.js
└── index.js
```

* Each file has 2-3 utility functions
* `index.js` re-exports everything
* `main.js` imports and uses them

---

## 🔚 Summary

* Use `export`/`import` for clean, modular code
* Use `default` export when one main item per file
* Group multiple exports using `index.js`
* Use alias for readable paths
* Avoid circular dependencies

Next Topics: Promises, async/await, API fetch with real examples.
