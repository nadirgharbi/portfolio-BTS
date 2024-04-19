# Projet BTS - PORFOLIO

Bienvenue dans mon portfolio. Voici les etapes par lesquels je suis passer pour developper mon portfolio :

### Installation de Vite JS

**Documentation officiel de Vite JS : https://vitejs.dev/guide/**

```bash
npm create vite@latest
```

### Installation tailwindcss

**Documentation officiel de tailwindcss : https://tailwindcss.com/docs/installation**

```bash
npm install -D tailwindcss
npx tailwindcss init
```

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {},
	},
	plugins: [],
};
```

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Installation de Shadcn

**Documentation Officiel de Shadcn : https://ui.shadcn.com/docs/installation/vite**

```css
{
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
    // ...
  }
}
```

```bash
npm i -D @types/node
```

```js
import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
```

```bash
npx shadcn-ui@latest init
```

```bash
npx shadcn-ui@latest add --all
```

### Installation de react-simple-writer

**Documentation Officiel de react-simple-writer : https://www.npmjs.com/package/react-simple-typewriter**
